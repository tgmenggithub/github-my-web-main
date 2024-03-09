<template>
    <div>
        <section class="el-container is-vertical application-container">
            <header class="el-header"></header>
            <main class="el-main">

                <div class="title">
                    <h1>GitHub Copilot Session Check</h1>
                </div>

                <div class="searchInput">
                    <div class="searchInputText">
                        <el-input
                            size="large"
                            v-model="tokens"
                            class="w-50 m-2"
                            :autosize="{ minRows: 2, maxRows: 10 }"
                            type="textarea"
                            style="border-radius: 20px;"
                            placeholder="Please input your github copilot session(token), If you have multiple pieces of token, one line one token, enter a maximum of 5 tokens at a time"
                        />
                    </div>
                    <div class="searchInputCommit">
                        <el-button v-loading.fullscreen.lock="fullscreenLoading" size="large" @click="submitButton" type="success" round>Submit</el-button>
                    </div>
                </div>

                <div class="keyTable">
                    <el-table :data="copilotTokenCheckResults"
                              border
                              max-height="400px"
                              class="table"
                              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                              empty-text="No Data">
                        <el-table-column prop="token" label="Token"/>
                        <el-table-column prop="status" label="Status"/>
                    </el-table>
                </div>
            </main>
        </section>
    </div>
</template>

<script>

import {ElNotification} from "element-plus";
import {checkCopilotToken} from "@/api/apiForPublic.js";
import {ref} from 'vue'

export default {
    name: "CopilotView",
    components: {},
    data() {
        return {
            tokens: '',
            copilotTokenCheckResults: '',
            fullscreenLoading: ref(false)
        };
    },
    methods: {
        submitButton() {
            let tokensSplit = this.tokens.split("\n").filter(token => token.trim() !== "");
            if (tokensSplit.length <= 0) {
                ElNotification.closeAll()
                this.fullscreenLoading = false
                ElNotification({
                    title: 'Warning',
                    message: 'Token can not be empty, please input',
                    type: 'warning',
                    duration: 0,
                    dangerouslyUseHTMLString: true
                })
                this.copilotTokenCheckResults = ''
                return
            } else if (tokensSplit.length > 5) {
                ElNotification.closeAll()
                this.fullscreenLoading = false
                ElNotification({
                    title: 'Warning',
                    message: 'A maximum of 5 token can be inputed at a time, please check',
                    type: 'warning',
                    duration: 0,
                    dangerouslyUseHTMLString: true
                })
                this.copilotTokenCheckResults = ''
                return
            } else {
                ElNotification.closeAll()
                this.fullscreenLoading = true
                ElNotification({
                    title: 'Checking',
                    message: 'Checking, please wait',
                    type: 'success',
                    duration: 0,
                    dangerouslyUseHTMLString: true
                })
            }
            checkCopilotToken({tokens: tokensSplit}).then(res => {
                if (res.data.code === 200 && res.data.data) {
                    this.copilotTokenCheckResults = res.data.data
                    ElNotification.closeAll()
                    this.fullscreenLoading = false
                    ElNotification({
                        title: 'Success',
                        message: 'Congratulations, successful query',
                        type: 'success',
                        duration: 0,
                        dangerouslyUseHTMLString: true
                    })
                } else {
                    ElNotification.closeAll()
                    this.fullscreenLoading = false
                    ElNotification({
                        title: 'Success',
                        message: 'Token is invalid, please check again',
                        type: 'warning',
                        duration: 0,
                        dangerouslyUseHTMLString: true
                    })
                    this.copilotTokenCheckResults = ''
                }
            })
        },
        // handleKeyup() {
        //     if (event.keyCode === 13) {
        //         this.submitButton()
        //     }
        // }
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

.el-button{
    background-color: #1f883d;
    border: none;
    font-weight: bold;
}
.el-button--success{
    background-color: #1f883d;
    border: none;
    font-weight: bold;
}
.title {
    color: white;
    font-size: 35px;
    letter-spacing: 2px;
    text-align: center;
}

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