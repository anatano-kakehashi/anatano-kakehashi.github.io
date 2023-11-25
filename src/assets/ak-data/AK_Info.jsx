import tw from "twin.macro";

import { HiddenBrLgXl, HiddenBr, HiddenBrSm, HiddenBrMd, HiddenBrLg, HiddenBrXl, HightlightedText} from "assets/styles/TailwindComponents.jsx";

import skill1 from "assets/ak-images/skill/skill1.png";
import skill2 from "assets/ak-images/skill/skill2.png";
import skill3 from "assets/ak-images/skill/skill3.png";
import skill4 from "assets/ak-images/skill/skill4.png";

// home page related information

export const home_hero = [
  {
    Heading:(
      <>
        あなたの可能性<HiddenBr />を広げよう： <HiddenBr />
        <HiddenBrSm />
        一緒にプログラミング<HiddenBr />を学ぼう！
      </>
    ),
    Paragraph:(
        <>
          あなたの頼れる先輩プログラマーとして、皆にコンピューターサイエンスを教え、サポートする事に全力を注いでいます。また、プログラミング以外の大学・社会に関する事などもアドバイスします。私と一緒に学び、成長し、プログラミングを楽しむ旅をあなたも始めましょう！
        </>
    ),
    PrimaryAction:"初回無料レッスンを受けよう！"
  },
  {
    Heading:(
      <>
        Unlock The Code<HiddenBr /> to Your Future: <HiddenBr />
        <HiddenBrSm />
        Let’s Learn <HiddenBr />Programming Together!
      </>
    ),
    Paragraph:(
      <>
        As your go-to coding buddy and attentive mentor, I'm all about helping students understand computer science and supporting their journey navigating through both academia and industry. Get ready for a journey of learning, growing, and having a blast together!
      </>
  ),
    PrimaryAction:"Schedule a Free Lesson!"
  }
];

export const home_skills = [
  {
    Heading:(<>授業で学ぶスキル</>),
    Skills:[
      {
        Heading:"想像力を発揮する",
        Paragraph:"プログラミングは一見、論理的思考だけが重要だと思われがちですが、実は想像力も物凄く大切です。創造性と既成概念にとらわれない思考力がプログラマーにあるからこそユニークな解決策を生み出し、革新的な技術を作り続ける事が出来るのです。",
        ImageUrl: skill1
      },
      {
        Heading:"技術力を磨く",
        Paragraph:"プログラミングを学ぶことで、強い分析的思考力が養われます。このスキルには、複雑な問題を分解し、論理的に考え、創造的で効率的な解決策を見つけることが含まれます。これらの技術は、人生のあらゆる局面、プログラミング以外でも、必ず役に立つ貴重なスキルです。",
        ImageUrl: skill2
      },
      {
        Heading:"最新の技術を理解する",
        Paragraph:"現在、AIの進歩で世界は劇的に変化しています。AIを利用して解析・翻訳ができ、自動運転をも可能にする最新の技術ですが、大多数の人々はAIが何なのかを良く分かってません。こんなにも世界を劇的に変化させている最新の技術と常に触れ合い、どの様に作られ裏で何が起こっているかを理解している職業こそエンジニアなのです。",
        ImageUrl: skill3
      },
      {
        Heading:"社会・大学に備える",
        Paragraph:"プログラミングを学ぶことで、様々な業界で求められる実践的なスキルを身につけることができます。テクノロジーが進歩し続ける中、プログラミングの知識を持つ専門家は高い需要があります。例えば医療分野で働けば、介護ロボットや医療機器を利用しますが、これもプログラミングで作られています。どんな職業であれ、必ずプログラミングはあなたの将来の役に立つと信じてます。",
        ImageUrl: skill4
      }
    ]
  },
  {
    Heading:(<>Skills You Will Gain</>),
    Skills:[
      {
        Heading:"Unleash your Creativity",
        Paragraph:"While coding involves logical thinking skills, it also teaches programmers how to think creatively. Programmers often find innovative ways to approach issues and create unique solutions, fostering creativity and to think outside the box.",
        ImageUrl: skill1
      },
      {
        Heading:"Develop your Technical Skills",
        Paragraph:"By breaking down complex problems, thinking logically, and finding efficient solutions, programmers develop their technical skills on an everyday basis. These technical skills will help you tackle various challenges in all aspects of life.",
        ImageUrl: skill2
      },
      {
        Heading:"Understand Emerging Tech",
        Paragraph:"As a programmer, you will interact with thousands of hardware and software concepts on a daily basis. This will provide you with a holistic understanding of how technology works: even the latest cutting-edge technology. This understanding demystifies the technology-driven world we live in, empowering you to make informed decisions about the technology you use. ",
        ImageUrl: skill3
      },
      {
        Heading:"Become Prepared for Industry",
        Paragraph:"Programming equips you with practical skills that are highly sought after in various industries. As technology continues to advance, professionals with programming skills will continue to increase in demand. Whether you're pursuing a career in tech or another field, programming will make you more adaptable and valuable in the job market, increasing your readiness for a wide range of industries.",
        ImageUrl: skill4
      }
    ]
  }
];

