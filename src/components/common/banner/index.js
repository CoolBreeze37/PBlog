export class Style {
  constructor(color = "black", backgroundColor = 'white') {
    // 字体颜色
    this.color = color
    // 背景颜色
    this.backgroundColor = backgroundColor
  }
  getStyle() {
    return {
      'color': this.color,
      'background-color': this.backgroundColor
    }
  }
}

export class BannerStyle extends Style {
  constructor(titleColor = "black", color = "black", backgroundColor = 'rgba(0,0,0,0)') {
    super(color, backgroundColor)
    this.titleColor = titleColor
  }
}
