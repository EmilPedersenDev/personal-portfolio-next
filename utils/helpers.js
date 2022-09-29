export function getProjectLink() {
  const { github, website } = this.links;
  if (website) {
    return website;
  } else if (github) {
    return github;
  } else {
    return "";
  }
}
