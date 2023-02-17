import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

const data = [
    {
      "id": "group A",
      "data": [
        {
          "x": 23,
          "y": 80
        },
        {
          "x": 70,
          "y": 33
        },
        {
          "x": 88,
          "y": 47
        },
        {
          "x": 98,
          "y": 91
        },
        {
          "x": 53,
          "y": 2
        },
        {
          "x": 83,
          "y": 8
        },
        {
          "x": 27,
          "y": 10
        },
        {
          "x": 89,
          "y": 5
        },
        {
          "x": 33,
          "y": 25
        },
        {
          "x": 96,
          "y": 104
        },
        {
          "x": 11,
          "y": 65
        },
        {
          "x": 14,
          "y": 11
        },
        {
          "x": 62,
          "y": 53
        },
        {
          "x": 32,
          "y": 94
        },
        {
          "x": 0,
          "y": 22
        },
        {
          "x": 90,
          "y": 72
        },
        {
          "x": 31,
          "y": 67
        },
        {
          "x": 17,
          "y": 6
        },
        {
          "x": 94,
          "y": 95
        },
        {
          "x": 34,
          "y": 101
        },
        {
          "x": 86,
          "y": 92
        },
        {
          "x": 100,
          "y": 18
        },
        {
          "x": 94,
          "y": 11
        },
        {
          "x": 25,
          "y": 46
        },
        {
          "x": 41,
          "y": 12
        },
        {
          "x": 5,
          "y": 56
        },
        {
          "x": 59,
          "y": 112
        },
        {
          "x": 36,
          "y": 112
        },
        {
          "x": 83,
          "y": 91
        },
        {
          "x": 72,
          "y": 18
        },
        {
          "x": 11,
          "y": 47
        },
        {
          "x": 96,
          "y": 107
        },
        {
          "x": 99,
          "y": 73
        },
        {
          "x": 95,
          "y": 64
        },
        {
          "x": 94,
          "y": 43
        },
        {
          "x": 11,
          "y": 93
        },
        {
          "x": 98,
          "y": 120
        },
        {
          "x": 92,
          "y": 88
        },
        {
          "x": 22,
          "y": 109
        },
        {
          "x": 98,
          "y": 54
        },
        {
          "x": 59,
          "y": 7
        },
        {
          "x": 63,
          "y": 119
        },
        {
          "x": 24,
          "y": 25
        },
        {
          "x": 42,
          "y": 8
        },
        {
          "x": 73,
          "y": 109
        },
        {
          "x": 22,
          "y": 57
        },
        {
          "x": 7,
          "y": 48
        },
        {
          "x": 60,
          "y": 3
        },
        {
          "x": 18,
          "y": 39
        },
        {
          "x": 73,
          "y": 45
        }
      ]
    },
    {
      "id": "group B",
      "data": [
        {
          "x": 70,
          "y": 13
        },
        {
          "x": 77,
          "y": 112
        },
        {
          "x": 37,
          "y": 97
        },
        {
          "x": 70,
          "y": 52
        },
        {
          "x": 99,
          "y": 56
        },
        {
          "x": 54,
          "y": 63
        },
        {
          "x": 45,
          "y": 111
        },
        {
          "x": 57,
          "y": 22
        },
        {
          "x": 26,
          "y": 83
        },
        {
          "x": 66,
          "y": 67
        },
        {
          "x": 34,
          "y": 25
        },
        {
          "x": 87,
          "y": 114
        },
        {
          "x": 63,
          "y": 75
        },
        {
          "x": 41,
          "y": 37
        },
        {
          "x": 54,
          "y": 34
        },
        {
          "x": 33,
          "y": 45
        },
        {
          "x": 80,
          "y": 104
        },
        {
          "x": 97,
          "y": 94
        },
        {
          "x": 82,
          "y": 0
        },
        {
          "x": 24,
          "y": 118
        },
        {
          "x": 53,
          "y": 120
        },
        {
          "x": 83,
          "y": 23
        },
        {
          "x": 15,
          "y": 13
        },
        {
          "x": 68,
          "y": 31
        },
        {
          "x": 74,
          "y": 46
        },
        {
          "x": 11,
          "y": 96
        },
        {
          "x": 87,
          "y": 120
        },
        {
          "x": 11,
          "y": 109
        },
        {
          "x": 45,
          "y": 36
        },
        {
          "x": 51,
          "y": 114
        },
        {
          "x": 83,
          "y": 57
        },
        {
          "x": 4,
          "y": 28
        },
        {
          "x": 89,
          "y": 26
        },
        {
          "x": 70,
          "y": 89
        },
        {
          "x": 77,
          "y": 12
        },
        {
          "x": 80,
          "y": 34
        },
        {
          "x": 100,
          "y": 49
        },
        {
          "x": 62,
          "y": 110
        },
        {
          "x": 27,
          "y": 31
        },
        {
          "x": 37,
          "y": 26
        },
        {
          "x": 86,
          "y": 7
        },
        {
          "x": 10,
          "y": 106
        },
        {
          "x": 58,
          "y": 61
        },
        {
          "x": 0,
          "y": 111
        },
        {
          "x": 62,
          "y": 13
        },
        {
          "x": 49,
          "y": 81
        },
        {
          "x": 78,
          "y": 64
        },
        {
          "x": 31,
          "y": 33
        },
        {
          "x": 39,
          "y": 54
        },
        {
          "x": 40,
          "y": 20
        }
      ]
    },
    {
      "id": "group C",
      "data": [
        {
          "x": 32,
          "y": 91
        },
        {
          "x": 90,
          "y": 100
        },
        {
          "x": 64,
          "y": 5
        },
        {
          "x": 22,
          "y": 99
        },
        {
          "x": 70,
          "y": 56
        },
        {
          "x": 21,
          "y": 7
        },
        {
          "x": 57,
          "y": 38
        },
        {
          "x": 62,
          "y": 112
        },
        {
          "x": 51,
          "y": 11
        },
        {
          "x": 19,
          "y": 52
        },
        {
          "x": 64,
          "y": 81
        },
        {
          "x": 38,
          "y": 38
        },
        {
          "x": 81,
          "y": 12
        },
        {
          "x": 100,
          "y": 108
        },
        {
          "x": 100,
          "y": 75
        },
        {
          "x": 91,
          "y": 107
        },
        {
          "x": 12,
          "y": 88
        },
        {
          "x": 41,
          "y": 113
        },
        {
          "x": 39,
          "y": 64
        },
        {
          "x": 19,
          "y": 116
        },
        {
          "x": 27,
          "y": 51
        },
        {
          "x": 41,
          "y": 35
        },
        {
          "x": 63,
          "y": 60
        },
        {
          "x": 30,
          "y": 33
        },
        {
          "x": 99,
          "y": 12
        },
        {
          "x": 60,
          "y": 44
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 96,
          "y": 74
        },
        {
          "x": 53,
          "y": 22
        },
        {
          "x": 27,
          "y": 79
        },
        {
          "x": 36,
          "y": 111
        },
        {
          "x": 66,
          "y": 8
        },
        {
          "x": 32,
          "y": 85
        },
        {
          "x": 48,
          "y": 32
        },
        {
          "x": 10,
          "y": 81
        },
        {
          "x": 99,
          "y": 64
        },
        {
          "x": 86,
          "y": 105
        },
        {
          "x": 1,
          "y": 48
        },
        {
          "x": 43,
          "y": 15
        },
        {
          "x": 44,
          "y": 85
        },
        {
          "x": 24,
          "y": 1
        },
        {
          "x": 2,
          "y": 63
        },
        {
          "x": 82,
          "y": 109
        },
        {
          "x": 29,
          "y": 38
        },
        {
          "x": 58,
          "y": 43
        },
        {
          "x": 68,
          "y": 53
        },
        {
          "x": 56,
          "y": 92
        },
        {
          "x": 80,
          "y": 38
        },
        {
          "x": 31,
          "y": 6
        },
        {
          "x": 28,
          "y": 87
        }
      ]
    },
    {
      "id": "group D",
      "data": [
        {
          "x": 92,
          "y": 115
        },
        {
          "x": 94,
          "y": 39
        },
        {
          "x": 50,
          "y": 58
        },
        {
          "x": 7,
          "y": 36
        },
        {
          "x": 91,
          "y": 34
        },
        {
          "x": 31,
          "y": 5
        },
        {
          "x": 94,
          "y": 23
        },
        {
          "x": 91,
          "y": 27
        },
        {
          "x": 87,
          "y": 64
        },
        {
          "x": 23,
          "y": 74
        },
        {
          "x": 65,
          "y": 117
        },
        {
          "x": 68,
          "y": 2
        },
        {
          "x": 23,
          "y": 26
        },
        {
          "x": 66,
          "y": 87
        },
        {
          "x": 60,
          "y": 105
        },
        {
          "x": 71,
          "y": 100
        },
        {
          "x": 50,
          "y": 44
        },
        {
          "x": 13,
          "y": 84
        },
        {
          "x": 61,
          "y": 112
        },
        {
          "x": 76,
          "y": 13
        },
        {
          "x": 38,
          "y": 71
        },
        {
          "x": 75,
          "y": 97
        },
        {
          "x": 34,
          "y": 72
        },
        {
          "x": 60,
          "y": 56
        },
        {
          "x": 77,
          "y": 38
        },
        {
          "x": 77,
          "y": 55
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 23,
          "y": 110
        },
        {
          "x": 32,
          "y": 101
        },
        {
          "x": 0,
          "y": 83
        },
        {
          "x": 94,
          "y": 102
        },
        {
          "x": 27,
          "y": 71
        },
        {
          "x": 39,
          "y": 79
        },
        {
          "x": 63,
          "y": 96
        },
        {
          "x": 59,
          "y": 74
        },
        {
          "x": 1,
          "y": 15
        },
        {
          "x": 69,
          "y": 22
        },
        {
          "x": 56,
          "y": 60
        },
        {
          "x": 64,
          "y": 91
        },
        {
          "x": 89,
          "y": 19
        },
        {
          "x": 52,
          "y": 96
        },
        {
          "x": 49,
          "y": 100
        },
        {
          "x": 97,
          "y": 26
        },
        {
          "x": 7,
          "y": 102
        },
        {
          "x": 11,
          "y": 10
        },
        {
          "x": 69,
          "y": 34
        },
        {
          "x": 31,
          "y": 4
        },
        {
          "x": 77,
          "y": 42
        },
        {
          "x": 66,
          "y": 17
        },
        {
          "x": 86,
          "y": 101
        }
      ]
    },
    {
      "id": "group E",
      "data": [
        {
          "x": 68,
          "y": 90
        },
        {
          "x": 77,
          "y": 72
        },
        {
          "x": 96,
          "y": 99
        },
        {
          "x": 16,
          "y": 90
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 74,
          "y": 40
        },
        {
          "x": 49,
          "y": 9
        },
        {
          "x": 20,
          "y": 85
        },
        {
          "x": 2,
          "y": 51
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 66,
          "y": 31
        },
        {
          "x": 87,
          "y": 0
        },
        {
          "x": 92,
          "y": 97
        },
        {
          "x": 91,
          "y": 10
        },
        {
          "x": 21,
          "y": 95
        },
        {
          "x": 83,
          "y": 69
        },
        {
          "x": 43,
          "y": 10
        },
        {
          "x": 80,
          "y": 57
        },
        {
          "x": 79,
          "y": 116
        },
        {
          "x": 62,
          "y": 66
        },
        {
          "x": 29,
          "y": 78
        },
        {
          "x": 5,
          "y": 65
        },
        {
          "x": 78,
          "y": 74
        },
        {
          "x": 96,
          "y": 87
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 88,
          "y": 6
        },
        {
          "x": 92,
          "y": 112
        },
        {
          "x": 61,
          "y": 58
        },
        {
          "x": 27,
          "y": 42
        },
        {
          "x": 87,
          "y": 63
        },
        {
          "x": 61,
          "y": 96
        },
        {
          "x": 38,
          "y": 52
        },
        {
          "x": 79,
          "y": 92
        },
        {
          "x": 53,
          "y": 13
        },
        {
          "x": 41,
          "y": 26
        },
        {
          "x": 36,
          "y": 46
        },
        {
          "x": 33,
          "y": 115
        },
        {
          "x": 4,
          "y": 53
        },
        {
          "x": 61,
          "y": 101
        },
        {
          "x": 30,
          "y": 54
        },
        {
          "x": 80,
          "y": 89
        },
        {
          "x": 38,
          "y": 107
        },
        {
          "x": 48,
          "y": 102
        },
        {
          "x": 59,
          "y": 98
        },
        {
          "x": 8,
          "y": 96
        },
        {
          "x": 40,
          "y": 74
        },
        {
          "x": 96,
          "y": 97
        },
        {
          "x": 56,
          "y": 86
        },
        {
          "x": 95,
          "y": 81
        },
        {
          "x": 58,
          "y": 41
        }
      ]
    }
  ];

