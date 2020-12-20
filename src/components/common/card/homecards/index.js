export class HomeCardData {
  constructor(imgUrl = "assets/img/5.jpg", title = "未添加标题", text = "未添加文本", createTime = "创建时间", commentCount = "评论数", status = true) {
    this.imgUrl = imgUrl
    this.title = title
    this.text = text
    this.createTime = createTime
    this.commentCount = commentCount
    this.status = status
  }
}
// CardStyle
export class CardStyle {
  constructor(titleColor = "white", textColor = "black", infoColor = "black", backgroundColor = "white", shadowColor = "black", shadowActiveColor = "skyblue") {
    this.titleColor = titleColor
    this.textColor = textColor
    this.infoColor = infoColor
    this.backgroundColor = backgroundColor
    this.shadowColor = shadowColor
    this.shadowActiveColor = shadowActiveColor
  }
}
// IOverLaysCardStyle
export class IOverLaysCardStyle extends CardStyle {
  constructor(titleColor = "white", textColor = "white", infoColor = "white", backgroundColor = "#343a40", shadowColor = "black", shadowActiveColor = "skyblue") {
    super(titleColor, textColor, infoColor, backgroundColor, shadowColor, shadowActiveColor)
  }
}
// IHorizontalCardStyle
export class IHorizontalCardStyle extends CardStyle {
  constructor(titleColor = "black", textColor = "black", infoColor = "black", backgroundColor = "white", shadowColor = "black", shadowActiveColor = "skyblue") {
    super(titleColor, textColor, infoColor, backgroundColor, shadowColor, shadowActiveColor)
  }
}
