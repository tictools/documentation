const SessionStorageService = {
  getItem(item) {
    const stringifiedData = globalThis.sessionStorage.getItem(item);
    const jsonData = JSON.parse(stringifiedData);
    return jsonData;
  },

  setItem(item, data) {
    globalThis.sessionStorage.setItem(item, JSON.stringify(data));
  },
};

export default SessionStorageService;
