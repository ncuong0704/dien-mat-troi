export function formatAuthor(author: string): string {
  switch (author) {
    case "tamnguyen25032003@gmail.com":
      return "Tam Nguyen";
    case "nguyenthithuhien07114@gmail.com":
      return "Thu Hien";
    default:
      return author;
  }
}
