export const loadData = (key) => {
  let data = JSON.parse(localStorage.getItem(key));
  return data || undefined;
};

export const saveData = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};
