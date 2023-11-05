<template>
    <div>
        <section class="el-container is-vertical application-container">
            <header class="el-header"></header>
            <main class="el-main">

                <div class="title">
                    <h1>GitHub User Info</h1>
                </div>

                <div class="keyTable">
                    <el-table :data="gitHubUserInfoTableData"
                              border
                              max-height="600px"
                              class="table"
                              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                              empty-text="暂时没有数据">
                        <el-table-column prop="name" label="Name"/>
                        <el-table-column prop="firstName" label="First name"/>
                        <el-table-column prop="lastName" label="Last name"/>
                        <el-table-column prop="country" label="Country/Region" :formatter="countryFormatter" min-width="140"/>
                        <el-table-column prop="state" label="State/Province"/>
                        <el-table-column prop="city" label="City"/>
                        <el-table-column prop="postal" label="Postal/Zip code"/>
                        <el-table-column prop="addressOne" label="Address" min-width="170"/>
                        <el-table-column prop="addressTwo" label="Address line 2"/>
                    </el-table>
                </div>
            </main>
            <footer class="el-footer">
                <FooterComponent></FooterComponent>
            </footer>
        </section>
    </div>
</template>

<script>

import {ElNotification} from "element-plus";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import {gitHubUserInfo} from "@/api/apiForPublic.js";

