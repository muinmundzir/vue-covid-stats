<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["cases"],
  data() {
    return {
      chartData: {
        labels: ["Confirmed", "Deaths", "Recovered", "Active"],
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: ["blue", "red", "green", "yellow"],
            data: [
              this.cases.data.confirmed,
              this.cases.data.deaths,
              this.cases.data.recovered,
              this.cases.data.active,
            ],
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>