export const home_aboutMe = [
  {
    Heading: "あなたの講師",
    SubHeading: (<>未来のプログラマーの皆さん、 <HiddenBr /><HiddenBrLgXl />こんにちは！</>),
    Description: "私の名前はコウキです！現在マイクロソフトでソフトウェアエンジニアとして働いています。あなたの講師としてだけでなく、メンター・友人のような存在になれるよう心掛けております。",
    Button: "私について"
  },
  {
    Heading: "Your Teacher",
    SubHeading: "Hi there, future programmers! ",
    Description: "My name is Koki, and I'm currently working as a Software Engineer at Microsoft! I strive to not just be your tutor, but to also become a mentor-like figure and friend.",
    Button: "Get To Know Me"
  }
];

export const startJourneyInfo = [
  {
    Heading: "旅に出よう",
    Description1: "もしあなたがコンピューターサイエンスに対して怖気づいたり、まだ学ぶには早いと感じたりしているなら、心配しないで下さい！私も５年前は素人でしたが、今ではエンジニアとして働いています。あなたの旅は始まったばかりで、きっと素晴らしいものになるでしょう！",
    Description2: (
      <>
        初回のレッスンは無料なので、<HiddenBr />気軽にメッセージをください！
      </>
    ),
    Button: "初回無料レッスンを受けよう！"
  },
  {
    Heading: "Start Your Journey",
    Description1: "If you're feeling intimidated by Computer Science or feel like you aren't prepared to learn, just remember, I started from scratch too, and look where I am now. Your journey is just beginning, and it's going to be a fantastic ride!",
    Description2: "The first lesson will be free, so feel free to message me casually!",
    Button: "Schedule a Free Lesson"
  }
];

export const testimonials = [
  [
    {
      quote:
        "レッスンはとても楽しく魅力的で、内容はとても簡潔で理解しやすかったです。レッスンのお陰で、学校の授業で本当に役立ちました。",
      stars: 5,
      customerTitle: "生徒A"
    },
    {
      quote:
        "初心者からでしたが丁寧に個人レッスンをして頂きありがたかったです。更にグループレッスンをしたりと意見を良い合えたり他の人の良い所悪い所を良い合えたりインプットとアウトプットが出来た事はかなり良かったのではないかと思います。",
        stars: 5,
      customerTitle: (<>
        生徒Bの
        <HiddenBr />
        親御さん
      </>)
    },
    {
      quote:
        "いつも子供が喜んで授業に参加している姿を目の当たりにしています。全てに満足して、感謝しています。",
      stars: 5,
      customerTitle: (<>
        生徒Cの
        <HiddenBr />
        親御さん
      </>)
    }
  ],
  [
    {
      quote:
        "The lessons were very fun and engaging, and the content was very concise and easy to understand! These aspects really helped me in my courses at school.",
      stars: 5,
      customerTitle: "Student A"
    },
    {
      quote:
        "Despite my daughter being a beginner at programming, I really appreciated how careful and helpful Koki was. Additionally, the group lessons were amazing, because my daughter was able to share opinions and learn from one another!",
        stars: 5,
      customerTitle: "Student B's Parent"
    },
    {
      quote:
        "I always see my daughter having a great time participating in class. I am extremely satisfied and grateful for everything!",
      stars: 5,
      customerTitle: "Student C's Parent"
    }
  ]
]

// why learn CS related information

export const whyCS_WhatIsCS = [
  {
    Heading:"学ぶメリット",
    SubHeading:(
      <>
        コンピューター<HiddenBr/>
        サイエンスとは？
      </>
    ),
    Paragraph:"コンピューターサイエンスとは、コンピューターに関しての知識を学ぶだけではなく、私たちを日々取り巻くテクノロジーを理解することです。私たちの電子機器やアプリを動かしているテクノロジーの舞台裏を覗き見ることができる超能力を持っているようなものです。想像してみてほしい：あなたが今このメッセージを読むために使っている電話やこのウェブサイトを構築したプログラムはすべてコンピューターサイエンスの世界で生まれました。"
  },
  {
    Heading:"WHY LEARN",
    SubHeading: (
      <>
        What is Computer Science?
      </>
    ),
    Paragraph:"Computer Science is not just about computers; it's about understanding the digital world that surrounds us. It's like having a superpower that lets you peek behind the scenes of technology. Imagine this: the smartphone you use to search the web & call your loved ones, the cars we all drive in everyday, or the computer you use to complete homework assignments were all created by Computer Science. By understanding Computer Science, you will become aware of the technology surrounding our daily lives and understand how they were programmed/created!"
  }
];

