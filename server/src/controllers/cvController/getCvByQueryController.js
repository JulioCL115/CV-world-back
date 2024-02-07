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
        filters.experienceYears === '>5' ? a.years - b.years : b.years - a.years
      );
    }

    if (filters.studyName) {
        response = response.filter((cv) =>
          cv.study.some(
            (exp) =>
              exp.name &&
              exp.name.trim().toLowerCase().includes(filters.studyName.trim().toLowerCase())
          )
        );
      }

      if (filters.experienceStudy) {
        response.sort((a, b) =>
          filters.experienceStudy === '>5' ? a.years - b.years : b.years - a.years
        );
      }
  
    return response;
  };

 
  
  module.exports = getCvByQueryController;