export class CategoryUrl {
  constructor(imgHot = ['assets/img/10.jpg',
    'assets/img/8.jpg',
    'assets/img/13.jpg',
    'assets/img/12.jpg',
    'assets/img/11.jpg',
    'assets/img/14.jpg',
    'assets/img/15.jpg',
    'assets/img/16.jpg',
    'assets/img/17.jpg',
    'assets/img/18.jpg'
  ], imgRandom = ['assets/img/10.jpg',
    'assets/img/8.jpg',
    'assets/img/13.jpg',
    'assets/img/12.jpg',
    'assets/img/11.jpg',
    'assets/img/14.jpg',
    'assets/img/15.jpg',
    'assets/img/16.jpg',
    'assets/img/17.jpg',
    'assets/img/18.jpg'
  ], imgComment = ['assets/img/19.png',
    'assets/img/20.png',
    'assets/img/21.png',
    'assets/img/22.jpeg',
    'assets/img/23.png'
  ]) {
    this.imgHot = imgHot
    this.imgRandom = imgRandom
    this.imgComment = imgComment
  }
}
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
// SectionItemStyle
export class SectionItemStyle extends Style {
  constructor(color = "#7d858c", backgroundColor = '#f9f9f9', active = "#efefef") {
    super(color, backgroundColor)
    this.active = active
  }
}
// RightTopStyle
export class RightTopStyle extends Style {
  constructor(color = "#7d858c", backgroundColor = '#f9f9f9', bottomColor = "#f4f4f4", bottomActiveColor = "#000") {
    super(color, backgroundColor)
    this.bottomColor = bottomColor
    this.bottomActiveColor = bottomActiveColor
  }
}

//ContentHeadStyle
export class ContentHeadStyle extends Style {
  constructor(color = "#7d858c", backgroundColor = '#f9f9f9') {
    super(color, backgroundColor)

  }
}

//BlogInfoStyle
export class BlogInfoStyle extends Style {
  constructor(headBackgroundColor = "#f9f9f9", headColor = "#7d858c", color = "#7d858c", backgroundColor = 'white', badgeColor = '#fbfcfc', badgeBackGroundColor = '#d7e0e3') {
    super(color, backgroundColor)
    this.headColor = headColor
    this.badgeColor = badgeColor
    this.badgeBackGroundColor = badgeBackGroundColor
    this.headBackgroundColor = headBackgroundColor
  }
}
// ContentStyle
export class ContentStyle extends Style {
  constructor(headBackgroundColor = "#f9f9f9", headColor = "#7d858c", color = "black", backgroundColor = '#f9f9f9', active = "#efefef") {
    super(color, backgroundColor)
    this.headBackgroundColor = headBackgroundColor
    this.headColor = headColor
    this.active = active
  }
}