export const whyCS_WhyImp = [
  {
    Heading:(
      <>
        何故重要なの？
      </>
    ),
    Paragraph:(
      <>
        数十年後、世界はテクノロジーの進歩で劇的に変化するでしょう。自動運転する車、AIが病気を治したり手術を行い、完全に没入できるバーチャルリアリティ。これらはSFの夢ではなく、コンピューターサイエンスのおかげで現実になりつつあります。
        <br />
        コンピューターサイエンスを学ぶことで、私たちの生活を取り巻く新たなソフトウェアに精通することができ、他の誰よりも一歩先を行くことができます。例えば、AIが怖くて馴染みのない概念ではなくなり、AIがどのように作られるのか、そしてどのように我々がAIを活用するかを理解することができます！
      </>
    )
  },
  {
    Heading:(
      <>
        Why is it <HiddenBrMd />
        Important?
      </>
    ),
    Paragraph:(
      <>
        Now, let's fast forward a bit. In the next couple of decades, you'll see some incredible things happen in technology. Picture this: cars that drive themselves, AI that cures diseases & performs surgeries, and virtual reality environments where you can be fully immersed. These are not just sci-fi dreams; they're coming to fruition thanks to Computer Science. 
        <br />
        By learning computer science, you will become familiar with these technological concepts and the emerging software that surrounds our lives; thus, being a step ahead of everyone else. For instance, AI won't be a scary / unfamiliar concept anymore. Instead you will understand how AI is created and how YOU can take control and utilize AI to your advantage! 
      </>
    )
  }
];

export const whyCS_ThreeReasonings = [
  {
    Heading: (<>コンピューターサイエンスを<br />学ぶ事で何が得られますか？</>),
    SubHeading1 : (<>技術スキルの高い需要／<br/>多様なキャリアの機会：</>),
    Paragraph1: (
      <>
        上記のセクションで述べたように、コンピューターサイエンスはあらゆるところに存在しており、今後も私たちの生活に影響を与え続けるだろう。この重要性に伴い、プログラマーも極めて需要になっています！実際、米国労働統計局によると、ソフトウェアエンジニアの仕事は他のどの分野よりも速く成長するという。
        <br />
        もう一つの重要な点は、コンピューターサイエンスには様々なサブフィールドがあるということです。ゲーム開発、UI/UX（デザインと研究）、サイバーセキュリティ、データサイエンス、iOS/Androidアプリ開発など、数え上げればきりがない！
      </>
    ),
    SubHeading2: (<>ワーク・ライフ・バランス<br/>と有利な福利厚生：</>),
    Paragraph2: (
      <>
        最後に、ソフトウェアエンジニアは、高給、良い保険、素晴らしいオフィス設備など、非常に有利な福利厚生があります。一例として、平均的な新卒のソフトウェアエンジニアの年収は約10万ドルです。これとは対照的に、大学を卒業し、就職活動に苦労する専攻は山ほどある。就職できたとしても、新卒の平均給与は5万ドルです。
        <br />
        もちろん、お金がすべてではありませんが、高収入のお陰で早くに引退したり、いつも行きたかった旅行、学びたかった新しい言語など、様々な機会の扉を開くことができます。
      </>
    ),
    SubHeading3: "最新テクノロジーが理解出来る：",
    Paragraph3: (
      <>
        今日の世界では、テクノロジーのノウハウをある程度、話さなければならない。SNSで「いいね！」をクリックし、投稿をシェアしているところを想像してみてほしい。その裏で何が起こっているのか、不思議に思ったことはないだろうか？SNSは、あなたが何を好み、どこに行き、どのように見えるかまで、あなたに関する大量のデータを収集している！ちょっと不気味だ。しかし、コンピューターサイエンスを理解していれば、これらのプラットフォームをただ利用するだけでなく、どのように機能しているのかを知ることができる。あなたがコントロールするのであって、彼らがコントロールするのではない。
      </>
    ),
    SubHeading4: "創造力が強くなる：",
    Paragraph4: (
      <>
        コンピューターサイエンスは単なる数字やコードではありません。クリエイティブな遊び場なのです。自分のビデオゲームをデザインしたり、見事なデジタルアートを作ったり、現実世界の問題を最新のAI技術で解決したいと思ったことはありませんか？コンピューターサイエンスでは、そのようなことがすべてできます。コンピューターサイエンスは、あなたの想像力のためのツールキットを持つようなものです。
      </>
    )
  },
  {
    Heading: (
      <>
        What Will I Get From <HiddenBrLgXl /> Learning Computer Science?
      </>
    ),
    SubHeading1 : (<>High Demand for Tech Skills / <HiddenBrLgXl />Diverse Career Opportunities:</>),
    Paragraph1: (
      <>
        As I discussed in the above sections, computer science is legitimately everywhere and will continue to impact our lives in the future. And as expected, since programming is so important, there is an extremely high demand for programmers! In fact, the U.S. Bureau of Labor Statistics says jobs in tech will grow faster than any other field. 
        <br />
        Another important aspect is that there are various subfields within Computer Science. You can dive into Game Development, UI/UX (Design & Research), Cyber Security, Data Science, iOS/Android app dev, and the list goes on! 
      </>
    ),
    SubHeading2: (<>Work / Life Balance & <br/>Lucrative Benefits:</>),
    Paragraph2: (
      <>
        As you may have expected, in relation to the high demand and diverse career options, software engineers also have extremely lucrative benefits: high salary, wonderful healthcare, amazing office amenities, to name a few. To put things in perspective, the average entry-level software engineer makes ~$120,000 a year in the United States. 
        <br />
        In contrast to this, there are tons of other majors where students graduate from a 4-year university, but struggle to find a job. And even when they do find one, the average new-grad’s salary is $60,000. Of course money isn't everything, but it can open doors to opportunities that you’ve always wanted to do like traveling or learning a new language. 
      </>
    ),
    SubHeading3: "Understand the Digital World: ",
    Paragraph3: (
      <>
        In today's world, you've got to speak the language of tech. Imagine you're on social media, clicking 'like,' and sharing posts. Did you ever wonder what happens behind the scenes? Social media platforms collect tons of data about you – what you like, where you go, even how you look! It's kinda spooky. But if you understand Computer Science, you won't just use these platforms; you'll know how they work. You'll be in control, not them.
      </>
    ),
    SubHeading4: "Unleash Your Creativity:",
    Paragraph4: (
      <>
        Here's the best part – Computer Science isn't just numbers and code. It's your creative playground. Ever wanted to design your own video game, create stunning digital art, or solve real-world problems with clever tech solutions? Computer Science lets you do all that and more. It's like having a toolkit for your imagination.
      </>
    )
  }
];

