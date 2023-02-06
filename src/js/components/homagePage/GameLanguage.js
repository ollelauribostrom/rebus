import { createComponent } from '../../mini';

export function GameLanguage() {
  return createComponent({
    render() {
      return `
        <section class="select-game-language" id="select-game-language">
            <h1 class="select-game-language-title">Select A Language an play the game in</h1>
            <div class="select-game-language__container">
                <a href="${window.location.origin}?rebus=${1}&lang=en" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/usa-circular.png" alt="English" class="lang_choice-img"></p>
                    <p class="lang_choice_text">English</p>
                </a>

                <a href="${window.location.origin}?rebus=${1}&lang=fr" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/france-circular.png" alt="Français" class="lang_choice-img"></p>
                    <p class="lang_choice_text">Français</p>
                </a>

                <a href="${window.location.origin}?rebus=${1}&lang=sp" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/spain-circular.png" alt="Español" class="lang_choice-img"></p>
                    <p class="lang_choice_text">Español</p>
                </a>

                <a href="${window.location.origin}?rebus=${1}&lang=cn" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/china-circular.png" alt="铬合金" class="lang_choice-img"></p>
                    <p class="lang_choice_text">铬合金</p>
                </a>

                <a href="${window.location.origin}?rebus=${1}&lang=it" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/italy-circular.png" alt="Italia" class="lang_choice-img"></p>
                    <p class="lang_choice_text">Italian</p>
                </a>

                <a href="${window.location.origin}?rebus=${1}&lang=pt" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/germany-circular.png" alt="Deutsch" class="lang_choice-img"></p>
                    <p class="lang_choice_text">Deutsch</p>
                </a>
                
                <a href="${window.location.origin}?rebus=${1}&lang=de" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/south-korea-circular.png" alt="English" class="lang_choice-img"></p>
                    <p class="lang_choice_text">South Korea</p>
                </a>
                
                <a href="${window.location.origin}?rebus=${1}&lang=ja" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/japan-circular.png" alt="やまと" class="lang_choice-img"></p>
                    <p class="lang_choice_text">やまと</p>
                </a>

                <a href="${window.location.origin}?rebus=${1}&lang=hi" class="lang_choice">
                    <p><img src="https://img.icons8.com/color/44/india-circular.png" alt="Hindi" class="lang_choice-img"></p>
                    <p class="lang_choice_text">Hindi</p>
                </a>
            </div>
        </section>
      `;
    }
  });
}
