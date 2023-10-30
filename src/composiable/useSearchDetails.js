import { reactive } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
const useSearchDetails = () => {
  const searchedDetails = reactive({});
  const q = useQuasar();
  const getDataDetails = (value) => {
    if (value != null && value != "") {
      axios
        .get("https://api.apilayer.com/ip_to_location/159.69.55.137", {
          headers: { apikey: "Wpt5YuhCWDY723hVIZD8dOb4SqYzkP8q" },
        })
        .then(({ data }) =>Object.assign(searchedDetails , data))
        .catch((e) => {
          q.notify({
            type: "negative",
            message:'مشکلی رخ داده است.',
            position: "top-right",
          });
          console.log(e);
        });
    }
  };

  return { searchedDetails, getDataDetails };
};
export default useSearchDetails;
