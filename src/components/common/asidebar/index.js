// 基类
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

// TitleStyle
export class TitleStyle extends Style {
  constructor(color = "#6c757d", backgroundColor = '#f9f9f9') {
    super(color, backgroundColor)
  }
}
// SayStyle
export class SayStyle extends Style {
  constructor(color = "white", backgroundColor = '#23b7e5', bgProgress = '#28a745') {
    super(color, backgroundColor)
    // 进度条颜色
    this.bgProgress = bgProgress
  }
}

// StyleLFooter
export class FooterStyleL extends Style {
  constructor(color = "black", backgroundColor = 'white', active = "#efefef") {
    super(color, backgroundColor)
    this.active = active
  }
}
// NavStyle
export class NavStyle extends Style {
  constructor(Hcolor = "#6c757d", HbackgroundColor = '#f9f9f9', color = "#495057", backgroundColor = '#f9f9f9', active = "#e4e4e4") {
    super(color, backgroundColor)
    this.active = active
    this.Hcolor = Hcolor
    this.HbackgroundColor = HbackgroundColor
  }
}
