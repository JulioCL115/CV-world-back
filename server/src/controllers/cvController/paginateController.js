const paginateData = (data, page, pageSize) => {
    const setCurrentPage = (page && parseInt(page, 10) > 0) ? parseInt(page, 10) : 1;
    const startIndex = (setCurrentPage - 1) * pageSize;
    const endIndex = startIndex + parseInt(pageSize, 10);
    const paginatedData = data.slice(startIndex, endIndex);
  
    return paginatedData;
  }; 

  module.exports = paginateData