export const whyCS_WhyDive = [
  {
    Heading:(
      <>
        では、私はなぜ<HiddenBr/>
        コンピューター<HiddenBrLgXl/>サイエンスを学ぶべきなのでしょうか？
      </>
    ),
    SubHeading1:"それは：",
    SubHeading2:"あなたが学びたいから！",
    Paragraph:(
        <>
          これらは素晴らしい理由のほんの一部ですが、最大の理由はあなたの好奇心と探究心でしょう。そして、もしあなたがこの道を選んだなら、私はその一歩一歩をお手伝いします。
        </>
    )
  },
  {
    Heading:(
      <>
        So why should I dive into <HiddenBrLgXl />Computer Science?
      </>
    ),
    SubHeading1:"It's simple: ",
    SubHeading2:"because you want to!",
    Paragraph:(
      <>
        These are just a few reasons why it's awesome, but your biggest reason should be your curiosity and desire to explore. And hey, if you choose this path, I'll be here to help you every step of the way.
      </>
    )
  }
];

// about me related information

export const aboutMe_IntroHero = [
  {
    Heading:"私について",
    SubHeading:(<>未来のプログラマーの<HiddenBrLg />皆さん、<HiddenBr/><HiddenBrXl />こんにちは！ 👋</>),
    Paragraph:[
      "コンピューター","サイエンス",
      "の素晴らしさを教える、",
      "コウキ",
      "です。"
    ]
  },
  {
    Heading:"ABOUT ME",
    SubHeading:"Hi there, future programmers! 👋",
    Paragraph:[
      "I'm ",
      "Koki, ",
      "your guide into the awesome world of ",
      "Computer Science."
    ]
  }
];

