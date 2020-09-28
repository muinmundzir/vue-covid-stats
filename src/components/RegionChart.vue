<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: { case: Object },
  data() {
    return {
      cases: "",
      chartData: {
        labels: ["Confirmed", "Deaths", "Recovered", "Active"],
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: ["blue", "red", "green", "yellow"],
            data: [
              this.case.data.confirmed,
              this.case.data.deaths,
              this.case.data.recovered,
              this.case.data.active,
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