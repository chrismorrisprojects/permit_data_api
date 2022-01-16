import http from "../http-common";

class UserDataService {
  register(data) {
    return http.post("/register", data);
  }

  activate(data) {
    return http.post(`/activate`, data);
  }

  login(data) {
    return http.post("/login", data);
  }

  update(id, data) {
    return http.put(`/register/${id}`, data);
  }

  delete(id) {
    return http.delete(`/register/${id}`);
  }

  deleteAll() {
    return http.delete(`/register`);
  }

  findByName(firstName) {
    return http.get(`/register?register=${firstName}`);
  }
}

export default new UserDataService();