export const aboutMe_JourneyHero = [
  {
    Heading:"私の経歴",
    Paragraph:"現在マイクロソフトでソフトウェア・エンジニアとして働いていますが、ほんの5年前まで私はコンピューターサイエンスが何なのかを全く知りませんでした。そんなゼロからのスタートでしたが、色んな経験を積み学ぶ事が出来ました。",
    Description1: "様々な授業、インターンシップ、プロジェクトを通じて、ウェブサイトの作り方やAI/MLの学習方法など、素晴らしい技術を学んで来ました。加えて、私はプログラミング以外の重要なライフスキルも学びました：チームワーク、コミュニケーション、問題解決、など。これまで経験した事、これから学ぶ事を全部取り入れて君に最高の授業を提供して行きたいです。",
    Description2: "だから、もしあなたがコンピューターサイエンスを怖いと感じたり、学ぶ準備が出来てないと感じたりしているなら、ただ思い出してほしい：私もたった5年前はあなたと同じく怖く感じてました。あなたの旅はまだ始まったばかりで、私はあなたの事を全力でサポートします。絶対楽しい未来が待っているよ！",
    Journey:[
      {
        SubHeading: "UC Santa Barbara",
        Date: "２０１８秋",
        Description: (<>コンピューターサイエンスの<br />経験がないままUCSBに入学</>),
      },
      {
        SubHeading: "Japan",
        Date: "２０１９夏",
        Description: "日本でインターンと留学経験"
      },
      {
        SubHeading: "Northrop Grumman",
        Date: (<>２０２０夏＆<br /> ２０２１春・夏</>),
        Description: (<>Northrop Grummanで<br/>SWE & AI/MLインターン</>)
      },
      {
        SubHeading: "Invoca",
        Date: "２０２１秋",
        Description: (<>Invoca CS Capstoneの<HiddenBrLgXl />チームリーダー<br/>UCSB CS Summitで3位入賞</>)
      },
      {
        SubHeading: "UCSB Game Development",
        Date: "２０２２春",
        Description: (<>RPGビデオゲームを開発、<br/>UCSB CS Fairでトップ5入賞</>)
      },
      {
        SubHeading: "Microsoft",
        Date: "２０２２秋",
        Description: (<>Microsoft Azureで<br/>ソフトウェアエンジニア</>)
      }
    ]
  },
  {
    Heading:"My Journey",
    Paragraph:"I'm working as a Software Engineer at Microsoft right now (pretty wild, huh?), but just five years ago, I was in your shoes, not knowing a thing about Computer Science. I started from scratch, and it's been an amazing adventure. Below, you can see some of my relevant experiences I have in the realm of Computer Science.",
    Description1: "I learned some amazing technical skills like how to create a website or how to train an AI/ML model through various projects, coursework, and industry experience. Throughout this journey, though, I also learned important life skills that helped me get to where I am today. Life's not just about coding, right? It's also about things like teamwork, communication, and problem-solving, and I've got some great stories to share about that as well.",
    Description2: "So, if you're feeling intimidated by Computer Science or feel like you aren't prepared to learn, don't worry. Remember that I started from scratch too and look where I am now. Your journey is just beginning, and it's going to be a fantastic ride!",
    Journey:[
      {
        SubHeading: "UC Santa Barbara",
        Date: "2018 Fall",
        Description: "Entered UCSB without any experience in Computer Science"
      },
      {
        SubHeading: "Japan",
        Date: "2019 Summer",
        Description: "Interned and Studied Abroad in Japan"
      },
      {
        SubHeading: "Northrop Grumman",
        Date: (<>2020 Summer & <br /> 2021 Spring+Summer</>),
        Description: (<>SWE & AI/ML Internship with <br />Northrop Grumman</>)
      },
      {
        SubHeading: "Invoca",
        Date: "2021 Fall",
        Description: (<>Team Lead for the Invoca <br />CS Capstone project <br/> placing 3rd at the UCSB CS Summit</>)
      },
      {
        SubHeading: "UCSB Game Development",
        Date: "2022 March",
        Description: (<>Developed an RPG Video Game, <br />placing top 5 at the UCSB CS Fair</>)
      },
      {
        SubHeading: "Microsoft",
        Date: "2022 Fall",
        Description: "Software Engineer at Microsoft Azure"
      }
    ]
  }
]

export const aboutMe_TeachHero = [
  {
    Heading:"私が教える事",
    SubHeading:[
      "私は単なる講師ではなく、", 
      "あなたの",
      "メンター",
      " ・ ",
      "友人",
      "だと思ってください。"
    ],
    Paragraph:"コンピューターサイエンスをマスターする手助けをするだけでなく、履歴書の書き方や大学進学のためのアドバイスなど、人生の教訓もお伝えします。"
  },
  {
    Heading:"What I'll Teach You",
    SubHeading:[
      "I'm not just your tutor;", 
      "think of me as your ",
      "mentor",
      " and ",
      "friend."
    ],
    Paragraph:"I'll not only help you master Computer Science but also share life lessons like how to create a resume or give you valuable advice for college and beyond."
  }
];

