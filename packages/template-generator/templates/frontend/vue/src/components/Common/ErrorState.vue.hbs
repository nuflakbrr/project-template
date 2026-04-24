<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { type ErrorMetadata, type ErrorStateProps, type ErrorTheme } from '@/interfaces/error'

const props = defineProps<ErrorStateProps>()

const getErrorContent = (statusCode: number) => {
  const is5xx = statusCode >= 500

  const metadataMap: Record<number, ErrorMetadata> = {
    401: {
      titlePrefix: 'Sesi Anda',
      titleSuffix: 'Berakhir',
      description:
        'Maaf, sesi Anda telah berakhir atau Anda belum login. Silakan login kembali untuk melanjutkan.',
      badge: 'Error 401: Unauthorized',
      theme: 'amber',
    },
    403: {
      titlePrefix: 'Akses',
      titleSuffix: 'Dibatasi',
      description:
        'Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator.',
      badge: 'Error 403: Forbidden',
      theme: 'amber',
    },
    404: {
      titlePrefix: 'Halaman Tidak',
      titleSuffix: 'Ditemukan',
      description:
        'Waduh! Sepertinya route yang Anda cari tidak ada atau sudah pindah ke tempat lain.',
      badge: 'Error 404: Not Found',
      theme: 'rose',
    },
    500: {
      titlePrefix: 'Terjadi Kesalahan',
      titleSuffix: 'Internal',
      description: 'Ups! Server kami sedang mengalami gangguan sejenak. Silakan coba lagi nanti.',
      badge: 'Error 500: Server Error',
      theme: 'amber',
    },
    503: {
      titlePrefix: 'Layanan Tidak',
      titleSuffix: 'Tersedia',
      description: 'Saat ini layanan sedang dalam pemeliharaan. Mohon tunggu beberapa saat lagi.',
      badge: 'Error 503: Service Unavailable',
      theme: 'emerald',
    },
  }

  const defaultContent: ErrorMetadata = is5xx
    ? {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Server',
        description:
          'Server mengalami kendala yang tidak terduga. Mohon maaf atas ketidaknyamanan ini.',
        badge: `Error ${statusCode}: Server Exception`,
        theme: 'amber',
      }
    : {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Klien',
        description: 'Permintaan Anda tidak dapat diproses oleh sistem kami.',
        badge: `Error ${statusCode}: Client Error`,
        theme: 'rose',
      }

  const content = metadataMap[statusCode] ?? defaultContent

  const themes: Record<ErrorMetadata['theme'], ErrorTheme> = {
    amber: {
      badgeColor:
        'bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400',
      pingColor: 'bg-amber-400',
      dotColor: 'bg-amber-600 dark:bg-amber-500',
      gradient: 'from-amber-600 to-yellow-400 dark:from-amber-400 dark:to-yellow-400',
      glowStart: 'bg-amber-600/10',
      glowEnd: 'bg-yellow-600/10',
      terminalIcon: 'bg-amber-500/40',
      borderType: 'text-amber-600 dark:text-amber-400',
      errorColor: 'text-amber-600 dark:text-amber-400',
    },
    rose: {
      badgeColor:
        'bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400',
      pingColor: 'bg-rose-400',
      dotColor: 'bg-rose-600 dark:bg-rose-500',
      gradient: 'from-rose-600 to-orange-400 dark:from-rose-400 dark:to-orange-400',
      glowStart: 'bg-rose-600/10',
      glowEnd: 'bg-orange-600/10',
      terminalIcon: 'bg-rose-500/40',
      borderType: 'text-rose-600 dark:text-rose-400',
      errorColor: 'text-rose-600 dark:text-rose-400',
    },
    emerald: {
      badgeColor:
        'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400',
      pingColor: 'bg-emerald-400',
      dotColor: 'bg-emerald-600 dark:bg-emerald-500',
      gradient: 'from-emerald-600 to-teal-400 dark:from-emerald-400 dark:to-teal-400',
      glowStart: 'bg-emerald-600/10',
      glowEnd: 'bg-teal-600/10',
      terminalIcon: 'bg-emerald-500/40',
      borderType: 'text-emerald-600 dark:text-emerald-400',
      errorColor: 'text-emerald-600 dark:text-emerald-400',
    },
  }

  return { ...content, ...themes[content.theme] }
}

