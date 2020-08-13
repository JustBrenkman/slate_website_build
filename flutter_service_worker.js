'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bee0ab895b2f43fd5d3316624d2b7d24",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/icons/down_arrow_dark.png": "a32755cb25d1c4c11df331b0dfa5aa3b",
"assets/icons/down_arrow_light.png": "57ef82580e8d2624a791912b18f5e6a3",
"assets/NOTICES": "160733631784904dc411adfc7c9b2ff6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/slate_material/assets/vectors/slate-logo@mark-text-horiz.flr": "6a5422da36e89a6a71a535876b15483a",
"assets/packages/slate_material/assets/vectors/slate-logo@mark-text-vert.flr": "3b892245ab867bb069288e8ae3d70c1b",
"assets/packages/slate_material/assets/vectors/slate-logo@mark.flr": "6a26b92406dd868eeb2dbcf8b50ca291",
"assets/pictures/download/SlateIcon_purple.png": "bff370cb80f5b5eac1dc4368432f2632",
"assets/pictures/download/slate_icon_32_32.png": "0abbbe52899478f736f27f28af5582e4",
"assets/pictures/home/create_project_optimized.gif": "e16b3c53004ff36ce80e54359c48bba3",
"assets/pictures/home/hotreload_color.gif": "2edb3410500c62d3c990c933d571af5e",
"assets/pictures/home/shell.jpg": "cba0ddf6f0d2d83f042e59098dea2e9c",
"assets/pictures/home/shell_column.jpg": "d4b7e36a45f3cec8c3f155ffc65e0472",
"assets/pictures/home/shell_example_android.png": "c3b3f5669c45384afad69ada5bcac84b",
"assets/pictures/home/shell_example_android_grey.png": "fc1f39c22393435b0ed106d0d15c08d6",
"assets/pictures/home/shell_example_ios.png": "b7aa093d223b1ca53c5b53effcc79e9d",
"assets/pictures/home/shell_example_ios.svg": "509cc014ff74744669d41ec708d23b9e",
"assets/pictures/home/shell_example_ios_grey.png": "5144055ad7a82fd068a1266a70d5731f",
"assets/pictures/home/shell_hotreload_color.gif": "2bbc41d9f4a33cd482a3d3bbe2ba0b2d",
"assets/pictures/home/shell_list_example.gif": "cc0a2f7ccafa83765fd3794f46097c3f",
"assets/pictures/home/slate_change_color.gif": "21a19a8185e7b1ccb837d22ca88c3a43",
"assets/pictures/home/slate_open.jpg": "d5156d71064bb9aadacc02c50460a392",
"assets/pictures/home/slate_projects.jpg": "c8d62ea9b6f4d35dce795ab78c596e3a",
"assets/pictures/home/slate_properties.jpg": "2a04b54b6d86b003ce0da71a4298255e",
"assets/pictures/home/Slate_website.png": "a27e4c3b021bd430c6c57a9d265e4dab",
"assets/pictures/ide-resized.jpg": "37a37fe3c6a3c5a304bf50e4838b5ecf",
"assets/pictures/ide.jpg": "103377daf03cd6b48c0251434b4cc15e",
"assets/pictures/new_project.jpg": "5c0538804440c6928072e8f8948cbb3b",
"assets/pictures/slate.jpg": "659d398b6a9f124578a4d0ae7a5b1562",
"assets/pictures/tutorials/change_components/add_container.gif": "95f207a098a43cbb138000f42102e90a",
"assets/pictures/tutorials/change_components/add_text.gif": "7dd2b621059c37471e6991dbc8426edf",
"assets/pictures/tutorials/change_components/complete_text.gif": "56cb6cc8f6398f75e62a9bd218fd6d35",
"assets/pictures/tutorials/change_components/components_view.jpg": "eb46d65982d635c05e242b9ba129abd6",
"assets/pictures/tutorials/change_components/select_column.gif": "e6f4ad482ad29406ac85047ccd63ede4",
"assets/pictures/tutorials/change_components/select_container.gif": "6e4f01d6c857430b6624e113487a1aa6",
"assets/pictures/tutorials/change_values/decimal.jpg": "979a5355f6372119660ec979a4ef451c",
"assets/pictures/tutorials/change_values/shell_change_text.gif": "8f1f59e6e4bb5c9454a781190fda375f",
"assets/pictures/tutorials/change_values/shell_undo_redo.gif": "e8597bf9ad3c1af7c4e1403017a80713",
"assets/pictures/tutorials/change_values/shell_update_bool.gif": "9ac94e6779231f9b7f812f3fa2ad0ce3",
"assets/pictures/tutorials/change_values/shell_update_double.gif": "ddebf800f33a694fe06125141c4488a0",
"assets/pictures/tutorials/change_values/shell_update_text.gif": "56758e8dc7808ba747a274cfacaf3e46",
"assets/pictures/tutorials/change_values/text.jpg": "52343decb3e5994cc7defc715ec3889e",
"assets/pictures/tutorials/change_values/true_false.jpg": "02e0dba2255c3628285c2e466c2f2f42",
"assets/pictures/tutorials/change_values/whole_number.jpg": "681cbaf8c6efca892eff613dba5767a1",
"assets/pictures/tutorials/getting_started/modified_component.gif": "010c881a77c5191d5541ee8c116db91f",
"assets/pictures/tutorials/getting_started/modified_option.gif": "fe1e827af8c50c3a7b25013ed0a192b5",
"assets/pictures/tutorials/getting_started/modified_value.gif": "12949382f2e0a5a114f29e718ca1f502",
"assets/pictures/tutorials/getting_started/shell_interact.gif": "b89587db3beb260e9cd878b74c8fdd55",
"assets/pictures/tutorials/getting_started/slate.jpg": "27f1c116878442d83662eb7f192ad3ad",
"assets/pictures/tutorials/getting_started/slate_create_project.gif": "44434e5f68549a353eb62228a25d05f2",
"assets/pictures/tutorials/getting_started/slate_open_project.gif": "a974c0a58a6d9df675552203f55cfa13",
"assets/pictures/tutorials/getting_started/slate_run_shell.gif": "cb204905635d47e994babc4bb31366f5",
"assets/pictures/tutorials/installation/accept.PNG": "0a52d22fc91748181e69514a8052bd16",
"assets/pictures/tutorials/installation/accept_2.PNG": "5ead7478d9784c5e84a0b164d709b5e6",
"assets/pictures/tutorials/installation/bin.PNG": "39d857721e85684a97f5ff7cda660ee7",
"assets/pictures/tutorials/installation/done.PNG": "8534ecf9d98d45aac357371090dd909f",
"assets/pictures/tutorials/installation/downloads.PNG": "e631881d1df7292288953a6e56b3e780",
"assets/pictures/tutorials/installation/execution_policy.PNG": "98c3401b9e3011e2be29886f27c50e11",
"assets/pictures/tutorials/installation/extract.PNG": "20afe6a03008bd2066b67b8ad662ef20",
"assets/pictures/tutorials/installation/post_reboot.PNG": "e0de26de5e23291ac64e7faa27bafb09",
"assets/pictures/tutorials/installation/run_powershell.PNG": "fd8f125a274026b5fdb255d5a8709a5a",
"assets/pictures/tutorials/installation/setup.PNG": "a74b2a39329a4bc46cfffa4ff27c511e",
"assets/pictures/tutorials/installation/setup_done.PNG": "6207d31983fefe2f05461a255ba7e392",
"assets/tutorials/changing_components.md": "2406d534f6eaf7d0046a273714fd12c6",
"assets/tutorials/changing_values.md": "a4c5eeb896ed70c8d62e89e38cf81cf6",
"assets/tutorials/component_lists.md": "5f041c1be34ed4372bf2a8decdca0f15",
"assets/tutorials/getting_started.md": "92ca05a210126d4094890f36648bbfb2",
"assets/tutorials/installation.md": "604c06e602e7a943059d04a3f7e015cb",
"assets/tutorials/README.md": "a7d9e5910ab75633e592f85a51ca1c4c",
"assets/tutorials/test.md": "f8fb24dcc9ac34428e858bdf615f4802",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2b3f3cfd3efbd9d92cd0af4398078274",
"/": "2b3f3cfd3efbd9d92cd0af4398078274",
"js/custom_functions.js": "8cbba4a249b8ca31bb74ef4b458180ff",
"main.dart.js": "f2958b9748bd27fc89dea3345a456b08",
"manifest.json": "1987ace36add33fd0e03f23ab15d8360",
"packages/$sdk/dev_compiler/amd/dart_sdk.js": "1e07e8c69c9c3f0edbdbb6ae564cddf4",
"packages/$sdk/dev_compiler/amd/require.js": "17ac53f89e3df290862f6c06b422be5e",
"packages/$sdk/dev_compiler/common/dart_sdk.js": "909c248a174daa2948d624f37ecbfd43",
"packages/$sdk/dev_compiler/common/run.js": "cf14f6a715c67ad50d996246fd530871",
"packages/$sdk/dev_compiler/es6/dart_sdk.js": "39aa077fe4944ac732060f1633dc2b2b",
"packages/$sdk/dev_compiler/kernel/amd/dart_sdk.js": "ce14766ebbef85cf3b923b3044b7dbac",
"packages/$sdk/dev_compiler/kernel/amd/require.js": "17ac53f89e3df290862f6c06b422be5e",
"packages/$sdk/dev_compiler/kernel/common/dart_sdk.js": "72a98cec953d5010f1f1ffdd4c6a3635",
"packages/$sdk/dev_compiler/kernel/common/run.js": "cf14f6a715c67ad50d996246fd530871",
"packages/$sdk/dev_compiler/kernel/es6/dart_sdk.js": "08fd215609d5b9fb99c7e7c191de0a8b",
"packages/$sdk/dev_compiler/kernel/legacy/dart_library.js": "872d931b257956e86635d0f5276d059a",
"packages/$sdk/dev_compiler/kernel/legacy/dart_sdk.js": "6a44366b75314be415f2763c9ef48b90",
"packages/$sdk/dev_compiler/legacy/dart_library.js": "872d931b257956e86635d0f5276d059a",
"packages/$sdk/dev_compiler/legacy/dart_sdk.js": "fb709160054c6a4205dbd144f8784ce1",
"packages/$sdk/dev_compiler/web/dart_stack_trace_mapper.js": "a953a877b7bb3e59937e94acba0d4aa4",
"packages/$sdk/dev_compiler/web/ddc_web_compiler.js": "12720eb178d5039381f4bbc1dd157837",
"packages/$sdk/_internal/ddc_sdk.sum": "c6bc67195b9cae1f4940d9ab1a952915",
"packages/$sdk/_internal/strong.sum": "787e76b45103c6f7041da165cc1fef94",
"packages/analyzer/src/summary/format.fbs": "557cb515b879228693d55aa536254a40",
"packages/build_runner/src/server/build_updates_client/hot_reload_client.dart.js": "4263ddbfc2bd2b767afc1fecfaf06207",
"packages/build_runner/src/server/build_updates_client/live_reload_client.js": "fe131aa1bd5508c0a607288a85b53ff5",
"packages/build_runner/src/server/graph_viz.html": "1e30e7cf77285f5ec0d5131ad0e9bc65",
"packages/build_runner/src/server/graph_viz.js": "60c0c6322922735576b8d6fb461d95e3",
"packages/build_runner/src/server/graph_viz_main.dart.js": "cce5a51eb6155a901f149076ee5a51a1",
"packages/build_runner/src/server/README.md": "bba39676fdeb3828a4eb85abe9566c90",
"packages/build_web_compilers/src/dev_compiler_stack_trace/stack_trace_mapper.dart.js": "642f1ec22214272c97ed64405940f42e",
"packages/flutter_web_ui/assets/Ahem.ttf": "d380bf638b09b1fe766717069ba20f10",
"packages/flutter_web_ui/assets/houdini_painter.js": "f8c64eebee42ec2ac05e86ae13c82397",
"packages/flutter_web_ui/assets/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"packages/front_end/src/fasta/builder/README.md": "08bfac5259979540a84c6ff318ca7701",
"packages/front_end/src/fasta/diagnostics.md": "e5172e8eebefc8552bc06d63d712b33d",
"packages/front_end/src/fasta/dill/README.md": "aba89ef01f7e48020ef9daa8ade4ef50",
"packages/front_end/src/fasta/kernel/README.md": "00ecc39386c7b588ff18ff6f3e27b177",
"packages/front_end/src/fasta/parser/parser.md": "611efab718b0d2febbd674e69b182e0b",
"packages/front_end/src/fasta/README.md": "0899f6ef79f12041e840e7f07659cf2d",
"packages/front_end/src/fasta/source/README.md": "5127fef85e3ccbb13e145c5343a325d6",
"packages/front_end/src/fasta/TESTING.md": "41da0d3844c00e65a471a3d60252b8c3",
"packages/intl/src/data/dates/patterns/af.json": "a757725604ea8ae2428032ad767e2df8",
"packages/intl/src/data/dates/patterns/am.json": "d0f25919ea56dfab287227e2501b9d69",
"packages/intl/src/data/dates/patterns/ar.json": "762b9770243fed73e0d90e6690af7eb8",
"packages/intl/src/data/dates/patterns/ar_DZ.json": "762b9770243fed73e0d90e6690af7eb8",
"packages/intl/src/data/dates/patterns/ar_EG.json": "762b9770243fed73e0d90e6690af7eb8",
"packages/intl/src/data/dates/patterns/az.json": "a93ba3928939427031669a97ebed2dfd",
"packages/intl/src/data/dates/patterns/be.json": "8b2243f6e986d34ed85dbeeae20d3525",
"packages/intl/src/data/dates/patterns/bg.json": "b907ef49d6b6b5ff33a544a0c3f9aa59",
"packages/intl/src/data/dates/patterns/bn.json": "8f6bc2ce18ba5b84f129dab5f2c4e881",
"packages/intl/src/data/dates/patterns/br.json": "0ce79295a4aa9a97697dd72dcf7461fa",
"packages/intl/src/data/dates/patterns/bs.json": "2c14b9ada5297993fc37c256ead20fce",
"packages/intl/src/data/dates/patterns/ca.json": "7ed991e94db7f429a4066530cf7bc15e",
"packages/intl/src/data/dates/patterns/chr.json": "6efc41d126845805f56cde26b185f872",
"packages/intl/src/data/dates/patterns/cs.json": "b9a0f92fe575d63f142c9a81bd88dd13",
"packages/intl/src/data/dates/patterns/cy.json": "7c3114f88652d5ba25177e5eb840db95",
"packages/intl/src/data/dates/patterns/da.json": "996fd4a21e0d1ab21813b3f124b039a5",
"packages/intl/src/data/dates/patterns/de.json": "90fcb09cf221ae33050fbcfd97361225",
"packages/intl/src/data/dates/patterns/de_AT.json": "90fcb09cf221ae33050fbcfd97361225",
"packages/intl/src/data/dates/patterns/de_CH.json": "90fcb09cf221ae33050fbcfd97361225",
"packages/intl/src/data/dates/patterns/el.json": "89fcf0540ed94bb0b1c3e3b2c31cc985",
"packages/intl/src/data/dates/patterns/en.json": "6efc41d126845805f56cde26b185f872",
"packages/intl/src/data/dates/patterns/en_AU.json": "5400c12b16b29020f6162fad9f6dca2e",
"packages/intl/src/data/dates/patterns/en_CA.json": "5d65f7665c3f6a9eda259c5c7589a685",
"packages/intl/src/data/dates/patterns/en_GB.json": "aa279a7f8da792515186675f193a8c83",
"packages/intl/src/data/dates/patterns/en_IE.json": "3a4e7d093e273a71103fcfed11a055c7",
"packages/intl/src/data/dates/patterns/en_IN.json": "cf55c3660a33b13538397da190469165",
"packages/intl/src/data/dates/patterns/en_ISO.json": "6a23f0b7cf37e1a569333e4d75d58174",
"packages/intl/src/data/dates/patterns/en_MY.json": "97ff6639cd1f94254a601e14129cbdf5",
"packages/intl/src/data/dates/patterns/en_SG.json": "97ff6639cd1f94254a601e14129cbdf5",
"packages/intl/src/data/dates/patterns/en_US.json": "6efc41d126845805f56cde26b185f872",
"packages/intl/src/data/dates/patterns/en_ZA.json": "73f1cabc5d7049ac9e98a9ab8156ae11",
"packages/intl/src/data/dates/patterns/es.json": "6828cd0149b619bc6bbdd469972e88e3",
"packages/intl/src/data/dates/patterns/es_419.json": "b74c23aa9067f528ac6ba5b32d7a8756",
"packages/intl/src/data/dates/patterns/es_ES.json": "6828cd0149b619bc6bbdd469972e88e3",
"packages/intl/src/data/dates/patterns/es_MX.json": "13d44df1c07e322c0867a17f310a808c",
"packages/intl/src/data/dates/patterns/es_US.json": "ec668f3f312d2d7da4ea57ba5c20eef5",
"packages/intl/src/data/dates/patterns/et.json": "9d55b8e9ddce87d6c9db8ce4503bdc0f",
"packages/intl/src/data/dates/patterns/eu.json": "e92b962b95e637184a10a48e56bae3ae",
"packages/intl/src/data/dates/patterns/fa.json": "76d176e04009195f51835040c99ab57a",
"packages/intl/src/data/dates/patterns/fi.json": "8660e69857a773a1ea70344190e31d8d",
"packages/intl/src/data/dates/patterns/fil.json": "6efc41d126845805f56cde26b185f872",
"packages/intl/src/data/dates/patterns/fr.json": "c1b39193212c7969d20ced867b0d34aa",
"packages/intl/src/data/dates/patterns/fr_CA.json": "d3d19052f624ce8ff4c5959820631667",
"packages/intl/src/data/dates/patterns/fr_CH.json": "fb819fdf72be133a83b43f64e9c9351b",
"packages/intl/src/data/dates/patterns/ga.json": "10afda62904ea008750aa2a8c2968ade",
"packages/intl/src/data/dates/patterns/gl.json": "d3c212eb9c1924d5645fad1fcbdcb764",
"packages/intl/src/data/dates/patterns/gsw.json": "47622aa4a04f4a20ce1f99be51357def",
"packages/intl/src/data/dates/patterns/gu.json": "b3e6992fc13f2de94bf1524ceab66452",
"packages/intl/src/data/dates/patterns/haw.json": "27297e2dd8519110f3fd16e0de1bf307",
"packages/intl/src/data/dates/patterns/he.json": "fb44cee67b7272838e908e79d1183561",
"packages/intl/src/data/dates/patterns/hi.json": "befe2d99926a26552d9931d7ebe582c7",
"packages/intl/src/data/dates/patterns/hr.json": "aca655d197ada19907e701b15221ea0f",
"packages/intl/src/data/dates/patterns/hu.json": "0e2fda34698b3ff8eb89ee13ceee6e2a",
"packages/intl/src/data/dates/patterns/hy.json": "32d54537ee258c0e697461df670448e2",
"packages/intl/src/data/dates/patterns/id.json": "ed2bf5011155eea1e330713c09ed719b",
"packages/intl/src/data/dates/patterns/in.json": "ed2bf5011155eea1e330713c09ed719b",
"packages/intl/src/data/dates/patterns/is.json": "9518e40eacb9b85bc438409567e4e947",
"packages/intl/src/data/dates/patterns/it.json": "c74c15eabe93e6ad85414e0def895889",
"packages/intl/src/data/dates/patterns/it_CH.json": "640766fc098a08fc1b26dcaa0450691a",
"packages/intl/src/data/dates/patterns/iw.json": "fb44cee67b7272838e908e79d1183561",
"packages/intl/src/data/dates/patterns/ja.json": "511b006d3bdcc3578a8400f411c2804a",
"packages/intl/src/data/dates/patterns/ka.json": "b47bc1bcf5130a25577fa4289cb01e3c",
"packages/intl/src/data/dates/patterns/kk.json": "0774e160a7c91c845fadd3dbfcde3734",
"packages/intl/src/data/dates/patterns/km.json": "8ee6ab33946283786e4bf7f14883c421",
"packages/intl/src/data/dates/patterns/kn.json": "97a45b63d564957f417abf100283834a",
"packages/intl/src/data/dates/patterns/ko.json": "7d03367c747b635718d5a9ec7110b66f",
"packages/intl/src/data/dates/patterns/ky.json": "3d3f5d6091e6265a394060e11da5690e",
"packages/intl/src/data/dates/patterns/ln.json": "fe6f43bab0e9fefb6d56d9ecad20986f",
"packages/intl/src/data/dates/patterns/lo.json": "379432c6d32c6172d61cf462d1174450",
"packages/intl/src/data/dates/patterns/lt.json": "835ce831e140965ab35b178d8c355430",
"packages/intl/src/data/dates/patterns/lv.json": "1f9702338dc22c94ba627df1edcbd291",
"packages/intl/src/data/dates/patterns/mk.json": "a7c8237064271336730638f4adf9d1ff",
"packages/intl/src/data/dates/patterns/ml.json": "58fb9771a25ab463dcf1b2c2b1775deb",
"packages/intl/src/data/dates/patterns/mn.json": "8f658087c2a57ce4ce2bb039e8464ab5",
"packages/intl/src/data/dates/patterns/mo.json": "5c17c240e1c5a8624c8f354cf0a0154a",
"packages/intl/src/data/dates/patterns/mr.json": "5388934f04656360027592fecb5cb2ab",
"packages/intl/src/data/dates/patterns/ms.json": "16eca15cf52cfbb8c613acab4c3756ca",
"packages/intl/src/data/dates/patterns/mt.json": "fcccb21a700b298a469843179663809a",
"packages/intl/src/data/dates/patterns/my.json": "2e739c7ee3047bf563548a0cc3f5d030",
"packages/intl/src/data/dates/patterns/nb.json": "b4f5f87ded3d0880d883a7190ca65980",
"packages/intl/src/data/dates/patterns/ne.json": "2e5043b7f0867a102709d7932383eff4",
"packages/intl/src/data/dates/patterns/nl.json": "8e9da5d63373f47dc56664b5d9111541",
"packages/intl/src/data/dates/patterns/no.json": "b4f5f87ded3d0880d883a7190ca65980",
"packages/intl/src/data/dates/patterns/no_NO.json": "b4f5f87ded3d0880d883a7190ca65980",
"packages/intl/src/data/dates/patterns/or.json": "6efc41d126845805f56cde26b185f872",
"packages/intl/src/data/dates/patterns/pa.json": "bd8d79afc2cd2c954ba00962a8893847",
"packages/intl/src/data/dates/patterns/pl.json": "bf5af44c2465e67ebfec727b4e77366c",
"packages/intl/src/data/dates/patterns/ps.json": "072bebabd68db8e13167f4d9778715e0",
"packages/intl/src/data/dates/patterns/pt.json": "3508b96f57a44a39bb39e0fc30d1ad58",
"packages/intl/src/data/dates/patterns/pt_BR.json": "3508b96f57a44a39bb39e0fc30d1ad58",
"packages/intl/src/data/dates/patterns/pt_PT.json": "e31b7018e73b71948b2d16ee1f17c973",
"packages/intl/src/data/dates/patterns/ro.json": "5c17c240e1c5a8624c8f354cf0a0154a",
"packages/intl/src/data/dates/patterns/ru.json": "27b9972c78e45759aa5d46804c3e7bd1",
"packages/intl/src/data/dates/patterns/sd.json": "6efc41d126845805f56cde26b185f872",
"packages/intl/src/data/dates/patterns/sh.json": "35a07039c35030d2cf6761eb84295704",
"packages/intl/src/data/dates/patterns/si.json": "8ab5cbef99e9ce39ce7d897a74392002",
"packages/intl/src/data/dates/patterns/sk.json": "466a03062ce78356c7fb5515ada0f0b1",
"packages/intl/src/data/dates/patterns/sl.json": "ee7d6dc6bcc167a62f54b3d2e91e0b07",
"packages/intl/src/data/dates/patterns/sq.json": "4bf3493e6ae659ee5fd066ea63acd0ff",
"packages/intl/src/data/dates/patterns/sr.json": "35a07039c35030d2cf6761eb84295704",
"packages/intl/src/data/dates/patterns/sr_Latn.json": "35a07039c35030d2cf6761eb84295704",
"packages/intl/src/data/dates/patterns/sv.json": "0e8f1bdd4103e3a4db9e31131fbe7eac",
"packages/intl/src/data/dates/patterns/sw.json": "8383390c3beb749d76fe28e51bf58cd7",
"packages/intl/src/data/dates/patterns/ta.json": "8aa1f77a3a7227c901702b953010456f",
"packages/intl/src/data/dates/patterns/te.json": "1b410600e513120cc2acb726bc24495e",
"packages/intl/src/data/dates/patterns/th.json": "27013c8466174381836273528fee6122",
"packages/intl/src/data/dates/patterns/tl.json": "6efc41d126845805f56cde26b185f872",
"packages/intl/src/data/dates/patterns/tr.json": "b5d100ccb68397b5f77613239b8ac339",
"packages/intl/src/data/dates/patterns/uk.json": "8e2417f826b7c47a2f8f5afa5ba6d895",
"packages/intl/src/data/dates/patterns/ur.json": "5b72a441654ef9d4a28c747692c50420",
"packages/intl/src/data/dates/patterns/uz.json": "34ea21d92e1c692168990f191f37538c",
"packages/intl/src/data/dates/patterns/vi.json": "3b01e2f3316495d43a6c1cd61ddabe52",
"packages/intl/src/data/dates/patterns/zh.json": "662c3ec470666c12637b5782b49d1246",
"packages/intl/src/data/dates/patterns/zh_CN.json": "662c3ec470666c12637b5782b49d1246",
"packages/intl/src/data/dates/patterns/zh_HK.json": "0e102fe3288ea899d5a80701e11e46c0",
"packages/intl/src/data/dates/patterns/zh_TW.json": "43c79a4638835eb0d3ca2a2baa32370d",
"packages/intl/src/data/dates/patterns/zu.json": "e670a5ba1704b7d6e6a1b820776c2e72",
"packages/intl/src/data/dates/README.txt": "864ebfdf504f6cc161486a1eb1c2035d",
"packages/intl/src/data/dates/symbols/af.json": "8cc73384b641110901a793429fa6e51c",
"packages/intl/src/data/dates/symbols/am.json": "66b5c3d4f39a8abc0757761fe052e556",
"packages/intl/src/data/dates/symbols/ar.json": "7177c6d327ac1b4940457003aaf8db62",
"packages/intl/src/data/dates/symbols/ar_DZ.json": "e688a3294052e427069a557eb0b39f95",
"packages/intl/src/data/dates/symbols/ar_EG.json": "df49dbf4dd9006ef91857f0722c29937",
"packages/intl/src/data/dates/symbols/az.json": "83fdee716ce52e3a5bb1d683af9ab9e8",
"packages/intl/src/data/dates/symbols/be.json": "4748a9dd31aec00de947b02328244672",
"packages/intl/src/data/dates/symbols/bg.json": "fe9184e0a89cef57fae40484e58cbf9f",
"packages/intl/src/data/dates/symbols/bn.json": "6b0b52c00baa3431ec71b7c55e5c168b",
"packages/intl/src/data/dates/symbols/br.json": "d205bac5bd1b6592c87840ab95f49d7c",
"packages/intl/src/data/dates/symbols/bs.json": "b2e95c226d390c0cf902ef9ce2c345bf",
"packages/intl/src/data/dates/symbols/ca.json": "a2501fa41264fe23c0489fcde36e58dc",
"packages/intl/src/data/dates/symbols/chr.json": "b458982e265496ab721a32879a1bcd98",
"packages/intl/src/data/dates/symbols/cs.json": "ecc83063aaa428df949e96aa901613ce",
"packages/intl/src/data/dates/symbols/cy.json": "827520abdda1d7db2aa5a0a25ff1b82c",
"packages/intl/src/data/dates/symbols/da.json": "279ded685840b8d6a658745871dbb6f4",
"packages/intl/src/data/dates/symbols/de.json": "a982743a1470e571007986ef2f3029e5",
"packages/intl/src/data/dates/symbols/de_AT.json": "8c85cd4a2c62fbe8284fe8bb6d31a6a8",
"packages/intl/src/data/dates/symbols/de_CH.json": "55158cf14b86519c4e8660294ce9f9c3",
"packages/intl/src/data/dates/symbols/el.json": "ae8c50e0ff432d84807fd0be6a20ecbc",
"packages/intl/src/data/dates/symbols/en.json": "09888bf003e5b6818e342f6be316a807",
"packages/intl/src/data/dates/symbols/en_AU.json": "136fbb3ebbb27017c762ab97d1ba641c",
"packages/intl/src/data/dates/symbols/en_CA.json": "cd909c1410333e43be1f14fd61f9c443",
"packages/intl/src/data/dates/symbols/en_GB.json": "3e9692f9b989c7121b606d7ca5e1ec71",
"packages/intl/src/data/dates/symbols/en_IE.json": "fbf1cd4e3e9245de40cd31fddafca656",
"packages/intl/src/data/dates/symbols/en_IN.json": "d5a16b7fd08edb02a733d28d33fcc5af",
"packages/intl/src/data/dates/symbols/en_ISO.json": "cdcdee9ca38b0ed049585fc26cc334ef",
"packages/intl/src/data/dates/symbols/en_MY.json": "7bb3482ee32c8f5dd04d03c75a0a7372",
"packages/intl/src/data/dates/symbols/en_SG.json": "78adb21de3405a424994ee41082667ad",
"packages/intl/src/data/dates/symbols/en_US.json": "bc92f3e29e50ebf9cbc74970f5b238cb",
"packages/intl/src/data/dates/symbols/en_ZA.json": "47b894d24c64e61e5dc8e86088aa5d6a",
"packages/intl/src/data/dates/symbols/es.json": "56a97ced99b45dc885855b0f50d721dc",
"packages/intl/src/data/dates/symbols/es_419.json": "89af064b74163e30bac8bd0ad3a3d3c2",
"packages/intl/src/data/dates/symbols/es_ES.json": "f8f71ef78505cc7233237302d5d754a7",
"packages/intl/src/data/dates/symbols/es_MX.json": "0fb904d1ece47dd10a35cff5063e8b1a",
"packages/intl/src/data/dates/symbols/es_US.json": "dfbcda45654080ed893f6b8667321b0c",
"packages/intl/src/data/dates/symbols/et.json": "93a522d0834fc00df61f7a73d52ba9b2",
"packages/intl/src/data/dates/symbols/eu.json": "68f5573e574b46f49953994b6449f67b",
"packages/intl/src/data/dates/symbols/fa.json": "43ccbd2eea3db8a6d73fe37a4e100b22",
"packages/intl/src/data/dates/symbols/fi.json": "92234f04a89edcd4e7596df189ea198a",
"packages/intl/src/data/dates/symbols/fil.json": "85f8f8830dbf2487f2e202af39b9615c",
"packages/intl/src/data/dates/symbols/fr.json": "2813d62fe931543564169206c6b0e79f",
"packages/intl/src/data/dates/symbols/fr_CA.json": "64ce54d39b6183a6fbf6ae8318e7df0e",
"packages/intl/src/data/dates/symbols/fr_CH.json": "d941b348c66a80c6c4663ee2b40ef7a2",
"packages/intl/src/data/dates/symbols/ga.json": "0779de12972289b493727c067c8c5b3d",
"packages/intl/src/data/dates/symbols/gl.json": "ff89138a5fd4247aa27dd84b5aa48375",
"packages/intl/src/data/dates/symbols/gsw.json": "ba7b61cd82fa46e4b42bec239f2091ad",
"packages/intl/src/data/dates/symbols/gu.json": "724e830d10a1a6519295de8b114969e4",
"packages/intl/src/data/dates/symbols/haw.json": "7e10094071e1c0e49dab446bae3be96d",
"packages/intl/src/data/dates/symbols/he.json": "4409b098235f22cf73890ccfd4ab181b",
"packages/intl/src/data/dates/symbols/hi.json": "ac2d881e7084f5ef1c9a157c83bffb73",
"packages/intl/src/data/dates/symbols/hr.json": "fb2dc4941cffb21d2734ae8dd42297b3",
"packages/intl/src/data/dates/symbols/hu.json": "bf8ba1715d72fca819076b0d5932f08e",
"packages/intl/src/data/dates/symbols/hy.json": "8363856fd0e4cfd1da0a352216fe4db6",
"packages/intl/src/data/dates/symbols/id.json": "b5d5698f6eafa7349afdb791c4e9b08e",
"packages/intl/src/data/dates/symbols/in.json": "5b1a0754249e4af7166706f006849e15",
"packages/intl/src/data/dates/symbols/is.json": "dc980c2f07e71d26b44a75e986a7200a",
"packages/intl/src/data/dates/symbols/it.json": "c364722b4e4e2b78c9b83e7f291dcad1",
"packages/intl/src/data/dates/symbols/it_CH.json": "ca936b238d831aa1e8ee1e1467cbe547",
"packages/intl/src/data/dates/symbols/iw.json": "aa10348d5ba13a9aac7f9b09e1a500b7",
"packages/intl/src/data/dates/symbols/ja.json": "e37abeab087729b099800ea1692c7441",
"packages/intl/src/data/dates/symbols/ka.json": "0c47a88c537d18d3a299c4931f79d096",
"packages/intl/src/data/dates/symbols/kk.json": "bae11084b2e38ab7cf90bc81b6da48e7",
"packages/intl/src/data/dates/symbols/km.json": "78a592614a0c4c863aa09f6a84dc9f87",
"packages/intl/src/data/dates/symbols/kn.json": "e97b1150160449ceccc852adfb3829c5",
"packages/intl/src/data/dates/symbols/ko.json": "f2b23e9fb76575deb5b9783ac6d74aad",
"packages/intl/src/data/dates/symbols/ky.json": "97deeeab6b9053acc6fd523553ded3d4",
"packages/intl/src/data/dates/symbols/ln.json": "6dc61322f891c46bb7c7d5ad7ff1a85e",
"packages/intl/src/data/dates/symbols/lo.json": "34b44169fc06fab6013459b8e6443026",
"packages/intl/src/data/dates/symbols/lt.json": "5103e56a9045c5aa577a1495cd4d5297",
"packages/intl/src/data/dates/symbols/lv.json": "5f6fdbc33bb3a5586ba1e9e77d463764",
"packages/intl/src/data/dates/symbols/mk.json": "381048f0d2dc186652885b3deebe196d",
"packages/intl/src/data/dates/symbols/ml.json": "06c769d5e757d0af18c890a54392dbc4",
"packages/intl/src/data/dates/symbols/mn.json": "f6f9eede4cf1e9bb95d40f8c81d315f2",
"packages/intl/src/data/dates/symbols/mr.json": "600ef8e399ac662445cc0c3aece7fb55",
"packages/intl/src/data/dates/symbols/ms.json": "5bc40ddbf04ad5a012fc2aa03dea5492",
"packages/intl/src/data/dates/symbols/mt.json": "14992ef3abbd79c5b99b9c86ce2740ac",
"packages/intl/src/data/dates/symbols/my.json": "0d6bdde281d4c8b899184b155f8db2d8",
"packages/intl/src/data/dates/symbols/nb.json": "db7d21e4853001cd6e6bf422cd655d79",
"packages/intl/src/data/dates/symbols/ne.json": "052f85eea22a5b50bd0ff1e12c11c0cd",
"packages/intl/src/data/dates/symbols/nl.json": "6d935dd6b09257336892ca11e64c3823",
"packages/intl/src/data/dates/symbols/no.json": "116cd9b7368f4938018d98378da583b2",
"packages/intl/src/data/dates/symbols/no_NO.json": "a0f10d47288d459e14d14c077c58ec3f",
"packages/intl/src/data/dates/symbols/or.json": "ca64ccf3207acc472f59b245a14ed66d",
"packages/intl/src/data/dates/symbols/pa.json": "7ebc62bd358a0d482d9c844c2395a899",
"packages/intl/src/data/dates/symbols/pl.json": "c4ae70280a305e88bffe40967dbb3e7b",
"packages/intl/src/data/dates/symbols/ps.json": "71a1fb38362f15490af62a4696490cc8",
"packages/intl/src/data/dates/symbols/pt.json": "387174b8c833fdc033ed5f261e6bd0f4",
"packages/intl/src/data/dates/symbols/pt_BR.json": "fe842ae21c84c2ef1b61a86b8ad914f2",
"packages/intl/src/data/dates/symbols/pt_PT.json": "5c9b7085c41ad93bcaf8ddf6563b7cef",
"packages/intl/src/data/dates/symbols/ro.json": "47bdfa51ad3beab63fdd54a6d645be30",
"packages/intl/src/data/dates/symbols/ru.json": "09b2276490e525cff05f5d75258f3078",
"packages/intl/src/data/dates/symbols/si.json": "63c633b68868f0aaa0fda80232e32251",
"packages/intl/src/data/dates/symbols/sk.json": "d5c70d60e06a800eed0d73d3bb904ee0",
"packages/intl/src/data/dates/symbols/sl.json": "d5bc2f997a2b8b0037269c6e1e9cdbb3",
"packages/intl/src/data/dates/symbols/sq.json": "cb179538335fe94237c40791049ca4a0",
"packages/intl/src/data/dates/symbols/sr.json": "7f0f775d82c56a9abf48e1bf434bf69e",
"packages/intl/src/data/dates/symbols/sr_Latn.json": "569741ed6e1d74943f3bf37b8843cbeb",
"packages/intl/src/data/dates/symbols/sv.json": "49e9b0ff92709180ce1130b20b11e25b",
"packages/intl/src/data/dates/symbols/sw.json": "ee4ebf0def95f56192661309fcf9ee2c",
"packages/intl/src/data/dates/symbols/ta.json": "44320529501297e9f132ae3a729b0f0d",
"packages/intl/src/data/dates/symbols/te.json": "c8861255111881db081db7df980c65fa",
"packages/intl/src/data/dates/symbols/th.json": "a7ec6b85f3954906bb865268758f4d67",
"packages/intl/src/data/dates/symbols/tl.json": "3bdaddec0bacf469da79e2f1562c94cf",
"packages/intl/src/data/dates/symbols/tr.json": "f0e34dc73bb5ae7e78134c0df7ebf44e",
"packages/intl/src/data/dates/symbols/uk.json": "a838781c6a5e00d038fc5c4c6e5e7ba9",
"packages/intl/src/data/dates/symbols/ur.json": "b308f9888decd8d6e67adc08c1feb3b4",
"packages/intl/src/data/dates/symbols/uz.json": "de440568ddcce9e6045da0720231f7a8",
"packages/intl/src/data/dates/symbols/vi.json": "9c86a82d1d27a8f6c74c9773fc239231",
"packages/intl/src/data/dates/symbols/zh.json": "9760297ba1e1ed9d030b25cf3ce89f80",
"packages/intl/src/data/dates/symbols/zh_CN.json": "473252f50375688b9e400f66c22cc4d7",
"packages/intl/src/data/dates/symbols/zh_HK.json": "a139127040f9182d634ab89832da5723",
"packages/intl/src/data/dates/symbols/zh_TW.json": "abeffd3a36f93e39687c7ee864d0d9a3",
"packages/intl/src/data/dates/symbols/zu.json": "f617d3b3fbe5c896362ed231f6e70ad2",
"packages/kernel/binary/readme.md": "c094194353ce032cca4f8f9d2c6f0594",
"packages/kernel/target/readme.md": "d3a5e0c44cae16a1d95e4a5e1d241889",
"packages/kernel/text/readme.md": "ab223cc2a8fecea0067b1faf91a8102b",
"packages/package_resolver/src/test_package_config": "84bf93414c489fa517617bce1ed76ef8",
"packages/pedantic/analysis_options.1.0.0.yaml": "0571d9434f7e5e929c2acfd65474d700",
"packages/pedantic/analysis_options.1.1.0.yaml": "0571d9434f7e5e929c2acfd65474d700",
"packages/pedantic/analysis_options.1.2.0.yaml": "6b3d6d5dfe134302e13971e90aeedf93",
"packages/pedantic/analysis_options.1.3.0.yaml": "9658e5af0acbdc4cc737491ad2903b5e",
"packages/pedantic/analysis_options.1.4.0.yaml": "b8dcdecd2635a5db1445867ebc15cd06",
"packages/pedantic/analysis_options.1.5.0.yaml": "8a04ef375cf5c8256a275b9a5e3a6290",
"packages/pedantic/analysis_options.1.6.0.yaml": "0227020e6bc8add272d43396b19c6399",
"packages/pedantic/analysis_options.1.7.0.yaml": "0227020e6bc8add272d43396b19c6399",
"packages/pedantic/analysis_options.1.8.0.yaml": "3e93645a16705f98492beb9a87340dc7",
"packages/pedantic/analysis_options.yaml": "0ec577aabc47e43f1a0fc25d05b1adc3",
"slate.ico": "9cc92e955f16bd43b5ad2d4be85636c3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
