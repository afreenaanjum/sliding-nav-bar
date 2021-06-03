function createAnimal(name, job) {
  // "Private" variables here
  let _name = name;
  let _job = job;

  // Public variables here
  return {
    // Getter Methods
    getName() {
      return _name;
    },
    getJob() {
      return _job;
    },
    // Setter Methods
    setName(newName) {
      _name = newName;
    },
    setJob(newJob) {
      _job = newJob;
    },
  };
}
