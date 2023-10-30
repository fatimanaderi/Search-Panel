import { reactive } from "vue";
import api from "../services/api";
import { data } from "./data";
import { useQuasar } from "quasar";
const useSearch = () => {
  const searchedData = reactive({ ...data });
  const q = useQuasar();
  const getSearchResult = (value) => {
    if (value != null && value != "") {
      api
        .get("/search", { params: { domain: "ayyza.com" } })
        .then(({ data }) => console.log(data))
        .catch((e) => {
          q.notify({
            type: "negative",
            message: "لطفا دوباره جست و جو کنید",
            position: "top-right",
          });
          console.log(e);
        });
    }
  };

  return { searchedData, getSearchResult };
};
export default useSearch;
