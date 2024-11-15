<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

import Codemirror from 'codemirror-editor-vue3'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/dracula.css'
import type { CmComponentRef } from 'codemirror-editor-vue3'
import type { Editor, EditorConfiguration } from 'codemirror'

const code = ref()
const cmRef = ref<CmComponentRef>()
const cmOptions: EditorConfiguration = {
    mode: 'text/javascript',
    theme: 'dracula',
}

const cminstance = ref<Editor | null>(null)
const onReady = (cm: Editor) => {
    cminstance.value = cm
}

onUnmounted(() => {
    cmRef.value?.destroy()
})

// добавить запрос к API, чтобы получить инфо о задаче
</script>

<template>
    <div class="task">
        <section class="task__description"></section>
        <section class="task__code-editor">
            <Codemirror
                ref="cmRef"
                v-model:value="code"
                :options="cmOptions"
                class="code-editor"
                @ready="onReady"
            />
        </section>
    </div>
</template>

<style lang="scss">
.code-editor {
    border-radius: 8px;

    * {
        font-size: 1rem;
        font-family: 'Courier New', Courier, monospace;
        background-color: var(--card);
    }
}

.task {
    width: 100%;
    height: calc(100vh - 6rem);
    display: flex;
    gap: 10px;
    padding: 0 3rem;
    margin-top: 20px;

    section {
        width: 50%;
        height: 100%;
    }

    .task__description {
        background-color: var(--card);
        border-radius: 8px;
    }
}
</style>
