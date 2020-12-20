export class RepositoryCardData {
  constructor(url = "https://github.com/CoolBreeze37/pblog/tree/master", title = "未添加标题", text = "未添加文本", createTime = "创建时间", commentCount = "评论数", status = true) {
    this.url = url
    this.title = title
    this.text = text
    this.createTime = createTime
    this.commentCount = commentCount
    this.status = status
  }
}
