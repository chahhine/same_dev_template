export class ChartDB {
  public static userAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [3, 0, 1, 2, 1, 1, 2]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#FF9800'],
  };

  public static sessionAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [2, 1, 2, 1, 1, 3, 0]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#dc6788'],
  };

  public static pageViewAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [3, 0, 1, 2, 1, 1, 2]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#ff5252'],
  };

  public static pageSessionAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [2, 1, 2, 1, 1, 3, 0]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#7759de'],
  };

  public static avgSessionAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [3, 0, 1, 2, 1, 1, 2]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#4680ff'],
  };

  public static bounceRateAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [2, 1, 2, 1, 1, 3, 0]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#11c15b'],
  };

  public static dailyVisitorAACC = {
    chart: {
      type: 'area',
      height: 285,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'visitor',
      data: [
        [1327359600000, 30],
        [1327446000000, 31],
        [1327532400000, 31],
        [1327618800000, 31],
        [1327878000000, 31],
        [1327964400000, 30],
        [1328050800000, 31],
        [1328137200000, 31],
        [1328223600000,, 31],
        [1328482800000, 31],
        [1328569200000, 32],
        [1328655600000, 32],
        [1328742000000, 32],
        [1328828400000, 32],
        [1329087600000, 32],
        [1329174000000, 32],
        [1329260400000, 32],
        [1329346800000, 32],
        [1329433200000, 32],
        [1329778800000, 32],
        [1329865200000, 32],
        [1329951600000, 32],
        [1330038000000, 33],
        [1330297200000, 33],
        [1330383600000, 33],
        [1330470000000, 32],
        [1330556400000, 33],
        [1330642800000, 33],
        [1330902000000, 33],
        [1330988400000, 31],
        [1331074800000, 32],
        [1331161200000, 33],
        [1331247600000, 33],
        [1331506800000, 33],
        [1331593200000, 34],
        [1331679600000, 33],
        [1331766000000, 34],
        [1331852400000, 33],
        [1332111600000, 34],
        [1332198000000, 33],
        [1332284400000, 33]
      ]
    }],
    stroke: {
      curve: 'straight',
      width: 2,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    colors: ['#4680ff'],
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
      labels: {
        offsetY: 5,
      }
    },
    grid: {
      borderColor: '#cccccc42',
      padding: {
        left: 0,
        right: 0,
        bottom: 0
      }
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        align: 'left',
        offsetX: -18,
        maxWidth: 40,
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.7,
        opacityTo: 0.0,
        stops: [0, 100]
      }
    },
  };
}

// Helper function for chart data generation
export function generateDataSabraThat(count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    series.push({
      x: 'w' + (i + 1).toString(),
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
    i++;
  }
  return series;
}
