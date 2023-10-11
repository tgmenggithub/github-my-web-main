<template>
    <div>
        <section class="el-container is-vertical application-container">
            <header class="el-header"></header>
            <main class="el-main">
                <div class="searchInput">
                    <div class="searchInputText">
                        <el-input
                                size="large"
                                v-model="key"
                                class="w-50 m-2"
                                placeholder="请输入授权码"
                        />
                    </div>
                    <div class="searchInputCommit">
                        <el-button size="large" @click="keyRecord" type="success" round>查询</el-button>
                    </div>
                </div>

                <div class="keyTable">
                    <el-table :data="keyRecordTableData"
                              border
                              max-height="600px"
                              class="table"
                              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                              empty-text="授权码不存在">
                        <el-table-column prop="colKey" label="授权码"/>
                        <el-table-column prop="keyStatus" :formatter="keyStatusFormatter" label="状态"/>
                        <el-table-column prop="creationDate" :formatter="dateToFormat" label="创建时间"/>
                        <el-table-column prop="activationTime" :formatter="timestampToDate" label="激活时间"/>
                        <el-table-column prop="expireAt" :formatter="timestampToDate" label="到期时间"/>
                        <el-table-column prop="totalAvailableDays" label="总可用天数"/>
                        <el-table-column prop="remainingAvailableDays" :formatter="timestampToDay" label="剩余可用天数"/>
                        <el-table-column prop="remarks" label="备注"/>

                    </el-table>
                </div>

                <div class="keyTable">
                    <el-table :data="keyRecordDeviceBindTableData"
                              border
                              max-height="600px"
                              class="table"
                              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                              empty-text="未绑定设备">
<!--                        <el-table-column prop="deviceId" label="设备ID" width="400"/>-->
<!--                        <el-table-column prop="deviceName" label="设备名" width="160"/>-->
<!--                        <el-table-column prop="creationDate" :formatter="dateToFormat" label="绑定日期" width="160"/>-->

                        <el-table-column prop="deviceId" label="设备ID"/>
                        <el-table-column prop="deviceName" label="设备名"/>
                        <el-table-column prop="creationDate" :formatter="dateToFormat" label="绑定日期"/>
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
import {keyRecord} from "@/api/apiForCopilotRemote.js";
import dateUtil from "@/util/dateUtil";

export default {
    name: "CopilotView",
    components: {FooterComponent},
    data() {
        return {
            key: '',
            keyRecordTableData: '',
            keyRecordDeviceBindTableData: '',
        };
    },
    methods: {
        keyRecord() {
            if (this.key.length != 32) {
                ElNotification.closeAll()
                ElNotification({
                    title: '检查授权码',
                    message: '🤣授权码无效，请重新检查',
                    type: 'warning',
                    duration: 0,
                    dangerouslyUseHTMLString: true
                })
                this.keyRecordTableData = ''
                this.keyRecordDeviceBindTableData = ''
                return
            }else {
                ElNotification.closeAll()
                ElNotification({
                    title: '正在进行查询',
                    message: '🤖正在努力查询中，请稍后',
                    type: 'success',
                    duration: 0,
                    dangerouslyUseHTMLString: true
                })
            }
            keyRecord({colKey: this.key}).then(res => {
                if (res.data.code === 200 && res.data.data) {
                    this.keyRecordTableData = res.data.data
                    if (this.keyRecordTableData[0].activationKeyDeviceVos){
                        this.keyRecordDeviceBindTableData = this.keyRecordTableData[0].activationKeyDeviceVos
                    }
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
                    this.keyRecordTableData = ''
                    this.keyRecordDeviceBindTableData = ''
                }
            })
        },
        keyStatusFormatter(row, column, value) {
            if (value === 'NEW') {
                return '未使用';
            } else if (value === 'OUT_STOCK') {
                return '未使用';
            } else if (value === 'BOUNDED') {
                return '已绑定';
            } else if (value === 'SUSPENDED') {
                return '已禁用';
            } else {
                return value;
            }
        },
        timestampToDate(row, column, value) {
            if (value !== null && value !== undefined) {
                return dateUtil.timestampToDate(value);
            }
        },
        timestampToDay(row, column, value) {
            if (value !== null && value !== undefined) {
                return dateUtil.timestampToDay(value);
            }
        },
        dateToFormat(row, column, value) {
            if (value !== null && value !== undefined) {
                return dateUtil.dateToFormat(value);
            }
        },
        handleKeyup() {
            if (event.keyCode === 13) {
                this.recordKey()
            }
        }
    },
    mounted() {
        document.addEventListener('keyup', this.handleKeyup);
    },
    beforeUnmount() {
        document.removeEventListener('keyup', this.handleKeyup);
    },
}
</script>

<style scoped>

.table {
    border-radius: 20px;
}

.searchInput {
    margin-top: 50px;
}

.searchInputText {
    width: 100%;
}

.searchInputCommit {
    width: 100%;
    margin-top: 40px;
}

.bannedButton {
    margin-top: 40px;
    width: 100%;
}

:deep(.el-input__wrapper) {
    border-radius: 20px !important;
    background-color: #ffffff;
}

.el-button {
    width: 100%;
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

.title {
    padding: 40px 24px 24px 24px;
    min-width: 200px;
}

.form-container {
    padding: 24px;
    max-width: 500px;
    min-width: 200px;
    min-height: 400px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 8px;
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