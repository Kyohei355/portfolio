import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
        <div class="body">
            <h3>Profile</h3>
            <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>布野 恭平 (Funo kyohei)</td>
                </tr>
                <tr>
                    <td>Birthday</td>
                    <td>1997/09/08</td>
                </tr>
                <tr>
                    <td>Sex</td>
                    <td>男</td>
                </tr>
                <tr>
                    <td>Academic qualifications</td>
                    <td> 2020/03 東京工科大学 工学部 電気電子工学科 卒業</td>
                </tr>
                <tr>
                    <td>Hobby</td>
                    <td>映画、音楽鑑賞、ゲーム、トレ-ニング、カフェ巡り、銭湯、山登り、写真撮影</td>
                </tr>
            </tbody>
        </table>
            <h3>Summary</h3>
            <p>大学卒業後4年間、主に組合の基幹システムに携わってきました。お客様との会議を行い、要件定義から実装、保守運用まで一連の流れを経験してきたため、小規模のマネジメントも任せていただけるようになりました。また、VBやC#、SQLなどのプログラミング経験も積み、開発知識もあります。テスト工程ではお客様の実際の運用を意識して行っています。</p>
        </div>
    </div>
  );
};

export default About;
