const extract_word = (string) => {
  const project_name = string.split(" ");

  if (project_name.length >= 2) {
    return project_name[1];
  } else {
    return "The string does not contain the project name";
  }
};

export default extract_word;
