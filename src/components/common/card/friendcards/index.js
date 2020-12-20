// FriendCardData
export class FriendCardData {
  constructor(imgUrl = "https://www.ihewro.com/favicon.ico", url = "https://www.ihewro.com/", title = "未添加标题", text = "未添加文本") {
    this.imgUrl = imgUrl
    this.url = url
    this.title = title
    this.text = text
  }
}
// FriendCardStyle
export class FriendCardStyle {
  constructor(titleColor = "black", textColor = "black", backgroundColor = "#fff", shadow = "#eeeeee", active = "#ddd", imgShadow = "red") {
    this.titleColor = titleColor
    this.textColor = textColor
    this.backgroundColor = backgroundColor
    this.shadow = shadow
    this.active = active
    this.imgShadow = imgShadow
  }
}
