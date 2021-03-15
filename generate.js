function generateRubbish(option) {
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']

    }
    const phrase = ['很簡單','很容易','很快','很正常']

    let result = "身為一個"
    const randomNum1 = Math.floor(Math.random() * 4)
    const randomNum2 = Math.floor(Math.random() * 4)

    if (!option.career) {
        return `您尚未選擇職業哦！`
    }

    if (option.career === "engineer") {
        result += "工程師"
        result += task.engineer[randomNum1]
        result += phrase[randomNum2]
        result += "吧！"
    }

    if (option.career === "designer") {
        result += "設計師"
        result += task.designer[randomNum1]
        result += phrase[randomNum2]
        result += "吧！"
    }

    if (option.career === "entrepreneur") {
        result += "創業家"
        result += task.entrepreneur[randomNum1]
        result += phrase[randomNum2]
        result += "吧！"
    }

    // return result
    return result
}

module.exports = generateRubbish