const data2 = [{"LAUNCH_DATE":"2019-01-01","PERIGEE":"0-100","COUNT":1},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"100-200","COUNT":11},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"200-300","COUNT":6},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"300-400","COUNT":17},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"400-500","COUNT":74},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"500-600","COUNT":559},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"600-700","COUNT":43},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"700-800","COUNT":18},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"800-900","COUNT":1},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"1000-1100","COUNT":4},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"1100-1200","COUNT":399},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"1200-1300","COUNT":6},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"1300-1400","COUNT":1},{"LAUNCH_DATE":"2019-01-01","PERIGEE":"> 1600","COUNT":36},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"300-400","COUNT":15},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"400-500","COUNT":42},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"500-600","COUNT":803},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"600-700","COUNT":47},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"700-800","COUNT":13},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"800-900","COUNT":6},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"900-1000","COUNT":3},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"1100-1200","COUNT":252},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"1200-1300","COUNT":2},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"1300-1400","COUNT":4},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"1400-1500","COUNT":4},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2020-01-01","PERIGEE":"> 1600","COUNT":5},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"200-300","COUNT":3},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"300-400","COUNT":22},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"400-500","COUNT":34},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"500-600","COUNT":287},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"600-700","COUNT":50},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"700-800","COUNT":26},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"800-900","COUNT":9},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"900-1000","COUNT":70},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"1000-1100","COUNT":1},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"1100-1200","COUNT":593},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"1200-1300","COUNT":1},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"1300-1400","COUNT":4},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"1400-1500","COUNT":3},{"LAUNCH_DATE":"2021-01-01","PERIGEE":"> 1600","COUNT":2},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"200-300","COUNT":2},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"300-400","COUNT":22},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"400-500","COUNT":36},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"500-600","COUNT":20},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"600-700","COUNT":849},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"700-800","COUNT":16},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"800-900","COUNT":1},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"900-1000","COUNT":81},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"1000-1100","COUNT":3},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"1100-1200","COUNT":745},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"1200-1300","COUNT":1},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"1500-1600","COUNT":2},{"LAUNCH_DATE":"2022-01-01","PERIGEE":"> 1600","COUNT":3},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"200-300","COUNT":3},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"300-400","COUNT":31},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"400-500","COUNT":36},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"500-600","COUNT":32},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"600-700","COUNT":892},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"700-800","COUNT":23},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"800-900","COUNT":1},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"900-1000","COUNT":4},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"1000-1100","COUNT":4},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"1100-1200","COUNT":406},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"1200-1300","COUNT":301},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"1300-1400","COUNT":3},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2023-01-01","PERIGEE":"> 1600","COUNT":2},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"300-400","COUNT":14},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"400-500","COUNT":39},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"500-600","COUNT":85},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"600-700","COUNT":838},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"700-800","COUNT":15},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"800-900","COUNT":2},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"900-1000","COUNT":3},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"1000-1100","COUNT":2},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"1100-1200","COUNT":4},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"1200-1300","COUNT":75},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"1300-1400","COUNT":449},{"LAUNCH_DATE":"2024-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"300-400","COUNT":19},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"400-500","COUNT":33},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"500-600","COUNT":700},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"600-700","COUNT":63},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"700-800","COUNT":17},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"800-900","COUNT":2},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"900-1000","COUNT":3},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"1100-1200","COUNT":7},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"1200-1300","COUNT":1},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"1300-1400","COUNT":2},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"1400-1500","COUNT":4},{"LAUNCH_DATE":"2025-01-01","PERIGEE":"1500-1600","COUNT":2},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"200-300","COUNT":2},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"300-400","COUNT":23},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"400-500","COUNT":56},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"500-600","COUNT":98},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"600-700","COUNT":56},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"700-800","COUNT":31},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"800-900","COUNT":3},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"900-1000","COUNT":3},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"1000-1100","COUNT":3},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"1100-1200","COUNT":2},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"1200-1300","COUNT":4},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"1400-1500","COUNT":2},{"LAUNCH_DATE":"2026-01-01","PERIGEE":"> 1600","COUNT":2},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"300-400","COUNT":34},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"400-500","COUNT":55},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"500-600","COUNT":32},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"600-700","COUNT":63},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"700-800","COUNT":29},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"800-900","COUNT":6},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"900-1000","COUNT":5},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"1000-1100","COUNT":1},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"1100-1200","COUNT":2},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"1200-1300","COUNT":3},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"1300-1400","COUNT":1},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"1500-1600","COUNT":3},{"LAUNCH_DATE":"2027-01-01","PERIGEE":"> 1600","COUNT":3},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"300-400","COUNT":27},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"400-500","COUNT":65},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"500-600","COUNT":42},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"600-700","COUNT":68},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"700-800","COUNT":22},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"800-900","COUNT":1},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"900-1000","COUNT":6},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"1000-1100","COUNT":2},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"1100-1200","COUNT":2},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"1200-1300","COUNT":6},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"1300-1400","COUNT":2},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2028-01-01","PERIGEE":"> 1600","COUNT":34},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"200-300","COUNT":3},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"300-400","COUNT":27},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"400-500","COUNT":42},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"500-600","COUNT":39},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"600-700","COUNT":65},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"700-800","COUNT":19},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"800-900","COUNT":8},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"900-1000","COUNT":4},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"1000-1100","COUNT":5},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"1100-1200","COUNT":3},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"1200-1300","COUNT":5},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"1300-1400","COUNT":4},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2029-01-01","PERIGEE":"> 1600","COUNT":3},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"200-300","COUNT":2},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"300-400","COUNT":35},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"400-500","COUNT":52},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"500-600","COUNT":40},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"600-700","COUNT":68},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"700-800","COUNT":29},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"800-900","COUNT":9},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"900-1000","COUNT":4},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"1000-1100","COUNT":2},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"1100-1200","COUNT":3},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"1200-1300","COUNT":3},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"1300-1400","COUNT":4},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2030-01-01","PERIGEE":"> 1600","COUNT":12},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"200-300","COUNT":3},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"300-400","COUNT":32},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"400-500","COUNT":74},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"500-600","COUNT":43},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"600-700","COUNT":71},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"700-800","COUNT":31},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"800-900","COUNT":2},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"900-1000","COUNT":3},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"1000-1100","COUNT":2},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"1100-1200","COUNT":3},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"1200-1300","COUNT":3},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"1300-1400","COUNT":3},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"1400-1500","COUNT":2},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2031-01-01","PERIGEE":"> 1600","COUNT":12},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"300-400","COUNT":25},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"400-500","COUNT":53},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"500-600","COUNT":34},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"600-700","COUNT":94},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"700-800","COUNT":34},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"800-900","COUNT":6},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"900-1000","COUNT":2},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"1000-1100","COUNT":6},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"1100-1200","COUNT":4},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"1200-1300","COUNT":2},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"1300-1400","COUNT":6},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"1500-1600","COUNT":4},{"LAUNCH_DATE":"2032-01-01","PERIGEE":"> 1600","COUNT":12},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"200-300","COUNT":4},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"300-400","COUNT":32},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"400-500","COUNT":62},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"500-600","COUNT":49},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"600-700","COUNT":83},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"700-800","COUNT":34},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"800-900","COUNT":7},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"900-1000","COUNT":6},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"1100-1200","COUNT":2},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"1200-1300","COUNT":1},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2033-01-01","PERIGEE":"> 1600","COUNT":3},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"200-300","COUNT":4},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"300-400","COUNT":36},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"400-500","COUNT":76},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"500-600","COUNT":62},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"600-700","COUNT":84},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"700-800","COUNT":42},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"800-900","COUNT":3},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"900-1000","COUNT":6},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"1000-1100","COUNT":5},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"1100-1200","COUNT":7},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"1200-1300","COUNT":3},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"1300-1400","COUNT":1},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2034-01-01","PERIGEE":"> 1600","COUNT":32},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"300-400","COUNT":30},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"400-500","COUNT":81},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"500-600","COUNT":66},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"600-700","COUNT":90},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"700-800","COUNT":39},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"800-900","COUNT":8},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"900-1000","COUNT":7},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"1000-1100","COUNT":3},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"1100-1200","COUNT":6},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"1200-1300","COUNT":3},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"1300-1400","COUNT":6},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"1400-1500","COUNT":4},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"1500-1600","COUNT":2},{"LAUNCH_DATE":"2035-01-01","PERIGEE":"> 1600","COUNT":2},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"300-400","COUNT":37},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"400-500","COUNT":80},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"500-600","COUNT":61},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"600-700","COUNT":104},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"700-800","COUNT":44},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"800-900","COUNT":7},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"900-1000","COUNT":7},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"1000-1100","COUNT":4},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"1100-1200","COUNT":3},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"1200-1300","COUNT":1},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"1300-1400","COUNT":2},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"1400-1500","COUNT":4},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2036-01-01","PERIGEE":"> 1600","COUNT":4},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"300-400","COUNT":34},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"400-500","COUNT":77},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"500-600","COUNT":62},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"600-700","COUNT":103},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"700-800","COUNT":51},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"800-900","COUNT":8},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"900-1000","COUNT":4},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"1000-1100","COUNT":6},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"1100-1200","COUNT":6},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"1200-1300","COUNT":4},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"1300-1400","COUNT":2},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"1400-1500","COUNT":3},{"LAUNCH_DATE":"2037-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"200-300","COUNT":2},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"300-400","COUNT":48},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"400-500","COUNT":75},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"500-600","COUNT":48},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"600-700","COUNT":100},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"700-800","COUNT":40},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"800-900","COUNT":9},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"900-1000","COUNT":7},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"1000-1100","COUNT":4},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"1100-1200","COUNT":8},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"1200-1300","COUNT":5},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"1300-1400","COUNT":7},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"1400-1500","COUNT":1},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"1500-1600","COUNT":3},{"LAUNCH_DATE":"2038-01-01","PERIGEE":"> 1600","COUNT":3},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"300-400","COUNT":43},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"400-500","COUNT":78},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"500-600","COUNT":52},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"600-700","COUNT":107},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"700-800","COUNT":39},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"800-900","COUNT":13},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"900-1000","COUNT":7},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"1000-1100","COUNT":5},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"1100-1200","COUNT":10},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"1200-1300","COUNT":3},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"1300-1400","COUNT":1},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2039-01-01","PERIGEE":"> 1600","COUNT":4},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"200-300","COUNT":1},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"300-400","COUNT":46},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"400-500","COUNT":98},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"500-600","COUNT":62},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"600-700","COUNT":101},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"700-800","COUNT":48},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"800-900","COUNT":13},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"900-1000","COUNT":16},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"1000-1100","COUNT":7},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"1100-1200","COUNT":6},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"1200-1300","COUNT":4},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"1300-1400","COUNT":1},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"1400-1500","COUNT":2},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2040-01-01","PERIGEE":"> 1600","COUNT":2},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"200-300","COUNT":3},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"300-400","COUNT":38},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"400-500","COUNT":101},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"500-600","COUNT":48},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"600-700","COUNT":123},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"700-800","COUNT":34},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"800-900","COUNT":12},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"900-1000","COUNT":3},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"1000-1100","COUNT":4},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"1100-1200","COUNT":9},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"1200-1300","COUNT":6},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"1300-1400","COUNT":6},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"1400-1500","COUNT":5},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"1500-1600","COUNT":1},{"LAUNCH_DATE":"2041-01-01","PERIGEE":"> 1600","COUNT":2},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"200-300","COUNT":6},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"300-400","COUNT":106},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"400-500","COUNT":156},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"500-600","COUNT":112},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"600-700","COUNT":228},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"700-800","COUNT":86},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"800-900","COUNT":10},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"900-1000","COUNT":12},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"1000-1100","COUNT":10},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"1100-1200","COUNT":12},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"1200-1300","COUNT":8},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"1300-1400","COUNT":4},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"1400-1500","COUNT":10},{"LAUNCH_DATE":"2042-01-01","PERIGEE":"> 1600","COUNT":2},{"LAUNCH_DATE":"2043-01-01","PERIGEE":"> 1600","COUNT":1}] 

const ScatterChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <ResponsiveScatterPlot
        data={data}
        theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
            tooltip: {
              container: {
                color: colors.primary[500],
              },
            },
          }}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat=">-.2f"
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat=">-.2f"
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'weight',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'size',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );
};


export default ScatterChart;
