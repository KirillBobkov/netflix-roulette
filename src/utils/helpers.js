export const getYear = ((dateString) => {
    return new Date(dateString).getFullYear();
});

export const fetchAndStore = (dataPromise, storeMethod) => {
    dataPromise
      .then(data => {
        const fetchedData = { list: data.data.data };
        const filterParams = { filter: data.config.params };
        storeMethod({ ...fetchedData, ...filterParams });
      })
      .catch(err => console.info('catch', err));
};