export default {
    name: "GitHubUserInfoView",
    components: {FooterComponent},
    data() {
        return {
            gitHubUserInfoTableData: '',
            country:new Map([
                ['AX', 'Åland'],
                ['AL', 'Albania'],
                ['DZ', 'Algeria'],
                ['AS', 'American Samoa'],
                ['AD', 'Andorra'],
                ['AO', 'Angola'],
                ['AI', 'Anguilla'],
                ['AQ', 'Antarctica'],
                ['AG', 'Antigua and Barbuda'],
                ['AR', 'Argentina'],
                ['AM', 'Armenia'],
                ['AW', 'Aruba'],
                ['AU', 'Australia'],
                ['AT', 'Austria'],
                ['AZ', 'Azerbaijan'],
                ['BS', 'Bahamas'],
                ['BH', 'Bahrain'],
                ['BD', 'Bangladesh'],
                ['BB', 'Barbados'],
                ['BY', 'Belarus'],
                ['BE', 'Belgium'],
                ['BZ', 'Belize'],
                ['BJ', 'Benin'],
                ['BM', 'Bermuda'],
                ['BT', 'Bhutan'],
                ['BO', 'Bolivia'],
                ['BQ', 'Bonaire, Sint Eustatius and Saba'],
                ['BA', 'Bosnia and Herzegovina'],
                ['BW', 'Botswana'],
                ['BV', 'Bouvet Island'],
                ['BR', 'Brazil'],
                ['IO', 'British Indian Ocean Territory'],
                ['BN', 'Brunei Darussalam'],
                ['BG', 'Bulgaria'],
                ['BF', 'Burkina Faso'],
                ['BI', 'Burundi'],
                ['KH', 'Cambodia'],
                ['CM', 'Cameroon'],
                ['CA', 'Canada'],
                ['CV', 'Cape Verde'],
                ['KY', 'Cayman Islands'],
                ['CF', 'Central African Republic'],
                ['TD', 'Chad'],
                ['CL', 'Chile'],
                ['CN', 'China'],
                ['CX', 'Christmas Island'],
                ['CC', 'Cocos (Keeling) Islands'],
                ['CO', 'Colombia'],
                ['KM', 'Comoros'],
                ['CG', 'Congo (Brazzaville)'],
                ['CD', 'Congo (Kinshasa)'],
                ['CK', 'Cook Islands'],
                ['CR', 'Costa Rica'],
                ['CI', 'Côte d&#39;Ivoire'],
                ['HR', 'Croatia'],
                ['CW', 'Curaçao'],
                ['CY', 'Cyprus'],
                ['CZ', 'Czech Republic'],
                ['DK', 'Denmark'],
                ['DJ', 'Djibouti'],
                ['DM', 'Dominica'],
                ['DO', 'Dominican Republic'],
                ['EC', 'Ecuador'],
                ['EG', 'Egypt'],
                ['SV', 'El Salvador'],
                ['GQ', 'Equatorial Guinea'],
                ['ER', 'Eritrea'],
                ['EE', 'Estonia'],
                ['ET', 'Ethiopia'],
                ['FK', 'Falkland Islands'],
                ['FO', 'Faroe Islands'],
                ['FJ', 'Fiji'],
                ['FI', 'Finland'],
                ['FR', 'France'],
                ['GF', 'French Guiana'],
                ['PF', 'French Polynesia'],
                ['TF', 'French Southern Lands'],
                ['GA', 'Gabon'],
                ['GM', 'Gambia'],
                ['GE', 'Georgia'],
                ['DE', 'Germany'],
                ['GH', 'Ghana'],
                ['GI', 'Gibraltar'],
                ['GR', 'Greece'],
                ['GL', 'Greenland'],
                ['GD', 'Grenada'],
                ['GP', 'Guadeloupe'],
                ['GU', 'Guam'],
                ['GT', 'Guatemala'],
                ['GG', 'Guernsey'],
                ['GN', 'Guinea'],
                ['GW', 'Guinea-Bissau'],
                ['GY', 'Guyana'],
                ['HT', 'Haiti'],
                ['HM', 'Heard and McDonald Islands'],
                ['HN', 'Honduras'],
                ['HK', 'Hong Kong'],
                ['HU', 'Hungary'],
                ['IS', 'Iceland'],
                ['IN', 'India'],
                ['ID', 'Indonesia'],
                ['IR', 'Iran'],
                ['IQ', 'Iraq'],
                ['IE', 'Ireland'],
                ['IM', 'Isle of Man'],
                ['IL', 'Israel'],
                ['IT', 'Italy'],
                ['JM', 'Jamaica'],
                ['JP', 'Japan'],
                ['JE', 'Jersey'],
                ['JO', 'Jordan'],
                ['KZ', 'Kazakhstan'],
                ['KE', 'Kenya'],
                ['KI', 'Kiribati'],
                ['KR', 'Korea, South'],
                ['KW', 'Kuwait'],
                ['KG', 'Kyrgyzstan'],
                ['LA', 'Laos'],
                ['LV', 'Latvia'],
                ['LB', 'Lebanon'],
                ['LS', 'Lesotho'],
                ['LR', 'Liberia'],
                ['LY', 'Libya'],
                ['LI', 'Liechtenstein'],
                ['LT', 'Lithuania'],
                ['LU', 'Luxembourg'],
                ['MO', 'Macau'],
                ['MK', 'Macedonia'],
                ['MG', 'Madagascar'],
                ['MW', 'Malawi'],
                ['MY', 'Malaysia'],
                ['MV', 'Maldives'],
                ['ML', 'Mali'],
                ['MT', 'Malta'],
                ['MH', 'Marshall Islands'],
                ['MQ', 'Martinique'],
                ['MR', 'Mauritania'],
                ['MU', 'Mauritius'],
                ['YT', 'Mayotte'],
                ['MX', 'Mexico'],
                ['FM', 'Micronesia'],
                ['MD', 'Moldova'],
                ['MC', 'Monaco'],
                ['MN', 'Mongolia'],
                ['ME', 'Montenegro'],
                ['MS', 'Montserrat'],
                ['MA', 'Morocco'],
                ['MZ', 'Mozambique'],
                ['MM', 'Myanmar'],
                ['NA', 'Namibia'],
                ['NR', 'Nauru'],
                ['NP', 'Nepal'],
                ['NL', 'Netherlands'],
                ['NC', 'New Caledonia'],
                ['NZ', 'New Zealand'],
                ['NI', 'Nicaragua'],
                ['NE', 'Niger'],
                ['NG', 'Nigeria'],
                ['NU', 'Niue'],
                ['NF', 'Norfolk Island'],
                ['MP', 'Northern Mariana Islands'],
                ['NO', 'Norway'],
                ['OM', 'Oman'],
                ['PK', 'Pakistan'],
                ['PW', 'Palau'],
                ['PS', 'Palestine'],
                ['PA', 'Panama'],
                ['PG', 'Papua New Guinea'],
                ['PY', 'Paraguay'],
                ['PE', 'Peru'],
                ['PH', 'Philippines'],
                ['PN', 'Pitcairn'],
                ['PL', 'Poland'],
                ['PT', 'Portugal'],
                ['PR', 'Puerto Rico'],
                ['QA', 'Qatar'],
                ['RE', 'Reunion'],
                ['RO', 'Romania'],
                ['RU', 'Russian Federation'],
                ['RW', 'Rwanda'],
                ['BL', 'Saint Barthélemy'],
                ['SH', 'Saint Helena'],
                ['KN', 'Saint Kitts and Nevis'],
                ['LC', 'Saint Lucia'],
                ['MF', 'Saint Martin (French part)'],
                ['PM', 'Saint Pierre and Miquelon'],
                ['VC', 'Saint Vincent and the Grenadines'],
                ['WS', 'Samoa'],
                ['SM', 'San Marino'],
                ['ST', 'Sao Tome and Principe'],
                ['SA', 'Saudi Arabia'],
                ['SN', 'Senegal'],
                ['RS', 'Serbia'],
                ['SC', 'Seychelles'],
                ['SL', 'Sierra Leone'],
                ['SG', 'Singapore'],
                ['SX', 'Sint Maarten (Dutch part)'],
                ['SK', 'Slovakia'],
                ['SI', 'Slovenia'],
                ['SB', 'Solomon Islands'],
                ['SO', 'Somalia'],
                ['ZA', 'South Africa'],
                ['GS', 'South Georgia and South Sandwich Islands'],
                ['SS', 'South Sudan'],
                ['ES', 'Spain'],
                ['LK', 'Sri Lanka'],
                ['SD', 'Sudan'],
                ['SR', 'Suriname'],
                ['SJ', 'Svalbard and Jan Mayen Islands'],
                ['SZ', 'Swaziland'],
                ['SE', 'Sweden'],
                ['CH', 'Switzerland'],
                ['TW', 'Taiwan'],
                ['TJ', 'Tajikistan'],
                ['TZ', 'Tanzania'],
                ['TH', 'Thailand'],
                ['TL', 'Timor-Leste'],
                ['TG', 'Togo'],
                ['TK', 'Tokelau'],
                ['TO', 'Tonga'],
                ['TT', 'Trinidad and Tobago'],
                ['TN', 'Tunisia'],
                ['TR', 'Türkiye'],
                ['TM', 'Turkmenistan'],
                ['TC', 'Turks and Caicos Islands'],
                ['TV', 'Tuvalu'],
                ['UG', 'Uganda'],
                ['UA', 'Ukraine'],
                ['AE', 'United Arab Emirates'],
                ['GB', 'United Kingdom'],
                ['UM', 'United States Minor Outlying Islands'],
                ['US', 'United States of America'],
                ['UY', 'Uruguay'],
                ['UZ', 'Uzbekistan'],
                ['VU', 'Vanuatu'],
                ['VA', 'Vatican City'],
                ['VE', 'Venezuela'],
                ['VN', 'Vietnam'],
                ['VG', 'Virgin Islands, British'],
                ['VI', 'Virgin Islands, U.S.'],
                ['WF', 'Wallis and Futuna Islands'],
                ['EH', 'Western Sahara'],
                ['YE', 'Yemen'],
                ['ZM', 'Zambia'],
                ['ZW', 'Zimbabwe']
            ])
        };
    },
    methods: {
        gitHubUserInfo(){
            gitHubUserInfo(null).then(res => {
                if (res.data.code === 200 && res.data.data) {
                    this.gitHubUserInfoTableData = res.data.data
                    ElNotification.closeAll()
                    ElNotification({
                        title: '查询成功',
                        message: '🎉🎉🎉恭喜查询成功，结果如下',
                        type: 'success',
                        duration: 0,
                        dangerouslyUseHTMLString: true
                    })
                }else {
                    ElNotification.closeAll()
                    ElNotification({
                        title: '查询成功',
                        message: '🤣授权码无效，请重新检查',
                        type: 'warning',
                        duration: 0,
                        dangerouslyUseHTMLString: true
                    })
                    this.gitHubUserInfoTableData = ''
                }
            })
        },
        countryFormatter(row, column, value) {
            for (let [key, result] of this.country.entries()) {
                if (key === value) {
                    return result;
                }
            }
            return value;
        }
    },
    mounted() {
        this.gitHubUserInfo()
    },
    beforeUnmount() {
    },
}
</script>

