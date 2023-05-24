```bash
┌──(suse@localhost)-[~]
└─$ adb shell
shell@msm8916_32_512:/ $ dumpsys meminfo
Applications Memory Usage (kB):
Uptime: 275369 Realtime: 275369

Total PSS by process:
    16846 kB: system (pid 742)
    15585 kB: zygote (pid 200)
    .....
    .....
      144 kB: healthd (pid 188)

Total PSS by OOM adjustment:
    47228 kB: Native
               15585 kB: zygote (pid 200)
                7434 kB: surfaceflinger (pid 199)
                5742 kB: mediaserver (pid 202)
                ......
                .....
                 144 kB: healthd (pid 188)
    16846 kB: System
               16846 kB: system (pid 742)
    34888 kB: Persistent
               12896 kB: com.wowi.nanowebyl (pid 982 / activities)
                9322 kB: com.android.systemui (pid 847)
                8504 kB: com.android.phone (pid 971)
                2445 kB: com.qualcomm.telephony (pid 957)
                1721 kB: com.qualcomm.display (pid 997)
     3690 kB: Visible
                2079 kB: com.qualcomm.qcrilmsgtunnel (pid 1098)
                1611 kB: com.android.smspush (pid 1060)
     5602 kB: Perceptible
                5602 kB: com.android.inputmethod.latin (pid 941)
     5312 kB: B Services
                5312 kB: com.qualcomm.RIDL (pid 1334 / activities)
    22293 kB: Cached
                5541 kB: android.process.acore (pid 909)
                4549 kB: android.process.media (pid 928)
                3504 kB: com.android.settings (pid 1229)
                3097 kB: com.android.providers.calendar (pid 1263)
                2061 kB: com.android.printspooler (pid 1014)
                1862 kB: com.qualcomm.datamonitor (pid 1459)
                1679 kB: com.qualcomm.atuner (pid 1441)

Total PSS by category:
    43686 kB: .so mmap
    24391 kB: .dex mmap
    21513 kB: Dalvik
    17229 kB: Dalvik Other
    ......
        0 kB: Graphics
        0 kB: GL
        0 kB: Memtrack

Total RAM: 402324 kB
 Free RAM: 248093 kB (22293 cached pss + 197056 cached + 28744 free)
 Used RAM: 160226 kB (113566 used pss + 6260 buffers + 232 shmem + 40168 slab)
 Lost RAM: -5995 kB
     ZRAM: 4 kB physical used for 0 kB in swap (196604 kB total swap)
      KSM: 16388 kB saved from shared 1848 kB
           65664 kB unshared; 192556 kB volatile
   Tuning: 48 (large 128), oom 57344 kB, restore limit 19114 kB (low-ram)

```

```bash
┌──(suse@localhost)-[~]
└─$ adb shell df
Filesystem               Size     Used     Free   Blksize
/dev                   196.4M   128.0K   196.3M   4096
/sys/fs/cgroup         196.4M    12.0K   196.4M   4096
/mnt/asec              196.4M     0.0K   196.4M   4096
/mnt/obb               196.4M     0.0K   196.4M   4096
/system                774.9M   320.7M   454.2M   4096
/data                    1.7G    12.7M     1.7G   4096
/cache                 122.0M    48.0K   121.9M   4096
/persist                27.5M    88.0K    27.4M   4096
/firmware               64.0M    49.6M    14.4M   16384
/mnt/shell/emulated      1.7G    12.7M     1.7G   4096
/mnt/shell/emulated/0     1.7G    12.7M     1.7G   4096

```

```bash
┌──(suse@localhost)-[~]
└─$ adb shell cat /proc/cpuinfo
processor       : 0
model name      : ARMv7 Processor rev 0 (v7l)
BogoMIPS        : 38.40
Features        : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 evtstrm 
CPU implementer : 0x41
CPU architecture: 7
CPU variant     : 0x0
CPU part        : 0xd03
CPU revision    : 0

processor       : 1
model name      : ARMv7 Processor rev 0 (v7l)
BogoMIPS        : 38.40
Features        : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 evtstrm 
CPU implementer : 0x41
CPU architecture: 7
CPU variant     : 0x0
CPU part        : 0xd03
CPU revision    : 0

processor       : 2
model name      : ARMv7 Processor rev 0 (v7l)
BogoMIPS        : 38.40
Features        : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 evtstrm 
CPU implementer : 0x41
CPU architecture: 7
CPU variant     : 0x0
CPU part        : 0xd03
CPU revision    : 0

processor       : 3
model name      : ARMv7 Processor rev 0 (v7l)
BogoMIPS        : 38.40
Features        : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 evtstrm 
CPU implementer : 0x41
CPU architecture: 7
CPU variant     : 0x0
CPU part        : 0xd03
CPU revision    : 0

Hardware        : Qualcomm Technologies, Inc MSM8916
Revision        : 0000
Serial          : 0000000000000000
Processor       : ARMv7 Processor rev 0 (v7l)

```