const meta = computed(() => getErrorContent(props.code))
</script>

<template>
  <section
    class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20"
  >
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div
        :class="[
          'absolute top-[-10%] left-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full',
          meta.glowStart,
        ]"
      />
      <div
        :class="[
          'absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full',
          meta.glowEnd,
        ]"
      />
    </div>

    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2 space-y-8 text-left">
          <div
            :class="[
              'inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold shadow-sm',
              meta.badgeColor,
            ]"
          >
            <span class="relative flex h-2 w-2">
              <span
                :class="[
                  'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                  meta.pingColor,
                ]"
              ></span>
              <span :class="['relative inline-flex rounded-full h-2 w-2', meta.dotColor]"></span>
            </span>
            {{ meta.badge }}
          </div>

          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight"
          >
            {{ meta.titlePrefix }} <br />
            <span
              :class="[
                'inline-block py-1 bg-clip-text text-transparent bg-gradient-to-r',
                meta.gradient,
              ]"
            >
              {{ meta.titleSuffix }}
            </span>
          </h1>

          <p
            class="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium"
          >
            {{ props.error?.message ? props.error.message.replace(/-/g, ' ') : meta.description }}
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <RouterLink
              to="/"
              class="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Kembali ke Beranda
            </RouterLink>
          </div>
        </div>

        <div class="lg:w-1/2 w-full animate-float">
          <div
            class="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >
            <div
              class="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800"
            >
              <div class="flex gap-1.5">
                <div :class="['w-3.5 h-3.5 rounded-full', meta.terminalIcon]" />
                <div class="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                <div class="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
              </div>
              <div class="mx-auto text-xs font-mono text-zinc-500 font-medium">
                bash — system-error-{{ props.code }}
              </div>
            </div>
            <div
              class="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[350px]"
            >
              <div class="space-y-2">
                <p class="text-zinc-400">┌ checking system status...</p>
                <p class="flex gap-3">
                  <span :class="meta.borderType">│</span>
                  <span class="text-zinc-800 dark:text-zinc-200">
                    ✖ Fatal Error: {{ meta.badge }}
                  </span>
                </p>
                <p class="text-zinc-400">│</p>
                <p class="flex gap-3">
                  <span :class="meta.borderType">│</span>
                  <span class="text-zinc-500"> [stacktrace] </span>
                </p>
                <template v-if="props.error">
                  <p class="flex gap-3 text-xs">
                    <span :class="meta.borderType">│</span>
                    <span class="text-rose-500 dark:text-rose-400">
                      Error: {{ props.error.name }} - {{ props.error.message }}
                    </span>
                  </p>
                </template>
                <template v-else>
                  <p class="flex gap-3 text-xs">
                    <span :class="meta.borderType">│</span>
                    <span class="text-zinc-500">
                      at SystemHandler.resolve (internal/core.js:{{ props.code }})
                    </span>
                  </p>
                  <p class="flex gap-3 text-xs">
                    <span :class="meta.borderType">│</span>
                    <span class="text-zinc-500">
                      at RequestPipeline.execute (internal/router.js:123)
                    </span>
                  </p>
                </template>
                <p class="text-zinc-400">│</p>
                <p class="text-zinc-400 text-xs text-center">────────────────────────</p>
                <p :class="['font-bold text-center', meta.errorColor]">
                  ⚠️ ERROR_CODE: {{ props.code }}
                </p>
                <p class="text-zinc-400 text-xs text-center">────────────────────────</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
