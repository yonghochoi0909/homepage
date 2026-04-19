(function () {
  const APHORISMS = [
    {
      number: 1,
      koTitle: "모든 것은 절정에 이른다",
      koText: "세상을 살아가는 기술도 하루아침에 완성되지 않는다. 때를 기다리며 무르익을수록 사람의 빛도 또렷해진다.",
      enTitle: "Everything is at its Acme",
      enText: "Even the art of making one's way in the world has its season of ripeness."
    },
    {
      number: 2,
      koTitle: "인품과 지성",
      koText: "지성만으로는 충분하지 않다. 사람을 끝까지 받쳐 주는 것은 인품과 판단의 균형이다.",
      enTitle: "Character and Intellect",
      enText: "Intellect alone is not enough; character completes the way toward happiness."
    },
    {
      number: 3,
      koTitle: "한동안 드러내지 말라",
      koText: "너무 빨리 다 보여 주면 놀라움이 사라진다. 약간의 여백과 침묵이 성취의 무게를 키운다.",
      enTitle: "Keep Matters for a Time in Suspense",
      enText: "A little reserve lets achievement gather expectation and weight."
    },
    {
      number: 4,
      koTitle: "지식과 용기",
      koText: "아는 것만으로는 세상이 바뀌지 않는다. 지식은 용기를 만날 때 비로소 힘이 된다.",
      enTitle: "Knowledge and Courage",
      enText: "Wisdom needs courage, or it remains sterile."
    },
    {
      number: 5,
      koTitle: "필요한 사람이 되라",
      koText: "감사보다 오래가는 것은 기대와 필요다. 사람들 곁에서 계속 의미 있는 존재로 남는 법을 배워야 한다.",
      enTitle: "Create a Feeling of Dependence",
      enText: "Hope often binds people more firmly than gratitude."
    },
    {
      number: 6,
      koTitle: "최고의 순간에 이르는 사람",
      koText: "사람은 매일 조금씩 다듬어지며 완성에 가까워진다. 취향, 판단, 의지가 함께 성숙할 때 비로소 원숙해진다.",
      enTitle: "A Man at his Highest Point",
      enText: "We ripen day by day until taste, judgment, and will become clear and firm."
    },
    {
      number: 7,
      koTitle: "윗사람을 이기지 말라",
      koText: "권력을 이겨 보이려는 승리는 오래가지 않는다. 도움을 주되, 상대가 스스로 빛난다고 느끼게 하는 지혜가 필요하다.",
      enTitle: "Avoid Victories over Superiors",
      enText: "To outshine power is often to provoke it."
    },
    {
      number: 8,
      koTitle: "정념에 휘둘리지 말라",
      koText: "자신을 다스릴 수 있는 사람이 가장 높은 자리에 선다. 충동을 통제하는 힘이 평판과 품위를 지킨다.",
      enTitle: "To be without Passions",
      enText: "The highest rule is rule over oneself."
    },
    {
      number: 10,
      koTitle: "행운과 명성",
      koText: "행운은 흔들리지만 명성은 오래 남는다. 남는 것은 우연히 주어진 것이 아니라 쌓아 올린 것이다.",
      enTitle: "Fortune and Fame",
      enText: "Fortune flickers for a while; fame can endure beyond it."
    },
    {
      number: 11,
      koTitle: "가르쳐 줄 사람을 가까이하라",
      koText: "좋은 대화는 가장 즐거운 학교다. 배울 줄 아는 사람은 친구와 교제를 통해 스스로를 넓힌다.",
      enTitle: "Cultivate those who can teach you",
      enText: "Let friendship become a school of knowledge and discernment."
    },
    {
      number: 12,
      koTitle: "자연과 기술",
      koText: "타고난 바탕은 출발일 뿐이다. 다듬는 기술과 훈련이 있어야 재능도 형태를 갖춘다.",
      enTitle: "Nature and Art",
      enText: "Nature gives the material; art gives it finish."
    },
    {
      number: 13,
      koTitle: "때로는 숙고하고, 때로는 즉각 행동하라",
      koText: "늘 같은 방식으로 움직이면 쉽게 읽힌다. 상황에 따라 속도와 전략을 바꾸는 것이 지혜다.",
      enTitle: "Act sometimes on Second Thoughts, sometimes on First Impulse",
      enText: "Sagacity changes its method so as not to be read too soon."
    },
    {
      number: 14,
      koTitle: "무엇을 하느냐와 어떻게 하느냐",
      koText: "옳은 말도 거친 태도는 망친다. 좋은 방식은 진실을 더 멀리, 더 부드럽게 전한다.",
      enTitle: "The Thing Itself and the Way it is done",
      enText: "A bad manner spoils even justice; a good one sweetens truth."
    },
    {
      number: 16,
      koTitle: "지식과 선한 의도",
      koText: "예리한 지성도 마음이 비뚤어지면 더 큰 해를 만든다. 아는 힘은 뜻의 방향과 함께 평가되어야 한다.",
      enTitle: "Knowledge and Good Intentions",
      enText: "A fine intellect joined to a bad will only ruins more expertly."
    },
    {
      number: 17,
      koTitle: "행동 방식을 바꾸라",
      koText: "늘 같은 카드만 내면 상대가 먼저 읽는다. 리듬과 방식을 바꾸는 사람이 오래 주도권을 쥔다.",
      enTitle: "Vary the Mode of Action",
      enText: "Predictability is an ally of the opponent."
    },
    {
      number: 18,
      koTitle: "노력과 재능",
      koText: "재능은 시작점이고, 노력은 그것을 이름 있는 실력으로 만든다. 큰 자리는 대개 끈기 있는 사람에게 열린다.",
      enTitle: "Application and Ability",
      enText: "Talent needs labour before it becomes eminence."
    },
    {
      number: 19,
      koTitle: "과장된 기대를 만들지 말라",
      koText: "사람은 기대가 지나치면 실제를 덜 보게 된다. 가장 좋은 인상은 현실이 상상보다 나을 때 남는다.",
      enTitle: "Arouse no Exaggerated Expectations on entering",
      enText: "Let reality exceed expectation rather than fail beneath it."
    },
    {
      number: 21,
      koTitle: "행운을 다루는 기술",
      koText: "행운을 기다리기만 하는 사람보다 준비하고 앞으로 나아가는 사람이 기회를 더 자주 붙잡는다.",
      enTitle: "The Art of being Lucky",
      enText: "What people call luck, the wise often assist by courage and care."
    },
    {
      number: 22,
      koTitle: "때를 아는 지식",
      koText: "긴 설명보다 때맞춘 한마디가 더 많이 가르칠 때가 있다. 쓸모 있는 지식은 정확한 순간에 빛난다.",
      enTitle: "A Man of Knowledge to the Point",
      enText: "A timely saying can teach more than a long discourse."
    },
    {
      number: 23,
      koTitle: "흠을 남기지 말라",
      koText: "훌륭함이 많아도 작은 결함 하나가 시선을 붙든다. 사소한 허술함일수록 더 일찍 고쳐야 한다.",
      enTitle: "Be Spotless",
      enText: "A single stain can dim a whole field of excellence."
    },
    {
      number: 24,
      koTitle: "상상력을 다스려라",
      koText: "상상력은 삶을 풍요롭게도, 불안하게도 만든다. 행복을 지키려면 먼저 마음속 화면을 다루는 법을 배워야 한다.",
      enTitle: "Keep the Imagination under Control",
      enText: "Imagination can either tyrannize over life or steady it."
    },
    {
      number: 25,
      koTitle: "암시를 읽는 법",
      koText: "정작 중요한 말은 대개 절반만 드러난다. 주의 깊게 들을 줄 아는 사람이 숨은 뜻까지 읽는다.",
      enTitle: "Know how to take a Hint",
      enText: "What matters most is often spoken only by halves."
    },
    {
      number: 26,
      koTitle: "사람마다 약한 고리를 찾아라",
      koText: "사람은 저마다 움직이는 이유가 다르다. 무엇이 그를 움직이게 하는지 알면 행동의 문이 열린다.",
      enTitle: "Find out each Man's Thumbscrew",
      enText: "Know the spring of motive and you hold the key to action."
    },
    {
      number: 27,
      koTitle: "넓이보다 밀도를 택하라",
      koText: "많이 하는 것보다 깊이 있게 하는 것이 더 오래 남는다. 희소한 탁월함은 양보다 질에서 나온다.",
      enTitle: "Prize Intensity more than Extent",
      enText: "Quality wins honour more surely than quantity."
    },
    {
      number: 29,
      koTitle: "올곧은 사람",
      koText: "이익과 분위기가 바뀌어도 옳은 쪽에 남는 일은 드물고 어렵다. 그래서 곧은 사람은 더욱 귀하다.",
      enTitle: "A Man of Rectitude",
      enText: "Hold to what is right even when convenience deserts it."
    },
    {
      number: 31,
      koTitle: "운 좋은 이들과 함께하라",
      koText: "어리석음과 불운은 쉽게 옮는다. 망설여질 때일수록 분별 있는 사람들의 편에 서는 편이 안전하다.",
      enTitle: "Select the Lucky and avoid the Unlucky",
      enText: "Folly and ill-fortune are contagious companions."
    },
    {
      number: 32,
      koTitle: "호감을 주는 사람이 되라",
      koText: "권위가 높을수록 너그러움은 더 큰 힘이 된다. 은혜를 베푸는 태도는 사람들의 마음을 오래 붙든다.",
      enTitle: "Have the Reputation of being Gracious",
      enText: "Graciousness is power made amiable."
    },
    {
      number: 33,
      koTitle: "물러날 줄 알라",
      koText: "늘 타인의 일과 요구에 열려 있으면 자신에게 돌아갈 시간이 사라진다. 거리를 지키는 절제가 자유를 보존한다.",
      enTitle: "Know how to Withdraw",
      enText: "Do not give yourself away so completely that none of you remains your own."
    },
    {
      number: 34,
      koTitle: "자신의 가장 강한 점을 알라",
      koText: "남을 흉내 내기보다 자신이 가장 잘할 수 있는 곳을 찾는 편이 빠르다. 강점은 알아차릴 때 비로소 자산이 된다.",
      enTitle: "Know your strongest Point",
      enText: "Excellence grows where aptitude is recognised and cultivated."
    },
    {
      number: 35,
      koTitle: "중요한 일일수록 더 깊이 생각하라",
      koText: "가벼운 일에는 가볍게 대응해도 되지만, 삶을 바꾸는 문제는 생각의 깊이가 달라야 한다. 현명함은 무게를 구분하는 데서 시작된다.",
      enTitle: "Think over Things, most over the most Important",
      enText: "The wise think over everything, but most deeply where the matter is weightiest."
    }
  ];

  function getSeoulDateParts(date) {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(date);
    const values = {};

    parts.forEach(function (part) {
      if (part.type !== "literal") {
        values[part.type] = part.value;
      }
    });

    return values;
  }

  function getSeoulDateKey(date) {
    const parts = getSeoulDateParts(date);
    return parts.year + "-" + parts.month + "-" + parts.day;
  }

  function formatSeoulDate(locale, date) {
    return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }

  function hashString(value) {
    let hash = 2166136261;

    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }

    return hash >>> 0;
  }

  function mulberry32(seed) {
    return function () {
      let value = seed += 0x6d2b79f5;
      value = Math.imul(value ^ value >>> 15, value | 1);
      value ^= value + Math.imul(value ^ value >>> 7, value | 61);
      return ((value ^ value >>> 14) >>> 0) / 4294967296;
    };
  }

  function shuffle(array, random) {
    const copy = array.slice();

    for (let index = copy.length - 1; index > 0; index -= 1) {
      const nextIndex = Math.floor(random() * (index + 1));
      const current = copy[index];
      copy[index] = copy[nextIndex];
      copy[nextIndex] = current;
    }

    return copy;
  }

  function buildCard(item, locale) {
    const card = document.createElement("article");
    card.className = "aphorism-card";

    const kicker = document.createElement("div");
    kicker.className = "aphorism-kicker";
    kicker.textContent = locale === "ko" ? "격언 " + item.number : "Maxim " + item.number;

    const title = document.createElement("h3");
    title.className = "aphorism-title";
    title.textContent = locale === "ko" ? item.koTitle : item.enTitle;

    const quote = document.createElement("p");
    quote.className = "aphorism-quote";
    quote.textContent = locale === "ko" ? item.koText : item.enText;

    const source = document.createElement("p");
    source.className = "aphorism-source";
    source.textContent = locale === "ko"
      ? "영문 원제: " + item.enTitle
      : "Joseph Jacobs translation, 1892";

    card.appendChild(kicker);
    card.appendChild(title);
    card.appendChild(quote);
    card.appendChild(source);

    return card;
  }

  function renderDailyAphorisms(options) {
    const locale = options && options.locale === "en" ? "en" : "ko";
    const grid = document.getElementById(options && options.gridId ? options.gridId : "aphorismGrid");
    const dateTarget = document.getElementById(options && options.dateId ? options.dateId : "aphorismDate");

    if (!grid) {
      return;
    }

    const now = new Date();
    const dateKey = getSeoulDateKey(now);
    const random = mulberry32(hashString(dateKey));
    const selection = shuffle(APHORISMS, random).slice(0, 3);

    grid.innerHTML = "";
    selection.forEach(function (item) {
      grid.appendChild(buildCard(item, locale));
    });

    if (dateTarget) {
      const formatted = formatSeoulDate(locale, now);
      dateTarget.textContent = locale === "ko"
        ? formatted + " 서울 기준"
        : "For " + formatted + " in Seoul";
    }
  }

  window.GRACIAN_APHORISMS = APHORISMS;
  window.renderDailyAphorisms = renderDailyAphorisms;
})();
