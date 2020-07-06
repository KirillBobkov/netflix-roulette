export const getYear = ((dateString) => {
    return new Date(dateString).getFullYear();
});

export const fetchAndStore = (getDataMethod, storeMethod) => {
    getDataMethod.then(data => {
        const fetchedData = { list: data.data.data };
        storeMethod(fetchedData);
      })
      .catch(err => console.info('catch', err));
};