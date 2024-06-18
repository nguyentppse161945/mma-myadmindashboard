import axios from "axios";

const firebaseURL =
  "https://mma-demo-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/"

const api = axios.create({
  baseURL: firebaseURL,
});

export const loginAPI = async (username, password) => {
  try {
    const response = await api.get(`/Asm2/Accounts.json`);
 
    const accounts = response.data;

    const user = accounts.find(
      (account) =>
        account.username === username && account.password === password
    );
    if (!user) {
      return null; // Đăng nhập không thành công
    }

    return user; // Trả về thông tin người dùng nếu đăng nhập thành công
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu người dùng:", error);
    return null;
  }
};


export const getMenuAPI = async () => {
  try {
    const response = await api.get(`/Asm2/Coins.json`);
    if (response && response) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    return [];
  }
};
