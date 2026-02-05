export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function pageName() {
  const path = location.pathname;
  const slashIndex = path.lastIndexOf("/");
  const smallPath = path.substring(slashIndex + 1);
  const page = smallPath ? smallPath : "home";
  return page

}