export const aboutMe_WhyMeHero = [
  {
    Heading:"私と学ぶべき理由？",
    SubHeading1:"共感できるエンジニア",
    Paragraph1:(
    <>
      大学受験のとき、私は気まぐれで「コンピューター・エンジニア」を専攻として選びました。理系の授業は得意でしたし、コンピューターは将来役に立つだろうと言う甘い考えでUCSBに入学しました。その当時、僕にはプログラミングの経験が全く無かったのですが、他の生徒もきっと同じだろうと思ってました。
      <br/><br/>
      しかし、僕とは対照的にほとんどの生徒が既にプログラミングを学んでいて、将来エンジニアになりたいと言う強い思いを抱いていました。なぜ皆はこんなにも多くのことを知っているのだろう？なぜ皆はエンジニアを目指そうと思ったのだろう？その答えは意外と簡単で、彼らにはアドバイスを貰える人々が身近にいたからでした。自分の家族だったり友達の両親など既にエンジニアになっている人々を知っていました。だからこそエンジニアは何をしていて、どうしたら彼らもエンジニアになれるかを知っていたからです。
      <br/><br/>
      私の親族内ではこの分野を探求したのは自分が初めてだったので、私には導いてくれる人が周りに居ませんでした。だからこそ、私はあなたの力になりたいのです。あなたがいつでも頼れる、何でも聞けるメンターとなり一緒に励み、あなたが素晴らしいソフトウェア・エンジニアになる手助けが出来ればと願っています。
    </>),
    SubHeading2:"熱心なサポーター",
    Paragraph2:(
      <>
        日系一世として、私はアメリカで成長して行く中、多くの葛藤や障害に直面し、圧倒されそうになることがよくありました。そのような時期に、ある素晴らしい英語チューターと出会い、私の状況は完全に好転しました。彼の思いやりと多大なサポートによって、英語を楽しく学ぶ事ができるようになりました。<br/><br/>
        彼のおかげで、学校での成績が良くなっただけでなく、色んな文化にも触れて、素晴らしい友達もできました。この経験以来、私は教えること、そして生徒の人生に良い影響を与えることを心掛けています。私が学んだことを分かち合い、皆さんの成功の手助けをしたいです！
      </>)
  },
  {
    Heading:"Why Me?",
    SubHeading1:"Relatable Engineer",
    Paragraph1:(
    <>
      When I was applying for college, I chose 'Computer Engineering' on a whim because I thought it sounded interesting and I had a strong STEM background. But here's the thing - I was the first in my family to explore this field, and I didn't have anyone to guide me. So, when I started at UCSB, I had absolutely no programming experience.  
      <br/><br/>
      I thought maybe others were in the same boat, but as I got to know my peers, I realized most of them already had some experience. It made me wonder, why did they know so much already? 
      <br/><br/>
      The answer was simple - they had someone to turn to for help, someone who knew about Software Engineering. I didn't have that advantage. 
      That's why I want to be your tutor - I want to be that mentor you can always rely on, the one you can ask any question, and together, we'll work hard to prepare you to become an awesome Software Engineer.
    </>),
    SubHeading2:"Eager and Willing Helper",
    Paragraph2:(
      <>
        As a first generation Japanese-American, I faced tons of struggles and hurdles growing up that often left me feeling overwhelmed. During such difficult times, I met this incredible English tutor who completely turned things around for me. Through his compassion and tremendous support, he not only changed my outlook on English but helped me believe in myself. 
        <br/><br/>
        Thanks to him, I not only started doing great in school but also made some awesome American friends. Ever since that experience, I've been super passionate about teaching and making a positive impact on students' lives. I'd love to share what I've learned and help you succeed too!
      </>)
  }
];

export const aboutMe_MyGoalHero = [
  {
    Heading:"私の目標",
    Paragraph:[
      "私の主な目標？ソフトウェア・エンジニアリングのエキサイティングな世界、大学生活、そしてあなたの輝かしい未来に備えることです。一緒に学び、成長し、そして楽しみましょう！ ",
      "一緒にこの素晴らしい旅に出ましょう！🚀"
    ]
  },
  {
    Heading:"My Goal",
    Paragraph:[
      "My main goal? To prepare you for the exciting world of software engineering, university life, and your bright future. Together, we'll learn, grow, and have a blast doing it! ",
      "Let's embark on this incredible journey together! 🚀"
    ]
  }
]


// services related
export const services_Hero = [
  {
    Heading:"サービス内容",
    SubHeading1: "こんにちは！ ",
    SubHeading2:(
    <>
      あなたの架け橋の<HiddenBr />プログラミング授業で期待<HiddenBr />できることを簡単に紹介します！
    </>),
    Paragraph:(
      <>
        これからプログラミングを始める方も、すでにプログラミングの経験がある方もご安心ください。このロードマップは、単にコース進行のフレームワークとして機能します。
        <br /> <br />
        質問があったり、何から始めたらいいか分からないですか？大丈夫です！あなたの興味や達成したい事に合わせたロードマップを作成します！
      </>)
  },
  {
    Heading:"SERVICE",
    SubHeading1: "Hey there! ",
    SubHeading2:"Here's a quick look at what you can expect in Anatano Kakehashi's programming course!",
    Paragraph:(
    <>
      Don't worry if you're just starting out or have some programming experience already – we can customize your journey. This roadmap merely serves as a framework for the course progression.
      <br /> <br />
      Got questions or not sure where to begin? No problem! Just shoot me a message, and we'll team up to create a roadmap that's all about your interests and what you want to achieve!
    </>)
  }
];

