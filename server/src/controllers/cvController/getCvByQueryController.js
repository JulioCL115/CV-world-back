const getCvByQueryController = (data, filters) => {
    let response = [...data];
  
    if (filters.experienceTitle) {
      response = response.filter((cv) =>
        cv.experience.some(
          (exp) =>
            exp.title &&
            exp.title.toLowerCase().includes(filters.experienceTitle.toLowerCase())
        )
      );
    }
  
    if (filters.experienceYears) {
      response.sort((a, b) =>
        filters.experienceYears === '>5' ? a.price - b.price : b.price - a.price
      );
    }
  
    return response;
  };
  
  module.exports = getCvByQueryController;