<style scoped>

.title {
    color: white;
    font-size: 35px;
    letter-spacing: 2px;
    text-align: center;
}

.table {
    border-radius: 20px;
}

:deep(.el-input__wrapper) {
    border-radius: 20px !important;
    background-color: #ffffff;
}

:deep(.el-switch__core) {
    width: 100% !important;
}

:deep(.el-switch__core::after) {
    width: 100%;
    margin-top: -1px;
}

.keyTable {
    margin-top: 30px;
}

.el-header {
    --el-header-padding: 0 20px;
    /*--el-header-height: 60px;*/
    padding: var(--el-header-padding);
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--el-header-height);
    --el-header-height: 0;
}

.el-main {
    --el-main-padding: 20px;
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: var(--el-main-padding);
    margin: 0px 5%;
    border-radius: 20px;
}

.el-footer {
    --el-footer-padding: 0 20px;
    --el-footer-height: 60px;
    padding: var(--el-footer-padding);
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--el-footer-height);
}

.application-container {
    min-height: 100vh;
    background-color: #0D1117;
    background-image: url("https://githubedu-1305951218.cos.ap-hongkong.myqcloud.com/githubEduBackGround.png");
    background-blend-mode: lighten;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-size: contain;
}

.el-container.is-vertical {
    flex-direction: column;
}

.el-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
}
</style>
