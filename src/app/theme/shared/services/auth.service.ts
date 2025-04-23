import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface User {
  id: string;
  email: string;
  name: string;
  token: string;
  role: string;
}

export interface AuthResponse {
  user: User | null;
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private isAuthenticated = false;

  // Mock users database - in a real app, this would be replaced with API calls
  private users = [
    {
      id: '1',
      email: 'admin@example.com',
      password: 'admin123',
      name: 'Admin User',
      role: 'admin',
      token: 'mock-jwt-token-admin'
    },
    {
      id: '2',
      email: 'user@example.com',
      password: 'user123',
      name: 'Regular User',
      role: 'user',
      token: 'mock-jwt-token-user'
    }
  ];

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.isAuthenticated = !!storedUser;
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  login(email: string, password: string): Observable<AuthResponse> {
    // Find user with matching credentials
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      // Create a copy without the password and simulate API response delay
      const { password: _, ...userWithoutPassword } = user;
      const authUser = userWithoutPassword as User;

      return of({
        success: true,
        user: authUser,
        message: 'Login successful'
      }).pipe(
        delay(800), // Simulate network delay
        tap(response => {
          if (response.success && response.user) {
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            this.currentUserSubject.next(response.user);
            this.isAuthenticated = true;
          }
        })
      );
    }

    // Return error for invalid credentials
    return throwError(() => ({
      success: false,
      user: null,
      message: 'Invalid email or password'
    })).pipe(delay(800)); // Simulate network delay
  }

  register(email: string, password: string, name: string): Observable<AuthResponse> {
    // Check if email already exists
    if (this.users.some(u => u.email === email)) {
      return throwError(() => ({
        success: false,
        user: null,
        message: 'Email already in use'
      })).pipe(delay(800));
    }

    // Create new user (in a real app, this would be sent to the server)
    const newUser = {
      id: (this.users.length + 1).toString(),
      email,
      password,
      name,
      role: 'user',
      token: `mock-jwt-token-${Date.now()}`
    };

    // Add to mock database
    this.users.push(newUser);

    // Return success response without the password
    const { password: _, ...userWithoutPassword } = newUser;
    const authUser = userWithoutPassword as User;

    return of({
      success: true,
      user: authUser,
      message: 'Registration successful'
    }).pipe(
      delay(800),
      tap(response => {
        if (response.success && response.user) {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
          this.isAuthenticated = true;
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticated = false;
  }

  resetPassword(email: string): Observable<AuthResponse> {
    // Check if email exists
    const userExists = this.users.some(u => u.email === email);

    if (userExists) {
      return of({
        success: true,
        user: null,
        message: 'Password reset instructions sent to your email'
      }).pipe(delay(800));
    }

    return throwError(() => ({
      success: false,
      user: null,
      message: 'Email not found'
    })).pipe(delay(800));
  }

  changePassword(email: string, oldPassword: string, newPassword: string): Observable<AuthResponse> {
    // Find user with matching credentials
    const userIndex = this.users.findIndex(u => u.email === email && u.password === oldPassword);

    if (userIndex !== -1) {
      // Update password (in a real app, this would be an API call)
      this.users[userIndex].password = newPassword;

      return of({
        success: true,
        user: null,
        message: 'Password changed successfully'
      }).pipe(delay(800));
    }

    return throwError(() => ({
      success: false,
      user: null,
      message: 'Current password is incorrect'
    })).pipe(delay(800));
  }
}
