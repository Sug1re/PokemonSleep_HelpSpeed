// 各ファイルから必要な関数や変数をインポート
const time = require('./times');
const personality = require('./personalitys');
const bonus = require('./bonuss');
const skill = require('./skills');
const energy = require('./energys');

console.log("あなたのポケモンのおてスピをチェックしよう！！");

const PokemonTime = time();
console.log(parseFloat(PokemonTime));

const Pokemon_Lv = parseFloat(prompt("レベルを入力:"));
console.log(parseFloat(Pokemon_Lv));

const PokemonPersonality = personality();
console.log(parseFloat(PokemonPersonality));

const PokemonSkill = skill();
console.log(parseFloat(PokemonSkill));

let TotalSkill = 1.00 - parseFloat(PokemonSkill);
console.log(parseFloat(TotalSkill));

const bo = prompt("おてつだいボーナスを含んだおてつだい時間が知りたいですか？(y):");
if (bo === "y") {
    const PokemonBonus = bonus();
    console.log(parseFloat(PokemonBonus));
    console.log(parseFloat(PokemonSkill));

    let InterimSkill = parseFloat(TotalSkill) - parseFloat(PokemonBonus);
    console.log(parseFloat(InterimSkill));
    if (0.65 > InterimSkill) {
        TotalSkill = 0.65;
        console.log(parseFloat(TotalSkill));
    } else {
        TotalSkill = parseFloat(InterimSkill);
        console.log(parseFloat(TotalSkill));
    }
}

const lv = 0.002;

const en = prompt("げんき補正を含んだおてつだい時間が知りたいですか？(y):");
let formula;
if (en === "y") {
    const PokemonEnergy = energy();
    console.log(parseFloat(PokemonEnergy));

    formula = (
        parseInt(
            parseInt(
                parseInt(
                    parseFloat(PokemonTime) *
                    parseFloat(PokemonPersonality)
                ) *
                (1.000 - (parseFloat(Pokemon_Lv) - 1) * lv)
            ) *
            parseFloat(TotalSkill) *
            parseFloat(PokemonEnergy)
        )
    );
} else {
    formula = (
        parseInt(
            parseInt(
                parseInt(
                    parseFloat(PokemonTime) *
                    parseFloat(PokemonPersonality)
                ) *
                (1.000 - (parseFloat(Pokemon_Lv) - 1) * lv)
            ) *
            parseFloat(TotalSkill)
        )
    );
}

const Total_Seconds = parseInt(formula);
console.log(parseInt(Total_Seconds));

if (formula >= 3600) {
    const hours = Math.floor(Total_Seconds / 3600);
    const minutes = Math.floor((Total_Seconds % 3600) / 60);
    const seconds = Total_Seconds % 60;

    console.log(`ポケモンのおてつだい時間は${hours}時間${minutes}分${seconds}秒`);
} else {
    const minutes = Math.floor((Total_Seconds % 3600) / 60);
    const seconds = Total_Seconds % 60;

    console.log(`ポケモンのおてつだい時間は${minutes}分${seconds}秒`);
}
