export const getYear = ((dateString) => {
    return new Date(dateString).getFullYear();
});

export const fetchAndStore = (getDataMethod, options, storeMethod) => {
    getDataMethod(options)
      .then(data => {
        const fetchedData = { list: data.data.data };
        const filterParams = { filter: options };
        storeMethod({ ...fetchedData, ...filterParams });
      })
      .catch(err => console.info('catch', err));
};