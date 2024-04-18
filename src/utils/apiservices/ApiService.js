import PagesIndex from "../../container/PagesIndex";

//Get
export const doGet = async (url) => {
  try {
    const response = await PagesIndex.DataService.get(url);
    if (response?.data?.status == 200 || 201) {
      //   PageIndex.toast.success();
      return response;
    }
  } catch (error) {
    if (error?.response?.data?.status !== 401) {
      // PagesIndex.toast.error(error?.response?.data?.message);
    }
  }
};

//Post
export const doPost = async (url, data) => {
  try {
    const response = await PagesIndex.DataService.post(url, data);
    if (response?.data?.status == 200 || 201) {
      PagesIndex.toast.success(response?.data?.message);
      return response;
    }
  } catch (error) {
    PagesIndex.toast.error(error?.response?.data?.message);
  }
};

//Get Params
export const doPostParams = async (url, id) => {
  try {
    const response = await PagesIndex.DataService.post(`${url}/${id}`);
    if (response?.data?.status == 200) {
      PagesIndex.toast.success(response?.data?.message);
      return response;
    }
  } catch (error) {
    PagesIndex.toast.error(error?.response?.data?.message);
  }
};