export const services_Roadmap = [
  [
    {
      Heading: "Python 入門",
      SubHeading1: "推定時間：",
      SubHeading2: "週1回受講の場合、〜1年",
      Paragraph: (
      <>
        Pythonは初心者に優しいプログラミング言語でありながら、<HiddenBrLgXl/>非常に汎用性が高い。<HiddenBr/>実際、世界中のプログラマーの50％がPythonを<HiddenBr/>利用しています。
      </>),
      WhatTeach: "何を教えるか：",
      WhatTeachParagraph: "Pythonはそのシンプルさと読みやすさで知られる初心者に優しいプログラミング言語なので、Pythonを通してプログラミングの基本的な概念をすべてカバーします。これを通して、将来ウェブ開発やゲーム開発など様々なコンセプトを学ぶための基礎を固めます。",      
      WhyImportant: "なぜ重要なのか：",
      WhyImportantParagraph: "Pythonは、幅広い用途に適した非常に汎用性の高いプログラミング言語です。今日、PythonはWeb開発、データ分析、AI/ML など様々な分野で利用されています。さらに、世界中のプログラマーのほぼ50％がPythonを業務に活用しています。したがって、Pythonを学ぶことは、ソフトウェア・エンジニアのキャリアにおいて間違いなく役立ちます。",
      SkillsObtained: "身につくスキル：",
      Skills: [
        (<>
          プログラミング /<br/>
          アルゴリズムの基礎
        </>),
        "基本的なデータ構造の理解",
        (<>
          オブジェクト指向<br/>
          プログラミング
        </>)
      ]
    },
    {
      Heading: "GitHub　入門",
      SubHeading1: "推定時間：",
      SubHeading2: "週1回受講の場合、〜三ヶ月",
      Paragraph: "GitHubを学ぶことで、コードの変更を効率的に追跡し、異なるバージョンを管理し、他のプログラマーと共同作業することができます。フォーチュン100社の90％以上がGitHubを利用しています。",
      WhatTeach: "何を教えるか：",
      WhatTeachParagraph: "GitHubは間違いなくソフトウェアエンジニアとして学ぶべき最も重要な技術の1つなので、GitHubをすべてカバーします：例えば、コードの管理、チームとの共同作業、チームの管理方法など。",      
      WhyImportant: "なぜ重要なのか：",
      WhyImportantParagraph: "GitHubを利用する事で複数のプログラマーが、衝突することなく同時に同じプロジェクトに取り組むことができます。それはまるで、クラスのプロジェクトで友達と同じ google ドキュメントで作業するようなものです。また、GitHubでチームの課題を効率的に管理し、優先順位をつけることもできます。これにより、プロジェクトを整理し、重要な問題を確実に対処することができます。多くの企業、特にTech業界では、コードの管理にGitHubを使っています。実際、Fortune 100企業の90%以上がGitHubを使っているため、GitHubの効果的な使い方を知っていることは、ソフトウェア開発の仕事を探す上で貴重なスキルです。",
      SkillsObtained: "身につくスキル：",
      Skills: [
        (<>チーム・コラボレーション用の<HiddenBr/>Gitとバージョン<HiddenBrLgXl />管理の基礎</>),
        (<>プロジェクト管理の基礎</>),
        (<>Githubページで<br />ウェブサイトを公開</>)
      ]
    },
    {
      Heading: "Web開発 入門",
      SubHeading1: "推定時間：",
      SubHeading2: "週1回受講の場合、〜1年",
      Paragraph: "Web開発は、技術業界で最も需要の高いスキルの1つです。なぜなら、そのスキルはプログラマーに様々なプロジェクトに適用できる汎用性の高いスキルセットを備えているからです。",
      WhatTeach: "何を教えるか：",
      WhatTeachParagraph: "入門コースでは、Web制作のFront EndとなるHTML/CSSを教えます。その過程で、ポートフォリオサイトや履歴書の実装に取り組みます！その後、PythonのFlaskフレームワークを使ってBack Endについて学びます。授業が終了したら、クラスメイトと一緒に、ウェブサービスを作成するグループプロジェクトを開始します！",      
      WhyImportant: "なぜ重要なのか：",
      WhyImportantParagraph: "ソフトウェア・エンジニアになるには、ウェブ開発のスキルが非常に役に立ちます。特にフルスタック（フロントエンド、バックエンド、データベース、api）を理解することは、あらゆるエンジニア職に役立ちます。もう一つの極めて重要な要素は、プログラマーが自分のオンラインビジネスを作ったり、フリーランスのエンジニアとして様々なプロジェクトに携わったりできることです。",
      SkillsObtained: "身につくスキル：",
      Skills: [
        (<>HTML/CSS<HiddenBr/>の基礎</>),
        (<>Python Flaskを使って<HiddenBr/>ウェブサイトを構築</>),
        (<>自分のポートフォリオ<HiddenBr/>ウェブサイトと<HiddenBrLgXl/>履歴書を<HiddenBr/>作成する</>),
        (<>仲間と協力してウェブ・<HiddenBr/>プロジェクト<HiddenBrLgXl/>を作成する</>)
      ]
    }
  ] ,
  [
    {
      Heading: "Intro to Python",
      SubHeading1: "Estimated Time:",
      SubHeading2: "~1 year if taking courses once a week",
      Paragraph: "Python is a beginner friendly programming language, yet extremely versatile. In fact, almost ~50% of all programmers in the world utilize Python in their work.",
      WhatTeach: "What Will I Teach:",
      WhatTeachParagraph: "Since Python is a beginner friendly programming language known for its simplicity and readability, I will cover all the fundamental concepts in programming through Python. Through this, we will establish a solid groundwork for learning various concepts like web development or game development in the future.",      
      WhyImportant: "Why is it Important:",
      WhyImportantParagraph: "Python is an extremely versatile programming language suitable for a wide range of applications. Today, Python is used in various fields like web development, data analysis, and artificial intelligence. Additionally, almost ~50% of all programmers in the world utilize Python in their work; thus, learning Python will definitely help you in your Software Engineering career. This versatility makes it a valuable skill to have in your toolkit.",
      SkillsObtained: "Skills You Will Obtain:",
      Skills: [
        "Basics of programming concepts, algorithms, and problem-solving",
        (<>Understanding fundamental <HiddenBr/>data structures</>),
        (<>Introduction to Object <HiddenBr/>Oriented Programming</>)
      ]
    },
    {
      Heading: "GitHub",
      SubHeading1: "Estimated Time:",
      SubHeading2: "~3 Months if taking courses once a week",
      Paragraph: "Learning GitHub allows programmers to efficiently track changes in their code, manage different versions, and collaborate with others on software development projects. Over 90% of Fortune 100 companies use GitHub.",
      WhatTeach: "What Will I Teach:",
      WhatTeachParagraph: "Since GitHub is arguably one of the most important technologies to learn as a Software Engineer, I will cover all of the essential components of GitHub: how to manage code and collaborate with a team.",      
      WhyImportant: "Why is it Important:",
      WhyImportantParagraph: "GitHub provides a platform for collaboration. Multiple developers can work on the same project simultaneously without conflicts. It’s almost like working on the same google doc with your friends on a class project, but instead for programming. GitHub also allows developers to manage and prioritize tasks, bugs, and feature requests efficiently. This helps keep projects organized and ensures that important issues are addressed. Many companies, especially in the tech industry, use GitHub to manage their code repositories. In fact, over 90% of Fortune 100 companies use GitHub. Thus, knowing how to use GitHub effectively is a valuable skill when seeking a career as a software engineer.",
      SkillsObtained: "Skills You Will Obtain:",
      Skills: [
        "Basics of Git and Version Control for team collaboration",
        "Basics of Project Management",
        (<>Publish / Host a website <HiddenBr/>via Github Pages</>)
      ]
    },
    {
      Heading: "Intro to Web Development",
      SubHeading1: "Estimated Time:",
      SubHeading2: "~1 year if taking courses once a week",
      Paragraph: "Web development is one of the most in-demand skills in the tech industry because the skills equip programmers with a versatile skill set that can be applied to various projects and domains.",
      WhatTeach: "What Will I Teach:",
      WhatTeachParagraph: "In the intro course, I will teach HTML/CSS for the front-end of web development. Through the process, we will work on implementing a portfolio website and a resume for your careers! Afterwards, we will learn about back-end web development through the use of Python’s Flask framework. Once we complete the lessons, we will start a group web project with fellow classmates where the students will create a web service from scratch!",      
      WhyImportant: "Why is it Important:",
      WhyImportantParagraph: "Web development skills are extremely useful if you want to become a software engineer. Specifically understanding the full-stack (front-end, back-end, databases, authentication, apis) will help you in every Software Engineering role. Another extremely vital component of web development is that programmers can create their own online businesses or work as freelance engineers on various projects. Ultimately, web development provides the tools to bring entrepreneurial ideas to life.",
      SkillsObtained: "Skills You Will Obtain:",
      Skills: [
        "Basics of HTML / CSS",
        "Python Flask to build backend",
        (<>Create your own portfolio <HiddenBrLgXl/>website and resume</>),
        (<>Collaborate with fellow students <HiddenBrLgXl/>to create a web project</>)
      ]
    }
  ]
];


