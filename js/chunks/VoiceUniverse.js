/*! For license information please see VoiceUniverse.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
    [10, 915], {
        2832: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                BlobReader: () => _t,
                BlobWriter: () => Ct,
                Data64URIReader: () => yt,
                Data64URIWriter: () => At,
                ERR_BAD_FORMAT: () => Le,
                ERR_CENTRAL_DIRECTORY_NOT_FOUND: () => Oe,
                ERR_DUPLICATED_NAME: () => ri,
                ERR_ENCRYPTED: () => je,
                ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND: () => $e,
                ERR_EOCDR_NOT_FOUND: () => Re,
                ERR_EOCDR_ZIP64_NOT_FOUND: () => Ze,
                ERR_EXTRAFIELD_ZIP64_NOT_FOUND: () => Pe,
                ERR_HTTP_RANGE: () => ft,
                ERR_INVALID_COMMENT: () => ai,
                ERR_INVALID_DATE: () => ci,
                ERR_INVALID_ENTRY_COMMENT: () => oi,
                ERR_INVALID_ENTRY_NAME: () => si,
                ERR_INVALID_EXTRAFIELD_DATA: () => ui,
                ERR_INVALID_EXTRAFIELD_TYPE: () => di,
                ERR_INVALID_PASSORD: () => Gt,
                ERR_INVALID_SIGNATURE: () => we,
                ERR_INVALID_VERSION: () => li,
                ERR_LOCAL_FILE_HEADER_NOT_FOUND: () => Ie,
                ERR_UNSUPPORTED_COMPRESSION: () => He,
                ERR_UNSUPPORTED_ENCRYPTION: () => Ne,
                HttpRangeReader: () => Et,
                HttpReader: () => kt,
                Reader: () => vt,
                TextReader: () => xt,
                TextWriter: () => wt,
                Uint8ArrayReader: () => Bt,
                Uint8ArrayWriter: () => St,
                Writer: () => bt,
                ZipReader: () => Ci,
                ZipWriter: () => ki,
                configure: () => Ei,
                fs: () => Fi,
                getMimeType: () => Ii,
                initShimAsyncCodec: () => wi
            });
            const n = 15,
                r = 256,
                a = 573,
                o = 256,
                s = -2,
                l = -5,
                c = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];

            function d() {
                const t = this;

                function e(t, e) {
                    let i = 0;
                    do {
                        i |= 1 & t, t >>>= 1, i <<= 1
                    } while (--e > 0);
                    return i >>> 1
                }
                t.build_tree = function(i) {
                    const r = t.dyn_tree,
                        o = t.stat_desc.static_tree,
                        s = t.stat_desc.elems;
                    let l, c, d, u = -1;
                    for (i.heap_len = 0, i.heap_max = a, l = 0; l < s; l++) 0 !== r[2 * l] ? (i.heap[++i.heap_len] = u = l, i.depth[l] = 0) : r[2 * l + 1] = 0;
                    for (; i.heap_len < 2;) d = i.heap[++i.heap_len] = u < 2 ? ++u : 0, r[2 * d] = 1, i.depth[d] = 0, i.opt_len--, o && (i.static_len -= o[2 * d + 1]);
                    for (t.max_code = u, l = Math.floor(i.heap_len / 2); l >= 1; l--) i.pqdownheap(r, l);
                    d = s;
                    do {
                        l = i.heap[1], i.heap[1] = i.heap[i.heap_len--], i.pqdownheap(r, 1), c = i.heap[1], i.heap[--i.heap_max] = l, i.heap[--i.heap_max] = c, r[2 * d] = r[2 * l] + r[2 * c], i.depth[d] = Math.max(i.depth[l], i.depth[c]) + 1, r[2 * l + 1] = r[2 * c + 1] = d, i.heap[1] = d++, i.pqdownheap(r, 1)
                    } while (i.heap_len >= 2);
                    i.heap[--i.heap_max] = i.heap[1],
                        function(e) {
                            const i = t.dyn_tree,
                                r = t.stat_desc.static_tree,
                                o = t.stat_desc.extra_bits,
                                s = t.stat_desc.extra_base,
                                l = t.stat_desc.max_length;
                            let c, d, u, p, h, f, m = 0;
                            for (p = 0; p <= n; p++) e.bl_count[p] = 0;
                            for (i[2 * e.heap[e.heap_max] + 1] = 0, c = e.heap_max + 1; c < a; c++) d = e.heap[c], p = i[2 * i[2 * d + 1] + 1] + 1, p > l && (p = l, m++), i[2 * d + 1] = p, d > t.max_code || (e.bl_count[p]++, h = 0, d >= s && (h = o[d - s]), f = i[2 * d], e.opt_len += f * (p + h), r && (e.static_len += f * (r[2 * d + 1] + h)));
                            if (0 !== m) {
                                do {
                                    for (p = l - 1; 0 === e.bl_count[p];) p--;
                                    e.bl_count[p]--, e.bl_count[p + 1] += 2, e.bl_count[l]--, m -= 2
                                } while (m > 0);
                                for (p = l; 0 !== p; p--)
                                    for (d = e.bl_count[p]; 0 !== d;) u = e.heap[--c], u > t.max_code || (i[2 * u + 1] != p && (e.opt_len += (p - i[2 * u + 1]) * i[2 * u], i[2 * u + 1] = p), d--)
                            }
                        }(i),
                        function(t, i, r) {
                            const a = [];
                            let o, s, l, c = 0;
                            for (o = 1; o <= n; o++) a[o] = c = c + r[o - 1] << 1;
                            for (s = 0; s <= i; s++) l = t[2 * s + 1], 0 !== l && (t[2 * s] = e(a[l]++, l))
                        }(r, t.max_code, i.bl_count)
                }
            }

            function u(t, e, i, n, r) {
                const a = this;
                a.static_tree = t, a.extra_bits = e, a.extra_base = i, a.elems = n, a.max_length = r
            }
            d._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], d.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], d.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], d.d_code = function(t) {
                return t < 256 ? c[t] : c[256 + (t >>> 7)]
            }, d.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], d.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], d.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], d.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], u.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], u.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], u.static_l_desc = new u(u.static_ltree, d.extra_lbits, 257, 286, n), u.static_d_desc = new u(u.static_dtree, d.extra_dbits, 0, 30, n), u.static_bl_desc = new u(null, d.extra_blbits, 0, 19, 7);

            function p(t, e, i, n, r) {
                const a = this;
                a.good_length = t, a.max_lazy = e, a.nice_length = i, a.max_chain = n, a.func = r
            }
            const h = [new p(0, 0, 0, 0, 0), new p(4, 4, 8, 4, 1), new p(4, 5, 16, 8, 1), new p(4, 6, 32, 32, 1), new p(4, 4, 16, 16, 2), new p(8, 16, 32, 32, 2), new p(8, 16, 128, 128, 2), new p(8, 32, 128, 256, 2), new p(32, 128, 258, 1024, 2), new p(32, 258, 258, 4096, 2)],
                f = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""],
                m = 113,
                g = 666,
                v = 258,
                b = 262;

            function x(t, e, i, n) {
                const r = t[2 * e],
                    a = t[2 * i];
                return r < a || r == a && n[e] <= n[i]
            }

            function w() {
                const t = this;
                let e, i, n, a, c, p, w, y, A, _, C, k, E, B, S, z, M, F, D, U, T, L, R, Z, $, O, I, P, j, N, H, W, q;
                const V = new d,
                    Y = new d,
                    X = new d;
                let G, Q, K, J, tt, et, it, nt;

                function rt() {
                    let e;
                    for (e = 0; e < 286; e++) H[2 * e] = 0;
                    for (e = 0; e < 30; e++) W[2 * e] = 0;
                    for (e = 0; e < 19; e++) q[2 * e] = 0;
                    H[512] = 1, t.opt_len = t.static_len = 0, K = tt = 0
                }

                function at(t, e) {
                    let i, n = -1,
                        r = t[1],
                        a = 0,
                        o = 7,
                        s = 4;
                    0 === r && (o = 138, s = 3), t[2 * (e + 1) + 1] = 65535;
                    for (let l = 0; l <= e; l++) i = r, r = t[2 * (l + 1) + 1], ++a < o && i == r || (a < s ? q[2 * i] += a : 0 !== i ? (i != n && q[2 * i]++, q[32]++) : a <= 10 ? q[34]++ : q[36]++, a = 0, n = i, 0 === r ? (o = 138, s = 3) : i == r ? (o = 6, s = 3) : (o = 7, s = 4))
                }

                function ot(e) {
                    t.pending_buf[t.pending++] = e
                }

                function st(t) {
                    ot(255 & t), ot(t >>> 8 & 255)
                }

                function lt(t, e) {
                    let i;
                    const n = e;
                    nt > 16 - n ? (i = t, it |= i << nt & 65535, st(it), it = i >>> 16 - nt, nt += n - 16) : (it |= t << nt & 65535, nt += n)
                }

                function ct(t, e) {
                    const i = 2 * t;
                    lt(65535 & e[i], 65535 & e[i + 1])
                }

                function dt(t, e) {
                    let i, n, r = -1,
                        a = t[1],
                        o = 0,
                        s = 7,
                        l = 4;
                    for (0 === a && (s = 138, l = 3), i = 0; i <= e; i++)
                        if (n = a, a = t[2 * (i + 1) + 1], !(++o < s && n == a)) {
                            if (o < l)
                                do {
                                    ct(n, q)
                                } while (0 != --o);
                            else 0 !== n ? (n != r && (ct(n, q), o--), ct(16, q), lt(o - 3, 2)) : o <= 10 ? (ct(17, q), lt(o - 3, 3)) : (ct(18, q), lt(o - 11, 7));
                            o = 0, r = n, 0 === a ? (s = 138, l = 3) : n == a ? (s = 6, l = 3) : (s = 7, l = 4)
                        }
                }

                function ut() {
                    16 == nt ? (st(it), it = 0, nt = 0) : nt >= 8 && (ot(255 & it), it >>>= 8, nt -= 8)
                }

                function pt(e, i) {
                    let n, a, o;
                    if (t.pending_buf[J + 2 * K] = e >>> 8 & 255, t.pending_buf[J + 2 * K + 1] = 255 & e, t.pending_buf[G + K] = 255 & i, K++, 0 === e ? H[2 * i]++ : (tt++, e--, H[2 * (d._length_code[i] + r + 1)]++, W[2 * d.d_code(e)]++), 0 == (8191 & K) && I > 2) {
                        for (n = 8 * K, a = T - M, o = 0; o < 30; o++) n += W[2 * o] * (5 + d.extra_dbits[o]);
                        if (n >>>= 3, tt < Math.floor(K / 2) && n < Math.floor(a / 2)) return !0
                    }
                    return K == Q - 1
                }

                function ht(e, i) {
                    let n, a, s, l, c = 0;
                    if (0 !== K)
                        do {
                            n = t.pending_buf[J + 2 * c] << 8 & 65280 | 255 & t.pending_buf[J + 2 * c + 1], a = 255 & t.pending_buf[G + c], c++, 0 === n ? ct(a, e) : (s = d._length_code[a], ct(s + r + 1, e), l = d.extra_lbits[s], 0 !== l && (a -= d.base_length[s], lt(a, l)), n--, s = d.d_code(n), ct(s, i), l = d.extra_dbits[s], 0 !== l && (n -= d.base_dist[s], lt(n, l)))
                        } while (c < K);
                    ct(o, e), et = e[513]
                }

                function ft() {
                    nt > 8 ? st(it) : nt > 0 && ot(255 & it), it = 0, nt = 0
                }

                function mt(e, i, n) {
                    lt(0 + (n ? 1 : 0), 3),
                        function(e, i, n) {
                            ft(), et = 8, n && (st(i), st(~i)), t.pending_buf.set(y.subarray(e, e + i), t.pending), t.pending += i
                        }(e, i, !0)
                }

                function gt(e, i, n) {
                    let r, a, o = 0;
                    I > 0 ? (V.build_tree(t), Y.build_tree(t), o = function() {
                        let e;
                        for (at(H, V.max_code), at(W, Y.max_code), X.build_tree(t), e = 18; e >= 3 && 0 === q[2 * d.bl_order[e] + 1]; e--);
                        return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                    }(), r = t.opt_len + 3 + 7 >>> 3, a = t.static_len + 3 + 7 >>> 3, a <= r && (r = a)) : r = a = i + 5, i + 4 <= r && -1 != e ? mt(e, i, n) : a == r ? (lt(2 + (n ? 1 : 0), 3), ht(u.static_ltree, u.static_dtree)) : (lt(4 + (n ? 1 : 0), 3), function(t, e, i) {
                        let n;
                        for (lt(t - 257, 5), lt(e - 1, 5), lt(i - 4, 4), n = 0; n < i; n++) lt(q[2 * d.bl_order[n] + 1], 3);
                        dt(H, t - 1), dt(W, e - 1)
                    }(V.max_code + 1, Y.max_code + 1, o + 1), ht(H, W)), rt(), n && ft()
                }

                function vt(t) {
                    gt(M >= 0 ? M : -1, T - M, t), M = T, e.flush_pending()
                }

                function bt() {
                    let t, i, n, r;
                    do {
                        if (r = A - R - T, 0 === r && 0 === T && 0 === R) r = c;
                        else if (-1 == r) r--;
                        else if (T >= c + c - b) {
                            y.set(y.subarray(c, c + c), 0), L -= c, T -= c, M -= c, t = E, n = t;
                            do {
                                i = 65535 & C[--n], C[n] = i >= c ? i - c : 0
                            } while (0 != --t);
                            t = c, n = t;
                            do {
                                i = 65535 & _[--n], _[n] = i >= c ? i - c : 0
                            } while (0 != --t);
                            r += c
                        }
                        if (0 === e.avail_in) return;
                        t = e.read_buf(y, T + R, r), R += t, R >= 3 && (k = 255 & y[T], k = (k << z ^ 255 & y[T + 1]) & S)
                    } while (R < b && 0 !== e.avail_in)
                }

                function xt(t) {
                    let e, i, n = $,
                        r = T,
                        a = Z;
                    const o = T > c - b ? T - (c - b) : 0;
                    let s = N;
                    const l = w,
                        d = T + v;
                    let u = y[r + a - 1],
                        p = y[r + a];
                    Z >= j && (n >>= 2), s > R && (s = R);
                    do {
                        if (e = t, y[e + a] == p && y[e + a - 1] == u && y[e] == y[r] && y[++e] == y[r + 1]) {
                            r += 2, e++;
                            do {} while (y[++r] == y[++e] && y[++r] == y[++e] && y[++r] == y[++e] && y[++r] == y[++e] && y[++r] == y[++e] && y[++r] == y[++e] && y[++r] == y[++e] && y[++r] == y[++e] && r < d);
                            if (i = v - (d - r), r = d - v, i > a) {
                                if (L = t, a = i, i >= s) break;
                                u = y[r + a - 1], p = y[r + a]
                            }
                        }
                    } while ((t = 65535 & _[t & l]) > o && 0 != --n);
                    return a <= R ? a : R
                }

                function wt(e) {
                    return e.total_in = e.total_out = 0, e.msg = null, t.pending = 0, t.pending_out = 0, i = m, a = 0, V.dyn_tree = H, V.stat_desc = u.static_l_desc, Y.dyn_tree = W, Y.stat_desc = u.static_d_desc, X.dyn_tree = q, X.stat_desc = u.static_bl_desc, it = 0, nt = 0, et = 8, rt(),
                        function() {
                            A = 2 * c, C[E - 1] = 0;
                            for (let t = 0; t < E - 1; t++) C[t] = 0;
                            O = h[I].max_lazy, j = h[I].good_length, N = h[I].nice_length, $ = h[I].max_chain, T = 0, M = 0, R = 0, F = Z = 2, U = 0, k = 0
                        }(), 0
                }
                t.depth = [], t.bl_count = [], t.heap = [], H = [], W = [], q = [], t.pqdownheap = function(e, i) {
                    const n = t.heap,
                        r = n[i];
                    let a = i << 1;
                    for (; a <= t.heap_len && (a < t.heap_len && x(e, n[a + 1], n[a], t.depth) && a++, !x(e, r, n[a], t.depth));) n[i] = n[a], i = a, a <<= 1;
                    n[i] = r
                }, t.deflateInit = function(e, i, r, a, o, l) {
                    return a || (a = 8), o || (o = 8), l || (l = 0), e.msg = null, -1 == i && (i = 6), o < 1 || o > 9 || 8 != a || r < 9 || r > 15 || i < 0 || i > 9 || l < 0 || l > 2 ? s : (e.dstate = t, p = r, c = 1 << p, w = c - 1, B = o + 7, E = 1 << B, S = E - 1, z = Math.floor((B + 3 - 1) / 3), y = new Uint8Array(2 * c), _ = [], C = [], Q = 1 << o + 6, t.pending_buf = new Uint8Array(4 * Q), n = 4 * Q, J = Math.floor(Q / 2), G = 3 * Q, I = i, P = l, wt(e))
                }, t.deflateEnd = function() {
                    return 42 != i && i != m && i != g ? s : (t.pending_buf = null, C = null, _ = null, y = null, t.dstate = null, i == m ? -3 : 0)
                }, t.deflateParams = function(t, e, i) {
                    let n = 0;
                    return -1 == e && (e = 6), e < 0 || e > 9 || i < 0 || i > 2 ? s : (h[I].func != h[e].func && 0 !== t.total_in && (n = t.deflate(1)), I != e && (I = e, O = h[I].max_lazy, j = h[I].good_length, N = h[I].nice_length, $ = h[I].max_chain), P = i, n)
                }, t.deflateSetDictionary = function(t, e, n) {
                    let r, a = n,
                        o = 0;
                    if (!e || 42 != i) return s;
                    if (a < 3) return 0;
                    for (a > c - b && (a = c - b, o = n - a), y.set(e.subarray(o, o + a), 0), T = a, M = a, k = 255 & y[0], k = (k << z ^ 255 & y[1]) & S, r = 0; r <= a - 3; r++) k = (k << z ^ 255 & y[r + 2]) & S, _[r & w] = C[k], C[k] = r;
                    return 0
                }, t.deflate = function(r, d) {
                    let v, x, A, B, $;
                    if (d > 4 || d < 0) return s;
                    if (!r.next_out || !r.next_in && 0 !== r.avail_in || i == g && 4 != d) return r.msg = f[4], s;
                    if (0 === r.avail_out) return r.msg = f[7], l;
                    var j;
                    if (e = r, B = a, a = d, 42 == i && (x = 8 + (p - 8 << 4) << 8, A = (I - 1 & 255) >> 1, A > 3 && (A = 3), x |= A << 6, 0 !== T && (x |= 32), x += 31 - x % 31, i = m, ot((j = x) >> 8 & 255), ot(255 & j)), 0 !== t.pending) {
                        if (e.flush_pending(), 0 === e.avail_out) return a = -1, 0
                    } else if (0 === e.avail_in && d <= B && 4 != d) return e.msg = f[7], l;
                    if (i == g && 0 !== e.avail_in) return r.msg = f[7], l;
                    if (0 !== e.avail_in || 0 !== R || 0 != d && i != g) {
                        switch ($ = -1, h[I].func) {
                            case 0:
                                $ = function(t) {
                                    let i, r = 65535;
                                    for (r > n - 5 && (r = n - 5);;) {
                                        if (R <= 1) {
                                            if (bt(), 0 === R && 0 == t) return 0;
                                            if (0 === R) break
                                        }
                                        if (T += R, R = 0, i = M + r, (0 === T || T >= i) && (R = T - i, T = i, vt(!1), 0 === e.avail_out)) return 0;
                                        if (T - M >= c - b && (vt(!1), 0 === e.avail_out)) return 0
                                    }
                                    return vt(4 == t), 0 === e.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                                }(d);
                                break;
                            case 1:
                                $ = function(t) {
                                    let i, n = 0;
                                    for (;;) {
                                        if (R < b) {
                                            if (bt(), R < b && 0 == t) return 0;
                                            if (0 === R) break
                                        }
                                        if (R >= 3 && (k = (k << z ^ 255 & y[T + 2]) & S, n = 65535 & C[k], _[T & w] = C[k], C[k] = T), 0 !== n && (T - n & 65535) <= c - b && 2 != P && (F = xt(n)), F >= 3)
                                            if (i = pt(T - L, F - 3), R -= F, F <= O && R >= 3) {
                                                F--;
                                                do {
                                                    T++, k = (k << z ^ 255 & y[T + 2]) & S, n = 65535 & C[k], _[T & w] = C[k], C[k] = T
                                                } while (0 != --F);
                                                T++
                                            } else T += F, F = 0, k = 255 & y[T], k = (k << z ^ 255 & y[T + 1]) & S;
                                        else i = pt(0, 255 & y[T]), R--, T++;
                                        if (i && (vt(!1), 0 === e.avail_out)) return 0
                                    }
                                    return vt(4 == t), 0 === e.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                                }(d);
                                break;
                            case 2:
                                $ = function(t) {
                                    let i, n, r = 0;
                                    for (;;) {
                                        if (R < b) {
                                            if (bt(), R < b && 0 == t) return 0;
                                            if (0 === R) break
                                        }
                                        if (R >= 3 && (k = (k << z ^ 255 & y[T + 2]) & S, r = 65535 & C[k], _[T & w] = C[k], C[k] = T), Z = F, D = L, F = 2, 0 !== r && Z < O && (T - r & 65535) <= c - b && (2 != P && (F = xt(r)), F <= 5 && (1 == P || 3 == F && T - L > 4096) && (F = 2)), Z >= 3 && F <= Z) {
                                            n = T + R - 3, i = pt(T - 1 - D, Z - 3), R -= Z - 1, Z -= 2;
                                            do {
                                                ++T <= n && (k = (k << z ^ 255 & y[T + 2]) & S, r = 65535 & C[k], _[T & w] = C[k], C[k] = T)
                                            } while (0 != --Z);
                                            if (U = 0, F = 2, T++, i && (vt(!1), 0 === e.avail_out)) return 0
                                        } else if (0 !== U) {
                                            if (i = pt(0, 255 & y[T - 1]), i && vt(!1), T++, R--, 0 === e.avail_out) return 0
                                        } else U = 1, T++, R--
                                    }
                                    return 0 !== U && (i = pt(0, 255 & y[T - 1]), U = 0), vt(4 == t), 0 === e.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                                }(d)
                        }
                        if (2 != $ && 3 != $ || (i = g), 0 == $ || 2 == $) return 0 === e.avail_out && (a = -1), 0;
                        if (1 == $) {
                            if (1 == d) lt(2, 3), ct(o, u.static_ltree), ut(), 1 + et + 10 - nt < 9 && (lt(2, 3), ct(o, u.static_ltree), ut()), et = 7;
                            else if (mt(0, 0, !1), 3 == d)
                                for (v = 0; v < E; v++) C[v] = 0;
                            if (e.flush_pending(), 0 === e.avail_out) return a = -1, 0
                        }
                    }
                    return 4 != d ? 0 : 1
                }
            }

            function y() {
                const t = this;
                t.next_in_index = 0, t.next_out_index = 0, t.avail_in = 0, t.total_in = 0, t.avail_out = 0, t.total_out = 0
            }
            y.prototype = {
                deflateInit: function(t, e) {
                    const i = this;
                    return i.dstate = new w, e || (e = n), i.dstate.deflateInit(i, t, e)
                },
                deflate: function(t) {
                    const e = this;
                    return e.dstate ? e.dstate.deflate(e, t) : s
                },
                deflateEnd: function() {
                    const t = this;
                    if (!t.dstate) return s;
                    const e = t.dstate.deflateEnd();
                    return t.dstate = null, e
                },
                deflateParams: function(t, e) {
                    const i = this;
                    return i.dstate ? i.dstate.deflateParams(i, t, e) : s
                },
                deflateSetDictionary: function(t, e) {
                    const i = this;
                    return i.dstate ? i.dstate.deflateSetDictionary(i, t, e) : s
                },
                read_buf: function(t, e, i) {
                    const n = this;
                    let r = n.avail_in;
                    return r > i && (r = i), 0 === r ? 0 : (n.avail_in -= r, t.set(n.next_in.subarray(n.next_in_index, n.next_in_index + r), e), n.next_in_index += r, n.total_in += r, r)
                },
                flush_pending: function() {
                    const t = this;
                    let e = t.dstate.pending;
                    e > t.avail_out && (e = t.avail_out), 0 !== e && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + e), t.next_out_index), t.next_out_index += e, t.dstate.pending_out += e, t.total_out += e, t.avail_out -= e, t.dstate.pending -= e, 0 === t.dstate.pending && (t.dstate.pending_out = 0))
                }
            };
            const A = function(t) {
                    const e = new y,
                        i = 512,
                        n = new Uint8Array(i);
                    let r = t ? t.level : -1;
                    void 0 === r && (r = -1), e.deflateInit(r), e.next_out = n, this.append = function(t, r) {
                        let a, o, s = 0,
                            l = 0,
                            c = 0;
                        const d = [];
                        if (t.length) {
                            e.next_in_index = 0, e.next_in = t, e.avail_in = t.length;
                            do {
                                if (e.next_out_index = 0, e.avail_out = i, a = e.deflate(0), 0 != a) throw new Error("deflating: " + e.msg);
                                e.next_out_index && (e.next_out_index == i ? d.push(new Uint8Array(n)) : d.push(new Uint8Array(n.subarray(0, e.next_out_index)))), c += e.next_out_index, r && e.next_in_index > 0 && e.next_in_index != s && (r(e.next_in_index), s = e.next_in_index)
                            } while (e.avail_in > 0 || 0 === e.avail_out);
                            return o = new Uint8Array(c), d.forEach((function(t) {
                                o.set(t, l), l += t.length
                            })), o
                        }
                    }, this.flush = function() {
                        let t, r, a = 0,
                            o = 0;
                        const s = [];
                        do {
                            if (e.next_out_index = 0, e.avail_out = i, t = e.deflate(4), 1 != t && 0 != t) throw new Error("deflating: " + e.msg);
                            i - e.avail_out > 0 && s.push(new Uint8Array(n.subarray(0, e.next_out_index))), o += e.next_out_index
                        } while (e.avail_in > 0 || 0 === e.avail_out);
                        return e.deflateEnd(), r = new Uint8Array(o), s.forEach((function(t) {
                            r.set(t, a), a += t.length
                        })), r
                    }
                },
                _ = 0,
                C = 1,
                k = -2,
                E = -3,
                B = -4,
                S = -5,
                z = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
                M = 1440,
                F = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255],
                D = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577],
                U = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112],
                L = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
                R = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                Z = 15;

            function $() {
                let t, e, i, n, r, a;

                function o(t, e, o, s, l, c, d, u, p, h, f) {
                    let m, g, v, b, x, w, y, A, C, k, B, z, F, D, U;
                    k = 0, x = o;
                    do {
                        i[t[e + k]]++, k++, x--
                    } while (0 !== x);
                    if (i[0] == o) return d[0] = -1, u[0] = 0, _;
                    for (A = u[0], w = 1; w <= Z && 0 === i[w]; w++);
                    for (y = w, A < w && (A = w), x = Z; 0 !== x && 0 === i[x]; x--);
                    for (v = x, A > x && (A = x), u[0] = A, D = 1 << w; w < x; w++, D <<= 1)
                        if ((D -= i[w]) < 0) return E;
                    if ((D -= i[x]) < 0) return E;
                    for (i[x] += D, a[1] = w = 0, k = 1, F = 2; 0 != --x;) a[F] = w += i[k], F++, k++;
                    x = 0, k = 0;
                    do {
                        0 !== (w = t[e + k]) && (f[a[w]++] = x), k++
                    } while (++x < o);
                    for (o = a[v], a[0] = x = 0, k = 0, b = -1, z = -A, r[0] = 0, B = 0, U = 0; y <= v; y++)
                        for (m = i[y]; 0 != m--;) {
                            for (; y > z + A;) {
                                if (b++, z += A, U = v - z, U = U > A ? A : U, (g = 1 << (w = y - z)) > m + 1 && (g -= m + 1, F = y, w < U))
                                    for (; ++w < U && !((g <<= 1) <= i[++F]);) g -= i[F];
                                if (U = 1 << w, h[0] + U > M) return E;
                                r[b] = B = h[0], h[0] += U, 0 !== b ? (a[b] = x, n[0] = w, n[1] = A, w = x >>> z - A, n[2] = B - r[b - 1] - w, p.set(n, 3 * (r[b - 1] + w))) : d[0] = B
                            }
                            for (n[1] = y - z, k >= o ? n[0] = 192 : f[k] < s ? (n[0] = f[k] < 256 ? 0 : 96, n[2] = f[k++]) : (n[0] = c[f[k] - s] + 16 + 64, n[2] = l[f[k++] - s]), g = 1 << y - z, w = x >>> z; w < U; w += g) p.set(n, 3 * (B + w));
                            for (w = 1 << y - 1; 0 != (x & w); w >>>= 1) x ^= w;
                            for (x ^= w, C = (1 << z) - 1;
                                (x & C) != a[b];) b--, z -= A, C = (1 << z) - 1
                        }
                    return 0 !== D && 1 != v ? S : _
                }

                function s(o) {
                    let s;
                    for (t || (t = [], e = [], i = new Int32Array(Z + 1), n = [], r = new Int32Array(Z), a = new Int32Array(Z + 1)), e.length < o && (e = []), s = 0; s < o; s++) e[s] = 0;
                    for (s = 0; s < Z + 1; s++) i[s] = 0;
                    for (s = 0; s < 3; s++) n[s] = 0;
                    r.set(i.subarray(0, Z), 0), a.set(i.subarray(0, Z + 1), 0)
                }
                this.inflate_trees_bits = function(i, n, r, a, l) {
                    let c;
                    return s(19), t[0] = 0, c = o(i, 0, 19, 19, null, null, r, n, a, t, e), c == E ? l.msg = "oversubscribed dynamic bit lengths tree" : c != S && 0 !== n[0] || (l.msg = "incomplete dynamic bit lengths tree", c = E), c
                }, this.inflate_trees_dynamic = function(i, n, r, a, l, c, d, u, p) {
                    let h;
                    return s(288), t[0] = 0, h = o(r, 0, i, 257, U, T, c, a, u, t, e), h != _ || 0 === a[0] ? (h == E ? p.msg = "oversubscribed literal/length tree" : h != B && (p.msg = "incomplete literal/length tree", h = E), h) : (s(288), h = o(r, i, n, 0, L, R, d, l, u, t, e), h != _ || 0 === l[0] && i > 257 ? (h == E ? p.msg = "oversubscribed distance tree" : h == S ? (p.msg = "incomplete distance tree", h = E) : h != B && (p.msg = "empty distance tree with lengths", h = E), h) : _)
                }
            }
            $.inflate_trees_fixed = function(t, e, i, n) {
                return t[0] = 9, e[0] = 5, i[0] = F, n[0] = D, _
            };
            const O = 0,
                I = 1,
                P = 2,
                j = 3,
                N = 4,
                H = 5,
                W = 6,
                q = 7,
                V = 8,
                Y = 9;

            function X() {
                const t = this;
                let e, i, n, r, a = 0,
                    o = 0,
                    s = 0,
                    l = 0,
                    c = 0,
                    d = 0,
                    u = 0,
                    p = 0,
                    h = 0,
                    f = 0;

                function m(t, e, i, n, r, a, o, s) {
                    let l, c, d, u, p, h, f, m, g, v, b, x, w, y, A, k;
                    f = s.next_in_index, m = s.avail_in, p = o.bitb, h = o.bitk, g = o.write, v = g < o.read ? o.read - g - 1 : o.end - g, b = z[t], x = z[e];
                    do {
                        for (; h < 20;) m--, p |= (255 & s.read_byte(f++)) << h, h += 8;
                        if (l = p & b, c = i, d = n, k = 3 * (d + l), 0 !== (u = c[k]))
                            for (;;) {
                                if (p >>= c[k + 1], h -= c[k + 1], 0 != (16 & u)) {
                                    for (u &= 15, w = c[k + 2] + (p & z[u]), p >>= u, h -= u; h < 15;) m--, p |= (255 & s.read_byte(f++)) << h, h += 8;
                                    for (l = p & x, c = r, d = a, k = 3 * (d + l), u = c[k];;) {
                                        if (p >>= c[k + 1], h -= c[k + 1], 0 != (16 & u)) {
                                            for (u &= 15; h < u;) m--, p |= (255 & s.read_byte(f++)) << h, h += 8;
                                            if (y = c[k + 2] + (p & z[u]), p >>= u, h -= u, v -= w, g >= y) A = g - y, g - A > 0 && 2 > g - A ? (o.window[g++] = o.window[A++], o.window[g++] = o.window[A++], w -= 2) : (o.window.set(o.window.subarray(A, A + 2), g), g += 2, A += 2, w -= 2);
                                            else {
                                                A = g - y;
                                                do {
                                                    A += o.end
                                                } while (A < 0);
                                                if (u = o.end - A, w > u) {
                                                    if (w -= u, g - A > 0 && u > g - A)
                                                        do {
                                                            o.window[g++] = o.window[A++]
                                                        } while (0 != --u);
                                                    else o.window.set(o.window.subarray(A, A + u), g), g += u, A += u, u = 0;
                                                    A = 0
                                                }
                                            }
                                            if (g - A > 0 && w > g - A)
                                                do {
                                                    o.window[g++] = o.window[A++]
                                                } while (0 != --w);
                                            else o.window.set(o.window.subarray(A, A + w), g), g += w, A += w, w = 0;
                                            break
                                        }
                                        if (0 != (64 & u)) return s.msg = "invalid distance code", w = s.avail_in - m, w = h >> 3 < w ? h >> 3 : w, m += w, f -= w, h -= w << 3, o.bitb = p, o.bitk = h, s.avail_in = m, s.total_in += f - s.next_in_index, s.next_in_index = f, o.write = g, E;
                                        l += c[k + 2], l += p & z[u], k = 3 * (d + l), u = c[k]
                                    }
                                    break
                                }
                                if (0 != (64 & u)) return 0 != (32 & u) ? (w = s.avail_in - m, w = h >> 3 < w ? h >> 3 : w, m += w, f -= w, h -= w << 3, o.bitb = p, o.bitk = h, s.avail_in = m, s.total_in += f - s.next_in_index, s.next_in_index = f, o.write = g, C) : (s.msg = "invalid literal/length code", w = s.avail_in - m, w = h >> 3 < w ? h >> 3 : w, m += w, f -= w, h -= w << 3, o.bitb = p, o.bitk = h, s.avail_in = m, s.total_in += f - s.next_in_index, s.next_in_index = f, o.write = g, E);
                                if (l += c[k + 2], l += p & z[u], k = 3 * (d + l), 0 === (u = c[k])) {
                                    p >>= c[k + 1], h -= c[k + 1], o.window[g++] = c[k + 2], v--;
                                    break
                                }
                            } else p >>= c[k + 1], h -= c[k + 1], o.window[g++] = c[k + 2], v--
                    } while (v >= 258 && m >= 10);
                    return w = s.avail_in - m, w = h >> 3 < w ? h >> 3 : w, m += w, f -= w, h -= w << 3, o.bitb = p, o.bitk = h, s.avail_in = m, s.total_in += f - s.next_in_index, s.next_in_index = f, o.write = g, _
                }
                t.init = function(t, a, o, s, l, c) {
                    e = O, u = t, p = a, n = o, h = s, r = l, f = c, i = null
                }, t.proc = function(t, g, v) {
                    let b, x, w, y, A, B, S, M = 0,
                        F = 0,
                        D = 0;
                    for (D = g.next_in_index, y = g.avail_in, M = t.bitb, F = t.bitk, A = t.write, B = A < t.read ? t.read - A - 1 : t.end - A;;) switch (e) {
                        case O:
                            if (B >= 258 && y >= 10 && (t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, v = m(u, p, n, h, r, f, t, g), D = g.next_in_index, y = g.avail_in, M = t.bitb, F = t.bitk, A = t.write, B = A < t.read ? t.read - A - 1 : t.end - A, v != _)) {
                                e = v == C ? q : Y;
                                break
                            }
                            s = u, i = n, o = h, e = I;
                        case I:
                            for (b = s; F < b;) {
                                if (0 === y) return t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                                v = _, y--, M |= (255 & g.read_byte(D++)) << F, F += 8
                            }
                            if (x = 3 * (o + (M & z[b])), M >>>= i[x + 1], F -= i[x + 1], w = i[x], 0 === w) {
                                l = i[x + 2], e = W;
                                break
                            }
                            if (0 != (16 & w)) {
                                c = 15 & w, a = i[x + 2], e = P;
                                break
                            }
                            if (0 == (64 & w)) {
                                s = w, o = x / 3 + i[x + 2];
                                break
                            }
                            if (0 != (32 & w)) {
                                e = q;
                                break
                            }
                            return e = Y, g.msg = "invalid literal/length code", v = E, t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                        case P:
                            for (b = c; F < b;) {
                                if (0 === y) return t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                                v = _, y--, M |= (255 & g.read_byte(D++)) << F, F += 8
                            }
                            a += M & z[b], M >>= b, F -= b, s = p, i = r, o = f, e = j;
                        case j:
                            for (b = s; F < b;) {
                                if (0 === y) return t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                                v = _, y--, M |= (255 & g.read_byte(D++)) << F, F += 8
                            }
                            if (x = 3 * (o + (M & z[b])), M >>= i[x + 1], F -= i[x + 1], w = i[x], 0 != (16 & w)) {
                                c = 15 & w, d = i[x + 2], e = N;
                                break
                            }
                            if (0 == (64 & w)) {
                                s = w, o = x / 3 + i[x + 2];
                                break
                            }
                            return e = Y, g.msg = "invalid distance code", v = E, t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                        case N:
                            for (b = c; F < b;) {
                                if (0 === y) return t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                                v = _, y--, M |= (255 & g.read_byte(D++)) << F, F += 8
                            }
                            d += M & z[b], M >>= b, F -= b, e = H;
                        case H:
                            for (S = A - d; S < 0;) S += t.end;
                            for (; 0 !== a;) {
                                if (0 === B && (A == t.end && 0 !== t.read && (A = 0, B = A < t.read ? t.read - A - 1 : t.end - A), 0 === B && (t.write = A, v = t.inflate_flush(g, v), A = t.write, B = A < t.read ? t.read - A - 1 : t.end - A, A == t.end && 0 !== t.read && (A = 0, B = A < t.read ? t.read - A - 1 : t.end - A), 0 === B))) return t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                                t.window[A++] = t.window[S++], B--, S == t.end && (S = 0), a--
                            }
                            e = O;
                            break;
                        case W:
                            if (0 === B && (A == t.end && 0 !== t.read && (A = 0, B = A < t.read ? t.read - A - 1 : t.end - A), 0 === B && (t.write = A, v = t.inflate_flush(g, v), A = t.write, B = A < t.read ? t.read - A - 1 : t.end - A, A == t.end && 0 !== t.read && (A = 0, B = A < t.read ? t.read - A - 1 : t.end - A), 0 === B))) return t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                            v = _, t.window[A++] = l, B--, e = O;
                            break;
                        case q:
                            if (F > 7 && (F -= 8, y++, D--), t.write = A, v = t.inflate_flush(g, v), A = t.write, B = A < t.read ? t.read - A - 1 : t.end - A, t.read != t.write) return t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                            e = V;
                        case V:
                            return v = C, t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                        case Y:
                            return v = E, t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v);
                        default:
                            return v = k, t.bitb = M, t.bitk = F, g.avail_in = y, g.total_in += D - g.next_in_index, g.next_in_index = D, t.write = A, t.inflate_flush(g, v)
                    }
                }, t.free = function() {}
            }
            const G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                Q = 0,
                K = 1,
                J = 2,
                tt = 3,
                et = 4,
                it = 5,
                nt = 6,
                rt = 7,
                at = 8,
                ot = 9;

            function st(t, e) {
                const i = this;
                let n, r = Q,
                    a = 0,
                    o = 0,
                    s = 0;
                const l = [0],
                    c = [0],
                    d = new X;
                let u = 0,
                    p = new Int32Array(3 * M);
                const h = new $;
                i.bitk = 0, i.bitb = 0, i.window = new Uint8Array(e), i.end = e, i.read = 0, i.write = 0, i.reset = function(t, e) {
                    e && (e[0] = 0), r == nt && d.free(t), r = Q, i.bitk = 0, i.bitb = 0, i.read = i.write = 0
                }, i.reset(t, null), i.inflate_flush = function(t, e) {
                    let n, r, a;
                    return r = t.next_out_index, a = i.read, n = (a <= i.write ? i.write : i.end) - a, n > t.avail_out && (n = t.avail_out), 0 !== n && e == S && (e = _), t.avail_out -= n, t.total_out += n, t.next_out.set(i.window.subarray(a, a + n), r), r += n, a += n, a == i.end && (a = 0, i.write == i.end && (i.write = 0), n = i.write - a, n > t.avail_out && (n = t.avail_out), 0 !== n && e == S && (e = _), t.avail_out -= n, t.total_out += n, t.next_out.set(i.window.subarray(a, a + n), r), r += n, a += n), t.next_out_index = r, i.read = a, e
                }, i.proc = function(t, e) {
                    let f, m, g, v, b, x, w, y;
                    for (v = t.next_in_index, b = t.avail_in, m = i.bitb, g = i.bitk, x = i.write, w = x < i.read ? i.read - x - 1 : i.end - x;;) {
                        let A, B, S, M, F, D, U, T;
                        switch (r) {
                            case Q:
                                for (; g < 3;) {
                                    if (0 === b) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                    e = _, b--, m |= (255 & t.read_byte(v++)) << g, g += 8
                                }
                                switch (f = 7 & m, u = 1 & f, f >>> 1) {
                                    case 0:
                                        m >>>= 3, g -= 3, f = 7 & g, m >>>= f, g -= f, r = K;
                                        break;
                                    case 1:
                                        A = [], B = [], S = [
                                            []
                                        ], M = [
                                            []
                                        ], $.inflate_trees_fixed(A, B, S, M), d.init(A[0], B[0], S[0], 0, M[0], 0), m >>>= 3, g -= 3, r = nt;
                                        break;
                                    case 2:
                                        m >>>= 3, g -= 3, r = tt;
                                        break;
                                    case 3:
                                        return m >>>= 3, g -= 3, r = ot, t.msg = "invalid block type", e = E, i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e)
                                }
                                break;
                            case K:
                                for (; g < 32;) {
                                    if (0 === b) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                    e = _, b--, m |= (255 & t.read_byte(v++)) << g, g += 8
                                }
                                if ((~m >>> 16 & 65535) != (65535 & m)) return r = ot, t.msg = "invalid stored block lengths", e = E, i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                a = 65535 & m, m = g = 0, r = 0 !== a ? J : 0 !== u ? rt : Q;
                                break;
                            case J:
                                if (0 === b) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                if (0 === w && (x == i.end && 0 !== i.read && (x = 0, w = x < i.read ? i.read - x - 1 : i.end - x), 0 === w && (i.write = x, e = i.inflate_flush(t, e), x = i.write, w = x < i.read ? i.read - x - 1 : i.end - x, x == i.end && 0 !== i.read && (x = 0, w = x < i.read ? i.read - x - 1 : i.end - x), 0 === w))) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                if (e = _, f = a, f > b && (f = b), f > w && (f = w), i.window.set(t.read_buf(v, f), x), v += f, b -= f, x += f, w -= f, 0 != (a -= f)) break;
                                r = 0 !== u ? rt : Q;
                                break;
                            case tt:
                                for (; g < 14;) {
                                    if (0 === b) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                    e = _, b--, m |= (255 & t.read_byte(v++)) << g, g += 8
                                }
                                if (o = f = 16383 & m, (31 & f) > 29 || (f >> 5 & 31) > 29) return r = ot, t.msg = "too many length or distance symbols", e = E, i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                if (f = 258 + (31 & f) + (f >> 5 & 31), !n || n.length < f) n = [];
                                else
                                    for (y = 0; y < f; y++) n[y] = 0;
                                m >>>= 14, g -= 14, s = 0, r = et;
                            case et:
                                for (; s < 4 + (o >>> 10);) {
                                    for (; g < 3;) {
                                        if (0 === b) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                        e = _, b--, m |= (255 & t.read_byte(v++)) << g, g += 8
                                    }
                                    n[G[s++]] = 7 & m, m >>>= 3, g -= 3
                                }
                                for (; s < 19;) n[G[s++]] = 0;
                                if (l[0] = 7, f = h.inflate_trees_bits(n, l, c, p, t), f != _) return (e = f) == E && (n = null, r = ot), i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                s = 0, r = it;
                            case it:
                                for (; f = o, !(s >= 258 + (31 & f) + (f >> 5 & 31));) {
                                    let a, d;
                                    for (f = l[0]; g < f;) {
                                        if (0 === b) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                        e = _, b--, m |= (255 & t.read_byte(v++)) << g, g += 8
                                    }
                                    if (f = p[3 * (c[0] + (m & z[f])) + 1], d = p[3 * (c[0] + (m & z[f])) + 2], d < 16) m >>>= f, g -= f, n[s++] = d;
                                    else {
                                        for (y = 18 == d ? 7 : d - 14, a = 18 == d ? 11 : 3; g < f + y;) {
                                            if (0 === b) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                            e = _, b--, m |= (255 & t.read_byte(v++)) << g, g += 8
                                        }
                                        if (m >>>= f, g -= f, a += m & z[y], m >>>= y, g -= y, y = s, f = o, y + a > 258 + (31 & f) + (f >> 5 & 31) || 16 == d && y < 1) return n = null, r = ot, t.msg = "invalid bit length repeat", e = E, i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                        d = 16 == d ? n[y - 1] : 0;
                                        do {
                                            n[y++] = d
                                        } while (0 != --a);
                                        s = y
                                    }
                                }
                                if (c[0] = -1, F = [], D = [], U = [], T = [], F[0] = 9, D[0] = 6, f = o, f = h.inflate_trees_dynamic(257 + (31 & f), 1 + (f >> 5 & 31), n, F, D, U, T, p, t), f != _) return f == E && (n = null, r = ot), e = f, i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                d.init(F[0], D[0], p, U[0], p, T[0]), r = nt;
                            case nt:
                                if (i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, (e = d.proc(i, t, e)) != C) return i.inflate_flush(t, e);
                                if (e = _, d.free(t), v = t.next_in_index, b = t.avail_in, m = i.bitb, g = i.bitk, x = i.write, w = x < i.read ? i.read - x - 1 : i.end - x, 0 === u) {
                                    r = Q;
                                    break
                                }
                                r = rt;
                            case rt:
                                if (i.write = x, e = i.inflate_flush(t, e), x = i.write, w = x < i.read ? i.read - x - 1 : i.end - x, i.read != i.write) return i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                                r = at;
                            case at:
                                return e = C, i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                            case ot:
                                return e = E, i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e);
                            default:
                                return e = k, i.bitb = m, i.bitk = g, t.avail_in = b, t.total_in += v - t.next_in_index, t.next_in_index = v, i.write = x, i.inflate_flush(t, e)
                        }
                    }
                }, i.free = function(t) {
                    i.reset(t, null), i.window = null, p = null
                }, i.set_dictionary = function(t, e, n) {
                    i.window.set(t.subarray(e, e + n), 0), i.read = i.write = n
                }, i.sync_point = function() {
                    return r == K ? 1 : 0
                }
            }
            const lt = 13,
                ct = [0, 0, 255, 255];

            function dt() {
                const t = this;

                function e(t) {
                    return t && t.istate ? (t.total_in = t.total_out = 0, t.msg = null, t.istate.mode = 7, t.istate.blocks.reset(t, null), _) : k
                }
                t.mode = 0, t.method = 0, t.was = [0], t.need = 0, t.marker = 0, t.wbits = 0, t.inflateEnd = function(e) {
                    return t.blocks && t.blocks.free(e), t.blocks = null, _
                }, t.inflateInit = function(i, n) {
                    return i.msg = null, t.blocks = null, n < 8 || n > 15 ? (t.inflateEnd(i), k) : (t.wbits = n, i.istate.blocks = new st(i, 1 << n), e(i), _)
                }, t.inflate = function(t, e) {
                    let i, n;
                    if (!t || !t.istate || !t.next_in) return k;
                    const r = t.istate;
                    for (e = 4 == e ? S : _, i = S;;) switch (r.mode) {
                        case 0:
                            if (0 === t.avail_in) return i;
                            if (i = e, t.avail_in--, t.total_in++, 8 != (15 & (r.method = t.read_byte(t.next_in_index++)))) {
                                r.mode = lt, t.msg = "unknown compression method", r.marker = 5;
                                break
                            }
                            if (8 + (r.method >> 4) > r.wbits) {
                                r.mode = lt, t.msg = "invalid window size", r.marker = 5;
                                break
                            }
                            r.mode = 1;
                        case 1:
                            if (0 === t.avail_in) return i;
                            if (i = e, t.avail_in--, t.total_in++, n = 255 & t.read_byte(t.next_in_index++), ((r.method << 8) + n) % 31 != 0) {
                                r.mode = lt, t.msg = "incorrect header check", r.marker = 5;
                                break
                            }
                            if (0 == (32 & n)) {
                                r.mode = 7;
                                break
                            }
                            r.mode = 2;
                        case 2:
                            if (0 === t.avail_in) return i;
                            i = e, t.avail_in--, t.total_in++, r.need = (255 & t.read_byte(t.next_in_index++)) << 24 & 4278190080, r.mode = 3;
                        case 3:
                            if (0 === t.avail_in) return i;
                            i = e, t.avail_in--, t.total_in++, r.need += (255 & t.read_byte(t.next_in_index++)) << 16 & 16711680, r.mode = 4;
                        case 4:
                            if (0 === t.avail_in) return i;
                            i = e, t.avail_in--, t.total_in++, r.need += (255 & t.read_byte(t.next_in_index++)) << 8 & 65280, r.mode = 5;
                        case 5:
                            return 0 === t.avail_in ? i : (i = e, t.avail_in--, t.total_in++, r.need += 255 & t.read_byte(t.next_in_index++), r.mode = 6, 2);
                        case 6:
                            return r.mode = lt, t.msg = "need dictionary", r.marker = 0, k;
                        case 7:
                            if (i = r.blocks.proc(t, i), i == E) {
                                r.mode = lt, r.marker = 0;
                                break
                            }
                            if (i == _ && (i = e), i != C) return i;
                            i = e, r.blocks.reset(t, r.was), r.mode = 12;
                        case 12:
                            return C;
                        case lt:
                            return E;
                        default:
                            return k
                    }
                }, t.inflateSetDictionary = function(t, e, i) {
                    let n = 0,
                        r = i;
                    if (!t || !t.istate || 6 != t.istate.mode) return k;
                    const a = t.istate;
                    return r >= 1 << a.wbits && (r = (1 << a.wbits) - 1, n = i - r), a.blocks.set_dictionary(e, n, r), a.mode = 7, _
                }, t.inflateSync = function(t) {
                    let i, n, r, a, o;
                    if (!t || !t.istate) return k;
                    const s = t.istate;
                    if (s.mode != lt && (s.mode = lt, s.marker = 0), 0 === (i = t.avail_in)) return S;
                    for (n = t.next_in_index, r = s.marker; 0 !== i && r < 4;) t.read_byte(n) == ct[r] ? r++ : r = 0 !== t.read_byte(n) ? 0 : 4 - r, n++, i--;
                    return t.total_in += n - t.next_in_index, t.next_in_index = n, t.avail_in = i, s.marker = r, 4 != r ? E : (a = t.total_in, o = t.total_out, e(t), t.total_in = a, t.total_out = o, s.mode = 7, _)
                }, t.inflateSyncPoint = function(t) {
                    return t && t.istate && t.istate.blocks ? t.istate.blocks.sync_point() : k
                }
            }

            function ut() {}
            ut.prototype = {
                inflateInit: function(t) {
                    const e = this;
                    return e.istate = new dt, t || (t = 15), e.istate.inflateInit(e, t)
                },
                inflate: function(t) {
                    const e = this;
                    return e.istate ? e.istate.inflate(e, t) : k
                },
                inflateEnd: function() {
                    const t = this;
                    if (!t.istate) return k;
                    const e = t.istate.inflateEnd(t);
                    return t.istate = null, e
                },
                inflateSync: function() {
                    const t = this;
                    return t.istate ? t.istate.inflateSync(t) : k
                },
                inflateSetDictionary: function(t, e) {
                    const i = this;
                    return i.istate ? i.istate.inflateSetDictionary(i, t, e) : k
                },
                read_byte: function(t) {
                    return this.next_in.subarray(t, t + 1)[0]
                },
                read_buf: function(t, e) {
                    return this.next_in.subarray(t, t + e)
                }
            };
            const pt = function() {
                    const t = new ut,
                        e = new Uint8Array(512);
                    let i = !1;
                    t.inflateInit(), t.next_out = e, this.append = function(n, r) {
                        const a = [];
                        let o, s, l = 0,
                            c = 0,
                            d = 0;
                        if (0 !== n.length) {
                            t.next_in_index = 0, t.next_in = n, t.avail_in = n.length;
                            do {
                                if (t.next_out_index = 0, t.avail_out = 512, 0 !== t.avail_in || i || (t.next_in_index = 0, i = !0), o = t.inflate(0), i && o === S) {
                                    if (0 !== t.avail_in) throw new Error("inflating: bad input")
                                } else if (o !== _ && o !== C) throw new Error("inflating: " + t.msg);
                                if ((i || o === C) && t.avail_in === n.length) throw new Error("inflating: bad input");
                                t.next_out_index && (512 === t.next_out_index ? a.push(new Uint8Array(e)) : a.push(new Uint8Array(e.subarray(0, t.next_out_index)))), d += t.next_out_index, r && t.next_in_index > 0 && t.next_in_index != l && (r(t.next_in_index), l = t.next_in_index)
                            } while (t.avail_in > 0 || 0 === t.avail_out);
                            return s = new Uint8Array(d), a.forEach((function(t) {
                                s.set(t, c), c += t.length
                            })), s
                        }
                    }, this.flush = function() {
                        t.inflateEnd()
                    }
                },
                ht = "HTTP error ",
                ft = "HTTP Range not supported",
                mt = "text/plain";
            class gt {
                constructor() {
                    this.size = 0
                }
                init() {
                    this.initialized = !0
                }
            }
            class vt extends gt {}
            class bt extends gt {
                writeUint8Array(t) {
                    this.size += t.length
                }
            }
            class xt extends vt {
                constructor(t) {
                    super(), this.blobReader = new _t(new Blob([t], {
                        type: mt
                    }))
                }
                init() {
                    super.init(), this.blobReader.init(), this.size = this.blobReader.size
                }
                readUint8Array(t, e) {
                    return this.blobReader.readUint8Array(t, e)
                }
            }
            class wt extends bt {
                constructor(t) {
                    super(), this.encoding = t, this.blob = new Blob([], {
                        type: mt
                    })
                }
                writeUint8Array(t) {
                    super.writeUint8Array(t), this.blob = new Blob([this.blob, t.buffer], {
                        type: mt
                    })
                }
                getData() {
                    const t = new FileReader;
                    return new Promise(((e, i) => {
                        t.onload = t => e(t.target.result), t.onerror = i, t.readAsText(this.blob, this.encoding)
                    }))
                }
            }
            class yt extends vt {
                constructor(t) {
                    super(), this.dataURI = t;
                    let e = t.length;
                    for (;
                        "=" == t.charAt(e - 1);) e--;
                    this.dataStart = t.indexOf(",") + 1, this.size = Math.floor(.75 * (e - this.dataStart))
                }
                readUint8Array(t, e) {
                    const i = new Uint8Array(e),
                        n = 4 * Math.floor(t / 3),
                        r = atob(this.dataURI.substring(n + this.dataStart, 4 * Math.ceil((t + e) / 3) + this.dataStart)),
                        a = t - 3 * Math.floor(n / 4);
                    for (let t = a; t < a + e; t++) i[t - a] = r.charCodeAt(t);
                    return i
                }
            }
            class At extends bt {
                constructor(t) {
                    super(), this.data = "data:" + (t || "") + ";base64,", this.pending = []
                }
                writeUint8Array(t) {
                    super.writeUint8Array(t);
                    let e = 0,
                        i = this.pending;
                    const n = this.pending.length;
                    for (this.pending = "", e = 0; e < 3 * Math.floor((n + t.length) / 3) - n; e++) i += String.fromCharCode(t[e]);
                    for (; e < t.length; e++) this.pending += String.fromCharCode(t[e]);
                    i.length > 2 ? this.data += btoa(i) : this.pending = i
                }
                getData() {
                    return this.data + btoa(this.pending)
                }
            }
            class _t extends vt {
                constructor(t) {
                    super(), this.blob = t, this.size = t.size
                }
                readUint8Array(t, e) {
                    const i = new FileReader;
                    return new Promise(((n, r) => {
                        i.onload = t => n(new Uint8Array(t.target.result)), i.onerror = r, i.readAsArrayBuffer(this.blob.slice(t, t + e))
                    }))
                }
            }
            class Ct extends bt {
                constructor(t) {
                    super(), this.offset = 0, this.contentType = t, this.blob = new Blob([], {
                        type: t
                    })
                }
                writeUint8Array(t) {
                    super.writeUint8Array(t), this.blob = new Blob([this.blob, t.buffer], {
                        type: this.contentType
                    }), this.offset = this.blob.size
                }
                getData() {
                    return this.blob
                }
            }
            class kt extends vt {
                constructor(t) {
                    super(), this.url = t
                }
                async init() {
                    if (super.init(), function(t) {
                            if ("undefined" != typeof document) {
                                const e = document.createElement("a");
                                return e.href = t, "http:" == e.protocol || "https:" == e.protocol
                            }
                            return /^https?:\/\//i.test(t)
                        }(this.url)) return new Promise(((t, e) => {
                        const i = new XMLHttpRequest;
                        i.addEventListener("load", (() => {
                            i.status < 400 ? (this.size = Number(i.getResponseHeader("Content-Length")), this.size ? t() : zt().then((() => t())).catch(e)) : e(ht + (i.statusText || i.status) + ".")
                        }), !1), i.addEventListener("error", e, !1), i.open("HEAD", this.url), i.send()
                    }));
                    await zt()
                }
                async readUint8Array(t, e) {
                    return this.data || await zt(this, this.url), new Uint8Array(this.data.subarray(t, t + e))
                }
            }
            class Et extends vt {
                constructor(t) {
                    super(), this.url = t
                }
                init() {
                    return super.init(), new Promise(((t, e) => {
                        const i = new XMLHttpRequest;
                        i.addEventListener("load", (() => {
                            i.status < 400 ? (this.size = Number(i.getResponseHeader("Content-Length")), "bytes" == i.getResponseHeader("Accept-Ranges") ? t() : e(new Error(ft))) : e(ht + (i.statusText || i.status) + ".")
                        }), !1), i.addEventListener("error", e, !1), i.open("HEAD", this.url), i.send()
                    }))
                }
                readUint8Array(t, e) {
                    return new Promise(((i, n) => {
                        const r = new XMLHttpRequest;
                        r.open("GET", this.url), r.responseType = "arraybuffer", r.setRequestHeader("Range", "bytes=" + t + "-" + (t + e - 1)), r.addEventListener("load", (() => {
                            r.status < 400 ? i(new Uint8Array(r.response)) : n(ht + (r.statusText || r.status) + ".")
                        }), !1), r.addEventListener("error", n, !1), r.send()
                    }))
                }
            }
            class Bt extends vt {
                constructor(t) {
                    super(), this.array = t, this.size = t.length
                }
                readUint8Array(t, e) {
                    return this.array.slice(t, t + e)
                }
            }
            class St extends bt {
                constructor() {
                    super(), this.array = new Uint8Array(0)
                }
                writeUint8Array(t) {
                    super.writeUint8Array(t);
                    const e = this.array;
                    this.array = new Uint8Array(e.length + t.length), this.array.set(e), this.array.set(t, e.length)
                }
                getData() {
                    return this.array
                }
            }

            function zt(t, e) {
                return new Promise(((i, n) => {
                    const r = new XMLHttpRequest;
                    r.addEventListener("load", (() => {
                        r.status < 400 ? (t.size || (t.size = Number(r.getResponseHeader("Content-Length")) || Number(r.response.byteLength)), t.data = new Uint8Array(r.response), i()) : n(ht + (r.statusText || r.status) + ".")
                    }), !1), r.addEventListener("error", n, !1), r.open("GET", e), r.responseType = "arraybuffer", r.send()
                }))
            }
            const Mt = 4294967295,
                Ft = 65535,
                Dt = 8,
                Ut = 0,
                Tt = 99,
                Lt = 67324752,
                Rt = 134695760,
                Zt = 33639248,
                $t = 101010256,
                Ot = 101075792,
                It = 117853008,
                Pt = 1,
                jt = 39169,
                Nt = 1,
                Ht = 8,
                Wt = 2048,
                qt = 20,
                Vt = 45,
                Yt = 51;
            const Xt = class {
                    constructor() {
                        this.crc = -1, this.table = (() => {
                            const t = [];
                            for (let e = 0; e < 256; e++) {
                                let i = e;
                                for (let t = 0; t < 8; t++) 1 & i ? i = i >>> 1 ^ 3988292384 : i >>>= 1;
                                t[e] = i
                            }
                            return t
                        })()
                    }
                    append(t) {
                        const e = this.table;
                        let i = 0 | this.crc;
                        for (let n = 0, r = 0 | t.length; n < r; n++) i = i >>> 8 ^ e[255 & (i ^ t[n])];
                        this.crc = i
                    }
                    get() {
                        return ~this.crc
                    }
                },
                Gt = "Invalid pasword",
                Qt = 16,
                Kt = "raw",
                Jt = {
                    name: "PBKDF2"
                },
                te = {
                    name: "HMAC"
                },
                ee = "SHA-1",
                ie = {
                    name: "AES-CTR"
                },
                ne = Object.assign({
                    hash: te
                }, Jt),
                re = Object.assign({
                    iterations: 1e3,
                    hash: {
                        name: ee
                    }
                }, Jt),
                ae = Object.assign({
                    hash: ee
                }, te),
                oe = Object.assign({
                    length: Qt
                }, ie),
                se = ["deriveBits"],
                le = ["sign"],
                ce = 528,
                de = 10,
                ue = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                pe = crypto.subtle;
            class he {
                constructor(t, e) {
                    this.password = t, this.signed = e, this.input = e && new Uint8Array(0), this.pendingInput = new Uint8Array(0)
                }
                async append(t) {
                    const e = async (r = 0) => {
                        if (r + Qt <= n.length - de) {
                            const t = n.subarray(r, r + Qt),
                                a = await pe.decrypt(Object.assign({
                                    counter: this.counter
                                }, oe), this.keys.decrypt, t);
                            return me(this.counter), i.set(new Uint8Array(a), r), e(r + Qt)
                        }
                        return this.pendingInput = n.subarray(r), this.signed && (this.input = ge(this.input, t)), i
                    };
                    if (this.password) {
                        const e = t.subarray(0, 18);
                        await async function(t, e, i) {
                            t.counter = new Uint8Array(ue);
                            const n = e.subarray(0, 16),
                                r = e.subarray(16),
                                a = (new TextEncoder).encode(i),
                                o = await pe.importKey(Kt, a, ne, !1, se),
                                s = await pe.deriveBits(Object.assign({
                                    salt: n
                                }, re), o, 528),
                                l = new Uint8Array(s),
                                c = l.subarray(64);
                            if (t.keys = {
                                    decrypt: await pe.importKey(Kt, l.subarray(0, 32), ie, !0, ["decrypt"]),
                                    authentication: await pe.importKey(Kt, l.subarray(32, 64), ae, !1, le),
                                    passwordVerification: c
                                }, c[0] != r[0] || c[1] != r[1]) throw new Error(Gt)
                        }(this, e, this.password), this.password = null, t = t.subarray(18)
                    }
                    let i = new Uint8Array(t.length - de - (t.length - de) % Qt),
                        n = t;
                    return this.pendingInput.length && (n = ge(this.pendingInput, t), i = ve(i, n.length - de - (n.length - de) % Qt)), e()
                }
                async flush() {
                    const t = this.pendingInput,
                        e = this.keys,
                        i = t.subarray(0, t.length - de),
                        n = t.subarray(t.length - de);
                    let r = new Uint8Array(0);
                    if (i.length) {
                        const t = await pe.decrypt(Object.assign({
                            counter: this.counter
                        }, oe), e.decrypt, i);
                        r = new Uint8Array(t)
                    }
                    let a = !0;
                    if (this.signed) {
                        const t = await pe.sign(te, e.authentication, this.input.subarray(0, this.input.length - de)),
                            i = new Uint8Array(t);
                        this.input = null;
                        for (let t = 0; t < de; t++) i[t] != n[t] && (a = !1)
                    }
                    return {
                        valid: a,
                        data: r
                    }
                }
            }
            class fe {
                constructor(t) {
                    this.password = t, this.output = new Uint8Array(0), this.pendingInput = new Uint8Array(0)
                }
                async append(t) {
                    const e = async (r = 0) => {
                        if (r + Qt <= t.length) {
                            const a = t.subarray(r, r + Qt),
                                o = await pe.encrypt(Object.assign({
                                    counter: this.counter
                                }, oe), this.keys.encrypt, a);
                            return me(this.counter), n.set(new Uint8Array(o), r + i.length), e(r + Qt)
                        }
                        return this.pendingInput = t.subarray(r), this.output = ge(this.output, n), n
                    };
                    let i = new Uint8Array(0);
                    this.password && (i = await async function(t, e) {
                        t.counter = new Uint8Array(ue);
                        const i = crypto.getRandomValues(new Uint8Array(16)),
                            n = (new TextEncoder).encode(e),
                            r = await pe.importKey(Kt, n, ne, !1, se),
                            a = await pe.deriveBits(Object.assign({
                                salt: i
                            }, re), r, ce),
                            o = new Uint8Array(a);
                        return t.keys = {
                            encrypt: await pe.importKey(Kt, o.subarray(0, 32), ie, !0, ["encrypt"]),
                            authentication: await pe.importKey(Kt, o.subarray(32, 64), ae, !1, le),
                            passwordVerification: o.subarray(64)
                        }, ge(i, t.keys.passwordVerification)
                    }(this, this.password), this.password = null);
                    let n = new Uint8Array(i.length + t.length - t.length % Qt);
                    return n.set(i, 0), this.pendingInput.length && (t = ge(this.pendingInput, t), n = ve(n, t.length - t.length % Qt)), e()
                }
                async flush() {
                    let t = new Uint8Array(0);
                    if (this.pendingInput.length) {
                        const e = await pe.encrypt(Object.assign({
                            counter: this.counter
                        }, oe), this.keys.encrypt, this.pendingInput);
                        t = new Uint8Array(e), this.output = ge(this.output, t)
                    }
                    const e = await pe.sign(te, this.keys.authentication, this.output.subarray(18));
                    this.output = null;
                    const i = new Uint8Array(e).subarray(0, de);
                    return {
                        data: ge(t, i),
                        signature: i
                    }
                }
            }

            function me(t) {
                for (let e = 0; e < 16; e++) {
                    if (255 != t[e]) {
                        t[e]++;
                        break
                    }
                    t[e] = 0
                }
            }

            function ge(t, e) {
                let i = t;
                return t.length + e.length && (i = new Uint8Array(t.length + e.length), i.set(t, 0), i.set(e, t.length)), i
            }

            function ve(t, e) {
                if (e && e > t.length) {
                    const i = t;
                    (t = new Uint8Array(e)).set(i, 0)
                }
                return t
            }
            const be = "deflate",
                xe = "inflate",
                we = "Invalid signature";
            class ye {
                constructor(t) {
                    this.signature = t.inputSignature, this.encrypted = Boolean(t.inputPassword), this.signed = t.inputSigned, this.compressed = t.inputCompressed, this.inflate = this.compressed && new t.codecConstructor, this.crc32 = this.signed && this.signed && new Xt, this.decrypt = this.encrypted && new he(t.inputPassword)
                }
                async append(t) {
                    return this.encrypted && (t = await this.decrypt.append(t)), this.compressed && t.length && (t = await this.inflate.append(t)), !this.encrypted && this.signed && this.crc32.append(t), t
                }
                async flush() {
                    let t, e = new Uint8Array(0);
                    if (this.encrypted) {
                        const t = await this.decrypt.flush();
                        if (!t.valid) throw new Error(we);
                        e = t.data
                    } else if (this.signed) {
                        const e = new DataView(new Uint8Array(4).buffer);
                        if (t = this.crc32.get(), e.setUint32(0, t), this.signature != e.getUint32(0, !1)) throw new Error(we)
                    }
                    return this.compressed && (e = await this.inflate.append(e) || new Uint8Array(0), await this.inflate.flush()), {
                        data: e,
                        signature: t
                    }
                }
            }
            class Ae {
                constructor(t) {
                    this.encrypted = t.outputEncrypted, this.signed = t.outputSigned, this.compressed = t.outputCompressed, this.deflate = this.compressed && new t.codecConstructor({
                        level: t.level || 5
                    }), this.crc32 = this.signed && new Xt, this.encrypt = this.encrypted && new fe(t.outputPassword)
                }
                async append(t) {
                    let e = t;
                    return this.compressed && t.length && (e = await this.deflate.append(t)), this.encrypted ? e = await this.encrypt.append(e) : this.signed && this.crc32.append(t), e
                }
                async flush() {
                    let t, e = new Uint8Array(0);
                    if (this.compressed && (e = await this.deflate.flush() || new Uint8Array(0)), this.encrypted) {
                        e = await this.encrypt.append(e);
                        const i = await this.encrypt.flush();
                        t = i.signature;
                        const n = new Uint8Array(e.length + i.data.length);
                        n.set(e, 0), n.set(i.data, e.length), e = n
                    } else this.signed && (t = this.crc32.get());
                    return {
                        data: e,
                        signature: t
                    }
                }
            }
            const _e = "init",
                Ce = "append",
                ke = "flush",
                Ee = "message",
                Be = "z-worker.js",
                Se = {
                    deflate: [Be],
                    inflate: [Be]
                },
                ze = {
                    pool: [],
                    pendingRequests: []
                };

            function Me(t, e) {
                const i = ze.pool,
                    n = !(e.inputCompressed || e.inputSigned || e.inputEncrypted || e.outputCompressed || e.outputSigned || e.outputEncrypted);
                let r;
                if (e.useWebWorkers || void 0 === e.useWebWorkers && t.useWebWorkers && !n) {
                    const i = e.codecType;
                    t.workerScripts ? (a = t.workerScripts[i], r = "undefined" != typeof document ? a.map((t => new URL(t, document.baseURI).href)) : a) : (r = Se[i].slice(0), r[0] = (t.workerScriptsPath || "") + r[0])
                }
                var a;
                if (i.length < t.maxWorkers) {
                    const t = {};
                    return i.push(t), Fe(t, e, r)
                } {
                    const t = i.find((t => !t.busy));
                    return t ? Fe(t, e, r) : new Promise((t => ze.pendingRequests.push({
                        resolve: t,
                        options: e,
                        scripts: r
                    })))
                }
            }

            function Fe(t, e, i) {
                return t.busy = !0, t.options = e, t.scripts = i, i ? function(t) {
                    let e;
                    t.interface || (t.worker = new Worker(t.scripts[0]), t.worker.addEventListener(Ee, r, !1), t.interface = {
                        append: t => i({
                            type: Ce,
                            data: t
                        }), flush: () => i({
                            type: ke
                        })
                    });
                    return t.interface;
                    async function i(i) {
                        if (!e) {
                            const e = t.options,
                                i = t.scripts.slice(1);
                            await n(Object.assign({
                                scripts: i,
                                type: _e,
                                options: {
                                    codecType: e.codecType,
                                    inputPassword: e.inputPassword,
                                    inputSigned: e.inputSigned,
                                    inputSignature: e.signature,
                                    inputCompressed: e.inputCompressed,
                                    inputEncrypted: e.inputEncrypted,
                                    level: e.level,
                                    outputPassword: e.outputPassword,
                                    outputSigned: e.outputSigned,
                                    outputCompressed: e.outputCompressed,
                                    outputEncrypted: e.outputEncrypted
                                }
                            }))
                        }
                        return n(i)
                    }

                    function n(i) {
                        const n = t.worker,
                            r = new Promise(((t, i) => e = {
                                resolve: t,
                                reject: i
                            }));
                        try {
                            if (i.data) try {
                                n.postMessage(i, [i.data.buffer])
                            } catch (t) {
                                n.postMessage(i)
                            } else n.postMessage(i)
                        } catch (i) {
                            e.reject(i), e = null, De(t)
                        }
                        return r
                    }

                    function r(i) {
                        const n = i.data;
                        if (e) {
                            const i = n.error;
                            if (i) {
                                const n = new Error(i.message);
                                n.stack = i.stack, e.reject(n), e = null, De(t)
                            } else n.type != _e && n.type != ke && n.type != Ce || (n.type == ke ? (e.resolve({
                                data: new Uint8Array(n.data),
                                signature: n.signature
                            }), e = null, De(t)) : e.resolve(n.data && new Uint8Array(n.data)))
                        }
                    }
                }(t) : function(t) {
                    const e = function(t) {
                        return t.codecType.startsWith(be) ? new Ae(t) : t.codecType.startsWith(xe) ? new ye(t) : void 0
                    }(t.options);
                    return {
                        async append(i) {
                            try {
                                return await e.append(i)
                            } catch (e) {
                                throw De(t), e
                            }
                        },
                        async flush() {
                            try {
                                return await e.flush()
                            } finally {
                                De(t)
                            }
                        }
                    }
                }(t)
            }

            function De(t) {
                if (t.busy = !1, ze.pendingRequests.length) {
                    const [{
                        resolve: e,
                        options: i,
                        scripts: n
                    }] = ze.pendingRequests.splice(0, 1);
                    e(Fe(t, i, n))
                } else t.worker && t.worker.terminate(), ze.pool = ze.pool.filter((e => e != t))
            }
            const Ue = async function(t, e, i, n, r, a, o) {
                const s = Math.max(a.chunkSize, 64);
                return async function a(l = 0, c = 0) {
                    const d = l * s;
                    if (d < r) {
                        const u = await e.readUint8Array(d + n, Math.min(s, r - d)),
                            p = await t.append(u);
                        return c += await Te(i, p), o.onprogress && o.onprogress(d + u.length, r), a(l + 1, c)
                    } {
                        const e = await t.flush();
                        return c += await Te(i, e.data), {
                            signature: e.signature,
                            length: c
                        }
                    }
                }()
            };
            async function Te(t, e) {
                return e.length && await t.writeUint8Array(e), e.length
            }
            const Le = "File format is not recognized",
                Re = "End of central directory not found",
                Ze = "End of Zip64 central directory not found",
                $e = "End of Zip64 central directory locator not found",
                Oe = "Central directory header not found",
                Ie = "Local file header not found",
                Pe = "Zip64 extra field not found",
                je = "File contains encrypted entry",
                Ne = "Encryption not supported",
                He = "Compression method not supported",
                We = "utf-8",
                qe = ["uncompressedSize", "compressedSize", "offset"],
                Ve = ["\0", "☺", "☻", "♥", "♦", "♣", "♠", "•", "◘", "○", "◙", "♂", "♀", "♪", "♫", "☼", "►", "◄", "↕", "‼", "¶", "§", "▬", "↨", "↑", "↓", "→", "←", "∟", "↔", "▲", "▼", " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "⌂", "Ç", "ü", "é", "â", "ä", "à", "å", "ç", "ê", "ë", "è", "ï", "î", "ì", "Ä", "Å", "É", "æ", "Æ", "ô", "ö", "ò", "û", "ù", "ÿ", "Ö", "Ü", "¢", "£", "¥", "₧", "ƒ", "á", "í", "ó", "ú", "ñ", "Ñ", "ª", "º", "¿", "⌐", "¬", "½", "¼", "¡", "«", "»", "░", "▒", "▓", "│", "┤", "╡", "╢", "╖", "╕", "╣", "║", "╗", "╝", "╜", "╛", "┐", "└", "┴", "┬", "├", "─", "┼", "╞", "╟", "╚", "╔", "╩", "╦", "╠", "═", "╬", "╧", "╨", "╤", "╥", "╙", "╘", "╒", "╓", "╫", "╪", "┘", "┌", "█", "▄", "▌", "▐", "▀", "α", "ß", "Γ", "π", "Σ", "σ", "µ", "τ", "Φ", "Θ", "Ω", "δ", "∞", "φ", "ε", "∩", "≡", "±", "≥", "≤", "⌠", "⌡", "÷", "≈", "°", "∙", "·", "√", "ⁿ", "²", "■", " "];
            class Ye {
                constructor(t, e = {}, i = {}) {
                    this.reader = t, this.options = e, this.config = i
                }
                async getEntries(t = {}) {
                    const e = this.reader;
                    e.initialized || await e.init();
                    const i = await async function(t, e, i, n) {
                        const r = new Uint8Array(4);
                        if (function(t, e, i) {
                                t.setUint32(e, i, !0)
                            }(new DataView(r.buffer), 0, e), t.size < i) throw new Error(Le);
                        const a = i + n;
                        let o = i,
                            s = await l(o);
                        s || (s = await l(Math.min(a, t.size)));
                        return s;
                        async function l(e) {
                            const n = t.size - e,
                                a = await t.readUint8Array(n, e);
                            for (let t = a.length - i; t >= 0; t--)
                                if (a[t] == r[0] && a[t + 1] == r[1] && a[t + 2] == r[2] && a[t + 3] == r[3]) return {
                                    offset: n,
                                    buffer: a.slice(t, t + i).buffer
                                }
                        }
                    }(e, $t, 22, Ft);
                    if (!i) throw new Error(Re);
                    const n = new DataView(i.buffer);
                    let r, a = ii(n, 16),
                        o = ei(n, 8);
                    if (a == Mt || o == Ft) {
                        r = !0;
                        const t = await e.readUint8Array(i.offset - 20, 20),
                            n = new DataView(t.buffer);
                        if (Number(ii(n, 0)) != It) throw new Error(Ze);
                        a = Number(ni(n, 8));
                        const s = await e.readUint8Array(a, 56),
                            l = new DataView(s.buffer);
                        if (Number(ii(l, 0)) != Ot) throw new Error($e);
                        o = Number(ni(l, 24)), a -= Number(ni(l, 40))
                    }
                    if (a < 0 || !r && (a >= e.size || o >= Ft)) throw new Error(Le);
                    const s = await e.readUint8Array(a, e.size - a),
                        l = new DataView(s.buffer),
                        c = [];
                    let d = 0;
                    for (let e = 0; e < o; e++) {
                        const e = new Xe(this.reader, this.config, this.options);
                        if (ii(l, d) != Zt) throw new Error(Oe);
                        e.compressedSize = 0, e.uncompressedSize = 0, Ge(e, l, d + 6), e.commentLength = ei(l, d + 32), e.directory = 16 == (16 & ti(l, d + 38)), e.offset = ii(l, d + 42), e.rawFilename = s.subarray(d + 46, d + 46 + e.filenameLength);
                        const i = void 0 === t.filenameEncoding ? this.options.filenameEncoding : t.filenameEncoding;
                        e.filename = Je(e.rawFilename, e.bitFlag.languageEncodingFlag ? We : i), !e.directory && e.filename && "/" == e.filename.charAt(e.filename.length - 1) && (e.directory = !0), e.rawExtraField = s.subarray(d + 46 + e.filenameLength, d + 46 + e.filenameLength + e.extraFieldLength), Qe(e, e, l, d + 6), e.rawComment = s.subarray(d + 46 + e.filenameLength + e.extraFieldLength, d + 46 + e.filenameLength + e.extraFieldLength + e.commentLength);
                        const n = void 0 === t.commentEncoding ? this.options.commentEncoding : t.commentEncoding;
                        e.comment = Je(e.rawComment, e.bitFlag.languageEncodingFlag ? We : n), c.push(e), d += 46 + e.filenameLength + e.extraFieldLength + e.commentLength
                    }
                    return c
                }
                async close() {}
            }
            class Xe {
                constructor(t, e, i) {
                    this.reader = t, this.config = e, this.options = i
                }
                async getData(t, e = {}) {
                    const i = this.reader;
                    i.initialized || await i.init();
                    const n = await i.readUint8Array(this.offset, 30),
                        r = new DataView(n.buffer),
                        a = void 0 === e.password ? this.options.password : e.password;
                    let o = a && a.length && a;
                    if (this.extraFieldAES) {
                        if (this.extraFieldAES.originalCompressionMethod != Tt) throw new Error(He);
                        if (3 != this.extraFieldAES.strength) throw new Error(Ne)
                    }
                    if (this.compressionMethod != Ut && this.compressionMethod != Dt) throw new Error(He);
                    if (ii(r, 0) != Lt) throw new Error(Ie);
                    const s = this.localDirectory = {};
                    Ge(s, r, 4), s.rawExtraField = n.subarray(this.offset + 30 + s.filenameLength, this.offset + 30 + s.filenameLength + s.extraFieldLength), Qe(this, s, r, 4);
                    let l = this.offset + 30 + s.filenameLength + s.extraFieldLength;
                    const c = this.bitFlag.encrypted && s.bitFlag.encrypted;
                    if (c && !o) throw new Error(je);
                    const d = await Me(this.config, {
                        codecType: xe,
                        codecConstructor: this.config.Inflate,
                        inputPassword: o,
                        inputSigned: void 0 === e.checkSignature ? this.options.checkSignature : e.checkSignature,
                        inputSignature: this.signature,
                        inputCompressed: 0 != this.compressionMethod,
                        inputEncrypted: c,
                        useWebWorkers: void 0 === e.useWebWorkers ? this.options.useWebWorkers : e.useWebWorkers
                    });
                    return t.initialized || await t.init(), await Ue(d, i, t, l, this.compressedSize, this.config, {
                        onprogress: e.onprogress
                    }), t.getData()
                }
            }

            function Ge(t, e, i) {
                t.version = ei(e, i);
                const n = t.rawBitFlag = ei(e, i + 2);
                t.bitFlag = {
                    encrypted: (n & Nt) == Nt,
                    level: (6 & n) >> 1,
                    dataDescriptor: (n & Ht) == Ht,
                    languageEncodingFlag: (n & Wt) == Wt
                }, t.encrypted = t.bitFlag.encrypted, t.rawLastModDate = ii(e, i + 6), t.lastModDate = function(t) {
                    const e = (4294901760 & t) >> 16,
                        i = 65535 & t;
                    try {
                        return new Date(1980 + ((65024 & e) >> 9), ((480 & e) >> 5) - 1, 31 & e, (63488 & i) >> 11, (2016 & i) >> 5, 2 * (31 & i), 0)
                    } catch (t) {}
                }(t.rawLastModDate), t.filenameLength = ei(e, i + 22), t.extraFieldLength = ei(e, i + 24)
            }

            function Qe(t, e, i, n) {
                const r = e.rawExtraField,
                    a = e.extraField = new Map,
                    o = new DataView(new Uint8Array(r).buffer);
                let s = 0;
                try {
                    for (; s < r.length;) {
                        const t = ei(o, s),
                            e = ei(o, s + 2);
                        a.set(t, {
                            type: t,
                            data: r.slice(s + 4, s + 4 + e)
                        }), s += 4 + e
                    }
                } catch (t) {}
                const l = ei(i, n + 4);
                e.signature = ii(i, n + 10), e.uncompressedSize = ii(i, n + 18), e.compressedSize = ii(i, n + 14);
                const c = e.extraFieldZip64 = a.get(Pt);
                c && function(t, e) {
                    e.zip64 = !0;
                    const i = new DataView(t.data.buffer);
                    t.values = [];
                    for (let e = 0; e < Math.floor(t.data.length / 8); e++) t.values.push(Number(ni(i, 0 + 8 * e)));
                    const n = qe.filter((t => e[t] == Mt));
                    for (let e = 0; e < n.length; e++) t[n[e]] = t.values[e];
                    qe.forEach((i => {
                        if (e[i] == Mt) {
                            if (!t || void 0 === t[i]) throw new Error(Pe);
                            e[i] = t[i]
                        }
                    }))
                }(c, e);
                const d = e.extraFieldUnicodePath = a.get(28789);
                d && Ke(d, "filename", "rawFilename", e, t);
                let u = e.extraFieldUnicodeComment = a.get(25461);
                u && Ke(u, "comment", "rawComment", e, t);
                const p = e.extraFieldAES = a.get(jt);
                p ? function(t, e, i) {
                    if (t) {
                        const n = new DataView(t.data.buffer);
                        t.vendorVersion = ti(n, 0), t.vendorId = ti(n, 2);
                        const r = ti(n, 4);
                        t.strength = r, t.originalCompressionMethod = i, e.compressionMethod = t.compressionMethod = ei(n, 5)
                    } else e.compressionMethod = i
                }(p, e, l) : e.compressionMethod = l, e.compressionMethod == Dt && (e.bitFlag.enhancedDeflating = 16 != (16 & e.rawBitFlag))
            }

            function Ke(t, e, i, n, r) {
                const a = new DataView(t.data.buffer);
                t.version = ti(a, 0), t.signature = ii(a, 1);
                const o = new Xt;
                o.append(r[i]);
                const s = new DataView(new Uint8Array(4).buffer);
                s.setUint32(0, o.get()), t[e] = (new TextDecoder).decode(t.data.subarray(5)), r.bitFlag.languageEncodingFlag || t.signature != ii(s, 0) || (n[e] = t[e])
            }

            function Je(t, e) {
                if (e && "cp437" != e.trim().toLowerCase()) return new TextDecoder(e).decode(t); {
                    let e = "";
                    for (let i = 0; i < t.length; i++) e += Ve[t[i]];
                    return e
                }
            }

            function ti(t, e) {
                return t.getUint8(e)
            }

            function ei(t, e) {
                return t.getUint16(e, !0)
            }

            function ii(t, e) {
                return t.getUint32(e, !0)
            }

            function ni(t, e) {
                return t.getBigUint64(e, !0)
            }
            const ri = "File already exists",
                ai = "Zip file comment exceeds 64KB",
                oi = "File entry comment exceeds 64KB",
                si = "File entry name exceeds 64KB",
                li = "Version exceeds 65535",
                ci = "The minimum year for the date is 1980",
                di = "Extra field type exceeds 65535",
                ui = "Extra field data exceeds 64KB",
                pi = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]),
                hi = 24;
            class fi {
                constructor(t, e = {}, i = {}) {
                    this.writer = t, this.options = e, this.config = i, this.files = new Map, this.offset = t.size
                }
                async add(t = "", e, i = {}) {
                    if (t = t.trim(), !i.directory || t.length && "/" == t.charAt(t.length - 1) || (t += "/"), this.files.has(t)) throw new Error(ri);
                    const n = (new TextEncoder).encode(t);
                    if (n.length > Ft) throw new Error(si);
                    const r = (new TextEncoder).encode(i.comment || "");
                    if (r.length > Ft) throw new Error(oi);
                    const a = this.options.version || i.version || 0;
                    if (a > Ft) throw new Error(li);
                    const o = i.lastModDate || new Date;
                    if (o.getFullYear() < 1980) throw new Error(ci);
                    e && !e.initialized && await e.init();
                    let s = new Uint8Array(0);
                    const l = i.extraField;
                    if (l) {
                        let t = 4,
                            e = 0;
                        l.forEach((e => t += e.length)), s = new Uint8Array(t), l.forEach(((t, i) => {
                            if (i > Ft) throw new Error(di);
                            if (t.length > Ft) throw new Error(ui);
                            s.set(new Uint16Array([i]), e), s.set(new Uint16Array([t.length]), e + 2), s.set(t, e + 4), e += 4 + t.length
                        }))
                    }
                    const c = i.zip64 || this.options.zip64 || this.offset >= Mt || e && (e.size >= Mt || this.offset + e.size >= Mt),
                        d = void 0 === i.password ? this.options.password : i.password,
                        u = void 0 === i.level ? this.options.level : i.level,
                        p = void 0 === i.useWebWorkers ? this.options.useWebWorkers : i.useWebWorkers;
                    await async function(t, e, i, n) {
                        const r = t.files,
                            a = t.writer;
                        let o;
                        r.set(e, null);
                        try {
                            let s, l;
                            try {
                                n.bufferedWrite || t.options.bufferedWrite || t.lockWrite ? (s = new St, s.init()) : (t.lockWrite = new Promise((t => o = t)), a.initialized || await a.init(), s = a), l = await async function(t, e, i, n) {
                                    const r = n.rawFilename,
                                        a = n.lastModDate,
                                        o = n.password,
                                        s = o && o.length,
                                        l = n.level,
                                        c = 0 !== l && !n.directory,
                                        d = n.zip64;
                                    let u;
                                    if (s) {
                                        u = new Uint8Array(pi.length + 2);
                                        gi(new DataView(u.buffer), 0, jt), u.set(pi, 2)
                                    } else u = new Uint8Array(0);
                                    const p = {
                                        version: n.version || qt,
                                        zip64: d,
                                        directory: n.directory,
                                        rawFilename: r,
                                        rawComment: n.rawComment,
                                        extraFieldZip64: d ? new Uint8Array(hi + 4) : new Uint8Array(0),
                                        extraFieldAES: u,
                                        rawExtraField: n.rawExtraField
                                    };
                                    let h = Ht | Wt,
                                        f = Ut;
                                    c && (f = Dt);
                                    d && (p.version = p.version > Vt ? p.version : Vt);
                                    s && (p.version = p.version > Yt ? p.version : Yt, h |= Nt, f = Tt, c && (p.extraFieldAES[9] = Dt));
                                    const m = p.headerArray = new Uint8Array(26),
                                        g = new DataView(m.buffer);
                                    gi(g, 0, p.version), gi(g, 2, h), gi(g, 4, f), gi(g, 6, (a.getHours() << 6 | a.getMinutes()) << 5 | a.getSeconds() / 2), gi(g, 8, (a.getFullYear() - 1980 << 4 | a.getMonth() + 1) << 5 | a.getDate()), gi(g, 22, r.length), gi(g, 24, 0);
                                    const v = new Uint8Array(30 + r.length);
                                    let b, x, w;
                                    if (vi(new DataView(v.buffer), 0, Lt), v.set(m, 4), v.set(r, 30), t) {
                                        x = t.size;
                                        const r = await Me(i, {
                                            codecType: be,
                                            codecConstructor: i.Deflate,
                                            level: l,
                                            outputPassword: o,
                                            outputSigned: !0,
                                            outputCompressed: c,
                                            outputEncrypted: s,
                                            useWebWorkers: n.useWebWorkers
                                        });
                                        await e.writeUint8Array(v), b = await Ue(r, t, e, 0, x, i, {
                                            onprogress: n.onprogress
                                        }), w = b.length
                                    } else await e.writeUint8Array(v);
                                    const y = new Uint8Array(d ? 24 : 16),
                                        A = new DataView(y.buffer);
                                    if (vi(A, 0, Rt), t)
                                        if (s || void 0 === b.signature || (vi(g, 10, b.signature), vi(A, 4, b.signature)), d) {
                                            const t = new DataView(p.extraFieldZip64.buffer);
                                            gi(t, 0, Pt), gi(t, 2, hi), vi(g, 14, Mt), bi(A, 8, BigInt(w)), bi(t, 12, BigInt(w)), vi(g, 18, Mt), bi(A, 16, BigInt(x)), bi(t, 4, BigInt(x))
                                        } else vi(g, 14, w), vi(A, 8, w), vi(g, 18, x), vi(A, 12, x);
                                    return await e.writeUint8Array(y), p.length = v.length + (b ? b.length : 0) + y.length, p
                                }(i, s, t.config, n)
                            } catch (t) {
                                throw r.delete(e), t
                            }
                            if (r.set(e, l), s != a && (t.lockWrite && await t.lockWrite, await a.writeUint8Array(s.getData())), l.offset = t.offset, l.zip64) {
                                bi(new DataView(l.extraFieldZip64.buffer), 20, BigInt(l.offset))
                            }
                            t.offset += l.length
                        } finally {
                            o && (t.lockWrite = null, o())
                        }
                    }(this, t, e, Object.assign({}, i, {
                        rawFilename: n,
                        rawComment: r,
                        version: a,
                        lastModDate: o,
                        rawExtraField: s,
                        zip64: c,
                        password: d,
                        level: u,
                        useWebWorkers: p
                    }))
                }
                async close(t = new Uint8Array(0)) {
                    const e = this.writer,
                        i = this.files;
                    let n = 0,
                        r = 0,
                        a = this.offset,
                        o = i.size;
                    if (t.length) {
                        if (!(t.length <= Ft)) throw new Error(ai);
                        gi(c, n + 20, t.length)
                    }
                    for (const [, t] of i) r += 46 + t.rawFilename.length + t.rawComment.length + t.extraFieldZip64.length + t.extraFieldAES.length + t.rawExtraField.length;
                    const s = this.options.zip64 || a + r >= Mt || o >= Ft,
                        l = new Uint8Array(r + (s ? 98 : 22)),
                        c = new DataView(l.buffer);
                    for (const [, t] of i) {
                        const e = t.rawFilename,
                            i = t.extraFieldZip64,
                            r = t.extraFieldAES,
                            a = i.length + r.length + t.rawExtraField.length;
                        vi(c, n, Zt), gi(c, n + 4, t.version), l.set(t.headerArray, n + 6), gi(c, n + 30, a), gi(c, n + 32, t.rawComment.length), t.directory && mi(c, n + 38, 16), t.zip64 ? vi(c, n + 42, Mt) : vi(c, n + 42, t.offset), l.set(e, n + 46), l.set(i, n + 46 + e.length), l.set(r, n + 46 + e.length + i.length), l.set(t.rawExtraField, 46 + e.length + i.length + r.length), l.set(t.rawComment, n + 46 + e.length + a), n += 46 + e.length + a + t.rawComment.length
                    }
                    return s && (vi(c, n, Ot), bi(c, n + 4, BigInt(44)), gi(c, n + 12, 45), gi(c, n + 14, 45), bi(c, n + 24, BigInt(o)), bi(c, n + 32, BigInt(o)), bi(c, n + 40, BigInt(r)), bi(c, n + 48, BigInt(a)), vi(c, n + 56, It), bi(c, n + 64, BigInt(a + r)), vi(c, n + 72, 1), o = Ft, a = Mt, n += 76), vi(c, n, $t), gi(c, n + 8, o), gi(c, n + 10, o), vi(c, n + 12, r), vi(c, n + 16, a), await e.writeUint8Array(l), await e.writeUint8Array(t), e.getData()
                }
            }

            function mi(t, e, i) {
                t.setUint8(e, i)
            }

            function gi(t, e, i) {
                t.setUint16(e, i, !0)
            }

            function vi(t, e, i) {
                t.setUint32(e, i, !0)
            }

            function bi(t, e, i) {
                t.setBigUint64(e, i, !0)
            }
            const xi = "function",
                wi = (t, e = {}) => ({
                    Deflate: yi(t.Deflate, e.deflate),
                    Inflate: yi(t.Inflate, e.inflate)
                });

            function yi(t, e) {
                return class {
                    constructor(i) {
                        const n = t => {
                            if (this.pendingData) {
                                const e = this.pendingData;
                                this.pendingData = new Uint8Array(e.length + t.length), this.pendingData.set(e, 0), this.pendingData.set(t, e.length)
                            } else this.pendingData = new Uint8Array(t)
                        };
                        if (this.codec = new t(Object.assign({}, e, i)), typeof this.codec.onData == xi) this.codec.onData = n;
                        else {
                            if (typeof this.codec.on != xi) throw new Error("Cannot register the callback function");
                            this.codec.on("data", n)
                        }
                    }
                    async append(t) {
                        return this.codec.push(t), i(this)
                    }
                    async flush() {
                        return this.codec.push(new Uint8Array(0), !0), i(this)
                    }
                };

                function i(t) {
                    if (t.pendingData) {
                        const e = t.pendingData;
                        return t.pendingData = null, e
                    }
                    return new Uint8Array(0)
                }
            }
            const Ai = {
                chunkSize: 524288,
                maxWorkers: "undefined" != typeof navigator && navigator.hardwareConcurrency || 2,
                workerScriptsPath: void 0,
                useWebWorkers: !0,
                Deflate: A,
                Inflate: pt
            };
            let _i = Object.assign({}, Ai);
            class Ci extends Ye {
                constructor(t, e) {
                    super(t, e, _i)
                }
            }
            class ki extends fi {
                constructor(t, e) {
                    super(t, e, _i)
                }
            }

            function Ei(t) {
                if (_i = Object.assign({}, _i, t), null != _i.workerScripts && null != _i.workerScriptsPath) throw new Error("Either workerScripts or workerScriptsPath may be set, not both");
                if (_i.workerScripts) {
                    if (_i.workerScripts.deflate && !Array.isArray(_i.workerScripts.deflate)) throw new Error("workerScripts.deflate must be an array");
                    if (_i.workerScripts.inflate && !Array.isArray(_i.workerScripts.inflate)) throw new Error("workerScripts.inflate must be an array")
                }
            }
            const Bi = 524288;
            class Si {
                constructor(t, e, i, n) {
                    if (t.root && n && n.getChildByName(e)) throw new Error("Entry filename already exists");
                    i || (i = {}), this.fs = t, this.name = e, this.data = i.data, this.id = t.entries.length, this.parent = n, this.children = [], this.uncompressedSize = 0, t.entries.push(this), n && this.parent.children.push(this)
                }
                moveTo(t) {
                    if (!t.directory) throw new Error("Target entry is not a directory");
                    if (t.isDescendantOf(this)) throw new Error("Entry is a ancestor of target entry");
                    if (this != t) {
                        if (t.getChildByName(this.name)) throw new Error("Entry filename already exists");
                        Li(this), this.parent = t, t.children.push(this)
                    }
                }
                getFullname() {
                    let t = this.name,
                        e = this.parent;
                    for (; e;) t = (e.name ? e.name + "/" : "") + t, e = e.parent;
                    return t
                }
                isDescendantOf(t) {
                    let e = this.parent;
                    for (; e && e.id != t.id;) e = e.parent;
                    return Boolean(e)
                }
            }
            class zi extends Si {
                constructor(t, e, i, n) {
                    super(t, e, i, n), this.Reader = i.Reader, this.Writer = i.Writer, i.getData && (this.getData = i.getData)
                }
                async getData(t, e = {}) {
                    return !t || t.constructor == this.Writer && this.data ? this.data : (this.reader || (this.reader = new this.Reader(this.data)), await this.reader.init(), await t.init(), this.uncompressedSize = this.reader.size, async function(t, e, i) {
                        return n();
                        async function n(r = 0) {
                            const a = r * Bi;
                            if (i.onprogress && i.onprogress(a, t.size), a < t.size) {
                                const i = await t.readUint8Array(a, Math.min(Bi, t.size - a));
                                return await e.writeUint8Array(i), n(r + 1)
                            }
                            return e.getData()
                        }
                    }(this.reader, t, e))
                }
                getText(t, e) {
                    return this.getData(new wt(t), e)
                }
                getBlob(t, e) {
                    return this.getData(new Ct(t), e)
                }
                getData64URI(t, e) {
                    return this.getData(new At(t), e)
                }
            }
            class Mi extends Si {
                constructor(t, e, i, n) {
                    super(t, e, i, n), this.directory = !0
                }
                addDirectory(t) {
                    return Zi(this, t, null, !0)
                }
                addText(t, e) {
                    return Zi(this, t, {
                        data: e,
                        Reader: xt,
                        Writer: wt
                    })
                }
                addBlob(t, e) {
                    return Zi(this, t, {
                        data: e,
                        Reader: _t,
                        Writer: Ct
                    })
                }
                addData64URI(t, e) {
                    return Zi(this, t, {
                        data: e,
                        Reader: yt,
                        Writer: At
                    })
                }
                addHttpContent(t, e, i = {}) {
                    return Zi(this, t, {
                        data: e,
                        Reader: i.useRangeHeader ? Et : kt
                    })
                }
                addFileEntry(t) {
                    !async function(t, e) {
                        e.isDirectory ? await n(t, e) : await new Promise(((i, n) => {
                            e.file((n => {
                                t.addBlob(e.name, n), i()
                            }), n)
                        }));

                        function i(t) {
                            return new Promise(((e, i) => {
                                let n = [];

                                function r(t) {
                                    t.readEntries((i => {
                                        i.length ? (n = n.concat(i), r(t)) : e(n)
                                    }), i)
                                }
                                t.isDirectory && r(t.createReader()), t.isFile && e(n)
                            }))
                        }
                        async function n(t, e) {
                            const r = await i(e);
                            for (const e of r) e.isDirectory && await n(t.addDirectory(e.name)), await new Promise(((i, n) => {
                                e.isFile && e.file((n => {
                                    const r = t.addBlob(e.name, n);
                                    r.uncompressedSize = n.size, i(r)
                                }), n)
                            }))
                        }
                    }(this, t)
                }
                async addData(t, e) {
                    return Zi(this, t, e)
                }
                async importBlob(t, e = {}) {
                    await this.importZip(new _t(t), e)
                }
                async importData64URI(t, e = {}) {
                    await this.importZip(new yt(t), e)
                }
                async importHttpContent(t, e = {}) {
                    await this.importZip(e.useRangeHeader ? new Et(t) : new kt(t), e)
                }
                async exportBlob(t = {}) {
                    return this.exportZip(new Ct("application/zip"), t)
                }
                async exportData64URI(t = {}) {
                    return this.exportZip(new At("application/zip"), t)
                }
                async importZip(t, e) {
                    await t.init();
                    const i = new Ci(t, e),
                        n = await i.getEntries();
                    let r = 0;
                    const a = Di(n, "compressedSize");
                    n.forEach((t => {
                        let i = this,
                            n = t.filename.split("/"),
                            o = n.pop();
                        if (n.forEach((t => i = i.getChildByName(t) || new Mi(this.fs, t, null, i))), !t.directory) {
                            let n = r;
                            Zi(i, o, {
                                data: t,
                                Reader: Ui(Object.assign({}, {
                                    onprogress: t => {
                                        e.onprogress && e.onprogress(n + t, a)
                                    }
                                }))
                            }), r += t.compressedSize
                        }
                    }))
                }
                async exportZip(t, e) {
                    await Ti(this);
                    const i = new ki(t, e);
                    return await async function(t, e, i, n) {
                        let r = 0;
                        async function a(t, e) {
                            async function o() {
                                let o = 0;
                                for (const s of e.children) {
                                    let e = r;
                                    await t.add(s.getFullname(), s.reader, Object.assign({
                                        directory: s.directory
                                    }, {
                                        onprogress: t => {
                                            n.onprogress && n.onprogress(e + o + t, i)
                                        }
                                    })), r += s.uncompressedSize, await a(t, s), o++
                                }
                            }
                            await o()
                        }
                        await a(t, e)
                    }(i, this, Di([this], "uncompressedSize"), e), await i.close(), t.getData()
                }
                getChildByName(t) {
                    for (let e = 0; e < this.children.length; e++) {
                        const i = this.children[e];
                        if (i.name == t) return i
                    }
                }
            }
            const Fi = {
                FS: class {
                    constructor() {
                        Ri(this)
                    }
                    remove(t) {
                        Li(t), this.entries[t.id] = null
                    }
                    find(t) {
                        const e = t.split("/");
                        let i = this.root;
                        for (let t = 0; i && t < e.length; t++) i = i.getChildByName(e[t]);
                        return i
                    }
                    getById(t) {
                        return this.entries[t]
                    }
                    async importBlob(t) {
                        Ri(this), await this.root.importBlob(t)
                    }
                    async importData64URI(t) {
                        Ri(this), await this.root.importData64URI(t)
                    }
                    async importHttpContent(t, e) {
                        this.entries = [], this.root = new Mi(this), await this.root.importHttpContent(t, e)
                    }
                    async exportBlob(t) {
                        return this.root.exportBlob(t)
                    }
                    async exportData64URI(t) {
                        return this.root.exportData64URI(t)
                    }
                },
                ZipDirectoryEntry: Mi,
                ZipFileEntry: zi
            };

            function Di(t, e) {
                let i = 0;
                return t.forEach((function t(n) {
                    i += n[e], n.children && n.children.forEach(t)
                })), i
            }

            function Ui(t) {
                return class {
                    constructor(t) {
                        this.entry = t, this.size = 0
                    }
                    async readUint8Array(e, i) {
                        if (!this.blobReader) {
                            const e = await this.entry.getData(new Ct, t);
                            this.data = e, this.blobReader = new _t(e)
                        }
                        return this.blobReader.readUint8Array(e, i)
                    }
                    async init() {
                        this.size = this.entry.uncompressedSize
                    }
                }
            }
            async function Ti(t) {
                if (t.children.length)
                    for (const e of t.children) e.directory ? await Ti(e) : (e.reader = new e.Reader(e.data), await e.reader.init(), e.uncompressedSize = e.reader.size)
            }

            function Li(t) {
                const e = t.parent.children;
                e.forEach(((i, n) => {
                    i.id == t.id && e.splice(n, 1)
                }))
            }

            function Ri(t) {
                t.entries = [], t.root = new Mi(t)
            }

            function Zi(t, e, i, n) {
                if (t.directory) return n ? new Mi(t.fs, e, i, t) : new zi(t.fs, e, i, t);
                throw new Error("Parent entry is not a directory")
            }
            const $i = {
                    application: {
                        "andrew-inset": "ez",
                        annodex: "anx",
                        "atom+xml": "atom",
                        "atomcat+xml": "atomcat",
                        "atomserv+xml": "atomsrv",
                        bbolin: "lin",
                        cap: ["cap", "pcap"],
                        "cu-seeme": "cu",
                        "davmount+xml": "davmount",
                        dsptype: "tsp",
                        ecmascript: ["es", "ecma"],
                        futuresplash: "spl",
                        hta: "hta",
                        "java-archive": "jar",
                        "java-serialized-object": "ser",
                        "java-vm": "class",
                        javascript: "js",
                        m3g: "m3g",
                        "mac-binhex40": "hqx",
                        mathematica: ["nb", "ma", "mb"],
                        msaccess: "mdb",
                        msword: ["doc", "dot"],
                        mxf: "mxf",
                        oda: "oda",
                        ogg: "ogx",
                        pdf: "pdf",
                        "pgp-keys": "key",
                        "pgp-signature": ["asc", "sig"],
                        "pics-rules": "prf",
                        postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
                        rar: "rar",
                        "rdf+xml": "rdf",
                        "rss+xml": "rss",
                        rtf: "rtf",
                        smil: ["smi", "smil"],
                        "xhtml+xml": ["xhtml", "xht"],
                        xml: ["xml", "xsl", "xsd"],
                        "xspf+xml": "xspf",
                        zip: "zip",
                        "vnd.android.package-archive": "apk",
                        "vnd.cinderella": "cdy",
                        "vnd.google-earth.kml+xml": "kml",
                        "vnd.google-earth.kmz": "kmz",
                        "vnd.mozilla.xul+xml": "xul",
                        "vnd.ms-excel": ["xls", "xlb", "xlt", "xlm", "xla", "xlc", "xlw"],
                        "vnd.ms-pki.seccat": "cat",
                        "vnd.ms-pki.stl": "stl",
                        "vnd.ms-powerpoint": ["ppt", "pps", "pot"],
                        "vnd.oasis.opendocument.chart": "odc",
                        "vnd.oasis.opendocument.database": "odb",
                        "vnd.oasis.opendocument.formula": "odf",
                        "vnd.oasis.opendocument.graphics": "odg",
                        "vnd.oasis.opendocument.graphics-template": "otg",
                        "vnd.oasis.opendocument.image": "odi",
                        "vnd.oasis.opendocument.presentation": "odp",
                        "vnd.oasis.opendocument.presentation-template": "otp",
                        "vnd.oasis.opendocument.spreadsheet": "ods",
                        "vnd.oasis.opendocument.spreadsheet-template": "ots",
                        "vnd.oasis.opendocument.text": "odt",
                        "vnd.oasis.opendocument.text-master": "odm",
                        "vnd.oasis.opendocument.text-template": "ott",
                        "vnd.oasis.opendocument.text-web": "oth",
                        "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
                        "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
                        "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
                        "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
                        "vnd.openxmlformats-officedocument.presentationml.template": "potx",
                        "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
                        "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
                        "vnd.smaf": "mmf",
                        "vnd.stardivision.calc": "sdc",
                        "vnd.stardivision.chart": "sds",
                        "vnd.stardivision.draw": "sda",
                        "vnd.stardivision.impress": "sdd",
                        "vnd.stardivision.math": ["sdf", "smf"],
                        "vnd.stardivision.writer": ["sdw", "vor"],
                        "vnd.stardivision.writer-global": "sgl",
                        "vnd.sun.xml.calc": "sxc",
                        "vnd.sun.xml.calc.template": "stc",
                        "vnd.sun.xml.draw": "sxd",
                        "vnd.sun.xml.draw.template": "std",
                        "vnd.sun.xml.impress": "sxi",
                        "vnd.sun.xml.impress.template": "sti",
                        "vnd.sun.xml.math": "sxm",
                        "vnd.sun.xml.writer": "sxw",
                        "vnd.sun.xml.writer.global": "sxg",
                        "vnd.sun.xml.writer.template": "stw",
                        "vnd.symbian.install": ["sis", "sisx"],
                        "vnd.visio": ["vsd", "vst", "vss", "vsw"],
                        "vnd.wap.wbxml": "wbxml",
                        "vnd.wap.wmlc": "wmlc",
                        "vnd.wap.wmlscriptc": "wmlsc",
                        "vnd.wordperfect": "wpd",
                        "vnd.wordperfect5.1": "wp5",
                        "x-123": "wk",
                        "x-7z-compressed": "7z",
                        "x-abiword": "abw",
                        "x-apple-diskimage": "dmg",
                        "x-bcpio": "bcpio",
                        "x-bittorrent": "torrent",
                        "x-cbr": ["cbr", "cba", "cbt", "cb7"],
                        "x-cbz": "cbz",
                        "x-cdf": ["cdf", "cda"],
                        "x-cdlink": "vcd",
                        "x-chess-pgn": "pgn",
                        "x-cpio": "cpio",
                        "x-csh": "csh",
                        "x-debian-package": ["deb", "udeb"],
                        "x-director": ["dcr", "dir", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
                        "x-dms": "dms",
                        "x-doom": "wad",
                        "x-dvi": "dvi",
                        "x-httpd-eruby": "rhtml",
                        "x-font": "pcf.Z",
                        "x-freemind": "mm",
                        "x-gnumeric": "gnumeric",
                        "x-go-sgf": "sgf",
                        "x-graphing-calculator": "gcf",
                        "x-gtar": ["gtar", "taz"],
                        "x-hdf": "hdf",
                        "x-httpd-php": ["phtml", "pht", "php"],
                        "x-httpd-php-source": "phps",
                        "x-httpd-php3": "php3",
                        "x-httpd-php3-preprocessed": "php3p",
                        "x-httpd-php4": "php4",
                        "x-httpd-php5": "php5",
                        "x-ica": "ica",
                        "x-info": "info",
                        "x-internet-signup": ["ins", "isp"],
                        "x-iphone": "iii",
                        "x-iso9660-image": "iso",
                        "x-java-jnlp-file": "jnlp",
                        "x-jmol": "jmz",
                        "x-killustrator": "kil",
                        "x-koan": ["skp", "skd", "skt", "skm"],
                        "x-kpresenter": ["kpr", "kpt"],
                        "x-kword": ["kwd", "kwt"],
                        "x-latex": "latex",
                        "x-lha": "lha",
                        "x-lyx": "lyx",
                        "x-lzh": "lzh",
                        "x-lzx": "lzx",
                        "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
                        "x-ms-wmd": "wmd",
                        "x-ms-wmz": "wmz",
                        "x-msdos-program": ["com", "exe", "bat", "dll"],
                        "x-msi": "msi",
                        "x-netcdf": ["nc", "cdf"],
                        "x-ns-proxy-autoconfig": ["pac", "dat"],
                        "x-nwc": "nwc",
                        "x-object": "o",
                        "x-oz-application": "oza",
                        "x-pkcs7-certreqresp": "p7r",
                        "x-python-code": ["pyc", "pyo"],
                        "x-qgis": ["qgs", "shp", "shx"],
                        "x-quicktimeplayer": "qtl",
                        "x-redhat-package-manager": "rpm",
                        "x-ruby": "rb",
                        "x-sh": "sh",
                        "x-shar": "shar",
                        "x-shockwave-flash": ["swf", "swfl"],
                        "x-silverlight": "scr",
                        "x-stuffit": "sit",
                        "x-sv4cpio": "sv4cpio",
                        "x-sv4crc": "sv4crc",
                        "x-tar": "tar",
                        "x-tcl": "tcl",
                        "x-tex-gf": "gf",
                        "x-tex-pk": "pk",
                        "x-texinfo": ["texinfo", "texi"],
                        "x-trash": ["~", "%", "bak", "old", "sik"],
                        "x-troff": ["t", "tr", "roff"],
                        "x-troff-man": "man",
                        "x-troff-me": "me",
                        "x-troff-ms": "ms",
                        "x-ustar": "ustar",
                        "x-wais-source": "src",
                        "x-wingz": "wz",
                        "x-x509-ca-cert": ["crt", "der", "cer"],
                        "x-xcf": "xcf",
                        "x-xfig": "fig",
                        "x-xpinstall": "xpi",
                        applixware: "aw",
                        "atomsvc+xml": "atomsvc",
                        "ccxml+xml": "ccxml",
                        "cdmi-capability": "cdmia",
                        "cdmi-container": "cdmic",
                        "cdmi-domain": "cdmid",
                        "cdmi-object": "cdmio",
                        "cdmi-queue": "cdmiq",
                        "docbook+xml": "dbk",
                        "dssc+der": "dssc",
                        "dssc+xml": "xdssc",
                        "emma+xml": "emma",
                        "epub+zip": "epub",
                        exi: "exi",
                        "font-tdpfr": "pfr",
                        "gml+xml": "gml",
                        "gpx+xml": "gpx",
                        gxf: "gxf",
                        hyperstudio: "stk",
                        "inkml+xml": ["ink", "inkml"],
                        ipfix: "ipfix",
                        json: "json",
                        "jsonml+json": "jsonml",
                        "lost+xml": "lostxml",
                        "mads+xml": "mads",
                        marc: "mrc",
                        "marcxml+xml": "mrcx",
                        "mathml+xml": "mathml",
                        mbox: "mbox",
                        "mediaservercontrol+xml": "mscml",
                        "metalink+xml": "metalink",
                        "metalink4+xml": "meta4",
                        "mets+xml": "mets",
                        "mods+xml": "mods",
                        mp21: ["m21", "mp21"],
                        mp4: "mp4s",
                        "oebps-package+xml": "opf",
                        "omdoc+xml": "omdoc",
                        onenote: ["onetoc", "onetoc2", "onetmp", "onepkg"],
                        oxps: "oxps",
                        "patch-ops-error+xml": "xer",
                        "pgp-encrypted": "pgp",
                        pkcs10: "p10",
                        "pkcs7-mime": ["p7m", "p7c"],
                        "pkcs7-signature": "p7s",
                        pkcs8: "p8",
                        "pkix-attr-cert": "ac",
                        "pkix-crl": "crl",
                        "pkix-pkipath": "pkipath",
                        pkixcmp: "pki",
                        "pls+xml": "pls",
                        "prs.cww": "cww",
                        "pskc+xml": "pskcxml",
                        "reginfo+xml": "rif",
                        "relax-ng-compact-syntax": "rnc",
                        "resource-lists+xml": "rl",
                        "resource-lists-diff+xml": "rld",
                        "rls-services+xml": "rs",
                        "rpki-ghostbusters": "gbr",
                        "rpki-manifest": "mft",
                        "rpki-roa": "roa",
                        "rsd+xml": "rsd",
                        "sbml+xml": "sbml",
                        "scvp-cv-request": "scq",
                        "scvp-cv-response": "scs",
                        "scvp-vp-request": "spq",
                        "scvp-vp-response": "spp",
                        sdp: "sdp",
                        "set-payment-initiation": "setpay",
                        "set-registration-initiation": "setreg",
                        "shf+xml": "shf",
                        "sparql-query": "rq",
                        "sparql-results+xml": "srx",
                        srgs: "gram",
                        "srgs+xml": "grxml",
                        "sru+xml": "sru",
                        "ssdl+xml": "ssdl",
                        "ssml+xml": "ssml",
                        "tei+xml": ["tei", "teicorpus"],
                        "thraud+xml": "tfi",
                        "timestamped-data": "tsd",
                        "vnd.3gpp.pic-bw-large": "plb",
                        "vnd.3gpp.pic-bw-small": "psb",
                        "vnd.3gpp.pic-bw-var": "pvb",
                        "vnd.3gpp2.tcap": "tcap",
                        "vnd.3m.post-it-notes": "pwn",
                        "vnd.accpac.simply.aso": "aso",
                        "vnd.accpac.simply.imp": "imp",
                        "vnd.acucobol": "acu",
                        "vnd.acucorp": ["atc", "acutc"],
                        "vnd.adobe.air-application-installer-package+zip": "air",
                        "vnd.adobe.formscentral.fcdt": "fcdt",
                        "vnd.adobe.fxp": ["fxp", "fxpl"],
                        "vnd.adobe.xdp+xml": "xdp",
                        "vnd.adobe.xfdf": "xfdf",
                        "vnd.ahead.space": "ahead",
                        "vnd.airzip.filesecure.azf": "azf",
                        "vnd.airzip.filesecure.azs": "azs",
                        "vnd.amazon.ebook": "azw",
                        "vnd.americandynamics.acc": "acc",
                        "vnd.amiga.ami": "ami",
                        "vnd.anser-web-certificate-issue-initiation": "cii",
                        "vnd.anser-web-funds-transfer-initiation": "fti",
                        "vnd.antix.game-component": "atx",
                        "vnd.apple.installer+xml": "mpkg",
                        "vnd.apple.mpegurl": "m3u8",
                        "vnd.aristanetworks.swi": "swi",
                        "vnd.astraea-software.iota": "iota",
                        "vnd.audiograph": "aep",
                        "vnd.blueice.multipass": "mpm",
                        "vnd.bmi": "bmi",
                        "vnd.businessobjects": "rep",
                        "vnd.chemdraw+xml": "cdxml",
                        "vnd.chipnuts.karaoke-mmd": "mmd",
                        "vnd.claymore": "cla",
                        "vnd.cloanto.rp9": "rp9",
                        "vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
                        "vnd.cluetrust.cartomobile-config": "c11amc",
                        "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
                        "vnd.commonspace": "csp",
                        "vnd.contact.cmsg": "cdbcmsg",
                        "vnd.cosmocaller": "cmc",
                        "vnd.crick.clicker": "clkx",
                        "vnd.crick.clicker.keyboard": "clkk",
                        "vnd.crick.clicker.palette": "clkp",
                        "vnd.crick.clicker.template": "clkt",
                        "vnd.crick.clicker.wordbank": "clkw",
                        "vnd.criticaltools.wbs+xml": "wbs",
                        "vnd.ctc-posml": "pml",
                        "vnd.cups-ppd": "ppd",
                        "vnd.curl.car": "car",
                        "vnd.curl.pcurl": "pcurl",
                        "vnd.dart": "dart",
                        "vnd.data-vision.rdz": "rdz",
                        "vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
                        "vnd.dece.ttml+xml": ["uvt", "uvvt"],
                        "vnd.dece.unspecified": ["uvx", "uvvx"],
                        "vnd.dece.zip": ["uvz", "uvvz"],
                        "vnd.denovo.fcselayout-link": "fe_launch",
                        "vnd.dna": "dna",
                        "vnd.dolby.mlp": "mlp",
                        "vnd.dpgraph": "dpg",
                        "vnd.dreamfactory": "dfac",
                        "vnd.ds-keypoint": "kpxx",
                        "vnd.dvb.ait": "ait",
                        "vnd.dvb.service": "svc",
                        "vnd.dynageo": "geo",
                        "vnd.ecowin.chart": "mag",
                        "vnd.enliven": "nml",
                        "vnd.epson.esf": "esf",
                        "vnd.epson.msf": "msf",
                        "vnd.epson.quickanime": "qam",
                        "vnd.epson.salt": "slt",
                        "vnd.epson.ssf": "ssf",
                        "vnd.eszigno3+xml": ["es3", "et3"],
                        "vnd.ezpix-album": "ez2",
                        "vnd.ezpix-package": "ez3",
                        "vnd.fdf": "fdf",
                        "vnd.fdsn.mseed": "mseed",
                        "vnd.fdsn.seed": ["seed", "dataless"],
                        "vnd.flographit": "gph",
                        "vnd.fluxtime.clip": "ftc",
                        "vnd.framemaker": ["fm", "frame", "maker", "book"],
                        "vnd.frogans.fnc": "fnc",
                        "vnd.frogans.ltf": "ltf",
                        "vnd.fsc.weblaunch": "fsc",
                        "vnd.fujitsu.oasys": "oas",
                        "vnd.fujitsu.oasys2": "oa2",
                        "vnd.fujitsu.oasys3": "oa3",
                        "vnd.fujitsu.oasysgp": "fg5",
                        "vnd.fujitsu.oasysprs": "bh2",
                        "vnd.fujixerox.ddd": "ddd",
                        "vnd.fujixerox.docuworks": "xdw",
                        "vnd.fujixerox.docuworks.binder": "xbd",
                        "vnd.fuzzysheet": "fzs",
                        "vnd.genomatix.tuxedo": "txd",
                        "vnd.geogebra.file": "ggb",
                        "vnd.geogebra.tool": "ggt",
                        "vnd.geometry-explorer": ["gex", "gre"],
                        "vnd.geonext": "gxt",
                        "vnd.geoplan": "g2w",
                        "vnd.geospace": "g3w",
                        "vnd.gmx": "gmx",
                        "vnd.grafeq": ["gqf", "gqs"],
                        "vnd.groove-account": "gac",
                        "vnd.groove-help": "ghf",
                        "vnd.groove-identity-message": "gim",
                        "vnd.groove-injector": "grv",
                        "vnd.groove-tool-message": "gtm",
                        "vnd.groove-tool-template": "tpl",
                        "vnd.groove-vcard": "vcg",
                        "vnd.hal+xml": "hal",
                        "vnd.handheld-entertainment+xml": "zmm",
                        "vnd.hbci": "hbci",
                        "vnd.hhe.lesson-player": "les",
                        "vnd.hp-hpgl": "hpgl",
                        "vnd.hp-hpid": "hpid",
                        "vnd.hp-hps": "hps",
                        "vnd.hp-jlyt": "jlt",
                        "vnd.hp-pcl": "pcl",
                        "vnd.hp-pclxl": "pclxl",
                        "vnd.hydrostatix.sof-data": "sfd-hdstx",
                        "vnd.ibm.minipay": "mpy",
                        "vnd.ibm.modcap": ["afp", "listafp", "list3820"],
                        "vnd.ibm.rights-management": "irm",
                        "vnd.ibm.secure-container": "sc",
                        "vnd.iccprofile": ["icc", "icm"],
                        "vnd.igloader": "igl",
                        "vnd.immervision-ivp": "ivp",
                        "vnd.immervision-ivu": "ivu",
                        "vnd.insors.igm": "igm",
                        "vnd.intercon.formnet": ["xpw", "xpx"],
                        "vnd.intergeo": "i2g",
                        "vnd.intu.qbo": "qbo",
                        "vnd.intu.qfx": "qfx",
                        "vnd.ipunplugged.rcprofile": "rcprofile",
                        "vnd.irepository.package+xml": "irp",
                        "vnd.is-xpr": "xpr",
                        "vnd.isac.fcs": "fcs",
                        "vnd.jam": "jam",
                        "vnd.jcp.javame.midlet-rms": "rms",
                        "vnd.jisp": "jisp",
                        "vnd.joost.joda-archive": "joda",
                        "vnd.kahootz": ["ktz", "ktr"],
                        "vnd.kde.karbon": "karbon",
                        "vnd.kde.kchart": "chrt",
                        "vnd.kde.kformula": "kfo",
                        "vnd.kde.kivio": "flw",
                        "vnd.kde.kontour": "kon",
                        "vnd.kde.kpresenter": ["kpr", "kpt"],
                        "vnd.kde.kspread": "ksp",
                        "vnd.kde.kword": ["kwd", "kwt"],
                        "vnd.kenameaapp": "htke",
                        "vnd.kidspiration": "kia",
                        "vnd.kinar": ["kne", "knp"],
                        "vnd.koan": ["skp", "skd", "skt", "skm"],
                        "vnd.kodak-descriptor": "sse",
                        "vnd.las.las+xml": "lasxml",
                        "vnd.llamagraphics.life-balance.desktop": "lbd",
                        "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
                        "vnd.lotus-1-2-3": "123",
                        "vnd.lotus-approach": "apr",
                        "vnd.lotus-freelance": "pre",
                        "vnd.lotus-notes": "nsf",
                        "vnd.lotus-organizer": "org",
                        "vnd.lotus-screencam": "scm",
                        "vnd.lotus-wordpro": "lwp",
                        "vnd.macports.portpkg": "portpkg",
                        "vnd.mcd": "mcd",
                        "vnd.medcalcdata": "mc1",
                        "vnd.mediastation.cdkey": "cdkey",
                        "vnd.mfer": "mwf",
                        "vnd.mfmp": "mfm",
                        "vnd.micrografx.flo": "flo",
                        "vnd.micrografx.igx": "igx",
                        "vnd.mif": "mif",
                        "vnd.mobius.daf": "daf",
                        "vnd.mobius.dis": "dis",
                        "vnd.mobius.mbk": "mbk",
                        "vnd.mobius.mqy": "mqy",
                        "vnd.mobius.msl": "msl",
                        "vnd.mobius.plc": "plc",
                        "vnd.mobius.txf": "txf",
                        "vnd.mophun.application": "mpn",
                        "vnd.mophun.certificate": "mpc",
                        "vnd.ms-artgalry": "cil",
                        "vnd.ms-cab-compressed": "cab",
                        "vnd.ms-excel.addin.macroenabled.12": "xlam",
                        "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
                        "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
                        "vnd.ms-excel.template.macroenabled.12": "xltm",
                        "vnd.ms-fontobject": "eot",
                        "vnd.ms-htmlhelp": "chm",
                        "vnd.ms-ims": "ims",
                        "vnd.ms-lrm": "lrm",
                        "vnd.ms-officetheme": "thmx",
                        "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
                        "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
                        "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
                        "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
                        "vnd.ms-powerpoint.template.macroenabled.12": "potm",
                        "vnd.ms-project": ["mpp", "mpt"],
                        "vnd.ms-word.document.macroenabled.12": "docm",
                        "vnd.ms-word.template.macroenabled.12": "dotm",
                        "vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
                        "vnd.ms-wpl": "wpl",
                        "vnd.ms-xpsdocument": "xps",
                        "vnd.mseq": "mseq",
                        "vnd.musician": "mus",
                        "vnd.muvee.style": "msty",
                        "vnd.mynfc": "taglet",
                        "vnd.neurolanguage.nlu": "nlu",
                        "vnd.nitf": ["ntf", "nitf"],
                        "vnd.noblenet-directory": "nnd",
                        "vnd.noblenet-sealer": "nns",
                        "vnd.noblenet-web": "nnw",
                        "vnd.nokia.n-gage.data": "ngdat",
                        "vnd.nokia.n-gage.symbian.install": "n-gage",
                        "vnd.nokia.radio-preset": "rpst",
                        "vnd.nokia.radio-presets": "rpss",
                        "vnd.novadigm.edm": "edm",
                        "vnd.novadigm.edx": "edx",
                        "vnd.novadigm.ext": "ext",
                        "vnd.oasis.opendocument.chart-template": "otc",
                        "vnd.oasis.opendocument.formula-template": "odft",
                        "vnd.oasis.opendocument.image-template": "oti",
                        "vnd.olpc-sugar": "xo",
                        "vnd.oma.dd2+xml": "dd2",
                        "vnd.openofficeorg.extension": "oxt",
                        "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
                        "vnd.osgeo.mapguide.package": "mgp",
                        "vnd.osgi.dp": "dp",
                        "vnd.osgi.subsystem": "esa",
                        "vnd.palm": ["pdb", "pqa", "oprc"],
                        "vnd.pawaafile": "paw",
                        "vnd.pg.format": "str",
                        "vnd.pg.osasli": "ei6",
                        "vnd.picsel": "efif",
                        "vnd.pmi.widget": "wg",
                        "vnd.pocketlearn": "plf",
                        "vnd.powerbuilder6": "pbd",
                        "vnd.previewsystems.box": "box",
                        "vnd.proteus.magazine": "mgz",
                        "vnd.publishare-delta-tree": "qps",
                        "vnd.pvi.ptid1": "ptid",
                        "vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
                        "vnd.realvnc.bed": "bed",
                        "vnd.recordare.musicxml": "mxl",
                        "vnd.recordare.musicxml+xml": "musicxml",
                        "vnd.rig.cryptonote": "cryptonote",
                        "vnd.rn-realmedia": "rm",
                        "vnd.rn-realmedia-vbr": "rmvb",
                        "vnd.route66.link66+xml": "link66",
                        "vnd.sailingtracker.track": "st",
                        "vnd.seemail": "see",
                        "vnd.sema": "sema",
                        "vnd.semd": "semd",
                        "vnd.semf": "semf",
                        "vnd.shana.informed.formdata": "ifm",
                        "vnd.shana.informed.formtemplate": "itp",
                        "vnd.shana.informed.interchange": "iif",
                        "vnd.shana.informed.package": "ipk",
                        "vnd.simtech-mindmapper": ["twd", "twds"],
                        "vnd.smart.teacher": "teacher",
                        "vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
                        "vnd.spotfire.dxp": "dxp",
                        "vnd.spotfire.sfs": "sfs",
                        "vnd.stepmania.package": "smzip",
                        "vnd.stepmania.stepchart": "sm",
                        "vnd.sus-calendar": ["sus", "susp"],
                        "vnd.svd": "svd",
                        "vnd.syncml+xml": "xsm",
                        "vnd.syncml.dm+wbxml": "bdm",
                        "vnd.syncml.dm+xml": "xdm",
                        "vnd.tao.intent-module-archive": "tao",
                        "vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
                        "vnd.tmobile-livetv": "tmo",
                        "vnd.trid.tpt": "tpt",
                        "vnd.triscape.mxs": "mxs",
                        "vnd.trueapp": "tra",
                        "vnd.ufdl": ["ufd", "ufdl"],
                        "vnd.uiq.theme": "utz",
                        "vnd.umajin": "umj",
                        "vnd.unity": "unityweb",
                        "vnd.uoml+xml": "uoml",
                        "vnd.vcx": "vcx",
                        "vnd.visionary": "vis",
                        "vnd.vsf": "vsf",
                        "vnd.webturbo": "wtb",
                        "vnd.wolfram.player": "nbp",
                        "vnd.wqd": "wqd",
                        "vnd.wt.stf": "stf",
                        "vnd.xara": "xar",
                        "vnd.xfdl": "xfdl",
                        "vnd.yamaha.hv-dic": "hvd",
                        "vnd.yamaha.hv-script": "hvs",
                        "vnd.yamaha.hv-voice": "hvp",
                        "vnd.yamaha.openscoreformat": "osf",
                        "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
                        "vnd.yamaha.smaf-audio": "saf",
                        "vnd.yamaha.smaf-phrase": "spf",
                        "vnd.yellowriver-custom-menu": "cmp",
                        "vnd.zul": ["zir", "zirz"],
                        "vnd.zzazz.deck+xml": "zaz",
                        "voicexml+xml": "vxml",
                        widget: "wgt",
                        winhlp: "hlp",
                        "wsdl+xml": "wsdl",
                        "wspolicy+xml": "wspolicy",
                        "x-ace-compressed": "ace",
                        "x-authorware-bin": ["aab", "x32", "u32", "vox"],
                        "x-authorware-map": "aam",
                        "x-authorware-seg": "aas",
                        "x-blorb": ["blb", "blorb"],
                        "x-bzip": "bz",
                        "x-bzip2": ["bz2", "boz"],
                        "x-cfs-compressed": "cfs",
                        "x-chat": "chat",
                        "x-conference": "nsc",
                        "x-dgc-compressed": "dgc",
                        "x-dtbncx+xml": "ncx",
                        "x-dtbook+xml": "dtb",
                        "x-dtbresource+xml": "res",
                        "x-eva": "eva",
                        "x-font-bdf": "bdf",
                        "x-font-ghostscript": "gsf",
                        "x-font-linux-psf": "psf",
                        "x-font-otf": "otf",
                        "x-font-pcf": "pcf",
                        "x-font-snf": "snf",
                        "x-font-ttf": ["ttf", "ttc"],
                        "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
                        "x-font-woff": "woff",
                        "x-freearc": "arc",
                        "x-gca-compressed": "gca",
                        "x-glulx": "ulx",
                        "x-gramps-xml": "gramps",
                        "x-install-instructions": "install",
                        "x-lzh-compressed": ["lzh", "lha"],
                        "x-mie": "mie",
                        "x-mobipocket-ebook": ["prc", "mobi"],
                        "x-ms-application": "application",
                        "x-ms-shortcut": "lnk",
                        "x-ms-xbap": "xbap",
                        "x-msbinder": "obd",
                        "x-mscardfile": "crd",
                        "x-msclip": "clp",
                        "x-msdownload": ["exe", "dll", "com", "bat", "msi"],
                        "x-msmediaview": ["mvb", "m13", "m14"],
                        "x-msmetafile": ["wmf", "wmz", "emf", "emz"],
                        "x-msmoney": "mny",
                        "x-mspublisher": "pub",
                        "x-msschedule": "scd",
                        "x-msterminal": "trm",
                        "x-mswrite": "wri",
                        "x-nzb": "nzb",
                        "x-pkcs12": ["p12", "pfx"],
                        "x-pkcs7-certificates": ["p7b", "spc"],
                        "x-research-info-systems": "ris",
                        "x-silverlight-app": "xap",
                        "x-sql": "sql",
                        "x-stuffitx": "sitx",
                        "x-subrip": "srt",
                        "x-t3vm-image": "t3",
                        "x-tads": "gam",
                        "x-tex": "tex",
                        "x-tex-tfm": "tfm",
                        "x-tgif": "obj",
                        "x-xliff+xml": "xlf",
                        "x-xz": "xz",
                        "x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
                        "xaml+xml": "xaml",
                        "xcap-diff+xml": "xdf",
                        "xenc+xml": "xenc",
                        "xml-dtd": "dtd",
                        "xop+xml": "xop",
                        "xproc+xml": "xpl",
                        "xslt+xml": "xslt",
                        "xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
                        yang: "yang",
                        "yin+xml": "yin",
                        envoy: "evy",
                        fractals: "fif",
                        "internet-property-stream": "acx",
                        olescript: "axs",
                        "vnd.ms-outlook": "msg",
                        "vnd.ms-pkicertstore": "sst",
                        "x-compress": "z",
                        "x-compressed": "tgz",
                        "x-gzip": "gz",
                        "x-perfmon": ["pma", "pmc", "pml", "pmr", "pmw"],
                        "x-pkcs7-mime": ["p7c", "p7m"],
                        "ynd.ms-pkipko": "pko"
                    },
                    audio: {
                        amr: "amr",
                        "amr-wb": "awb",
                        annodex: "axa",
                        basic: ["au", "snd"],
                        flac: "flac",
                        midi: ["mid", "midi", "kar", "rmi"],
                        mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
                        mpegurl: "m3u",
                        ogg: ["oga", "ogg", "spx"],
                        "prs.sid": "sid",
                        "x-aiff": ["aif", "aiff", "aifc"],
                        "x-gsm": "gsm",
                        "x-ms-wma": "wma",
                        "x-ms-wax": "wax",
                        "x-pn-realaudio": "ram",
                        "x-realaudio": "ra",
                        "x-sd2": "sd2",
                        "x-wav": "wav",
                        adpcm: "adp",
                        mp4: "mp4a",
                        s3m: "s3m",
                        silk: "sil",
                        "vnd.dece.audio": ["uva", "uvva"],
                        "vnd.digital-winds": "eol",
                        "vnd.dra": "dra",
                        "vnd.dts": "dts",
                        "vnd.dts.hd": "dtshd",
                        "vnd.lucent.voice": "lvp",
                        "vnd.ms-playready.media.pya": "pya",
                        "vnd.nuera.ecelp4800": "ecelp4800",
                        "vnd.nuera.ecelp7470": "ecelp7470",
                        "vnd.nuera.ecelp9600": "ecelp9600",
                        "vnd.rip": "rip",
                        webm: "weba",
                        "x-aac": "aac",
                        "x-caf": "caf",
                        "x-matroska": "mka",
                        "x-pn-realaudio-plugin": "rmp",
                        xm: "xm",
                        mid: ["mid", "rmi"]
                    },
                    chemical: {
                        "x-alchemy": "alc",
                        "x-cache": ["cac", "cache"],
                        "x-cache-csf": "csf",
                        "x-cactvs-binary": ["cbin", "cascii", "ctab"],
                        "x-cdx": "cdx",
                        "x-chem3d": "c3d",
                        "x-cif": "cif",
                        "x-cmdf": "cmdf",
                        "x-cml": "cml",
                        "x-compass": "cpa",
                        "x-crossfire": "bsd",
                        "x-csml": ["csml", "csm"],
                        "x-ctx": "ctx",
                        "x-cxf": ["cxf", "cef"],
                        "x-embl-dl-nucleotide": ["emb", "embl"],
                        "x-gamess-input": ["inp", "gam", "gamin"],
                        "x-gaussian-checkpoint": ["fch", "fchk"],
                        "x-gaussian-cube": "cub",
                        "x-gaussian-input": ["gau", "gjc", "gjf"],
                        "x-gaussian-log": "gal",
                        "x-gcg8-sequence": "gcg",
                        "x-genbank": "gen",
                        "x-hin": "hin",
                        "x-isostar": ["istr", "ist"],
                        "x-jcamp-dx": ["jdx", "dx"],
                        "x-kinemage": "kin",
                        "x-macmolecule": "mcm",
                        "x-macromodel-input": ["mmd", "mmod"],
                        "x-mdl-molfile": "mol",
                        "x-mdl-rdfile": "rd",
                        "x-mdl-rxnfile": "rxn",
                        "x-mdl-sdfile": ["sd", "sdf"],
                        "x-mdl-tgf": "tgf",
                        "x-mmcif": "mcif",
                        "x-mol2": "mol2",
                        "x-molconn-Z": "b",
                        "x-mopac-graph": "gpt",
                        "x-mopac-input": ["mop", "mopcrt", "mpc", "zmt"],
                        "x-mopac-out": "moo",
                        "x-ncbi-asn1": "asn",
                        "x-ncbi-asn1-ascii": ["prt", "ent"],
                        "x-ncbi-asn1-binary": ["val", "aso"],
                        "x-pdb": ["pdb", "ent"],
                        "x-rosdal": "ros",
                        "x-swissprot": "sw",
                        "x-vamas-iso14976": "vms",
                        "x-vmd": "vmd",
                        "x-xtel": "xtel",
                        "x-xyz": "xyz"
                    },
                    image: {
                        gif: "gif",
                        ief: "ief",
                        jpeg: ["jpeg", "jpg", "jpe"],
                        pcx: "pcx",
                        png: "png",
                        "svg+xml": ["svg", "svgz"],
                        tiff: ["tiff", "tif"],
                        "vnd.djvu": ["djvu", "djv"],
                        "vnd.wap.wbmp": "wbmp",
                        "x-canon-cr2": "cr2",
                        "x-canon-crw": "crw",
                        "x-cmu-raster": "ras",
                        "x-coreldraw": "cdr",
                        "x-coreldrawpattern": "pat",
                        "x-coreldrawtemplate": "cdt",
                        "x-corelphotopaint": "cpt",
                        "x-epson-erf": "erf",
                        "x-icon": "ico",
                        "x-jg": "art",
                        "x-jng": "jng",
                        "x-nikon-nef": "nef",
                        "x-olympus-orf": "orf",
                        "x-photoshop": "psd",
                        "x-portable-anymap": "pnm",
                        "x-portable-bitmap": "pbm",
                        "x-portable-graymap": "pgm",
                        "x-portable-pixmap": "ppm",
                        "x-rgb": "rgb",
                        "x-xbitmap": "xbm",
                        "x-xpixmap": "xpm",
                        "x-xwindowdump": "xwd",
                        bmp: "bmp",
                        cgm: "cgm",
                        g3fax: "g3",
                        ktx: "ktx",
                        "prs.btif": "btif",
                        sgi: "sgi",
                        "vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
                        "vnd.dwg": "dwg",
                        "vnd.dxf": "dxf",
                        "vnd.fastbidsheet": "fbs",
                        "vnd.fpx": "fpx",
                        "vnd.fst": "fst",
                        "vnd.fujixerox.edmics-mmr": "mmr",
                        "vnd.fujixerox.edmics-rlc": "rlc",
                        "vnd.ms-modi": "mdi",
                        "vnd.ms-photo": "wdp",
                        "vnd.net-fpx": "npx",
                        "vnd.xiff": "xif",
                        webp: "webp",
                        "x-3ds": "3ds",
                        "x-cmx": "cmx",
                        "x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
                        "x-pict": ["pic", "pct"],
                        "x-tga": "tga",
                        "cis-cod": "cod",
                        pipeg: "jfif"
                    },
                    message: {
                        rfc822: ["eml", "mime", "mht", "mhtml", "nws"]
                    },
                    model: {
                        iges: ["igs", "iges"],
                        mesh: ["msh", "mesh", "silo"],
                        vrml: ["wrl", "vrml"],
                        "x3d+vrml": ["x3dv", "x3dvz"],
                        "x3d+xml": ["x3d", "x3dz"],
                        "x3d+binary": ["x3db", "x3dbz"],
                        "vnd.collada+xml": "dae",
                        "vnd.dwf": "dwf",
                        "vnd.gdl": "gdl",
                        "vnd.gtw": "gtw",
                        "vnd.mts": "mts",
                        "vnd.vtu": "vtu"
                    },
                    text: {
                        "cache-manifest": ["manifest", "appcache"],
                        calendar: ["ics", "icz", "ifb"],
                        css: "css",
                        csv: "csv",
                        h323: "323",
                        html: ["html", "htm", "shtml", "stm"],
                        iuls: "uls",
                        mathml: "mml",
                        plain: ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
                        richtext: "rtx",
                        scriptlet: ["sct", "wsc"],
                        texmacs: ["tm", "ts"],
                        "tab-separated-values": "tsv",
                        "vnd.sun.j2me.app-descriptor": "jad",
                        "vnd.wap.wml": "wml",
                        "vnd.wap.wmlscript": "wmls",
                        "x-bibtex": "bib",
                        "x-boo": "boo",
                        "x-c++hdr": ["h++", "hpp", "hxx", "hh"],
                        "x-c++src": ["c++", "cpp", "cxx", "cc"],
                        "x-component": "htc",
                        "x-dsrc": "d",
                        "x-diff": ["diff", "patch"],
                        "x-haskell": "hs",
                        "x-java": "java",
                        "x-literate-haskell": "lhs",
                        "x-moc": "moc",
                        "x-pascal": ["p", "pas"],
                        "x-pcs-gcd": "gcd",
                        "x-perl": ["pl", "pm"],
                        "x-python": "py",
                        "x-scala": "scala",
                        "x-setext": "etx",
                        "x-tcl": ["tcl", "tk"],
                        "x-tex": ["tex", "ltx", "sty", "cls"],
                        "x-vcalendar": "vcs",
                        "x-vcard": "vcf",
                        n3: "n3",
                        "prs.lines.tag": "dsc",
                        sgml: ["sgml", "sgm"],
                        troff: ["t", "tr", "roff", "man", "me", "ms"],
                        turtle: "ttl",
                        "uri-list": ["uri", "uris", "urls"],
                        vcard: "vcard",
                        "vnd.curl": "curl",
                        "vnd.curl.dcurl": "dcurl",
                        "vnd.curl.scurl": "scurl",
                        "vnd.curl.mcurl": "mcurl",
                        "vnd.dvb.subtitle": "sub",
                        "vnd.fly": "fly",
                        "vnd.fmi.flexstor": "flx",
                        "vnd.graphviz": "gv",
                        "vnd.in3d.3dml": "3dml",
                        "vnd.in3d.spot": "spot",
                        "x-asm": ["s", "asm"],
                        "x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
                        "x-fortran": ["f", "for", "f77", "f90"],
                        "x-opml": "opml",
                        "x-nfo": "nfo",
                        "x-sfv": "sfv",
                        "x-uuencode": "uu",
                        webviewhtml: "htt"
                    },
                    video: {
                        avif: ".avif",
                        "3gpp": "3gp",
                        annodex: "axv",
                        dl: "dl",
                        dv: ["dif", "dv"],
                        fli: "fli",
                        gl: "gl",
                        mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
                        mp4: ["mp4", "mp4v", "mpg4"],
                        quicktime: ["qt", "mov"],
                        ogg: "ogv",
                        "vnd.mpegurl": ["mxu", "m4u"],
                        "x-flv": "flv",
                        "x-la-asf": ["lsf", "lsx"],
                        "x-mng": "mng",
                        "x-ms-asf": ["asf", "asx", "asr"],
                        "x-ms-wm": "wm",
                        "x-ms-wmv": "wmv",
                        "x-ms-wmx": "wmx",
                        "x-ms-wvx": "wvx",
                        "x-msvideo": "avi",
                        "x-sgi-movie": "movie",
                        "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
                        "3gpp2": "3g2",
                        h261: "h261",
                        h263: "h263",
                        h264: "h264",
                        jpeg: "jpgv",
                        jpm: ["jpm", "jpgm"],
                        mj2: ["mj2", "mjp2"],
                        "vnd.dece.hd": ["uvh", "uvvh"],
                        "vnd.dece.mobile": ["uvm", "uvvm"],
                        "vnd.dece.pd": ["uvp", "uvvp"],
                        "vnd.dece.sd": ["uvs", "uvvs"],
                        "vnd.dece.video": ["uvv", "uvvv"],
                        "vnd.dvb.file": "dvb",
                        "vnd.fvt": "fvt",
                        "vnd.ms-playready.media.pyv": "pyv",
                        "vnd.uvvu.mp4": ["uvu", "uvvu"],
                        "vnd.vivo": "viv",
                        webm: "webm",
                        "x-f4v": "f4v",
                        "x-m4v": "m4v",
                        "x-ms-vob": "vob",
                        "x-smv": "smv"
                    },
                    "x-conference": {
                        "x-cooltalk": "ice"
                    },
                    "x-world": {
                        "x-vrml": ["vrm", "vrml", "wrl", "flr", "wrz", "xaf", "xof"]
                    }
                },
                Oi = (() => {
                    const t = {};
                    for (let e in $i)
                        if ($i.hasOwnProperty(e))
                            for (let i in $i[e])
                                if ($i[e].hasOwnProperty(i)) {
                                    const n = $i[e][i];
                                    if ("string" == typeof n) t[n] = e + "/" + i;
                                    else
                                        for (let r = 0; r < n.length; r++) t[n[r]] = e + "/" + i
                                }
                    return t
                })(),
                Ii = function(t) {
                    return t && Oi[t.split(".").pop().toLowerCase()] || "application/octet-stream"
                }
        },
        1984: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => l
            });
            var n = i(7476),
                r = i(1166);

            function a(t) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a(t)
            }

            function o(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function s(t, e, i) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== a(t) || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" !== a(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === a(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const l = {
                name: "TokenCounter",
                props: {
                    showPlus: {
                        required: !1,
                        default: !0,
                        type: Boolean
                    },
                    allowTrainingModal: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        displayNumber: 0,
                        interval: null
                    }
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(i), !0).forEach((function(e) {
                            s(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }({}, (0, n.Kc)(r.q)),
                mounted: function() {
                    this.displayNumber = this.appStore.user.tokens
                },
                watch: {
                    "appStore.user.tokens": function(t) {
                        var e = this;
                        if (t === this.displayNumber) return clearInterval(this.interval), void(this.interval = null);
                        clearInterval(this.interval), this.interval = null, this.interval = setInterval((function() {
                            e.displayNumber === t && (clearInterval(e.interval), e.interval = null, e.$emit("animation-done", !0));
                            var i = (t - e.displayNumber) / 10;
                            i = i >= 0 ? Math.ceil(i) : Math.floor(i), e.displayNumber = e.displayNumber + i
                        }), 20)
                    }
                },
                methods: {
                    showTokenModal: function() {
                        this.$root.isMac && this.appStore.isApp ? this.showTrainingModal() : (this.appStore.showGetTokenModal = !0, this.appStore.trackClick("credit_page_clicked", {
                            page: this.appStore.page
                        }))
                    }
                }
            }
        },
        3499: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = {
                name: "AudioPlayer",
                props: {
                    audioUrl: {
                        required: !1
                    },
                    disabled: {
                        required: !1,
                        default: !1
                    },
                    showLoader: {
                        required: !1,
                        default: !0
                    },
                    filename: {
                        required: !1,
                        default: !1
                    },
                    large: {
                        required: !1,
                        default: !1
                    },
                    autoplay: {
                        required: !1,
                        default: !1
                    },
                    showDetails: {
                        required: !1,
                        default: !0
                    },
                    trackPlays: {
                        required: !1,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        playing: !1,
                        percentage: 0,
                        loading: !1,
                        length: "00:00",
                        currentTime: "00:00",
                        audioDuration: 0,
                        seekAudioPercentage: null,
                        currentAudioTime: null
                    }
                },
                watch: {
                    audioUrl: function(t, e) {
                        var i = this;
                        t && null === e && (this.loading = !1, setTimeout((function() {
                            i.playing || (i.$root.$emit("play-audio", {
                                audio: i.audioUrl
                            }), i.playing = !0)
                        }), 300))
                    }
                },
                mounted: function() {
                    var t = this,
                        e = document.createElement("audio");
                    e.src = this.audioUrl, e.addEventListener("loadedmetadata", (function() {
                        t.audioDuration = e.duration, t.length = t.$root.formatTime(e.duration.toFixed(0)), e.remove(), e = null
                    }), !1), this.autoplay && (this.$root.$emit("play-audio", {
                        audio: this.audioUrl
                    }), this.playing = !0, this.$emit("autoplay-started", !0)), this.$root.$on("update-audio-ui", (function(e) {
                        e.audio === t.audioUrl && (t.currentTime = t.$root.formatTime(e.time.toFixed(0)), t.currentAudioTime = e.time, t.percentage = e.time / t.audioDuration * 100)
                    })), this.$root.$on("playing-audio", (function(e) {
                        e === t.audioUrl && (t.playing = !0)
                    })), this.$root.$on("stopping-audio", (function(e) {
                        e.audio === t.audioUrl && (t.playing = !1, t.currentAudioTime = e.time)
                    }))
                },
                methods: {
                    toggleAudioPlaying: function() {
                        this.disabled || (this.playing ? (this.playing = !1, this.$root.$emit("stop-audio", this.audioUrl), this.$emit("stop-audio", !0), this.trackPlays && this.$root.appStore.trackClick("recording_action", {
                            type: "pause"
                        })) : this.audioUrl ? (this.playing = !0, this.$root.$emit("play-audio", {
                            audio: this.audioUrl,
                            time: this.currentAudioTime
                        }), this.$emit("play-audio", !0), this.trackPlays && this.$root.appStore.trackClick("recording_action", {
                            type: "play"
                        })) : (this.$emit("load-audio", !0), this.showLoader && (this.loading = !0)))
                    },
                    seekAudio: function(t) {
                        this.$root.$emit("seek-audio", {
                            audio: this.audioUrl,
                            percentage: t
                        })
                    }
                }
            }
        },
        7152: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => l
            });
            var n = i(7743);
            i(9464);

            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }

            function a() {
                a = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    i = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, i) {
                        t[e] = i.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    s = o.iterator || "@@iterator",
                    l = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function d(t, e, i) {
                    return Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    d({}, "")
                } catch (t) {
                    d = function(t, e, i) {
                        return t[e] = i
                    }
                }

                function u(t, e, i, r) {
                    var a = e && e.prototype instanceof f ? e : f,
                        o = Object.create(a.prototype),
                        s = new B(r || []);
                    return n(o, "_invoke", {
                        value: _(t, i, s)
                    }), o
                }

                function p(t, e, i) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, i)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var h = {};

                function f() {}

                function m() {}

                function g() {}
                var v = {};
                d(v, s, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    x = b && b(b(S([])));
                x && x !== e && i.call(x, s) && (v = x);
                var w = g.prototype = f.prototype = Object.create(v);

                function y(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function A(t, e) {
                    function a(n, o, s, l) {
                        var c = p(t[n], t, o);
                        if ("throw" !== c.type) {
                            var d = c.arg,
                                u = d.value;
                            return u && "object" == r(u) && i.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                                a("next", t, s, l)
                            }), (function(t) {
                                a("throw", t, s, l)
                            })) : e.resolve(u).then((function(t) {
                                d.value = t, s(d)
                            }), (function(t) {
                                return a("throw", t, s, l)
                            }))
                        }
                        l(c.arg)
                    }
                    var o;
                    n(this, "_invoke", {
                        value: function(t, i) {
                            function n() {
                                return new e((function(e, n) {
                                    a(t, i, e, n)
                                }))
                            }
                            return o = o ? o.then(n, n) : n()
                        }
                    })
                }

                function _(t, e, i) {
                    var n = "suspendedStart";
                    return function(r, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw a;
                            return z()
                        }
                        for (i.method = r, i.arg = a;;) {
                            var o = i.delegate;
                            if (o) {
                                var s = C(o, i);
                                if (s) {
                                    if (s === h) continue;
                                    return s
                                }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if ("suspendedStart" === n) throw n = "completed", i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            n = "executing";
                            var l = p(t, e, i);
                            if ("normal" === l.type) {
                                if (n = i.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                return {
                                    value: l.arg,
                                    done: i.done
                                }
                            }
                            "throw" === l.type && (n = "completed", i.method = "throw", i.arg = l.arg)
                        }
                    }
                }

                function C(t, e) {
                    var i = e.method,
                        n = t.iterator[i];
                    if (void 0 === n) return e.delegate = null, "throw" === i && t.iterator.return && (e.method = "return", e.arg = void 0, C(t, e), "throw" === e.method) || "return" !== i && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + i + "' method")), h;
                    var r = p(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, h;
                    var a = r.arg;
                    return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function S(t) {
                    if (t) {
                        var e = t[s];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                r = function e() {
                                    for (; ++n < t.length;)
                                        if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: z
                    }
                }

                function z() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = g, n(w, "constructor", {
                    value: g,
                    configurable: !0
                }), n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), m.displayName = d(g, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, d(t, c, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, y(A.prototype), d(A.prototype, l, (function() {
                    return this
                })), t.AsyncIterator = A, t.async = function(e, i, n, r, a) {
                    void 0 === a && (a = Promise);
                    var o = new A(u(e, i, n, r), a);
                    return t.isGeneratorFunction(i) ? o : o.next().then((function(t) {
                        return t.done ? t.value : o.next()
                    }))
                }, y(w), d(w, c, "Generator"), d(w, s, (function() {
                    return this
                })), d(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        i = [];
                    for (var n in e) i.push(n);
                    return i.reverse(),
                        function t() {
                            for (; i.length;) {
                                var n = i.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = S, B.prototype = {
                    constructor: B,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                            for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(i, n) {
                            return o.type = "throw", o.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r],
                                o = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = i.call(a, "catchLoc"),
                                    l = i.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(o)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), E(i), h
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.tryLoc === t) {
                                var n = i.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    E(i)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, i) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function o(t, e, i, n, r, a, o) {
                try {
                    var s = t[a](o),
                        l = s.value
                } catch (t) {
                    return void i(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(n, r)
            }

            function s(t) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise((function(n, r) {
                        var a = t.apply(e, i);

                        function s(t) {
                            o(a, n, r, s, l, "next", t)
                        }

                        function l(t) {
                            o(a, n, r, s, l, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            const l = {
                props: {
                    title: {
                        required: !1,
                        default: "Drag and Drop audio file"
                    },
                    subtitle: {
                        required: !1,
                        default: null
                    },
                    type: {
                        required: !1,
                        default: "audio"
                    },
                    maxFileSize: {
                        required: !1,
                        default: 1024,
                        type: Number
                    },
                    acceptedFiles: {
                        required: !1,
                        default: function() {
                            var t = [".aac", ".flac", ".mp3", ".wav"];
                            return this.$root.isSafari ? t.push(".aiff") : this.$root.isIphone || t.push(".ogg", ".opus"), t.join(",")
                        },
                        type: String
                    },
                    maxFiles: {
                        required: !1,
                        default: 50,
                        type: Number
                    },
                    removeAfterSuccess: {
                        required: !1,
                        default: !0,
                        type: Boolean
                    },
                    validateCallback: {
                        required: !1,
                        default: null
                    }
                },
                data: function() {
                    return {
                        processing: !1,
                        showAsCompleteInstantly: !1
                    }
                },
                mounted: function() {
                    var t, e = this;
                    this.dropzone = new n.Z("#dropzone-file-drop", {
                        url: "#",
                        method: "put",
                        parallelUploads: 5,
                        uploadMultiple: !1,
                        addRemoveLinks: !0,
                        acceptedFiles: this.acceptedFiles,
                        maxFilesize: this.maxFileSize,
                        maxFiles: this.maxFiles,
                        sending: function(t, e) {
                            var i = e.send;
                            e.send = function() {
                                i.call(e, t)
                            }
                        },
                        accept: (t = s(a().mark((function t(i, n) {
                            var r;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, e.$emit("processing", !0), e.processing = !0, !e.validateCallback) {
                                            t.next = 21;
                                            break
                                        }
                                        return t.next = 6, e.validateCallback(i);
                                    case 6:
                                        if (!(r = t.sent).error) {
                                            t.next = 10;
                                            break
                                        }
                                        return n(r.error), t.abrupt("return");
                                    case 10:
                                        if (console.log(r.duplicate), !r.duplicate) {
                                            t.next = 17;
                                            break
                                        }
                                        return e.showAsCompleteInstantly = !0, e.dropzone.emit("uploadprogress", i, 100, i.size), e.dropzone.emit("success", i), e.dropzone.emit("complete", i), t.abrupt("return");
                                    case 17:
                                        return t.next = 19, e.getUrl(i);
                                    case 19:
                                        return n(), t.abrupt("return");
                                    case 21:
                                        return t.next = 23, e.getUrl(i);
                                    case 23:
                                        n(), t.next = 32;
                                        break;
                                    case 26:
                                        t.prev = 26, t.t0 = t.catch(0), console.log(t.t0), n("Failed to upload file.", t.t0), e.$emit("processing", !1), e.processing = !1;
                                    case 32:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 26]
                            ])
                        }))), function(e, i) {
                            return t.apply(this, arguments)
                        })
                    }), this.dropzone.on("processing", (function(t) {
                        e.dropzone.options.url = t.s3.url, t.status, e.$emit("processing", !0), e.processing = !0
                    })), this.dropzone.on("success", (function(t) {
                        e.$emit("success", t), e.processing = !1, e.removeAfterSuccess && e.dropzone.removeFile(t)
                    })), this.dropzone.on("error", (function() {
                        e.$emit("processing", !1), e.processing = !1
                    })), this.dropzone.on("removedfile", (function(t) {
                        e.dropzone.getUploadingFiles().length || (e.$emit("processing", !1), e.processing = !1), e.dropzone.files.length || e.$emit("empty")
                    }))
                },
                methods: {
                    clickedDropzone: function() {
                        document.getElementById("dropzone-file-drop").click()
                    },
                    getUrl: function(t) {
                        return s(a().mark((function e() {
                            var i;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, axios.post(route("api.upload.get-presigned-url"));
                                    case 2:
                                        i = e.sent, t.s3 = i.data;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }
            }
        },
        4326: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = {
                name: "HiddenAudioPlayer",
                data: function() {
                    return {
                        audio: null,
                        audioUrl: null,
                        currentTime: null,
                        currentPercentage: null,
                        playingContext: null
                    }
                },
                beforeDestroy: function() {
                    this.audio.removeEventListener("timeupdate", this.updateAudioUI), this.audio.removeEventListener("loadeddata", this._handleLoaded), this.audio.removeEventListener("ended", this.stopAudio), this.audio.pause()
                },
                mounted: function() {
                    var t = this;
                    this.audio = this.$refs.audio, this.$root.$on("pause-all-playback", (function() {
                        t.audio.pause(), t.audio.currentTime = 0, t.$root.$emit("stopping-audio", {
                            audio: t.audioUrl,
                            time: t.audio.currentTime
                        })
                    })), this.audio && (this.audio.pause(), this.audio.addEventListener("timeupdate", this.updateAudioUI), this.audio.addEventListener("loadeddata", this._handleLoaded), this.audio.addEventListener("ended", this.stopAudio)), this.$root.$on("play-audio", (function(e) {
                        t.currentTime = 0, e.hasOwnProperty("playingContext") || (e.playingContext = null), _.get(e, "time", !1) && (t.currentTime = e.time), t.audioUrl !== e.audio ? (t.pauseAudio(), t.audioUrl = e.audio, t.audio.currentTime = 0, t.currentPercentage = 0) : (e.playingContext !== t.playingContext ? (t.audio.currentTime = 0, t.currentPercentage = 0, t.playingContext = e.playingContext) : t.currentTime && (t.audio.currentTime = t.currentTime), t.audio.play(), t.$root.$emit("playing-audio", {
                            audio: t.audioUrl,
                            voiceId: e.voiceId
                        }))
                    })), this.$root.$on("stop-audio", (function(e) {
                        t.audioUrl === e && t.pauseAudio()
                    })), this.$root.$on("seek-audio", (function(e) {
                        t.audio.duration && (t.audioUrl !== e.audio ? (t.$root.$emit("stopping-audio", {
                            audio: t.audioUrl,
                            time: t.audio.currentTime
                        }), t.currentPercentage = e.percentage, t.audioUrl = e.audio) : (t.audio.currentTime = e.percentage * t.audio.duration / 100, t.currentTime = e.percentage * t.audio.duration / 100, t.currentPercentage = e.percentage, t.audio.play()), t.$root.$emit("playing-audio", t.audioUrl))
                    }))
                },
                methods: {
                    stopAudio: function() {
                        this.$root.$emit("stopping-audio", {
                            audio: this.audioUrl,
                            time: null
                        })
                    },
                    updateAudioUI: function() {
                        this.$root.$emit("update-audio-ui", {
                            time: this.audio.currentTime,
                            audio: this.audioUrl
                        })
                    },
                    _handleLoaded: function() {
                        var t = this;
                        if (this.audio.pause(), !(this.audio.readyState >= 2)) throw new Error("Failed to load sound file");
                        this.audio.duration === 1 / 0 && (this.audio.currentTime = 1e101, this.audio.ontimeupdate = function() {
                            t.audio.ontimeupdate = function() {}, t.audio.currentTime = 0
                        }), this.currentTime && (this.audio.currentTime = this.currentTime), this.currentPercentage && (this.audio.currentTime = this.currentPercentage * this.audio.duration / 100), this.audio.play(), this.$root.$emit("playing-audio", {
                            audio: this.audioUrl
                        })
                    },
                    pauseAudio: function() {
                        this.audio.pause(), this.$root.$emit("stopping-audio", {
                            audio: this.audioUrl,
                            time: this.audio.currentTime
                        })
                    }
                }
            }
        },
        8693: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = {
                name: "ConfirmationModal",
                props: {
                    noText: {
                        required: !1,
                        default: "Back"
                    },
                    yesText: {
                        required: !1,
                        default: "Yes"
                    },
                    heading: {
                        required: !0,
                        default: "Are you sure you want to do this?"
                    },
                    value: {
                        required: !0,
                        default: !1
                    }
                }
            }
        },
        8347: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => w
            });
            i(2471);
            var n = i(4168),
                r = i(8770),
                a = i(1354),
                o = i.n(a),
                s = i(723),
                l = i(7652),
                c = i(6658),
                d = i(6849),
                u = i(7476),
                p = i(4812);

            function h(t) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, h(t)
            }

            function f() {
                f = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    i = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, i) {
                        t[e] = i.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

                function l(t, e, i) {
                    return Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, i) {
                        return t[e] = i
                    }
                }

                function c(t, e, i, r) {
                    var a = e && e.prototype instanceof p ? e : p,
                        o = Object.create(a.prototype),
                        s = new B(r || []);
                    return n(o, "_invoke", {
                        value: _(t, i, s)
                    }), o
                }

                function d(t, e, i) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, i)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function m() {}

                function g() {}
                var v = {};
                l(v, a, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    x = b && b(b(S([])));
                x && x !== e && i.call(x, a) && (v = x);
                var w = g.prototype = p.prototype = Object.create(v);

                function y(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function A(t, e) {
                    function r(n, a, o, s) {
                        var l = d(t[n], t, a);
                        if ("throw" !== l.type) {
                            var c = l.arg,
                                u = c.value;
                            return u && "object" == h(u) && i.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                                r("next", t, o, s)
                            }), (function(t) {
                                r("throw", t, o, s)
                            })) : e.resolve(u).then((function(t) {
                                c.value = t, o(c)
                            }), (function(t) {
                                return r("throw", t, o, s)
                            }))
                        }
                        s(l.arg)
                    }
                    var a;
                    n(this, "_invoke", {
                        value: function(t, i) {
                            function n() {
                                return new e((function(e, n) {
                                    r(t, i, e, n)
                                }))
                            }
                            return a = a ? a.then(n, n) : n()
                        }
                    })
                }

                function _(t, e, i) {
                    var n = "suspendedStart";
                    return function(r, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw a;
                            return z()
                        }
                        for (i.method = r, i.arg = a;;) {
                            var o = i.delegate;
                            if (o) {
                                var s = C(o, i);
                                if (s) {
                                    if (s === u) continue;
                                    return s
                                }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if ("suspendedStart" === n) throw n = "completed", i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            n = "executing";
                            var l = d(t, e, i);
                            if ("normal" === l.type) {
                                if (n = i.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: i.done
                                }
                            }
                            "throw" === l.type && (n = "completed", i.method = "throw", i.arg = l.arg)
                        }
                    }
                }

                function C(t, e) {
                    var i = e.method,
                        n = t.iterator[i];
                    if (void 0 === n) return e.delegate = null, "throw" === i && t.iterator.return && (e.method = "return", e.arg = void 0, C(t, e), "throw" === e.method) || "return" !== i && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + i + "' method")), u;
                    var r = d(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                    var a = r.arg;
                    return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function S(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                r = function e() {
                                    for (; ++n < t.length;)
                                        if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: z
                    }
                }

                function z() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = g, n(w, "constructor", {
                    value: g,
                    configurable: !0
                }), n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), m.displayName = l(g, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, l(t, s, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, y(A.prototype), l(A.prototype, o, (function() {
                    return this
                })), t.AsyncIterator = A, t.async = function(e, i, n, r, a) {
                    void 0 === a && (a = Promise);
                    var o = new A(c(e, i, n, r), a);
                    return t.isGeneratorFunction(i) ? o : o.next().then((function(t) {
                        return t.done ? t.value : o.next()
                    }))
                }, y(w), l(w, s, "Generator"), l(w, a, (function() {
                    return this
                })), l(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        i = [];
                    for (var n in e) i.push(n);
                    return i.reverse(),
                        function t() {
                            for (; i.length;) {
                                var n = i.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = S, B.prototype = {
                    constructor: B,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                            for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(i, n) {
                            return o.type = "throw", o.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r],
                                o = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = i.call(a, "catchLoc"),
                                    l = i.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(o)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), E(i), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.tryLoc === t) {
                                var n = i.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    E(i)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, i) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function m(t, e, i, n, r, a, o) {
                try {
                    var s = t[a](o),
                        l = s.value
                } catch (t) {
                    return void i(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(n, r)
            }

            function g(t) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise((function(n, r) {
                        var a = t.apply(e, i);

                        function o(t) {
                            m(a, n, r, o, s, "next", t)
                        }

                        function s(t) {
                            m(a, n, r, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }

            function v(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(i), !0).forEach((function(e) {
                        x(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : v(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function x(t, e, i) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== h(t) || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" !== h(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === h(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const w = {
                name: "CustomVoiceModal",
                components: {
                    AudioPlayer: n.Z,
                    ConfirmationModal: r.Z,
                    FileDropNew: s.Z,
                    VueCropper: l.Z
                },
                props: {
                    open: {
                        required: !0,
                        default: !1
                    },
                    selectedVoice: {
                        required: !1,
                        default: null
                    },
                    user: {
                        required: !0
                    },
                    showCustomModelUpload: {
                        required: !1,
                        default: !1
                    },
                    allowModelUpdate: {
                        required: !1,
                        default: !0
                    }
                },
                data: function() {
                    var t = this;
                    return {
                        customAudios: [],
                        name: null,
                        avatar: null,
                        voiceId: null,
                        customVoice: null,
                        isPrivate: !1,
                        isSaving: !1,
                        isBuildRequestProcessing: !1,
                        isDeleting: !1,
                        avatarUrl: null,
                        cropModal: !1,
                        mimeType: null,
                        selectedFile: null,
                        tags: [],
                        tagSuggestions: [],
                        categories: [],
                        category: null,
                        languages: [],
                        language: null,
                        cancelTagToken: null,
                        cancelVoiceSaveToken: null,
                        changedInputs: !1,
                        showCancelBuildConfirmation: !1,
                        customModelData: null,
                        uploadingCustomModel: !1,
                        maxNameLength: 200,
                        fieldRules: [function(e) {
                            return (e || "").length < t.maxNameLength || "Maximum " + t.maxNameLength + " characters"
                        }],
                        chunkSize: 41943040,
                        offset: 0,
                        reader: null,
                        fileSize: 0,
                        isDuplicateExternalModel: !1,
                        zip: null
                    }
                },
                mounted: function() {
                    var t = ["name", "language", "category", "avatar", "tags", "isPrivate"];
                    this.showCustomModelUpload && (t.push("customModelData"), this.zip = i(2832), this.zip.configure({
                        useWebWorkers: !1
                    })), this.watchFormFields(t)
                },
                computed: b(b({}, (0, u.Kc)(c.M, p.x)), {}, {
                    allowCustomModelUpload: function() {
                        return this.showCustomModelUpload && this.allowModelUpdate
                    },
                    canUploadAudio: function() {
                        return (null === _.get(this.customVoice, "build_queue_position", null) || _.get(this.customVoice, "build_failed_text", !0)) && !this.isBuildRequestProcessing
                    },
                    showModal: {
                        get: function() {
                            return this.open
                        },
                        set: function(t) {
                            this.$emit("change", t)
                        }
                    },
                    avatarSource: {
                        get: function() {
                            return this.avatarUrl ? this.avatarUrl : _.get(this.customVoice, "avatar_url", "/img/default-avatar.svg")
                        },
                        set: function(t) {
                            this.avatarUrl = t
                        }
                    },
                    progress: function() {
                        var t = 0;
                        return this.customAudios ? (this.customAudios.forEach((function(e) {
                            t += e.duration
                        })), t / 60) : 0
                    },
                    progressPercent: function() {
                        var t = 0;
                        return this.customAudios ? (this.customAudios.forEach((function(e) {
                            t += e.duration
                        })), t > 900 ? 100 : t / 9) : 0
                    }
                }),
                watch: {
                    open: function() {
                        var t = this;
                        this.showModal && !this.tagSuggestions.length && this.getTagSuggestions("tag").then((function(e) {
                            t.tagSuggestions = e.data.data
                        })), this.selectedVoice ? (this.customVoice = this.selectedVoice, this.customVoice.name && (this.name = this.customVoice.name), this.voiceId = this.customVoice.id, this.isPrivate = _.get(this.customVoice, "is_private", !1), this.customAudios = this.customVoice.custom_audios, this.tags = this.customVoice.tags, this.category = this.customVoice.category_id, this.language = this.customVoice.language_id, this.avatarUrl = null, this.avatar = null) : (this.customVoice = null, this.name = null, this.voiceId = null, this.customAudios = [], this.avatarUrl = null, this.avatar = null, this.language = null, this.category = null, this.tags = [], this.isPrivate = !!this.showCustomModelUpload)
                    },
                    showModal: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.changedInputs = !1
                        }))
                    }
                },
                created: function() {
                    this.getCategories(), this.getLanguages()
                },
                methods: b(b({}, (0, u.nv)(c.M, ["search"])), {}, {
                    validateZipFile: function(t) {
                        var e = this;
                        return g(f().mark((function i() {
                            var n, r, a;
                            return f().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return e.offset = 0, e.isDuplicateExternalModel = !1, n = new e.zip.ZipReader(new e.zip.BlobReader(t)), i.next = 5, n.getEntries();
                                    case 5:
                                        return r = i.sent, a = !1, i.next = 9, Promise.all(r.map(function() {
                                            var t = g(f().mark((function t(e) {
                                                return f().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            "pth" === e.filename.split(".").pop() && (a = e.filename);
                                                        case 1:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 9:
                                        if (!a) {
                                            i.next = 19;
                                            break
                                        }
                                        return console.log(t.name), i.next = 13, e.getHash(t).then((function(e) {
                                            return t.hash = e
                                        }), (function(t) {
                                            return console.error(t)
                                        }));
                                    case 13:
                                        return console.log(t.hash), i.next = 16, axios.get(route("api.voice.external-model.duplicate", {
                                            hash: t.hash
                                        })).then((function(t) {
                                            e.isDuplicateExternalModel = _.get(t, "data.duplicate", !1)
                                        })).catch((function(t) {
                                            console.log(t)
                                        }));
                                    case 16:
                                        return i.abrupt("return", {
                                            error: null,
                                            duplicate: e.isDuplicateExternalModel
                                        });
                                    case 19:
                                        return i.abrupt("return", {
                                            error: "ZIP must contain a .pth file!"
                                        });
                                    case 20:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    },
                    readChunked: function(t, e, i) {
                        var n = this;
                        this.fileSize = t.size, this.reader = new FileReader, this.reader.onload = function() {
                            n.reader.error ? i(n.reader.error || {}) : (n.offset += n.reader.result.length, e(n.reader.result, n.offset, n.fileSize), n.offset >= n.fileSize ? i(null) : n.readNext(t))
                        }, this.reader.onerror = function(t) {
                            i(t || {})
                        }, this.readNext(t)
                    },
                    getHash: function(t) {
                        var e = this;
                        return new Promise((function(i, n) {
                            var r = o().algo.SHA256.create();
                            e.readChunked(t, (function(t) {
                                r.update(o().enc.Latin1.parse(t))
                            }), (function(t) {
                                if (t) n(t);
                                else {
                                    var e = r.finalize().toString(o().enc.Hex);
                                    i(e)
                                }
                            }))
                        }))
                    },
                    readNext: function(t) {
                        var e = t.slice(this.offset, this.offset + this.chunkSize);
                        this.reader.readAsBinaryString(e)
                    },
                    onAudioAdded: function(t) {
                        var e = this;
                        return g(f().mark((function i() {
                            return f().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, (0, d.e)(t);
                                    case 2:
                                        if (t.duration = i.sent, e.customVoice) {
                                            i.next = 6;
                                            break
                                        }
                                        return i.next = 6, e.save();
                                    case 6:
                                        e.customVoice && e.storeVoiceAudio(t);
                                    case 7:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    },
                    onModelAdded: function(t) {
                        var e = this;
                        return g(f().mark((function i() {
                            return f().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        e.uploadingCustomModel = !1, e.customModelData = t;
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    },
                    saveCustomModel: function() {
                        var t, e = this;
                        if (!this.isSaving)
                            if (!this.allowCustomModelUpload || this.customModelData && this.customModelData.hash) {
                                this.isSaving = !0;
                                var i = this.getFormData();
                                this.allowCustomModelUpload && (i.duplicate = Number(this.isDuplicateExternalModel), i.hash = this.customModelData.hash, this.customModelData && this.customModelData.s3 && (i.key = this.customModelData.s3.key, i.extension = this.customModelData.name.split(".").pop())), axios.post(route("api.voice.external-model.store", {
                                    voiceUUID: null === (t = this.selectedVoice) || void 0 === t ? void 0 : t.uuid
                                }), i).then((function(t) {
                                    var i;
                                    t && t.data && (e.isSaving = !1, null !== (i = e.selectedVoice) && void 0 !== i && i.uuid ? e.alertsStore.showSuccessMessage("Success! Voice updated!") : e.alertsStore.showSuccessMessage("Success! Voice uploaded successfully!"), e.showModal = !1, "my_voices" === e.appVoicesStore.selectedFilter ? e.search().catch((function(t) {
                                        e.$root.showWarningMessage(t)
                                    })) : e.appVoicesStore.selectedFilter = "my_voices", e.appVoicesStore.changeVoicesFilterCount("my_voices"))
                                })).catch((function(t) {
                                    return e.isSaving = !1, t && !axios.isCancel(t) && e.checkErrors(t), !1
                                }))
                            } else this.alertsStore.showWarningMessage("Please select a model file to upload!")
                    },
                    storeVoiceAudio: function(t) {
                        var e = this,
                            i = {
                                key: t.s3.key,
                                duration: t.duration,
                                extension: t.name.split(".").pop()
                            };
                        axios.post(route("api.audio.store-audio-details", {
                            voiceUUID: this.customVoice.uuid
                        }), i).then((function(t) {
                            e.customAudios.unshift(t.data.data)
                        })).catch((function(t) {
                            _.get(t, "response.data.errors.value") ? e.$root.showWarningMessage(_.get(t, "response.data.errors.value.0")) : window.bugsnag.notify(t)
                        }))
                    },
                    watchFormFields: function(t) {
                        var e = this;
                        t.forEach((function(t) {
                            e.$watch(t, (function() {
                                e.changedInputs = !0
                            }))
                        }))
                    },
                    save: function() {
                        var t = this;
                        return this.showCustomModelUpload ? this.saveCustomModel() : new Promise((function(e) {
                            if (!t.isSaving) {
                                t.isSaving = !0;
                                var i = t.getFormData();
                                t.cancelVoiceSaveToken && t.cancelVoiceSaveToken.cancel(), t.cancelVoiceSaveToken = axios.CancelToken.source(), t.customVoice ? axios.post(route("api.voice.update", {
                                    voiceUUID: t.customVoice.uuid
                                }), i, {
                                    cancelToken: t.cancelVoiceSaveToken.token
                                }).then((function(i) {
                                    i.data.data ? (t.customVoice = i.data.data, t.isPrivate = _.get(t.customVoice, "is_private", !1), t.isSaving = !1, t.$emit("custom-voice-update", i.data.data), t.$root.$emit("show-success-message", "Voice Updated Successfully!"), e(!0)) : (t.$root.$emit("show-warning-message", "Something went wrong!"), e(!1))
                                })).catch((function(i) {
                                    t.isSaving = !1, i && !axios.isCancel(i) && t.checkErrors(i), e(!1)
                                })) : axios.post(route("api.voice.save"), i, {
                                    cancelToken: t.cancelVoiceSaveToken.token
                                }).then((function(i) {
                                    i.data.data ? (t.customVoice = i.data.data, t.isPrivate = _.get(t.customVoice, "is_private", !1), t.isSaving = !1, t.$emit("custom-voice", i.data.data), t.$root.$emit("show-success-message", "Voice Published Successfully!"), e(!0)) : (t.$root.$emit("show-warning-message", "Something went wrong!"), e(!1))
                                })).catch((function(i) {
                                    t.isSaving = !1, i && !axios.isCancel(i) && t.checkErrors(i), console.log(i), e(!1)
                                }))
                            }
                        }))
                    },
                    getFormData: function() {
                        var t = {
                            is_private: Number(this.isPrivate)
                        };
                        return this.avatar && (t.avatar_base = this.avatar), this.name && "" !== this.name && (t.name = this.name), this.tags && this.tags.length && (t.tags = this.tags.map((function(t) {
                            return t.name_value
                        }))), this.language && (t.language = this.language), this.category && (t.category = this.category), this.showCustomModelUpload && (t.external_model = !0), t
                    },
                    checkErrors: function(t) {
                        if (t) {
                            if (_.get(t, "response.data.errors.username")) return this.alertsStore.showWarningMessage(t.response.data.errors.username[0]), void this.$root.$emit("open-username-modal");
                            if (_.get(t, "response.data.errors.name")) return void this.alertsStore.showWarningMessage(t.response.data.errors.name[0]);
                            if (_.get(t, "response.data.errors.avatar")) return void this.alertsStore.showWarningMessage(t.response.data.errors.avatar[0]);
                            if (_.get(t, "response.data.errors.language")) return void this.alertsStore.showWarningMessage(t.response.data.errors.language[0]);
                            _.get(t, "response.data.errors.category") && this.alertsStore.showWarningMessage(t.response.data.errors.category[0]), _.get(t, "response.data.errors.key") && this.alertsStore.showWarningMessage(t.response.data.errors.key[0])
                        }
                    },
                    onFileSelect: function(t) {
                        var e = this;
                        return g(f().mark((function t() {
                            var i;
                            return f().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.avatar = e.$refs.avatarinput.files[0], !(e.avatar && e.avatar.size >= 8388608)) {
                                            t.next = 5;
                                            break
                                        }
                                        return e.alertsStore.showWarningMessage("Please select a smaller image!"), e.avatar = null, t.abrupt("return");
                                    case 5:
                                        if (!e.avatar) {
                                            t.next = 13;
                                            break
                                        }
                                        if (e.mimeType = e.avatar.type, -1 !== ["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml", "image/bmp", "image/x-icon", "image/avif"].indexOf(e.mimeType)) {
                                            t.next = 12;
                                            break
                                        }
                                        return e.alertsStore.showWarningMessage("Please select a supported image file"), e.avatar = null, t.abrupt("return");
                                    case 12:
                                        "function" == typeof FileReader ? (e.cropModal = !0, (i = new FileReader).onload = function(t) {
                                            e.selectedFile = t.target.result, e.$refs.cropper.replace(e.selectedFile);
                                            var i = new Image;
                                            i.onload = function() {
                                                (i.width < 1024 || i.height < 1024) && (e.alertsStore.showWarningMessage("The minimum image size is 1024x1024 pixels!"), e.resetAvatar())
                                            }, i.src = e.selectedFile
                                        }, i.readAsDataURL(e.avatar)) : (e.$root.$emit("show-warning-message", "Sorry, FileReader API not supported"), window.bugsnag.notify("upload not supported!"));
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    resetAvatar: function() {
                        this.cropModal = !1, this.avatar = null, this.$refs.avatarinput.value = "", this.mimeType = null, this.selectedFile = null, this.$refs.cropper.replace(this.selectedFile)
                    },
                    saveImage: function() {
                        this.cropModal = !1;
                        var t = this.$refs.cropper.getCroppedCanvas();
                        if (t) {
                            var e = t.toDataURL("image/jpeg", "0.8");
                            this.avatarSource = e, this.avatar = e
                        } else this.alertsStore.showWarningMessage("Could not save image! Please try again.")
                    },
                    openInput: function() {
                        this.$refs.avatarinput.click()
                    },
                    deleteAudio: function(t) {
                        var e = this;
                        this.isDeleting = !0, axios.delete(route("api.audio.delete", {
                            customVoiceAudio: t.uuid
                        })).then((function(i) {
                            e.isDeleting = !1, i && e.customAudios.splice(e.customAudios.indexOf(t), 1)
                        }))
                    },
                    buildVoice: function() {
                        var t = this;
                        this.isBuildRequestProcessing = !0, axios.post(route("api.voice.build", {
                            voiceUUID: this.customVoice.uuid
                        })).then((function(e) {
                            t.isBuildRequestProcessing = !1, e.data.done ? t.$set(t.customVoice, "build_queue_position", e.data.position) : t.alertsStore.showWarningMessage(_.get(e, "data.error.message", null))
                        })).catch((function(e) {
                            t.isBuildRequestProcessing = !1
                        }))
                    },
                    cancelBuildVoice: function() {
                        var t = this;
                        axios.post(route("api.voice.cancel-build", {
                            voiceUUID: this.customVoice.uuid
                        })).then((function(e) {
                            t.isBuildRequestProcessing = !1, e.data.done ? t.$set(t.customVoice, "build_queue_position", null) : t.alertsStore.showWarningMessage(_.get(e, "data.error.message", null))
                        })).catch((function(e) {
                            t.isBuildRequestProcessing = !1
                        }))
                    },
                    getCategories: function() {
                        var t = this;
                        if (!this.categories.length) return axios.get(route("api.voice-category.get")).then((function(e) {
                            t.categories = e.data
                        }))
                    },
                    getLanguages: function() {
                        var t = this;
                        if (!this.languages.length) return axios.get(route("api.language.get")).then((function(e) {
                            t.languages = e.data.data
                        }))
                    },
                    getTagSuggestions: function(t) {
                        var e = arguments,
                            i = this;
                        return g(f().mark((function n() {
                            var r;
                            return f().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.length > 1 && void 0 !== e[1] ? e[1] : null, i.cancelTagToken && i.cancelTagToken.cancel(), i.cancelTagToken = axios.CancelToken.source(), n.abrupt("return", axios.get(route("api.tag.get"), {
                                            params: {
                                                q: r,
                                                type: t
                                            },
                                            cancelToken: i.cancelTagToken.token
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    onTagsChange: _.debounce((function(t) {
                        var e = this;
                        t && this.getTagSuggestions("tag", t).then((function(t) {
                            e.tagSuggestions = t.data.data
                        }))
                    }), 350),
                    closeModal: function() {
                        this.customAudios = [], this.showModal = !1, this.$root.$emit("pause-all-playback")
                    }
                })
            }
        },
        7903: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => p
            });
            var n = i(7476),
                r = i(1166),
                a = i(6901);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function s() {
                s = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    i = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, i) {
                        t[e] = i.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    l = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function d(t, e, i) {
                    return Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    d({}, "")
                } catch (t) {
                    d = function(t, e, i) {
                        return t[e] = i
                    }
                }

                function u(t, e, i, r) {
                    var a = e && e.prototype instanceof f ? e : f,
                        o = Object.create(a.prototype),
                        s = new B(r || []);
                    return n(o, "_invoke", {
                        value: _(t, i, s)
                    }), o
                }

                function p(t, e, i) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, i)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var h = {};

                function f() {}

                function m() {}

                function g() {}
                var v = {};
                d(v, a, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    x = b && b(b(S([])));
                x && x !== e && i.call(x, a) && (v = x);
                var w = g.prototype = f.prototype = Object.create(v);

                function y(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function A(t, e) {
                    function r(n, a, s, l) {
                        var c = p(t[n], t, a);
                        if ("throw" !== c.type) {
                            var d = c.arg,
                                u = d.value;
                            return u && "object" == o(u) && i.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                                r("next", t, s, l)
                            }), (function(t) {
                                r("throw", t, s, l)
                            })) : e.resolve(u).then((function(t) {
                                d.value = t, s(d)
                            }), (function(t) {
                                return r("throw", t, s, l)
                            }))
                        }
                        l(c.arg)
                    }
                    var a;
                    n(this, "_invoke", {
                        value: function(t, i) {
                            function n() {
                                return new e((function(e, n) {
                                    r(t, i, e, n)
                                }))
                            }
                            return a = a ? a.then(n, n) : n()
                        }
                    })
                }

                function _(t, e, i) {
                    var n = "suspendedStart";
                    return function(r, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw a;
                            return z()
                        }
                        for (i.method = r, i.arg = a;;) {
                            var o = i.delegate;
                            if (o) {
                                var s = C(o, i);
                                if (s) {
                                    if (s === h) continue;
                                    return s
                                }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if ("suspendedStart" === n) throw n = "completed", i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            n = "executing";
                            var l = p(t, e, i);
                            if ("normal" === l.type) {
                                if (n = i.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                return {
                                    value: l.arg,
                                    done: i.done
                                }
                            }
                            "throw" === l.type && (n = "completed", i.method = "throw", i.arg = l.arg)
                        }
                    }
                }

                function C(t, e) {
                    var i = e.method,
                        n = t.iterator[i];
                    if (void 0 === n) return e.delegate = null, "throw" === i && t.iterator.return && (e.method = "return", e.arg = void 0, C(t, e), "throw" === e.method) || "return" !== i && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + i + "' method")), h;
                    var r = p(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, h;
                    var a = r.arg;
                    return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function S(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                r = function e() {
                                    for (; ++n < t.length;)
                                        if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: z
                    }
                }

                function z() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = g, n(w, "constructor", {
                    value: g,
                    configurable: !0
                }), n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), m.displayName = d(g, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, d(t, c, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, y(A.prototype), d(A.prototype, l, (function() {
                    return this
                })), t.AsyncIterator = A, t.async = function(e, i, n, r, a) {
                    void 0 === a && (a = Promise);
                    var o = new A(u(e, i, n, r), a);
                    return t.isGeneratorFunction(i) ? o : o.next().then((function(t) {
                        return t.done ? t.value : o.next()
                    }))
                }, y(w), d(w, c, "Generator"), d(w, a, (function() {
                    return this
                })), d(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        i = [];
                    for (var n in e) i.push(n);
                    return i.reverse(),
                        function t() {
                            for (; i.length;) {
                                var n = i.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = S, B.prototype = {
                    constructor: B,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                            for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(i, n) {
                            return o.type = "throw", o.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r],
                                o = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = i.call(a, "catchLoc"),
                                    l = i.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(o)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), E(i), h
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.tryLoc === t) {
                                var n = i.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    E(i)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, i) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function l(t, e, i, n, r, a, o) {
                try {
                    var s = t[a](o),
                        l = s.value
                } catch (t) {
                    return void i(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(n, r)
            }

            function c(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(i), !0).forEach((function(e) {
                        u(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function u(t, e, i) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== o(t) || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" !== o(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === o(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const p = {
                name: "GetTokenModal",
                props: {
                    showEarnButton: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        minutes: 0,
                        hours: 0,
                        seconds: 0,
                        updateInterval: null,
                        checkPaymentInterval: null,
                        exp: this.$moment.utc("11-11-2022 11:00:00 PM", "MM-DD-YYYY hh:mm::ss A").local()
                    }
                },
                computed: d(d({}, (0, n.Kc)(r.q, a.g)), {}, {
                    saleExpired: function() {
                        return this.exp.valueOf() - this.$moment().valueOf() <= 0
                    }
                }),
                mounted: function() {
                    this.saleExpired || this.setUpdateInterval()
                },
                watch: {
                    saleExpired: function(t) {
                        t && (clearInterval(this.updateInterval), this.updateInterval = null)
                    },
                    "appStore.showGetTokenModal": function(t) {
                        t || this.resetChecking()
                    }
                },
                methods: {
                    setUpdateInterval: function() {
                        var t = this;
                        this.updateInterval = setInterval((function() {
                            var e = t.exp.valueOf() - t.$moment().valueOf();
                            t.seconds = parseInt(e / 1e3), t.minutes = parseInt(t.seconds / 60), t.hours = parseInt(e / 36e5)
                        }), 1e3)
                    },
                    getPackage: function(t) {
                        var e = this;
                        if (this.appStore.trackClick("package_clicked", {
                                page: this.appStore.page,
                                package: t.uuid,
                                price: t.price,
                                credits: t.tokens
                            }), "undefined" != typeof VCController) {
                            VCController.launchUrl(route("magic-link", {
                                token: this.appStore.magicToken,
                                redirect: route("checkout", {
                                    item: t.uuid,
                                    provider: this.pwStore.getProvider(),
                                    light: this.pwStore.isLight()
                                })
                            })), this.resetChecking();
                            var i = this.$moment.utc().unix();
                            this.checkPaymentInterval = setInterval((function() {
                                e.checkPayment(t.id, i)
                            }), 5e3)
                        } else window.open(route("checkout", {
                            item: t.uuid
                        }), "_blank").focus()
                    },
                    checkPayment: function(t, e) {
                        var i, n = this;
                        return (i = s().mark((function i() {
                            var r;
                            return s().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, axios.post(route("api.log.check-token-payment", {
                                            id: t,
                                            now: e
                                        }));
                                    case 2:
                                        if (!(r = i.sent).data.success) {
                                            i.next = 12;
                                            break
                                        }
                                        if ("function" != typeof VCController.bringToForeground) {
                                            i.next = 7;
                                            break
                                        }
                                        return i.next = 7, VCController.bringToForeground();
                                    case 7:
                                        n.appStore.user.tokens = _.get(r, "data.tokens"), n.$root.showSuccessMessage({
                                            message: "Payment completed successfully! Thank you!",
                                            confetti: !0
                                        }), n.appStore.showGetTokenModal = !1, i.next = 18;
                                        break;
                                    case 12:
                                        if (!r.data.failed) {
                                            i.next = 18;
                                            break
                                        }
                                        if ("function" != typeof VCController.bringToForeground) {
                                            i.next = 16;
                                            break
                                        }
                                        return i.next = 16, VCController.bringToForeground();
                                    case 16:
                                        n.$root.showWarningMessage(r.data.message), n.appStore.showGetTokenModal = !1;
                                    case 18:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })), function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(n, r) {
                                var a = i.apply(t, e);

                                function o(t) {
                                    l(a, n, r, o, s, "next", t)
                                }

                                function s(t) {
                                    l(a, n, r, o, s, "throw", t)
                                }
                                o(void 0)
                            }))
                        })()
                    },
                    resetChecking: function() {
                        clearInterval(this.checkPaymentInterval), this.checkPaymentInterval = null
                    },
                    showEarningModal: function() {
                        this.showEarnButton && (this.appStore.showGetTokenModal = !1, this.appStore.showEarnCreditsModal = !0, this.appStore.trackClick("credit_page_clicked", {
                            page: this.appStore.page
                        }))
                    }
                }
            }
        },
        6849: (t, e, i) => {
            "use strict";

            function n(t) {
                for (var e = window.atob(t), i = [], n = 0; n < e.length; n++) i.push(e.charCodeAt(n));
                return new Blob([new Uint8Array(i)])
            }

            function r(t) {
                return new Promise((function(e, i) {
                    var n = new Audio;
                    n.src = URL.createObjectURL(t), n.onloadedmetadata = function() {
                        return e(n.duration)
                    }, n.onerror = i
                }))
            }
            i.d(e, {
                J: () => n,
                e: () => r
            })
        },
        6901: (t, e, i) => {
            "use strict";
            i.d(e, {
                g: () => o
            });
            var n = i(538),
                r = i(7476),
                a = i(1166),
                o = (0, r.Q_)("pw", (function() {
                    var t = (0, a.q)(),
                        e = (0, n.ref)(null),
                        i = (0, n.ref)(null),
                        r = (0, n.ref)(null),
                        o = (0, n.ref)([]),
                        s = (0, n.ref)([]),
                        l = (0, n.ref)(0);
                    (0, n.ref)(!1);

                    function c() {
                        var e = Number(_.get(t.user, "active_subscription.tier_level", 0));
                        return 0 === e ? "free" : 1 === e ? "plus" : "pro"
                    }
                    return {
                        showPaywallModalId: e,
                        paywallTrigger: i,
                        paywallData: r,
                        productIds: s,
                        tierToShow: l,
                        isTheTwoPaywallsTheSame: function(t) {
                            var e = c();
                            return _.get(r.value, [t, e, "products", 0, "id"]) === _.get(r.value, [t, "free" === e ? "plus" : "pro", "products", 0, "id"])
                        },
                        updatePaywallData: function(t) {
                            r.value = t
                        },
                        showPaywall: function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                            i.value = t, n && (e.value = Number(n)), r && (s.value = r), null !== a && (l.value = Number(a))
                        },
                        hidePaywall: function(i) {
                            e.value = null, t.trackClick("paywall_x_clicked", {
                                paywall_id: i
                            })
                        },
                        getProvider: function() {
                            return _.get(r.value, "provider", 2)
                        },
                        isLight: function() {
                            return !!_.get(r.value, "light", !1)
                        },
                        canLoad: function(t) {
                            return !o.value.length && r.value && (o.value.push(_.get(r.value, "onLaunch.free.id")), o.value.push(_.get(r.value, "onLaunch.plus.id")), o.value.push(_.get(r.value, "watermark.free.id")), o.value.push(_.get(r.value, "watermark.plus.id")), o.value.push(_.get(r.value, "quality.free.id")), o.value.push(_.get(r.value, "quality.plus.id")), o.value.push(_.get(r.value, "training.free.id")), o.value.push(_.get(r.value, "training.plus.id"))), o.value.includes(t)
                        },
                        watermarkData: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id";
                            return _.get(r.value, ["watermark", c(), t])
                        },
                        qualityData: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id";
                            return _.get(r.value, ["quality", c(), t])
                        },
                        onLaunchData: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id",
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e || (e = c()), _.get(r.value, ["onLaunch", e, t])
                        },
                        trainVoiceData: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id";
                            return _.get(r.value, ["training", c(), t])
                        }
                    }
                }))
        },
        3129: function(t) {
            t.exports = function() {
                "use strict";

                function t(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, n)
                    }
                    return i
                }

                function e(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var n = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? t(Object(n), !0).forEach((function(t) {
                            o(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function i(t) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, i(t)
                }

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                function a(t, e, i) {
                    return e && r(t.prototype, e), i && r(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t
                }

                function o(t, e, i) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = i, t
                }

                function s(t) {
                    return l(t) || c(t) || d(t) || p()
                }

                function l(t) {
                    if (Array.isArray(t)) return u(t)
                }

                function c(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }

                function d(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(t, e) : void 0
                    }
                }

                function u(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                    return n
                }

                function p() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var h = "undefined" != typeof window && void 0 !== window.document,
                    f = h ? window : {},
                    m = !(!h || !f.document.documentElement) && "ontouchstart" in f.document.documentElement,
                    g = !!h && "PointerEvent" in f,
                    v = "cropper",
                    b = "all",
                    x = "crop",
                    w = "move",
                    y = "zoom",
                    A = "e",
                    _ = "w",
                    C = "s",
                    k = "n",
                    E = "ne",
                    B = "nw",
                    S = "se",
                    z = "sw",
                    M = "".concat(v, "-crop"),
                    F = "".concat(v, "-disabled"),
                    D = "".concat(v, "-hidden"),
                    U = "".concat(v, "-hide"),
                    T = "".concat(v, "-invisible"),
                    L = "".concat(v, "-modal"),
                    R = "".concat(v, "-move"),
                    Z = "".concat(v, "Action"),
                    $ = "".concat(v, "Preview"),
                    O = "crop",
                    I = "move",
                    P = "none",
                    j = "crop",
                    N = "cropend",
                    H = "cropmove",
                    W = "cropstart",
                    q = "dblclick",
                    V = m ? "touchstart" : "mousedown",
                    Y = m ? "touchmove" : "mousemove",
                    X = m ? "touchend touchcancel" : "mouseup",
                    G = g ? "pointerdown" : V,
                    Q = g ? "pointermove" : Y,
                    K = g ? "pointerup pointercancel" : X,
                    J = "ready",
                    tt = "resize",
                    et = "wheel",
                    it = "zoom",
                    nt = "image/jpeg",
                    rt = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
                    at = /^data:/,
                    ot = /^data:image\/jpeg;base64,/,
                    st = /^img|canvas$/i,
                    lt = 200,
                    ct = 100,
                    dt = {
                        viewMode: 0,
                        dragMode: O,
                        initialAspectRatio: NaN,
                        aspectRatio: NaN,
                        data: null,
                        preview: "",
                        responsive: !0,
                        restore: !0,
                        checkCrossOrigin: !0,
                        checkOrientation: !0,
                        modal: !0,
                        guides: !0,
                        center: !0,
                        highlight: !0,
                        background: !0,
                        autoCrop: !0,
                        autoCropArea: .8,
                        movable: !0,
                        rotatable: !0,
                        scalable: !0,
                        zoomable: !0,
                        zoomOnTouch: !0,
                        zoomOnWheel: !0,
                        wheelZoomRatio: .1,
                        cropBoxMovable: !0,
                        cropBoxResizable: !0,
                        toggleDragModeOnDblclick: !0,
                        minCanvasWidth: 0,
                        minCanvasHeight: 0,
                        minCropBoxWidth: 0,
                        minCropBoxHeight: 0,
                        minContainerWidth: lt,
                        minContainerHeight: ct,
                        ready: null,
                        cropstart: null,
                        cropmove: null,
                        cropend: null,
                        crop: null,
                        zoom: null
                    },
                    ut = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
                    pt = Number.isNaN || f.isNaN;

                function ht(t) {
                    return "number" == typeof t && !pt(t)
                }
                var ft = function(t) {
                    return t > 0 && t < 1 / 0
                };

                function mt(t) {
                    return void 0 === t
                }

                function gt(t) {
                    return "object" === i(t) && null !== t
                }
                var vt = Object.prototype.hasOwnProperty;

                function bt(t) {
                    if (!gt(t)) return !1;
                    try {
                        var e = t.constructor,
                            i = e.prototype;
                        return e && i && vt.call(i, "isPrototypeOf")
                    } catch (t) {
                        return !1
                    }
                }

                function xt(t) {
                    return "function" == typeof t
                }
                var wt = Array.prototype.slice;

                function yt(t) {
                    return Array.from ? Array.from(t) : wt.call(t)
                }

                function At(t, e) {
                    return t && xt(e) && (Array.isArray(t) || ht(t.length) ? yt(t).forEach((function(i, n) {
                        e.call(t, i, n, t)
                    })) : gt(t) && Object.keys(t).forEach((function(i) {
                        e.call(t, t[i], i, t)
                    }))), t
                }
                var _t = Object.assign || function(t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        return gt(t) && i.length > 0 && i.forEach((function(e) {
                            gt(e) && Object.keys(e).forEach((function(i) {
                                t[i] = e[i]
                            }))
                        })), t
                    },
                    Ct = /\.\d*(?:0|9){12}\d*$/;

                function kt(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
                    return Ct.test(t) ? Math.round(t * e) / e : t
                }
                var Et = /^width|height|left|top|marginLeft|marginTop$/;

                function Bt(t, e) {
                    var i = t.style;
                    At(e, (function(t, e) {
                        Et.test(e) && ht(t) && (t = "".concat(t, "px")), i[e] = t
                    }))
                }

                function St(t, e) {
                    return t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1
                }

                function zt(t, e) {
                    if (e)
                        if (ht(t.length)) At(t, (function(t) {
                            zt(t, e)
                        }));
                        else if (t.classList) t.classList.add(e);
                    else {
                        var i = t.className.trim();
                        i ? i.indexOf(e) < 0 && (t.className = "".concat(i, " ").concat(e)) : t.className = e
                    }
                }

                function Mt(t, e) {
                    e && (ht(t.length) ? At(t, (function(t) {
                        Mt(t, e)
                    })) : t.classList ? t.classList.remove(e) : t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, "")))
                }

                function Ft(t, e, i) {
                    e && (ht(t.length) ? At(t, (function(t) {
                        Ft(t, e, i)
                    })) : i ? zt(t, e) : Mt(t, e))
                }
                var Dt = /([a-z\d])([A-Z])/g;

                function Ut(t) {
                    return t.replace(Dt, "$1-$2").toLowerCase()
                }

                function Tt(t, e) {
                    return gt(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-".concat(Ut(e)))
                }

                function Lt(t, e, i) {
                    gt(i) ? t[e] = i : t.dataset ? t.dataset[e] = i : t.setAttribute("data-".concat(Ut(e)), i)
                }

                function Rt(t, e) {
                    if (gt(t[e])) try {
                        delete t[e]
                    } catch (i) {
                        t[e] = void 0
                    } else if (t.dataset) try {
                        delete t.dataset[e]
                    } catch (i) {
                        t.dataset[e] = void 0
                    } else t.removeAttribute("data-".concat(Ut(e)))
                }
                var Zt = /\s\s*/,
                    $t = function() {
                        var t = !1;
                        if (h) {
                            var e = !1,
                                i = function() {},
                                n = Object.defineProperty({}, "once", {
                                    get: function() {
                                        return t = !0, e
                                    },
                                    set: function(t) {
                                        e = t
                                    }
                                });
                            f.addEventListener("test", i, n), f.removeEventListener("test", i, n)
                        }
                        return t
                    }();

                function Ot(t, e, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = i;
                    e.trim().split(Zt).forEach((function(e) {
                        if (!$t) {
                            var a = t.listeners;
                            a && a[e] && a[e][i] && (r = a[e][i], delete a[e][i], 0 === Object.keys(a[e]).length && delete a[e], 0 === Object.keys(a).length && delete t.listeners)
                        }
                        t.removeEventListener(e, r, n)
                    }))
                }

                function It(t, e, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = i;
                    e.trim().split(Zt).forEach((function(e) {
                        if (n.once && !$t) {
                            var a = t.listeners,
                                o = void 0 === a ? {} : a;
                            r = function() {
                                delete o[e][i], t.removeEventListener(e, r, n);
                                for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++) s[l] = arguments[l];
                                i.apply(t, s)
                            }, o[e] || (o[e] = {}), o[e][i] && t.removeEventListener(e, o[e][i], n), o[e][i] = r, t.listeners = o
                        }
                        t.addEventListener(e, r, n)
                    }))
                }

                function Pt(t, e, i) {
                    var n;
                    return xt(Event) && xt(CustomEvent) ? n = new CustomEvent(e, {
                        detail: i,
                        bubbles: !0,
                        cancelable: !0
                    }) : (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i), t.dispatchEvent(n)
                }

                function jt(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
                        top: e.top + (window.pageYOffset - document.documentElement.clientTop)
                    }
                }
                var Nt = f.location,
                    Ht = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

                function Wt(t) {
                    var e = t.match(Ht);
                    return null !== e && (e[1] !== Nt.protocol || e[2] !== Nt.hostname || e[3] !== Nt.port)
                }

                function qt(t) {
                    var e = "timestamp=".concat((new Date).getTime());
                    return t + (-1 === t.indexOf("?") ? "?" : "&") + e
                }

                function Vt(t) {
                    var e = t.rotate,
                        i = t.scaleX,
                        n = t.scaleY,
                        r = t.translateX,
                        a = t.translateY,
                        o = [];
                    ht(r) && 0 !== r && o.push("translateX(".concat(r, "px)")), ht(a) && 0 !== a && o.push("translateY(".concat(a, "px)")), ht(e) && 0 !== e && o.push("rotate(".concat(e, "deg)")), ht(i) && 1 !== i && o.push("scaleX(".concat(i, ")")), ht(n) && 1 !== n && o.push("scaleY(".concat(n, ")"));
                    var s = o.length ? o.join(" ") : "none";
                    return {
                        WebkitTransform: s,
                        msTransform: s,
                        transform: s
                    }
                }

                function Yt(t) {
                    var i = e({}, t),
                        n = 0;
                    return At(t, (function(t, e) {
                        delete i[e], At(i, (function(e) {
                            var i = Math.abs(t.startX - e.startX),
                                r = Math.abs(t.startY - e.startY),
                                a = Math.abs(t.endX - e.endX),
                                o = Math.abs(t.endY - e.endY),
                                s = Math.sqrt(i * i + r * r),
                                l = (Math.sqrt(a * a + o * o) - s) / s;
                            Math.abs(l) > Math.abs(n) && (n = l)
                        }))
                    })), n
                }

                function Xt(t, i) {
                    var n = t.pageX,
                        r = t.pageY,
                        a = {
                            endX: n,
                            endY: r
                        };
                    return i ? a : e({
                        startX: n,
                        startY: r
                    }, a)
                }

                function Gt(t) {
                    var e = 0,
                        i = 0,
                        n = 0;
                    return At(t, (function(t) {
                        var r = t.startX,
                            a = t.startY;
                        e += r, i += a, n += 1
                    })), {
                        pageX: e /= n,
                        pageY: i /= n
                    }
                }

                function Qt(t) {
                    var e = t.aspectRatio,
                        i = t.height,
                        n = t.width,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "contain",
                        a = ft(n),
                        o = ft(i);
                    if (a && o) {
                        var s = i * e;
                        "contain" === r && s > n || "cover" === r && s < n ? i = n / e : n = i * e
                    } else a ? i = n / e : o && (n = i * e);
                    return {
                        width: n,
                        height: i
                    }
                }

                function Kt(t) {
                    var e = t.width,
                        i = t.height,
                        n = t.degree;
                    if (90 == (n = Math.abs(n) % 180)) return {
                        width: i,
                        height: e
                    };
                    var r = n % 90 * Math.PI / 180,
                        a = Math.sin(r),
                        o = Math.cos(r),
                        s = e * o + i * a,
                        l = e * a + i * o;
                    return n > 90 ? {
                        width: l,
                        height: s
                    } : {
                        width: s,
                        height: l
                    }
                }

                function Jt(t, e, i, n) {
                    var r = e.aspectRatio,
                        a = e.naturalWidth,
                        o = e.naturalHeight,
                        l = e.rotate,
                        c = void 0 === l ? 0 : l,
                        d = e.scaleX,
                        u = void 0 === d ? 1 : d,
                        p = e.scaleY,
                        h = void 0 === p ? 1 : p,
                        f = i.aspectRatio,
                        m = i.naturalWidth,
                        g = i.naturalHeight,
                        v = n.fillColor,
                        b = void 0 === v ? "transparent" : v,
                        x = n.imageSmoothingEnabled,
                        w = void 0 === x || x,
                        y = n.imageSmoothingQuality,
                        A = void 0 === y ? "low" : y,
                        _ = n.maxWidth,
                        C = void 0 === _ ? 1 / 0 : _,
                        k = n.maxHeight,
                        E = void 0 === k ? 1 / 0 : k,
                        B = n.minWidth,
                        S = void 0 === B ? 0 : B,
                        z = n.minHeight,
                        M = void 0 === z ? 0 : z,
                        F = document.createElement("canvas"),
                        D = F.getContext("2d"),
                        U = Qt({
                            aspectRatio: f,
                            width: C,
                            height: E
                        }),
                        T = Qt({
                            aspectRatio: f,
                            width: S,
                            height: M
                        }, "cover"),
                        L = Math.min(U.width, Math.max(T.width, m)),
                        R = Math.min(U.height, Math.max(T.height, g)),
                        Z = Qt({
                            aspectRatio: r,
                            width: C,
                            height: E
                        }),
                        $ = Qt({
                            aspectRatio: r,
                            width: S,
                            height: M
                        }, "cover"),
                        O = Math.min(Z.width, Math.max($.width, a)),
                        I = Math.min(Z.height, Math.max($.height, o)),
                        P = [-O / 2, -I / 2, O, I];
                    return F.width = kt(L), F.height = kt(R), D.fillStyle = b, D.fillRect(0, 0, L, R), D.save(), D.translate(L / 2, R / 2), D.rotate(c * Math.PI / 180), D.scale(u, h), D.imageSmoothingEnabled = w, D.imageSmoothingQuality = A, D.drawImage.apply(D, [t].concat(s(P.map((function(t) {
                        return Math.floor(kt(t))
                    }))))), D.restore(), F
                }
                var te = String.fromCharCode;

                function ee(t, e, i) {
                    var n = "";
                    i += e;
                    for (var r = e; r < i; r += 1) n += te(t.getUint8(r));
                    return n
                }
                var ie = /^data:.*,/;

                function ne(t) {
                    var e = t.replace(ie, ""),
                        i = atob(e),
                        n = new ArrayBuffer(i.length),
                        r = new Uint8Array(n);
                    return At(r, (function(t, e) {
                        r[e] = i.charCodeAt(e)
                    })), n
                }

                function re(t, e) {
                    for (var i = [], n = 8192, r = new Uint8Array(t); r.length > 0;) i.push(te.apply(null, yt(r.subarray(0, n)))), r = r.subarray(n);
                    return "data:".concat(e, ";base64,").concat(btoa(i.join("")))
                }

                function ae(t) {
                    var e, i = new DataView(t);
                    try {
                        var n, r, a;
                        if (255 === i.getUint8(0) && 216 === i.getUint8(1))
                            for (var o = i.byteLength, s = 2; s + 1 < o;) {
                                if (255 === i.getUint8(s) && 225 === i.getUint8(s + 1)) {
                                    r = s;
                                    break
                                }
                                s += 1
                            }
                        if (r) {
                            var l = r + 10;
                            if ("Exif" === ee(i, r + 4, 4)) {
                                var c = i.getUint16(l);
                                if (((n = 18761 === c) || 19789 === c) && 42 === i.getUint16(l + 2, n)) {
                                    var d = i.getUint32(l + 4, n);
                                    d >= 8 && (a = l + d)
                                }
                            }
                        }
                        if (a) {
                            var u, p, h = i.getUint16(a, n);
                            for (p = 0; p < h; p += 1)
                                if (u = a + 12 * p + 2, 274 === i.getUint16(u, n)) {
                                    u += 8, e = i.getUint16(u, n), i.setUint16(u, 1, n);
                                    break
                                }
                        }
                    } catch (t) {
                        e = 1
                    }
                    return e
                }

                function oe(t) {
                    var e = 0,
                        i = 1,
                        n = 1;
                    switch (t) {
                        case 2:
                            i = -1;
                            break;
                        case 3:
                            e = -180;
                            break;
                        case 4:
                            n = -1;
                            break;
                        case 5:
                            e = 90, n = -1;
                            break;
                        case 6:
                            e = 90;
                            break;
                        case 7:
                            e = 90, i = -1;
                            break;
                        case 8:
                            e = -90
                    }
                    return {
                        rotate: e,
                        scaleX: i,
                        scaleY: n
                    }
                }
                var se = {
                        render: function() {
                            this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
                        },
                        initContainer: function() {
                            var t = this.element,
                                e = this.options,
                                i = this.container,
                                n = this.cropper,
                                r = Number(e.minContainerWidth),
                                a = Number(e.minContainerHeight);
                            zt(n, D), Mt(t, D);
                            var o = {
                                width: Math.max(i.offsetWidth, r >= 0 ? r : lt),
                                height: Math.max(i.offsetHeight, a >= 0 ? a : ct)
                            };
                            this.containerData = o, Bt(n, {
                                width: o.width,
                                height: o.height
                            }), zt(t, D), Mt(n, D)
                        },
                        initCanvas: function() {
                            var t = this.containerData,
                                e = this.imageData,
                                i = this.options.viewMode,
                                n = Math.abs(e.rotate) % 180 == 90,
                                r = n ? e.naturalHeight : e.naturalWidth,
                                a = n ? e.naturalWidth : e.naturalHeight,
                                o = r / a,
                                s = t.width,
                                l = t.height;
                            t.height * o > t.width ? 3 === i ? s = t.height * o : l = t.width / o : 3 === i ? l = t.width / o : s = t.height * o;
                            var c = {
                                aspectRatio: o,
                                naturalWidth: r,
                                naturalHeight: a,
                                width: s,
                                height: l
                            };
                            this.canvasData = c, this.limited = 1 === i || 2 === i, this.limitCanvas(!0, !0), c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth), c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight), c.left = (t.width - c.width) / 2, c.top = (t.height - c.height) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.initialCanvasData = _t({}, c)
                        },
                        limitCanvas: function(t, e) {
                            var i = this.options,
                                n = this.containerData,
                                r = this.canvasData,
                                a = this.cropBoxData,
                                o = i.viewMode,
                                s = r.aspectRatio,
                                l = this.cropped && a;
                            if (t) {
                                var c = Number(i.minCanvasWidth) || 0,
                                    d = Number(i.minCanvasHeight) || 0;
                                o > 1 ? (c = Math.max(c, n.width), d = Math.max(d, n.height), 3 === o && (d * s > c ? c = d * s : d = c / s)) : o > 0 && (c ? c = Math.max(c, l ? a.width : 0) : d ? d = Math.max(d, l ? a.height : 0) : l && (c = a.width, (d = a.height) * s > c ? c = d * s : d = c / s));
                                var u = Qt({
                                    aspectRatio: s,
                                    width: c,
                                    height: d
                                });
                                c = u.width, d = u.height, r.minWidth = c, r.minHeight = d, r.maxWidth = 1 / 0, r.maxHeight = 1 / 0
                            }
                            if (e)
                                if (o > (l ? 0 : 1)) {
                                    var p = n.width - r.width,
                                        h = n.height - r.height;
                                    r.minLeft = Math.min(0, p), r.minTop = Math.min(0, h), r.maxLeft = Math.max(0, p), r.maxTop = Math.max(0, h), l && this.limited && (r.minLeft = Math.min(a.left, a.left + (a.width - r.width)), r.minTop = Math.min(a.top, a.top + (a.height - r.height)), r.maxLeft = a.left, r.maxTop = a.top, 2 === o && (r.width >= n.width && (r.minLeft = Math.min(0, p), r.maxLeft = Math.max(0, p)), r.height >= n.height && (r.minTop = Math.min(0, h), r.maxTop = Math.max(0, h))))
                                } else r.minLeft = -r.width, r.minTop = -r.height, r.maxLeft = n.width, r.maxTop = n.height
                        },
                        renderCanvas: function(t, e) {
                            var i = this.canvasData,
                                n = this.imageData;
                            if (e) {
                                var r = Kt({
                                        width: n.naturalWidth * Math.abs(n.scaleX || 1),
                                        height: n.naturalHeight * Math.abs(n.scaleY || 1),
                                        degree: n.rotate || 0
                                    }),
                                    a = r.width,
                                    o = r.height,
                                    s = i.width * (a / i.naturalWidth),
                                    l = i.height * (o / i.naturalHeight);
                                i.left -= (s - i.width) / 2, i.top -= (l - i.height) / 2, i.width = s, i.height = l, i.aspectRatio = a / o, i.naturalWidth = a, i.naturalHeight = o, this.limitCanvas(!0, !1)
                            }(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, Bt(this.canvas, _t({
                                width: i.width,
                                height: i.height
                            }, Vt({
                                translateX: i.left,
                                translateY: i.top
                            }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0)
                        },
                        renderImage: function(t) {
                            var e = this.canvasData,
                                i = this.imageData,
                                n = i.naturalWidth * (e.width / e.naturalWidth),
                                r = i.naturalHeight * (e.height / e.naturalHeight);
                            _t(i, {
                                width: n,
                                height: r,
                                left: (e.width - n) / 2,
                                top: (e.height - r) / 2
                            }), Bt(this.image, _t({
                                width: i.width,
                                height: i.height
                            }, Vt(_t({
                                translateX: i.left,
                                translateY: i.top
                            }, i)))), t && this.output()
                        },
                        initCropBox: function() {
                            var t = this.options,
                                e = this.canvasData,
                                i = t.aspectRatio || t.initialAspectRatio,
                                n = Number(t.autoCropArea) || .8,
                                r = {
                                    width: e.width,
                                    height: e.height
                                };
                            i && (e.height * i > e.width ? r.height = r.width / i : r.width = r.height * i), this.cropBoxData = r, this.limitCropBox(!0, !0), r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth), r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight), r.width = Math.max(r.minWidth, r.width * n), r.height = Math.max(r.minHeight, r.height * n), r.left = e.left + (e.width - r.width) / 2, r.top = e.top + (e.height - r.height) / 2, r.oldLeft = r.left, r.oldTop = r.top, this.initialCropBoxData = _t({}, r)
                        },
                        limitCropBox: function(t, e) {
                            var i = this.options,
                                n = this.containerData,
                                r = this.canvasData,
                                a = this.cropBoxData,
                                o = this.limited,
                                s = i.aspectRatio;
                            if (t) {
                                var l = Number(i.minCropBoxWidth) || 0,
                                    c = Number(i.minCropBoxHeight) || 0,
                                    d = o ? Math.min(n.width, r.width, r.width + r.left, n.width - r.left) : n.width,
                                    u = o ? Math.min(n.height, r.height, r.height + r.top, n.height - r.top) : n.height;
                                l = Math.min(l, n.width), c = Math.min(c, n.height), s && (l && c ? c * s > l ? c = l / s : l = c * s : l ? c = l / s : c && (l = c * s), u * s > d ? u = d / s : d = u * s), a.minWidth = Math.min(l, d), a.minHeight = Math.min(c, u), a.maxWidth = d, a.maxHeight = u
                            }
                            e && (o ? (a.minLeft = Math.max(0, r.left), a.minTop = Math.max(0, r.top), a.maxLeft = Math.min(n.width, r.left + r.width) - a.width, a.maxTop = Math.min(n.height, r.top + r.height) - a.height) : (a.minLeft = 0, a.minTop = 0, a.maxLeft = n.width - a.width, a.maxTop = n.height - a.height))
                        },
                        renderCropBox: function() {
                            var t = this.options,
                                e = this.containerData,
                                i = this.cropBoxData;
                            (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && Lt(this.face, Z, i.width >= e.width && i.height >= e.height ? w : b), Bt(this.cropBox, _t({
                                width: i.width,
                                height: i.height
                            }, Vt({
                                translateX: i.left,
                                translateY: i.top
                            }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
                        },
                        output: function() {
                            this.preview(), Pt(this.element, j, this.getData())
                        }
                    },
                    le = {
                        initPreview: function() {
                            var t = this.element,
                                e = this.crossOrigin,
                                i = this.options.preview,
                                n = e ? this.crossOriginUrl : this.url,
                                r = t.alt || "The image to preview",
                                a = document.createElement("img");
                            if (e && (a.crossOrigin = e), a.src = n, a.alt = r, this.viewBox.appendChild(a), this.viewBoxImage = a, i) {
                                var o = i;
                                "string" == typeof i ? o = t.ownerDocument.querySelectorAll(i) : i.querySelector && (o = [i]), this.previews = o, At(o, (function(t) {
                                    var i = document.createElement("img");
                                    Lt(t, $, {
                                        width: t.offsetWidth,
                                        height: t.offsetHeight,
                                        html: t.innerHTML
                                    }), e && (i.crossOrigin = e), i.src = n, i.alt = r, i.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', t.innerHTML = "", t.appendChild(i)
                                }))
                            }
                        },
                        resetPreview: function() {
                            At(this.previews, (function(t) {
                                var e = Tt(t, $);
                                Bt(t, {
                                    width: e.width,
                                    height: e.height
                                }), t.innerHTML = e.html, Rt(t, $)
                            }))
                        },
                        preview: function() {
                            var t = this.imageData,
                                e = this.canvasData,
                                i = this.cropBoxData,
                                n = i.width,
                                r = i.height,
                                a = t.width,
                                o = t.height,
                                s = i.left - e.left - t.left,
                                l = i.top - e.top - t.top;
                            this.cropped && !this.disabled && (Bt(this.viewBoxImage, _t({
                                width: a,
                                height: o
                            }, Vt(_t({
                                translateX: -s,
                                translateY: -l
                            }, t)))), At(this.previews, (function(e) {
                                var i = Tt(e, $),
                                    c = i.width,
                                    d = i.height,
                                    u = c,
                                    p = d,
                                    h = 1;
                                n && (p = r * (h = c / n)), r && p > d && (u = n * (h = d / r), p = d), Bt(e, {
                                    width: u,
                                    height: p
                                }), Bt(e.getElementsByTagName("img")[0], _t({
                                    width: a * h,
                                    height: o * h
                                }, Vt(_t({
                                    translateX: -s * h,
                                    translateY: -l * h
                                }, t))))
                            })))
                        }
                    },
                    ce = {
                        bind: function() {
                            var t = this.element,
                                e = this.options,
                                i = this.cropper;
                            xt(e.cropstart) && It(t, W, e.cropstart), xt(e.cropmove) && It(t, H, e.cropmove), xt(e.cropend) && It(t, N, e.cropend), xt(e.crop) && It(t, j, e.crop), xt(e.zoom) && It(t, it, e.zoom), It(i, G, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && It(i, et, this.onWheel = this.wheel.bind(this), {
                                passive: !1,
                                capture: !0
                            }), e.toggleDragModeOnDblclick && It(i, q, this.onDblclick = this.dblclick.bind(this)), It(t.ownerDocument, Q, this.onCropMove = this.cropMove.bind(this)), It(t.ownerDocument, K, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && It(window, tt, this.onResize = this.resize.bind(this))
                        },
                        unbind: function() {
                            var t = this.element,
                                e = this.options,
                                i = this.cropper;
                            xt(e.cropstart) && Ot(t, W, e.cropstart), xt(e.cropmove) && Ot(t, H, e.cropmove), xt(e.cropend) && Ot(t, N, e.cropend), xt(e.crop) && Ot(t, j, e.crop), xt(e.zoom) && Ot(t, it, e.zoom), Ot(i, G, this.onCropStart), e.zoomable && e.zoomOnWheel && Ot(i, et, this.onWheel, {
                                passive: !1,
                                capture: !0
                            }), e.toggleDragModeOnDblclick && Ot(i, q, this.onDblclick), Ot(t.ownerDocument, Q, this.onCropMove), Ot(t.ownerDocument, K, this.onCropEnd), e.responsive && Ot(window, tt, this.onResize)
                        }
                    },
                    de = {
                        resize: function() {
                            if (!this.disabled) {
                                var t, e, i = this.options,
                                    n = this.container,
                                    r = this.containerData,
                                    a = n.offsetWidth / r.width,
                                    o = n.offsetHeight / r.height,
                                    s = Math.abs(a - 1) > Math.abs(o - 1) ? a : o;
                                1 !== s && (i.restore && (t = this.getCanvasData(), e = this.getCropBoxData()), this.render(), i.restore && (this.setCanvasData(At(t, (function(e, i) {
                                    t[i] = e * s
                                }))), this.setCropBoxData(At(e, (function(t, i) {
                                    e[i] = t * s
                                })))))
                            }
                        },
                        dblclick: function() {
                            this.disabled || this.options.dragMode === P || this.setDragMode(St(this.dragBox, M) ? I : O)
                        },
                        wheel: function(t) {
                            var e = this,
                                i = Number(this.options.wheelZoomRatio) || .1,
                                n = 1;
                            this.disabled || (t.preventDefault(), this.wheeling || (this.wheeling = !0, setTimeout((function() {
                                e.wheeling = !1
                            }), 50), t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1), this.zoom(-n * i, t)))
                        },
                        cropStart: function(t) {
                            var e = t.buttons,
                                i = t.button;
                            if (!(this.disabled || ("mousedown" === t.type || "pointerdown" === t.type && "mouse" === t.pointerType) && (ht(e) && 1 !== e || ht(i) && 0 !== i || t.ctrlKey))) {
                                var n, r = this.options,
                                    a = this.pointers;
                                t.changedTouches ? At(t.changedTouches, (function(t) {
                                    a[t.identifier] = Xt(t)
                                })) : a[t.pointerId || 0] = Xt(t), n = Object.keys(a).length > 1 && r.zoomable && r.zoomOnTouch ? y : Tt(t.target, Z), rt.test(n) && !1 !== Pt(this.element, W, {
                                    originalEvent: t,
                                    action: n
                                }) && (t.preventDefault(), this.action = n, this.cropping = !1, n === x && (this.cropping = !0, zt(this.dragBox, L)))
                            }
                        },
                        cropMove: function(t) {
                            var e = this.action;
                            if (!this.disabled && e) {
                                var i = this.pointers;
                                t.preventDefault(), !1 !== Pt(this.element, H, {
                                    originalEvent: t,
                                    action: e
                                }) && (t.changedTouches ? At(t.changedTouches, (function(t) {
                                    _t(i[t.identifier] || {}, Xt(t, !0))
                                })) : _t(i[t.pointerId || 0] || {}, Xt(t, !0)), this.change(t))
                            }
                        },
                        cropEnd: function(t) {
                            if (!this.disabled) {
                                var e = this.action,
                                    i = this.pointers;
                                t.changedTouches ? At(t.changedTouches, (function(t) {
                                    delete i[t.identifier]
                                })) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, Ft(this.dragBox, L, this.cropped && this.options.modal)), Pt(this.element, N, {
                                    originalEvent: t,
                                    action: e
                                }))
                            }
                        }
                    },
                    ue = {
                        change: function(t) {
                            var e, i = this.options,
                                n = this.canvasData,
                                r = this.containerData,
                                a = this.cropBoxData,
                                o = this.pointers,
                                s = this.action,
                                l = i.aspectRatio,
                                c = a.left,
                                d = a.top,
                                u = a.width,
                                p = a.height,
                                h = c + u,
                                f = d + p,
                                m = 0,
                                g = 0,
                                v = r.width,
                                M = r.height,
                                F = !0;
                            !l && t.shiftKey && (l = u && p ? u / p : 1), this.limited && (m = a.minLeft, g = a.minTop, v = m + Math.min(r.width, n.width, n.left + n.width), M = g + Math.min(r.height, n.height, n.top + n.height));
                            var U = o[Object.keys(o)[0]],
                                T = {
                                    x: U.endX - U.startX,
                                    y: U.endY - U.startY
                                },
                                L = function(t) {
                                    switch (t) {
                                        case A:
                                            h + T.x > v && (T.x = v - h);
                                            break;
                                        case _:
                                            c + T.x < m && (T.x = m - c);
                                            break;
                                        case k:
                                            d + T.y < g && (T.y = g - d);
                                            break;
                                        case C:
                                            f + T.y > M && (T.y = M - f)
                                    }
                                };
                            switch (s) {
                                case b:
                                    c += T.x, d += T.y;
                                    break;
                                case A:
                                    if (T.x >= 0 && (h >= v || l && (d <= g || f >= M))) {
                                        F = !1;
                                        break
                                    }
                                    L(A), (u += T.x) < 0 && (s = _, c -= u = -u), l && (p = u / l, d += (a.height - p) / 2);
                                    break;
                                case k:
                                    if (T.y <= 0 && (d <= g || l && (c <= m || h >= v))) {
                                        F = !1;
                                        break
                                    }
                                    L(k), p -= T.y, d += T.y, p < 0 && (s = C, d -= p = -p), l && (u = p * l, c += (a.width - u) / 2);
                                    break;
                                case _:
                                    if (T.x <= 0 && (c <= m || l && (d <= g || f >= M))) {
                                        F = !1;
                                        break
                                    }
                                    L(_), u -= T.x, c += T.x, u < 0 && (s = A, c -= u = -u), l && (p = u / l, d += (a.height - p) / 2);
                                    break;
                                case C:
                                    if (T.y >= 0 && (f >= M || l && (c <= m || h >= v))) {
                                        F = !1;
                                        break
                                    }
                                    L(C), (p += T.y) < 0 && (s = k, d -= p = -p), l && (u = p * l, c += (a.width - u) / 2);
                                    break;
                                case E:
                                    if (l) {
                                        if (T.y <= 0 && (d <= g || h >= v)) {
                                            F = !1;
                                            break
                                        }
                                        L(k), p -= T.y, d += T.y, u = p * l
                                    } else L(k), L(A), T.x >= 0 ? h < v ? u += T.x : T.y <= 0 && d <= g && (F = !1) : u += T.x, T.y <= 0 ? d > g && (p -= T.y, d += T.y) : (p -= T.y, d += T.y);
                                    u < 0 && p < 0 ? (s = z, d -= p = -p, c -= u = -u) : u < 0 ? (s = B, c -= u = -u) : p < 0 && (s = S, d -= p = -p);
                                    break;
                                case B:
                                    if (l) {
                                        if (T.y <= 0 && (d <= g || c <= m)) {
                                            F = !1;
                                            break
                                        }
                                        L(k), p -= T.y, d += T.y, u = p * l, c += a.width - u
                                    } else L(k), L(_), T.x <= 0 ? c > m ? (u -= T.x, c += T.x) : T.y <= 0 && d <= g && (F = !1) : (u -= T.x, c += T.x), T.y <= 0 ? d > g && (p -= T.y, d += T.y) : (p -= T.y, d += T.y);
                                    u < 0 && p < 0 ? (s = S, d -= p = -p, c -= u = -u) : u < 0 ? (s = E, c -= u = -u) : p < 0 && (s = z, d -= p = -p);
                                    break;
                                case z:
                                    if (l) {
                                        if (T.x <= 0 && (c <= m || f >= M)) {
                                            F = !1;
                                            break
                                        }
                                        L(_), u -= T.x, c += T.x, p = u / l
                                    } else L(C), L(_), T.x <= 0 ? c > m ? (u -= T.x, c += T.x) : T.y >= 0 && f >= M && (F = !1) : (u -= T.x, c += T.x), T.y >= 0 ? f < M && (p += T.y) : p += T.y;
                                    u < 0 && p < 0 ? (s = E, d -= p = -p, c -= u = -u) : u < 0 ? (s = S, c -= u = -u) : p < 0 && (s = B, d -= p = -p);
                                    break;
                                case S:
                                    if (l) {
                                        if (T.x >= 0 && (h >= v || f >= M)) {
                                            F = !1;
                                            break
                                        }
                                        L(A), p = (u += T.x) / l
                                    } else L(C), L(A), T.x >= 0 ? h < v ? u += T.x : T.y >= 0 && f >= M && (F = !1) : u += T.x, T.y >= 0 ? f < M && (p += T.y) : p += T.y;
                                    u < 0 && p < 0 ? (s = B, d -= p = -p, c -= u = -u) : u < 0 ? (s = z, c -= u = -u) : p < 0 && (s = E, d -= p = -p);
                                    break;
                                case w:
                                    this.move(T.x, T.y), F = !1;
                                    break;
                                case y:
                                    this.zoom(Yt(o), t), F = !1;
                                    break;
                                case x:
                                    if (!T.x || !T.y) {
                                        F = !1;
                                        break
                                    }
                                    e = jt(this.cropper), c = U.startX - e.left, d = U.startY - e.top, u = a.minWidth, p = a.minHeight, T.x > 0 ? s = T.y > 0 ? S : E : T.x < 0 && (c -= u, s = T.y > 0 ? z : B), T.y < 0 && (d -= p), this.cropped || (Mt(this.cropBox, D), this.cropped = !0, this.limited && this.limitCropBox(!0, !0))
                            }
                            F && (a.width = u, a.height = p, a.left = c, a.top = d, this.action = s, this.renderCropBox()), At(o, (function(t) {
                                t.startX = t.endX, t.startY = t.endY
                            }))
                        }
                    },
                    pe = {
                        crop: function() {
                            return !this.ready || this.cropped || this.disabled || (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && zt(this.dragBox, L), Mt(this.cropBox, D), this.setCropBoxData(this.initialCropBoxData)), this
                        },
                        reset: function() {
                            return this.ready && !this.disabled && (this.imageData = _t({}, this.initialImageData), this.canvasData = _t({}, this.initialCanvasData), this.cropBoxData = _t({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this
                        },
                        clear: function() {
                            return this.cropped && !this.disabled && (_t(this.cropBoxData, {
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0
                            }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Mt(this.dragBox, L), zt(this.cropBox, D)), this
                        },
                        replace: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, At(this.previews, (function(e) {
                                e.getElementsByTagName("img")[0].src = t
                            })))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this
                        },
                        enable: function() {
                            return this.ready && this.disabled && (this.disabled = !1, Mt(this.cropper, F)), this
                        },
                        disable: function() {
                            return this.ready && !this.disabled && (this.disabled = !0, zt(this.cropper, F)), this
                        },
                        destroy: function() {
                            var t = this.element;
                            return t[v] ? (t[v] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this
                        },
                        move: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                                i = this.canvasData,
                                n = i.left,
                                r = i.top;
                            return this.moveTo(mt(t) ? t : n + Number(t), mt(e) ? e : r + Number(e))
                        },
                        moveTo: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                                i = this.canvasData,
                                n = !1;
                            return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (ht(t) && (i.left = t, n = !0), ht(e) && (i.top = e, n = !0), n && this.renderCanvas(!0)), this
                        },
                        zoom: function(t, e) {
                            var i = this.canvasData;
                            return t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t, this.zoomTo(i.width * t / i.naturalWidth, null, e)
                        },
                        zoomTo: function(t, e, i) {
                            var n = this.options,
                                r = this.canvasData,
                                a = r.width,
                                o = r.height,
                                s = r.naturalWidth,
                                l = r.naturalHeight;
                            if ((t = Number(t)) >= 0 && this.ready && !this.disabled && n.zoomable) {
                                var c = s * t,
                                    d = l * t;
                                if (!1 === Pt(this.element, it, {
                                        ratio: t,
                                        oldRatio: a / s,
                                        originalEvent: i
                                    })) return this;
                                if (i) {
                                    var u = this.pointers,
                                        p = jt(this.cropper),
                                        h = u && Object.keys(u).length ? Gt(u) : {
                                            pageX: i.pageX,
                                            pageY: i.pageY
                                        };
                                    r.left -= (c - a) * ((h.pageX - p.left - r.left) / a), r.top -= (d - o) * ((h.pageY - p.top - r.top) / o)
                                } else bt(e) && ht(e.x) && ht(e.y) ? (r.left -= (c - a) * ((e.x - r.left) / a), r.top -= (d - o) * ((e.y - r.top) / o)) : (r.left -= (c - a) / 2, r.top -= (d - o) / 2);
                                r.width = c, r.height = d, this.renderCanvas(!0)
                            }
                            return this
                        },
                        rotate: function(t) {
                            return this.rotateTo((this.imageData.rotate || 0) + Number(t))
                        },
                        rotateTo: function(t) {
                            return ht(t = Number(t)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this
                        },
                        scaleX: function(t) {
                            var e = this.imageData.scaleY;
                            return this.scale(t, ht(e) ? e : 1)
                        },
                        scaleY: function(t) {
                            var e = this.imageData.scaleX;
                            return this.scale(ht(e) ? e : 1, t)
                        },
                        scale: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                                i = this.imageData,
                                n = !1;
                            return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (ht(t) && (i.scaleX = t, n = !0), ht(e) && (i.scaleY = e, n = !0), n && this.renderCanvas(!0, !0)), this
                        },
                        getData: function() {
                            var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                i = this.options,
                                n = this.imageData,
                                r = this.canvasData,
                                a = this.cropBoxData;
                            if (this.ready && this.cropped) {
                                t = {
                                    x: a.left - r.left,
                                    y: a.top - r.top,
                                    width: a.width,
                                    height: a.height
                                };
                                var o = n.width / n.naturalWidth;
                                if (At(t, (function(e, i) {
                                        t[i] = e / o
                                    })), e) {
                                    var s = Math.round(t.y + t.height),
                                        l = Math.round(t.x + t.width);
                                    t.x = Math.round(t.x), t.y = Math.round(t.y), t.width = l - t.x, t.height = s - t.y
                                }
                            } else t = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            };
                            return i.rotatable && (t.rotate = n.rotate || 0), i.scalable && (t.scaleX = n.scaleX || 1, t.scaleY = n.scaleY || 1), t
                        },
                        setData: function(t) {
                            var e = this.options,
                                i = this.imageData,
                                n = this.canvasData,
                                r = {};
                            if (this.ready && !this.disabled && bt(t)) {
                                var a = !1;
                                e.rotatable && ht(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, a = !0), e.scalable && (ht(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, a = !0), ht(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, a = !0)), a && this.renderCanvas(!0, !0);
                                var o = i.width / i.naturalWidth;
                                ht(t.x) && (r.left = t.x * o + n.left), ht(t.y) && (r.top = t.y * o + n.top), ht(t.width) && (r.width = t.width * o), ht(t.height) && (r.height = t.height * o), this.setCropBoxData(r)
                            }
                            return this
                        },
                        getContainerData: function() {
                            return this.ready ? _t({}, this.containerData) : {}
                        },
                        getImageData: function() {
                            return this.sized ? _t({}, this.imageData) : {}
                        },
                        getCanvasData: function() {
                            var t = this.canvasData,
                                e = {};
                            return this.ready && At(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], (function(i) {
                                e[i] = t[i]
                            })), e
                        },
                        setCanvasData: function(t) {
                            var e = this.canvasData,
                                i = e.aspectRatio;
                            return this.ready && !this.disabled && bt(t) && (ht(t.left) && (e.left = t.left), ht(t.top) && (e.top = t.top), ht(t.width) ? (e.width = t.width, e.height = t.width / i) : ht(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this
                        },
                        getCropBoxData: function() {
                            var t, e = this.cropBoxData;
                            return this.ready && this.cropped && (t = {
                                left: e.left,
                                top: e.top,
                                width: e.width,
                                height: e.height
                            }), t || {}
                        },
                        setCropBoxData: function(t) {
                            var e, i, n = this.cropBoxData,
                                r = this.options.aspectRatio;
                            return this.ready && this.cropped && !this.disabled && bt(t) && (ht(t.left) && (n.left = t.left), ht(t.top) && (n.top = t.top), ht(t.width) && t.width !== n.width && (e = !0, n.width = t.width), ht(t.height) && t.height !== n.height && (i = !0, n.height = t.height), r && (e ? n.height = n.width / r : i && (n.width = n.height * r)), this.renderCropBox()), this
                        },
                        getCroppedCanvas: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!this.ready || !window.HTMLCanvasElement) return null;
                            var e = this.canvasData,
                                i = Jt(this.image, this.imageData, e, t);
                            if (!this.cropped) return i;
                            var n = this.getData(),
                                r = n.x,
                                a = n.y,
                                o = n.width,
                                l = n.height,
                                c = i.width / Math.floor(e.naturalWidth);
                            1 !== c && (r *= c, a *= c, o *= c, l *= c);
                            var d = o / l,
                                u = Qt({
                                    aspectRatio: d,
                                    width: t.maxWidth || 1 / 0,
                                    height: t.maxHeight || 1 / 0
                                }),
                                p = Qt({
                                    aspectRatio: d,
                                    width: t.minWidth || 0,
                                    height: t.minHeight || 0
                                }, "cover"),
                                h = Qt({
                                    aspectRatio: d,
                                    width: t.width || (1 !== c ? i.width : o),
                                    height: t.height || (1 !== c ? i.height : l)
                                }),
                                f = h.width,
                                m = h.height;
                            f = Math.min(u.width, Math.max(p.width, f)), m = Math.min(u.height, Math.max(p.height, m));
                            var g = document.createElement("canvas"),
                                v = g.getContext("2d");
                            g.width = kt(f), g.height = kt(m), v.fillStyle = t.fillColor || "transparent", v.fillRect(0, 0, f, m);
                            var b = t.imageSmoothingEnabled,
                                x = void 0 === b || b,
                                w = t.imageSmoothingQuality;
                            v.imageSmoothingEnabled = x, w && (v.imageSmoothingQuality = w);
                            var y, A, _, C, k, E, B = i.width,
                                S = i.height,
                                z = r,
                                M = a;
                            z <= -o || z > B ? (z = 0, y = 0, _ = 0, k = 0) : z <= 0 ? (_ = -z, z = 0, k = y = Math.min(B, o + z)) : z <= B && (_ = 0, k = y = Math.min(o, B - z)), y <= 0 || M <= -l || M > S ? (M = 0, A = 0, C = 0, E = 0) : M <= 0 ? (C = -M, M = 0, E = A = Math.min(S, l + M)) : M <= S && (C = 0, E = A = Math.min(l, S - M));
                            var F = [z, M, y, A];
                            if (k > 0 && E > 0) {
                                var D = f / o;
                                F.push(_ * D, C * D, k * D, E * D)
                            }
                            return v.drawImage.apply(v, [i].concat(s(F.map((function(t) {
                                return Math.floor(kt(t))
                            }))))), g
                        },
                        setAspectRatio: function(t) {
                            var e = this.options;
                            return this.disabled || mt(t) || (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this
                        },
                        setDragMode: function(t) {
                            var e = this.options,
                                i = this.dragBox,
                                n = this.face;
                            if (this.ready && !this.disabled) {
                                var r = t === O,
                                    a = e.movable && t === I;
                                t = r || a ? t : P, e.dragMode = t, Lt(i, Z, t), Ft(i, M, r), Ft(i, R, a), e.cropBoxMovable || (Lt(n, Z, t), Ft(n, M, r), Ft(n, R, a))
                            }
                            return this
                        }
                    },
                    he = f.Cropper,
                    fe = function() {
                        function t(e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (n(this, t), !e || !st.test(e.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                            this.element = e, this.options = _t({}, dt, bt(i) && i), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init()
                        }
                        return a(t, [{
                            key: "init",
                            value: function() {
                                var t, e = this.element,
                                    i = e.tagName.toLowerCase();
                                if (!e[v]) {
                                    if (e[v] = this, "img" === i) {
                                        if (this.isImg = !0, t = e.getAttribute("src") || "", this.originalUrl = t, !t) return;
                                        t = e.src
                                    } else "canvas" === i && window.HTMLCanvasElement && (t = e.toDataURL());
                                    this.load(t)
                                }
                            }
                        }, {
                            key: "load",
                            value: function(t) {
                                var e = this;
                                if (t) {
                                    this.url = t, this.imageData = {};
                                    var i = this.element,
                                        n = this.options;
                                    if (n.rotatable || n.scalable || (n.checkOrientation = !1), n.checkOrientation && window.ArrayBuffer)
                                        if (at.test(t)) ot.test(t) ? this.read(ne(t)) : this.clone();
                                        else {
                                            var r = new XMLHttpRequest,
                                                a = this.clone.bind(this);
                                            this.reloading = !0, this.xhr = r, r.onabort = a, r.onerror = a, r.ontimeout = a, r.onprogress = function() {
                                                r.getResponseHeader("content-type") !== nt && r.abort()
                                            }, r.onload = function() {
                                                e.read(r.response)
                                            }, r.onloadend = function() {
                                                e.reloading = !1, e.xhr = null
                                            }, n.checkCrossOrigin && Wt(t) && i.crossOrigin && (t = qt(t)), r.open("GET", t, !0), r.responseType = "arraybuffer", r.withCredentials = "use-credentials" === i.crossOrigin, r.send()
                                        }
                                    else this.clone()
                                }
                            }
                        }, {
                            key: "read",
                            value: function(t) {
                                var e = this.options,
                                    i = this.imageData,
                                    n = ae(t),
                                    r = 0,
                                    a = 1,
                                    o = 1;
                                if (n > 1) {
                                    this.url = re(t, nt);
                                    var s = oe(n);
                                    r = s.rotate, a = s.scaleX, o = s.scaleY
                                }
                                e.rotatable && (i.rotate = r), e.scalable && (i.scaleX = a, i.scaleY = o), this.clone()
                            }
                        }, {
                            key: "clone",
                            value: function() {
                                var t = this.element,
                                    e = this.url,
                                    i = t.crossOrigin,
                                    n = e;
                                this.options.checkCrossOrigin && Wt(e) && (i || (i = "anonymous"), n = qt(e)), this.crossOrigin = i, this.crossOriginUrl = n;
                                var r = document.createElement("img");
                                i && (r.crossOrigin = i), r.src = n || e, r.alt = t.alt || "The image to crop", this.image = r, r.onload = this.start.bind(this), r.onerror = this.stop.bind(this), zt(r, U), t.parentNode.insertBefore(r, t.nextSibling)
                            }
                        }, {
                            key: "start",
                            value: function() {
                                var t = this,
                                    e = this.image;
                                e.onload = null, e.onerror = null, this.sizing = !0;
                                var i = f.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(f.navigator.userAgent),
                                    n = function(e, i) {
                                        _t(t.imageData, {
                                            naturalWidth: e,
                                            naturalHeight: i,
                                            aspectRatio: e / i
                                        }), t.initialImageData = _t({}, t.imageData), t.sizing = !1, t.sized = !0, t.build()
                                    };
                                if (!e.naturalWidth || i) {
                                    var r = document.createElement("img"),
                                        a = document.body || document.documentElement;
                                    this.sizingImage = r, r.onload = function() {
                                        n(r.width, r.height), i || a.removeChild(r)
                                    }, r.src = e.src, i || (r.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", a.appendChild(r))
                                } else n(e.naturalWidth, e.naturalHeight)
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                var t = this.image;
                                t.onload = null, t.onerror = null, t.parentNode.removeChild(t), this.image = null
                            }
                        }, {
                            key: "build",
                            value: function() {
                                if (this.sized && !this.ready) {
                                    var t = this.element,
                                        e = this.options,
                                        i = this.image,
                                        n = t.parentNode,
                                        r = document.createElement("div");
                                    r.innerHTML = ut;
                                    var a = r.querySelector(".".concat(v, "-container")),
                                        o = a.querySelector(".".concat(v, "-canvas")),
                                        s = a.querySelector(".".concat(v, "-drag-box")),
                                        l = a.querySelector(".".concat(v, "-crop-box")),
                                        c = l.querySelector(".".concat(v, "-face"));
                                    this.container = n, this.cropper = a, this.canvas = o, this.dragBox = s, this.cropBox = l, this.viewBox = a.querySelector(".".concat(v, "-view-box")), this.face = c, o.appendChild(i), zt(t, D), n.insertBefore(a, t.nextSibling), Mt(i, U), this.initPreview(), this.bind(), e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN, e.aspectRatio = Math.max(0, e.aspectRatio) || NaN, e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0, zt(l, D), e.guides || zt(l.getElementsByClassName("".concat(v, "-dashed")), D), e.center || zt(l.getElementsByClassName("".concat(v, "-center")), D), e.background && zt(a, "".concat(v, "-bg")), e.highlight || zt(c, T), e.cropBoxMovable && (zt(c, R), Lt(c, Z, b)), e.cropBoxResizable || (zt(l.getElementsByClassName("".concat(v, "-line")), D), zt(l.getElementsByClassName("".concat(v, "-point")), D)), this.render(), this.ready = !0, this.setDragMode(e.dragMode), e.autoCrop && this.crop(), this.setData(e.data), xt(e.ready) && It(t, J, e.ready, {
                                        once: !0
                                    }), Pt(t, J)
                                }
                            }
                        }, {
                            key: "unbuild",
                            value: function() {
                                if (this.ready) {
                                    this.ready = !1, this.unbind(), this.resetPreview();
                                    var t = this.cropper.parentNode;
                                    t && t.removeChild(this.cropper), Mt(this.element, D)
                                }
                            }
                        }, {
                            key: "uncreate",
                            value: function() {
                                this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop()
                            }
                        }], [{
                            key: "noConflict",
                            value: function() {
                                return window.Cropper = he, t
                            }
                        }, {
                            key: "setDefaults",
                            value: function(t) {
                                _t(dt, bt(t) && t)
                            }
                        }]), t
                    }();
                return _t(fe.prototype, se, le, ce, de, ue, pe), fe
            }()
        },
        452: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(8269), i(8214), i(888), i(5109), function() {
                var t = n,
                    e = t.lib.BlockCipher,
                    i = t.algo,
                    r = [],
                    a = [],
                    o = [],
                    s = [],
                    l = [],
                    c = [],
                    d = [],
                    u = [],
                    p = [],
                    h = [];
                ! function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var i = 0,
                        n = 0;
                    for (e = 0; e < 256; e++) {
                        var f = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        f = f >>> 8 ^ 255 & f ^ 99, r[i] = f, a[f] = i;
                        var m = t[i],
                            g = t[m],
                            v = t[g],
                            b = 257 * t[f] ^ 16843008 * f;
                        o[i] = b << 24 | b >>> 8, s[i] = b << 16 | b >>> 16, l[i] = b << 8 | b >>> 24, c[i] = b, b = 16843009 * v ^ 65537 * g ^ 257 * m ^ 16843008 * i, d[f] = b << 24 | b >>> 8, u[f] = b << 16 | b >>> 16, p[f] = b << 8 | b >>> 24, h[f] = b, i ? (i = m ^ t[t[t[v ^ m]]], n ^= t[t[n]]) : i = n = 1
                    }
                }();
                var f = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    m = i.AES = e.extend({
                        _doReset: function() {
                            if (!this._nRounds || this._keyPriorReset !== this._key) {
                                for (var t = this._keyPriorReset = this._key, e = t.words, i = t.sigBytes / 4, n = 4 * ((this._nRounds = i + 6) + 1), a = this._keySchedule = [], o = 0; o < n; o++) o < i ? a[o] = e[o] : (c = a[o - 1], o % i ? i > 6 && o % i == 4 && (c = r[c >>> 24] << 24 | r[c >>> 16 & 255] << 16 | r[c >>> 8 & 255] << 8 | r[255 & c]) : (c = r[(c = c << 8 | c >>> 24) >>> 24] << 24 | r[c >>> 16 & 255] << 16 | r[c >>> 8 & 255] << 8 | r[255 & c], c ^= f[o / i | 0] << 24), a[o] = a[o - i] ^ c);
                                for (var s = this._invKeySchedule = [], l = 0; l < n; l++) {
                                    if (o = n - l, l % 4) var c = a[o];
                                    else c = a[o - 4];
                                    s[l] = l < 4 || o <= 4 ? c : d[r[c >>> 24]] ^ u[r[c >>> 16 & 255]] ^ p[r[c >>> 8 & 255]] ^ h[r[255 & c]]
                                }
                            }
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._keySchedule, o, s, l, c, r)
                        },
                        decryptBlock: function(t, e) {
                            var i = t[e + 1];
                            t[e + 1] = t[e + 3], t[e + 3] = i, this._doCryptBlock(t, e, this._invKeySchedule, d, u, p, h, a), i = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = i
                        },
                        _doCryptBlock: function(t, e, i, n, r, a, o, s) {
                            for (var l = this._nRounds, c = t[e] ^ i[0], d = t[e + 1] ^ i[1], u = t[e + 2] ^ i[2], p = t[e + 3] ^ i[3], h = 4, f = 1; f < l; f++) {
                                var m = n[c >>> 24] ^ r[d >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[255 & p] ^ i[h++],
                                    g = n[d >>> 24] ^ r[u >>> 16 & 255] ^ a[p >>> 8 & 255] ^ o[255 & c] ^ i[h++],
                                    v = n[u >>> 24] ^ r[p >>> 16 & 255] ^ a[c >>> 8 & 255] ^ o[255 & d] ^ i[h++],
                                    b = n[p >>> 24] ^ r[c >>> 16 & 255] ^ a[d >>> 8 & 255] ^ o[255 & u] ^ i[h++];
                                c = m, d = g, u = v, p = b
                            }
                            m = (s[c >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & p]) ^ i[h++], g = (s[d >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & c]) ^ i[h++], v = (s[u >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & d]) ^ i[h++], b = (s[p >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & u]) ^ i[h++], t[e] = m, t[e + 1] = g, t[e + 2] = v, t[e + 3] = b
                        },
                        keySize: 8
                    });
                t.AES = e._createHelper(m)
            }(), n.AES)
        },
        5109: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(888), void(n.lib.Cipher || function(t) {
                var e = n,
                    i = e.lib,
                    r = i.Base,
                    a = i.WordArray,
                    o = i.BufferedBlockAlgorithm,
                    s = e.enc,
                    l = (s.Utf8, s.Base64),
                    c = e.algo.EvpKDF,
                    d = i.Cipher = o.extend({
                        cfg: r.extend(),
                        createEncryptor: function(t, e) {
                            return this.create(this._ENC_XFORM_MODE, t, e)
                        },
                        createDecryptor: function(t, e) {
                            return this.create(this._DEC_XFORM_MODE, t, e)
                        },
                        init: function(t, e, i) {
                            this.cfg = this.cfg.extend(i), this._xformMode = t, this._key = e, this.reset()
                        },
                        reset: function() {
                            o.reset.call(this), this._doReset()
                        },
                        process: function(t) {
                            return this._append(t), this._process()
                        },
                        finalize: function(t) {
                            return t && this._append(t), this._doFinalize()
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function() {
                            function t(t) {
                                return "string" == typeof t ? x : v
                            }
                            return function(e) {
                                return {
                                    encrypt: function(i, n, r) {
                                        return t(n).encrypt(e, i, n, r)
                                    },
                                    decrypt: function(i, n, r) {
                                        return t(n).decrypt(e, i, n, r)
                                    }
                                }
                            }
                        }()
                    }),
                    u = (i.StreamCipher = d.extend({
                        _doFinalize: function() {
                            return this._process(!0)
                        },
                        blockSize: 1
                    }), e.mode = {}),
                    p = i.BlockCipherMode = r.extend({
                        createEncryptor: function(t, e) {
                            return this.Encryptor.create(t, e)
                        },
                        createDecryptor: function(t, e) {
                            return this.Decryptor.create(t, e)
                        },
                        init: function(t, e) {
                            this._cipher = t, this._iv = e
                        }
                    }),
                    h = u.CBC = function() {
                        var e = p.extend();

                        function i(e, i, n) {
                            var r, a = this._iv;
                            a ? (r = a, this._iv = t) : r = this._prevBlock;
                            for (var o = 0; o < n; o++) e[i + o] ^= r[o]
                        }
                        return e.Encryptor = e.extend({
                            processBlock: function(t, e) {
                                var n = this._cipher,
                                    r = n.blockSize;
                                i.call(this, t, e, r), n.encryptBlock(t, e), this._prevBlock = t.slice(e, e + r)
                            }
                        }), e.Decryptor = e.extend({
                            processBlock: function(t, e) {
                                var n = this._cipher,
                                    r = n.blockSize,
                                    a = t.slice(e, e + r);
                                n.decryptBlock(t, e), i.call(this, t, e, r), this._prevBlock = a
                            }
                        }), e
                    }(),
                    f = (e.pad = {}).Pkcs7 = {
                        pad: function(t, e) {
                            for (var i = 4 * e, n = i - t.sigBytes % i, r = n << 24 | n << 16 | n << 8 | n, o = [], s = 0; s < n; s += 4) o.push(r);
                            var l = a.create(o, n);
                            t.concat(l)
                        },
                        unpad: function(t) {
                            var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                            t.sigBytes -= e
                        }
                    },
                    m = (i.BlockCipher = d.extend({
                        cfg: d.cfg.extend({
                            mode: h,
                            padding: f
                        }),
                        reset: function() {
                            var t;
                            d.reset.call(this);
                            var e = this.cfg,
                                i = e.iv,
                                n = e.mode;
                            this._xformMode == this._ENC_XFORM_MODE ? t = n.createEncryptor : (t = n.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t ? this._mode.init(this, i && i.words) : (this._mode = t.call(n, this, i && i.words), this._mode.__creator = t)
                        },
                        _doProcessBlock: function(t, e) {
                            this._mode.processBlock(t, e)
                        },
                        _doFinalize: function() {
                            var t, e = this.cfg.padding;
                            return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), e.unpad(t)), t
                        },
                        blockSize: 4
                    }), i.CipherParams = r.extend({
                        init: function(t) {
                            this.mixIn(t)
                        },
                        toString: function(t) {
                            return (t || this.formatter).stringify(this)
                        }
                    })),
                    g = (e.format = {}).OpenSSL = {
                        stringify: function(t) {
                            var e = t.ciphertext,
                                i = t.salt;
                            return (i ? a.create([1398893684, 1701076831]).concat(i).concat(e) : e).toString(l)
                        },
                        parse: function(t) {
                            var e, i = l.parse(t),
                                n = i.words;
                            return 1398893684 == n[0] && 1701076831 == n[1] && (e = a.create(n.slice(2, 4)), n.splice(0, 4), i.sigBytes -= 16), m.create({
                                ciphertext: i,
                                salt: e
                            })
                        }
                    },
                    v = i.SerializableCipher = r.extend({
                        cfg: r.extend({
                            format: g
                        }),
                        encrypt: function(t, e, i, n) {
                            n = this.cfg.extend(n);
                            var r = t.createEncryptor(i, n),
                                a = r.finalize(e),
                                o = r.cfg;
                            return m.create({
                                ciphertext: a,
                                key: i,
                                iv: o.iv,
                                algorithm: t,
                                mode: o.mode,
                                padding: o.padding,
                                blockSize: t.blockSize,
                                formatter: n.format
                            })
                        },
                        decrypt: function(t, e, i, n) {
                            return n = this.cfg.extend(n), e = this._parse(e, n.format), t.createDecryptor(i, n).finalize(e.ciphertext)
                        },
                        _parse: function(t, e) {
                            return "string" == typeof t ? e.parse(t, this) : t
                        }
                    }),
                    b = (e.kdf = {}).OpenSSL = {
                        execute: function(t, e, i, n) {
                            n || (n = a.random(8));
                            var r = c.create({
                                    keySize: e + i
                                }).compute(t, n),
                                o = a.create(r.words.slice(e), 4 * i);
                            return r.sigBytes = 4 * e, m.create({
                                key: r,
                                iv: o,
                                salt: n
                            })
                        }
                    },
                    x = i.PasswordBasedCipher = v.extend({
                        cfg: v.cfg.extend({
                            kdf: b
                        }),
                        encrypt: function(t, e, i, n) {
                            var r = (n = this.cfg.extend(n)).kdf.execute(i, t.keySize, t.ivSize);
                            n.iv = r.iv;
                            var a = v.encrypt.call(this, t, e, r.key, n);
                            return a.mixIn(r), a
                        },
                        decrypt: function(t, e, i, n) {
                            n = this.cfg.extend(n), e = this._parse(e, n.format);
                            var r = n.kdf.execute(i, t.keySize, t.ivSize, e.salt);
                            return n.iv = r.iv, v.decrypt.call(this, t, e, r.key, n)
                        }
                    })
            }()))
        },
        8249: function(t, e, i) {
            var n;
            t.exports = (n = n || function(t, e) {
                var n;
                if ("undefined" != typeof window && window.crypto && (n = window.crypto), "undefined" != typeof self && self.crypto && (n = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (n = globalThis.crypto), !n && "undefined" != typeof window && window.msCrypto && (n = window.msCrypto), !n && void 0 !== i.g && i.g.crypto && (n = i.g.crypto), !n) try {
                    n = i(2480)
                } catch (t) {}
                var r = function() {
                        if (n) {
                            if ("function" == typeof n.getRandomValues) try {
                                return n.getRandomValues(new Uint32Array(1))[0]
                            } catch (t) {}
                            if ("function" == typeof n.randomBytes) try {
                                return n.randomBytes(4).readInt32LE()
                            } catch (t) {}
                        }
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    },
                    a = Object.create || function() {
                        function t() {}
                        return function(e) {
                            var i;
                            return t.prototype = e, i = new t, t.prototype = null, i
                        }
                    }(),
                    o = {},
                    s = o.lib = {},
                    l = s.Base = {
                        extend: function(t) {
                            var e = a(this);
                            return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                                e.$super.init.apply(this, arguments)
                            }), e.init.prototype = e, e.$super = this, e
                        },
                        create: function() {
                            var t = this.extend();
                            return t.init.apply(t, arguments), t
                        },
                        init: function() {},
                        mixIn: function(t) {
                            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    },
                    c = s.WordArray = l.extend({
                        init: function(t, i) {
                            t = this.words = t || [], this.sigBytes = i != e ? i : 4 * t.length
                        },
                        toString: function(t) {
                            return (t || u).stringify(this)
                        },
                        concat: function(t) {
                            var e = this.words,
                                i = t.words,
                                n = this.sigBytes,
                                r = t.sigBytes;
                            if (this.clamp(), n % 4)
                                for (var a = 0; a < r; a++) {
                                    var o = i[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                                    e[n + a >>> 2] |= o << 24 - (n + a) % 4 * 8
                                } else
                                    for (var s = 0; s < r; s += 4) e[n + s >>> 2] = i[s >>> 2];
                            return this.sigBytes += r, this
                        },
                        clamp: function() {
                            var e = this.words,
                                i = this.sigBytes;
                            e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, e.length = t.ceil(i / 4)
                        },
                        clone: function() {
                            var t = l.clone.call(this);
                            return t.words = this.words.slice(0), t
                        },
                        random: function(t) {
                            for (var e = [], i = 0; i < t; i += 4) e.push(r());
                            return new c.init(e, t)
                        }
                    }),
                    d = o.enc = {},
                    u = d.Hex = {
                        stringify: function(t) {
                            for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                                var a = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                n.push((a >>> 4).toString(16)), n.push((15 & a).toString(16))
                            }
                            return n.join("")
                        },
                        parse: function(t) {
                            for (var e = t.length, i = [], n = 0; n < e; n += 2) i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                            return new c.init(i, e / 2)
                        }
                    },
                    p = d.Latin1 = {
                        stringify: function(t) {
                            for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                                var a = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                n.push(String.fromCharCode(a))
                            }
                            return n.join("")
                        },
                        parse: function(t) {
                            for (var e = t.length, i = [], n = 0; n < e; n++) i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                            return new c.init(i, e)
                        }
                    },
                    h = d.Utf8 = {
                        stringify: function(t) {
                            try {
                                return decodeURIComponent(escape(p.stringify(t)))
                            } catch (t) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(t) {
                            return p.parse(unescape(encodeURIComponent(t)))
                        }
                    },
                    f = s.BufferedBlockAlgorithm = l.extend({
                        reset: function() {
                            this._data = new c.init, this._nDataBytes = 0
                        },
                        _append: function(t) {
                            "string" == typeof t && (t = h.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                        },
                        _process: function(e) {
                            var i, n = this._data,
                                r = n.words,
                                a = n.sigBytes,
                                o = this.blockSize,
                                s = a / (4 * o),
                                l = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * o,
                                d = t.min(4 * l, a);
                            if (l) {
                                for (var u = 0; u < l; u += o) this._doProcessBlock(r, u);
                                i = r.splice(0, l), n.sigBytes -= d
                            }
                            return new c.init(i, d)
                        },
                        clone: function() {
                            var t = l.clone.call(this);
                            return t._data = this._data.clone(), t
                        },
                        _minBufferSize: 0
                    }),
                    m = (s.Hasher = f.extend({
                        cfg: l.extend(),
                        init: function(t) {
                            this.cfg = this.cfg.extend(t), this.reset()
                        },
                        reset: function() {
                            f.reset.call(this), this._doReset()
                        },
                        update: function(t) {
                            return this._append(t), this._process(), this
                        },
                        finalize: function(t) {
                            return t && this._append(t), this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function(t) {
                            return function(e, i) {
                                return new t.init(i).finalize(e)
                            }
                        },
                        _createHmacHelper: function(t) {
                            return function(e, i) {
                                return new m.HMAC.init(t, i).finalize(e)
                            }
                        }
                    }), o.algo = {});
                return o
            }(Math), n)
        },
        8269: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), function() {
                var t = n,
                    e = t.lib.WordArray;

                function i(t, i, n) {
                    for (var r = [], a = 0, o = 0; o < i; o++)
                        if (o % 4) {
                            var s = n[t.charCodeAt(o - 1)] << o % 4 * 2 | n[t.charCodeAt(o)] >>> 6 - o % 4 * 2;
                            r[a >>> 2] |= s << 24 - a % 4 * 8, a++
                        }
                    return e.create(r, a)
                }
                t.enc.Base64 = {
                    stringify: function(t) {
                        var e = t.words,
                            i = t.sigBytes,
                            n = this._map;
                        t.clamp();
                        for (var r = [], a = 0; a < i; a += 3)
                            for (var o = (e[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | e[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < i; s++) r.push(n.charAt(o >>> 6 * (3 - s) & 63));
                        var l = n.charAt(64);
                        if (l)
                            for (; r.length % 4;) r.push(l);
                        return r.join("")
                    },
                    parse: function(t) {
                        var e = t.length,
                            n = this._map,
                            r = this._reverseMap;
                        if (!r) {
                            r = this._reverseMap = [];
                            for (var a = 0; a < n.length; a++) r[n.charCodeAt(a)] = a
                        }
                        var o = n.charAt(64);
                        if (o) {
                            var s = t.indexOf(o); - 1 !== s && (e = s)
                        }
                        return i(t, e, r)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            }(), n.enc.Base64)
        },
        3786: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), function() {
                var t = n,
                    e = t.lib.WordArray;

                function i(t, i, n) {
                    for (var r = [], a = 0, o = 0; o < i; o++)
                        if (o % 4) {
                            var s = n[t.charCodeAt(o - 1)] << o % 4 * 2 | n[t.charCodeAt(o)] >>> 6 - o % 4 * 2;
                            r[a >>> 2] |= s << 24 - a % 4 * 8, a++
                        }
                    return e.create(r, a)
                }
                t.enc.Base64url = {
                    stringify: function(t, e = !0) {
                        var i = t.words,
                            n = t.sigBytes,
                            r = e ? this._safe_map : this._map;
                        t.clamp();
                        for (var a = [], o = 0; o < n; o += 3)
                            for (var s = (i[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (i[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | i[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, l = 0; l < 4 && o + .75 * l < n; l++) a.push(r.charAt(s >>> 6 * (3 - l) & 63));
                        var c = r.charAt(64);
                        if (c)
                            for (; a.length % 4;) a.push(c);
                        return a.join("")
                    },
                    parse: function(t, e = !0) {
                        var n = t.length,
                            r = e ? this._safe_map : this._map,
                            a = this._reverseMap;
                        if (!a) {
                            a = this._reverseMap = [];
                            for (var o = 0; o < r.length; o++) a[r.charCodeAt(o)] = o
                        }
                        var s = r.charAt(64);
                        if (s) {
                            var l = t.indexOf(s); - 1 !== l && (n = l)
                        }
                        return i(t, n, a)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
                }
            }(), n.enc.Base64url)
        },
        298: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), function() {
                var t = n,
                    e = t.lib.WordArray,
                    i = t.enc;

                function r(t) {
                    return t << 8 & 4278255360 | t >>> 8 & 16711935
                }
                i.Utf16 = i.Utf16BE = {
                    stringify: function(t) {
                        for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r += 2) {
                            var a = e[r >>> 2] >>> 16 - r % 4 * 8 & 65535;
                            n.push(String.fromCharCode(a))
                        }
                        return n.join("")
                    },
                    parse: function(t) {
                        for (var i = t.length, n = [], r = 0; r < i; r++) n[r >>> 1] |= t.charCodeAt(r) << 16 - r % 2 * 16;
                        return e.create(n, 2 * i)
                    }
                }, i.Utf16LE = {
                    stringify: function(t) {
                        for (var e = t.words, i = t.sigBytes, n = [], a = 0; a < i; a += 2) {
                            var o = r(e[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
                            n.push(String.fromCharCode(o))
                        }
                        return n.join("")
                    },
                    parse: function(t) {
                        for (var i = t.length, n = [], a = 0; a < i; a++) n[a >>> 1] |= r(t.charCodeAt(a) << 16 - a % 2 * 16);
                        return e.create(n, 2 * i)
                    }
                }
            }(), n.enc.Utf16)
        },
        888: function(t, e, i) {
            var n, r, a, o, s, l, c, d;
            t.exports = (d = i(8249), i(2783), i(9824), r = (n = d).lib, a = r.Base, o = r.WordArray, s = n.algo, l = s.MD5, c = s.EvpKDF = a.extend({
                cfg: a.extend({
                    keySize: 4,
                    hasher: l,
                    iterations: 1
                }),
                init: function(t) {
                    this.cfg = this.cfg.extend(t)
                },
                compute: function(t, e) {
                    for (var i, n = this.cfg, r = n.hasher.create(), a = o.create(), s = a.words, l = n.keySize, c = n.iterations; s.length < l;) {
                        i && r.update(i), i = r.update(t).finalize(e), r.reset();
                        for (var d = 1; d < c; d++) i = r.finalize(i), r.reset();
                        a.concat(i)
                    }
                    return a.sigBytes = 4 * l, a
                }
            }), n.EvpKDF = function(t, e, i) {
                return c.create(i).compute(t, e)
            }, d.EvpKDF)
        },
        2209: function(t, e, i) {
            var n, r, a, o;
            t.exports = (o = i(8249), i(5109), r = (n = o).lib.CipherParams, a = n.enc.Hex, n.format.Hex = {
                stringify: function(t) {
                    return t.ciphertext.toString(a)
                },
                parse: function(t) {
                    var e = a.parse(t);
                    return r.create({
                        ciphertext: e
                    })
                }
            }, o.format.Hex)
        },
        9824: function(t, e, i) {
            var n, r, a, o;
            t.exports = (n = i(8249), a = (r = n).lib.Base, o = r.enc.Utf8, void(r.algo.HMAC = a.extend({
                init: function(t, e) {
                    t = this._hasher = new t.init, "string" == typeof e && (e = o.parse(e));
                    var i = t.blockSize,
                        n = 4 * i;
                    e.sigBytes > n && (e = t.finalize(e)), e.clamp();
                    for (var r = this._oKey = e.clone(), a = this._iKey = e.clone(), s = r.words, l = a.words, c = 0; c < i; c++) s[c] ^= 1549556828, l[c] ^= 909522486;
                    r.sigBytes = a.sigBytes = n, this.reset()
                },
                reset: function() {
                    var t = this._hasher;
                    t.reset(), t.update(this._iKey)
                },
                update: function(t) {
                    return this._hasher.update(t), this
                },
                finalize: function(t) {
                    var e = this._hasher,
                        i = e.finalize(t);
                    return e.reset(), e.finalize(this._oKey.clone().concat(i))
                }
            })))
        },
        1354: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(4938), i(4433), i(298), i(8269), i(3786), i(8214), i(2783), i(3770), i(7792), i(34), i(7460), i(3327), i(706), i(9824), i(2112), i(888), i(5109), i(8568), i(4242), i(9968), i(7660), i(1148), i(3615), i(2807), i(1077), i(6475), i(6991), i(2209), i(452), i(4253), i(1857), i(4454), i(3974), n)
        },
        4433: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), function() {
                if ("function" == typeof ArrayBuffer) {
                    var t = n.lib.WordArray,
                        e = t.init,
                        i = t.init = function(t) {
                            if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) {
                                for (var i = t.byteLength, n = [], r = 0; r < i; r++) n[r >>> 2] |= t[r] << 24 - r % 4 * 8;
                                e.call(this, n, i)
                            } else e.apply(this, arguments)
                        };
                    i.prototype = t
                }
            }(), n.lib.WordArray)
        },
        8214: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), function(t) {
                var e = n,
                    i = e.lib,
                    r = i.WordArray,
                    a = i.Hasher,
                    o = e.algo,
                    s = [];
                ! function() {
                    for (var e = 0; e < 64; e++) s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
                }();
                var l = o.MD5 = a.extend({
                    _doReset: function() {
                        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var i = 0; i < 16; i++) {
                            var n = e + i,
                                r = t[n];
                            t[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                        }
                        var a = this._hash.words,
                            o = t[e + 0],
                            l = t[e + 1],
                            h = t[e + 2],
                            f = t[e + 3],
                            m = t[e + 4],
                            g = t[e + 5],
                            v = t[e + 6],
                            b = t[e + 7],
                            x = t[e + 8],
                            w = t[e + 9],
                            y = t[e + 10],
                            A = t[e + 11],
                            _ = t[e + 12],
                            C = t[e + 13],
                            k = t[e + 14],
                            E = t[e + 15],
                            B = a[0],
                            S = a[1],
                            z = a[2],
                            M = a[3];
                        B = c(B, S, z, M, o, 7, s[0]), M = c(M, B, S, z, l, 12, s[1]), z = c(z, M, B, S, h, 17, s[2]), S = c(S, z, M, B, f, 22, s[3]), B = c(B, S, z, M, m, 7, s[4]), M = c(M, B, S, z, g, 12, s[5]), z = c(z, M, B, S, v, 17, s[6]), S = c(S, z, M, B, b, 22, s[7]), B = c(B, S, z, M, x, 7, s[8]), M = c(M, B, S, z, w, 12, s[9]), z = c(z, M, B, S, y, 17, s[10]), S = c(S, z, M, B, A, 22, s[11]), B = c(B, S, z, M, _, 7, s[12]), M = c(M, B, S, z, C, 12, s[13]), z = c(z, M, B, S, k, 17, s[14]), B = d(B, S = c(S, z, M, B, E, 22, s[15]), z, M, l, 5, s[16]), M = d(M, B, S, z, v, 9, s[17]), z = d(z, M, B, S, A, 14, s[18]), S = d(S, z, M, B, o, 20, s[19]), B = d(B, S, z, M, g, 5, s[20]), M = d(M, B, S, z, y, 9, s[21]), z = d(z, M, B, S, E, 14, s[22]), S = d(S, z, M, B, m, 20, s[23]), B = d(B, S, z, M, w, 5, s[24]), M = d(M, B, S, z, k, 9, s[25]), z = d(z, M, B, S, f, 14, s[26]), S = d(S, z, M, B, x, 20, s[27]), B = d(B, S, z, M, C, 5, s[28]), M = d(M, B, S, z, h, 9, s[29]), z = d(z, M, B, S, b, 14, s[30]), B = u(B, S = d(S, z, M, B, _, 20, s[31]), z, M, g, 4, s[32]), M = u(M, B, S, z, x, 11, s[33]), z = u(z, M, B, S, A, 16, s[34]), S = u(S, z, M, B, k, 23, s[35]), B = u(B, S, z, M, l, 4, s[36]), M = u(M, B, S, z, m, 11, s[37]), z = u(z, M, B, S, b, 16, s[38]), S = u(S, z, M, B, y, 23, s[39]), B = u(B, S, z, M, C, 4, s[40]), M = u(M, B, S, z, o, 11, s[41]), z = u(z, M, B, S, f, 16, s[42]), S = u(S, z, M, B, v, 23, s[43]), B = u(B, S, z, M, w, 4, s[44]), M = u(M, B, S, z, _, 11, s[45]), z = u(z, M, B, S, E, 16, s[46]), B = p(B, S = u(S, z, M, B, h, 23, s[47]), z, M, o, 6, s[48]), M = p(M, B, S, z, b, 10, s[49]), z = p(z, M, B, S, k, 15, s[50]), S = p(S, z, M, B, g, 21, s[51]), B = p(B, S, z, M, _, 6, s[52]), M = p(M, B, S, z, f, 10, s[53]), z = p(z, M, B, S, y, 15, s[54]), S = p(S, z, M, B, l, 21, s[55]), B = p(B, S, z, M, x, 6, s[56]), M = p(M, B, S, z, E, 10, s[57]), z = p(z, M, B, S, v, 15, s[58]), S = p(S, z, M, B, C, 21, s[59]), B = p(B, S, z, M, m, 6, s[60]), M = p(M, B, S, z, A, 10, s[61]), z = p(z, M, B, S, h, 15, s[62]), S = p(S, z, M, B, w, 21, s[63]), a[0] = a[0] + B | 0, a[1] = a[1] + S | 0, a[2] = a[2] + z | 0, a[3] = a[3] + M | 0
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            i = e.words,
                            n = 8 * this._nDataBytes,
                            r = 8 * e.sigBytes;
                        i[r >>> 5] |= 128 << 24 - r % 32;
                        var a = t.floor(n / 4294967296),
                            o = n;
                        i[15 + (r + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), i[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e.sigBytes = 4 * (i.length + 1), this._process();
                        for (var s = this._hash, l = s.words, c = 0; c < 4; c++) {
                            var d = l[c];
                            l[c] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8)
                        }
                        return s
                    },
                    clone: function() {
                        var t = a.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    }
                });

                function c(t, e, i, n, r, a, o) {
                    var s = t + (e & i | ~e & n) + r + o;
                    return (s << a | s >>> 32 - a) + e
                }

                function d(t, e, i, n, r, a, o) {
                    var s = t + (e & n | i & ~n) + r + o;
                    return (s << a | s >>> 32 - a) + e
                }

                function u(t, e, i, n, r, a, o) {
                    var s = t + (e ^ i ^ n) + r + o;
                    return (s << a | s >>> 32 - a) + e
                }

                function p(t, e, i, n, r, a, o) {
                    var s = t + (i ^ (e | ~n)) + r + o;
                    return (s << a | s >>> 32 - a) + e
                }
                e.MD5 = a._createHelper(l), e.HmacMD5 = a._createHmacHelper(l)
            }(Math), n.MD5)
        },
        8568: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(5109), n.mode.CFB = function() {
                var t = n.lib.BlockCipherMode.extend();

                function e(t, e, i, n) {
                    var r, a = this._iv;
                    a ? (r = a.slice(0), this._iv = void 0) : r = this._prevBlock, n.encryptBlock(r, 0);
                    for (var o = 0; o < i; o++) t[e + o] ^= r[o]
                }
                return t.Encryptor = t.extend({
                    processBlock: function(t, i) {
                        var n = this._cipher,
                            r = n.blockSize;
                        e.call(this, t, i, r, n), this._prevBlock = t.slice(i, i + r)
                    }
                }), t.Decryptor = t.extend({
                    processBlock: function(t, i) {
                        var n = this._cipher,
                            r = n.blockSize,
                            a = t.slice(i, i + r);
                        e.call(this, t, i, r, n), this._prevBlock = a
                    }
                }), t
            }(), n.mode.CFB)
        },
        9968: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(5109), n.mode.CTRGladman = function() {
                var t = n.lib.BlockCipherMode.extend();

                function e(t) {
                    if (255 == (t >> 24 & 255)) {
                        var e = t >> 16 & 255,
                            i = t >> 8 & 255,
                            n = 255 & t;
                        255 === e ? (e = 0, 255 === i ? (i = 0, 255 === n ? n = 0 : ++n) : ++i) : ++e, t = 0, t += e << 16, t += i << 8, t += n
                    } else t += 1 << 24;
                    return t
                }

                function i(t) {
                    return 0 === (t[0] = e(t[0])) && (t[1] = e(t[1])), t
                }
                var r = t.Encryptor = t.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher,
                            r = n.blockSize,
                            a = this._iv,
                            o = this._counter;
                        a && (o = this._counter = a.slice(0), this._iv = void 0), i(o);
                        var s = o.slice(0);
                        n.encryptBlock(s, 0);
                        for (var l = 0; l < r; l++) t[e + l] ^= s[l]
                    }
                });
                return t.Decryptor = r, t
            }(), n.mode.CTRGladman)
        },
        4242: function(t, e, i) {
            var n, r, a;
            t.exports = (a = i(8249), i(5109), a.mode.CTR = (n = a.lib.BlockCipherMode.extend(), r = n.Encryptor = n.extend({
                processBlock: function(t, e) {
                    var i = this._cipher,
                        n = i.blockSize,
                        r = this._iv,
                        a = this._counter;
                    r && (a = this._counter = r.slice(0), this._iv = void 0);
                    var o = a.slice(0);
                    i.encryptBlock(o, 0), a[n - 1] = a[n - 1] + 1 | 0;
                    for (var s = 0; s < n; s++) t[e + s] ^= o[s]
                }
            }), n.Decryptor = r, n), a.mode.CTR)
        },
        1148: function(t, e, i) {
            var n, r;
            t.exports = (r = i(8249), i(5109), r.mode.ECB = ((n = r.lib.BlockCipherMode.extend()).Encryptor = n.extend({
                processBlock: function(t, e) {
                    this._cipher.encryptBlock(t, e)
                }
            }), n.Decryptor = n.extend({
                processBlock: function(t, e) {
                    this._cipher.decryptBlock(t, e)
                }
            }), n), r.mode.ECB)
        },
        7660: function(t, e, i) {
            var n, r, a;
            t.exports = (a = i(8249), i(5109), a.mode.OFB = (n = a.lib.BlockCipherMode.extend(), r = n.Encryptor = n.extend({
                processBlock: function(t, e) {
                    var i = this._cipher,
                        n = i.blockSize,
                        r = this._iv,
                        a = this._keystream;
                    r && (a = this._keystream = r.slice(0), this._iv = void 0), i.encryptBlock(a, 0);
                    for (var o = 0; o < n; o++) t[e + o] ^= a[o]
                }
            }), n.Decryptor = r, n), a.mode.OFB)
        },
        3615: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(5109), n.pad.AnsiX923 = {
                pad: function(t, e) {
                    var i = t.sigBytes,
                        n = 4 * e,
                        r = n - i % n,
                        a = i + r - 1;
                    t.clamp(), t.words[a >>> 2] |= r << 24 - a % 4 * 8, t.sigBytes += r
                },
                unpad: function(t) {
                    var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                    t.sigBytes -= e
                }
            }, n.pad.Ansix923)
        },
        2807: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(5109), n.pad.Iso10126 = {
                pad: function(t, e) {
                    var i = 4 * e,
                        r = i - t.sigBytes % i;
                    t.concat(n.lib.WordArray.random(r - 1)).concat(n.lib.WordArray.create([r << 24], 1))
                },
                unpad: function(t) {
                    var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                    t.sigBytes -= e
                }
            }, n.pad.Iso10126)
        },
        1077: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(5109), n.pad.Iso97971 = {
                pad: function(t, e) {
                    t.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(t, e)
                },
                unpad: function(t) {
                    n.pad.ZeroPadding.unpad(t), t.sigBytes--
                }
            }, n.pad.Iso97971)
        },
        6991: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(5109), n.pad.NoPadding = {
                pad: function() {},
                unpad: function() {}
            }, n.pad.NoPadding)
        },
        6475: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(5109), n.pad.ZeroPadding = {
                pad: function(t, e) {
                    var i = 4 * e;
                    t.clamp(), t.sigBytes += i - (t.sigBytes % i || i)
                },
                unpad: function(t) {
                    var e = t.words,
                        i = t.sigBytes - 1;
                    for (i = t.sigBytes - 1; i >= 0; i--)
                        if (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
                            t.sigBytes = i + 1;
                            break
                        }
                }
            }, n.pad.ZeroPadding)
        },
        2112: function(t, e, i) {
            var n, r, a, o, s, l, c, d, u;
            t.exports = (u = i(8249), i(2783), i(9824), r = (n = u).lib, a = r.Base, o = r.WordArray, s = n.algo, l = s.SHA1, c = s.HMAC, d = s.PBKDF2 = a.extend({
                cfg: a.extend({
                    keySize: 4,
                    hasher: l,
                    iterations: 1
                }),
                init: function(t) {
                    this.cfg = this.cfg.extend(t)
                },
                compute: function(t, e) {
                    for (var i = this.cfg, n = c.create(i.hasher, t), r = o.create(), a = o.create([1]), s = r.words, l = a.words, d = i.keySize, u = i.iterations; s.length < d;) {
                        var p = n.update(e).finalize(a);
                        n.reset();
                        for (var h = p.words, f = h.length, m = p, g = 1; g < u; g++) {
                            m = n.finalize(m), n.reset();
                            for (var v = m.words, b = 0; b < f; b++) h[b] ^= v[b]
                        }
                        r.concat(p), l[0]++
                    }
                    return r.sigBytes = 4 * d, r
                }
            }), n.PBKDF2 = function(t, e, i) {
                return d.create(i).compute(t, e)
            }, u.PBKDF2)
        },
        3974: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(8269), i(8214), i(888), i(5109), function() {
                var t = n,
                    e = t.lib.StreamCipher,
                    i = t.algo,
                    r = [],
                    a = [],
                    o = [],
                    s = i.RabbitLegacy = e.extend({
                        _doReset: function() {
                            var t = this._key.words,
                                e = this.cfg.iv,
                                i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                                n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                            this._b = 0;
                            for (var r = 0; r < 4; r++) l.call(this);
                            for (r = 0; r < 8; r++) n[r] ^= i[r + 4 & 7];
                            if (e) {
                                var a = e.words,
                                    o = a[0],
                                    s = a[1],
                                    c = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                                    d = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                                    u = c >>> 16 | 4294901760 & d,
                                    p = d << 16 | 65535 & c;
                                for (n[0] ^= c, n[1] ^= u, n[2] ^= d, n[3] ^= p, n[4] ^= c, n[5] ^= u, n[6] ^= d, n[7] ^= p, r = 0; r < 4; r++) l.call(this)
                            }
                        },
                        _doProcessBlock: function(t, e) {
                            var i = this._X;
                            l.call(this), r[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, r[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, r[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, r[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                            for (var n = 0; n < 4; n++) r[n] = 16711935 & (r[n] << 8 | r[n] >>> 24) | 4278255360 & (r[n] << 24 | r[n] >>> 8), t[e + n] ^= r[n]
                        },
                        blockSize: 4,
                        ivSize: 2
                    });

                function l() {
                    for (var t = this._X, e = this._C, i = 0; i < 8; i++) a[i] = e[i];
                    for (e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < a[7] >>> 0 ? 1 : 0, i = 0; i < 8; i++) {
                        var n = t[i] + e[i],
                            r = 65535 & n,
                            s = n >>> 16,
                            l = ((r * r >>> 17) + r * s >>> 15) + s * s,
                            c = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
                        o[i] = l ^ c
                    }
                    t[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, t[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, t[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, t[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, t[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, t[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, t[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, t[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0
                }
                t.RabbitLegacy = e._createHelper(s)
            }(), n.RabbitLegacy)
        },
        4454: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(8269), i(8214), i(888), i(5109), function() {
                var t = n,
                    e = t.lib.StreamCipher,
                    i = t.algo,
                    r = [],
                    a = [],
                    o = [],
                    s = i.Rabbit = e.extend({
                        _doReset: function() {
                            for (var t = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++) t[i] = 16711935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8);
                            var n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                                r = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                            for (this._b = 0, i = 0; i < 4; i++) l.call(this);
                            for (i = 0; i < 8; i++) r[i] ^= n[i + 4 & 7];
                            if (e) {
                                var a = e.words,
                                    o = a[0],
                                    s = a[1],
                                    c = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                                    d = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                                    u = c >>> 16 | 4294901760 & d,
                                    p = d << 16 | 65535 & c;
                                for (r[0] ^= c, r[1] ^= u, r[2] ^= d, r[3] ^= p, r[4] ^= c, r[5] ^= u, r[6] ^= d, r[7] ^= p, i = 0; i < 4; i++) l.call(this)
                            }
                        },
                        _doProcessBlock: function(t, e) {
                            var i = this._X;
                            l.call(this), r[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, r[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, r[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, r[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                            for (var n = 0; n < 4; n++) r[n] = 16711935 & (r[n] << 8 | r[n] >>> 24) | 4278255360 & (r[n] << 24 | r[n] >>> 8), t[e + n] ^= r[n]
                        },
                        blockSize: 4,
                        ivSize: 2
                    });

                function l() {
                    for (var t = this._X, e = this._C, i = 0; i < 8; i++) a[i] = e[i];
                    for (e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < a[7] >>> 0 ? 1 : 0, i = 0; i < 8; i++) {
                        var n = t[i] + e[i],
                            r = 65535 & n,
                            s = n >>> 16,
                            l = ((r * r >>> 17) + r * s >>> 15) + s * s,
                            c = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
                        o[i] = l ^ c
                    }
                    t[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, t[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, t[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, t[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, t[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, t[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, t[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, t[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0
                }
                t.Rabbit = e._createHelper(s)
            }(), n.Rabbit)
        },
        1857: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(8269), i(8214), i(888), i(5109), function() {
                var t = n,
                    e = t.lib.StreamCipher,
                    i = t.algo,
                    r = i.RC4 = e.extend({
                        _doReset: function() {
                            for (var t = this._key, e = t.words, i = t.sigBytes, n = this._S = [], r = 0; r < 256; r++) n[r] = r;
                            r = 0;
                            for (var a = 0; r < 256; r++) {
                                var o = r % i,
                                    s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                a = (a + n[r] + s) % 256;
                                var l = n[r];
                                n[r] = n[a], n[a] = l
                            }
                            this._i = this._j = 0
                        },
                        _doProcessBlock: function(t, e) {
                            t[e] ^= a.call(this)
                        },
                        keySize: 8,
                        ivSize: 0
                    });

                function a() {
                    for (var t = this._S, e = this._i, i = this._j, n = 0, r = 0; r < 4; r++) {
                        i = (i + t[e = (e + 1) % 256]) % 256;
                        var a = t[e];
                        t[e] = t[i], t[i] = a, n |= t[(t[e] + t[i]) % 256] << 24 - 8 * r
                    }
                    return this._i = e, this._j = i, n
                }
                t.RC4 = e._createHelper(r);
                var o = i.RC4Drop = r.extend({
                    cfg: r.cfg.extend({
                        drop: 192
                    }),
                    _doReset: function() {
                        r._doReset.call(this);
                        for (var t = this.cfg.drop; t > 0; t--) a.call(this)
                    }
                });
                t.RC4Drop = e._createHelper(o)
            }(), n.RC4)
        },
        706: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), function(t) {
                var e = n,
                    i = e.lib,
                    r = i.WordArray,
                    a = i.Hasher,
                    o = e.algo,
                    s = r.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                    l = r.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                    c = r.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                    d = r.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                    u = r.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                    p = r.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                    h = o.RIPEMD160 = a.extend({
                        _doReset: function() {
                            this._hash = r.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(t, e) {
                            for (var i = 0; i < 16; i++) {
                                var n = e + i,
                                    r = t[n];
                                t[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                            }
                            var a, o, h, w, y, A, _, C, k, E, B, S = this._hash.words,
                                z = u.words,
                                M = p.words,
                                F = s.words,
                                D = l.words,
                                U = c.words,
                                T = d.words;
                            for (A = a = S[0], _ = o = S[1], C = h = S[2], k = w = S[3], E = y = S[4], i = 0; i < 80; i += 1) B = a + t[e + F[i]] | 0, B += i < 16 ? f(o, h, w) + z[0] : i < 32 ? m(o, h, w) + z[1] : i < 48 ? g(o, h, w) + z[2] : i < 64 ? v(o, h, w) + z[3] : b(o, h, w) + z[4], B = (B = x(B |= 0, U[i])) + y | 0, a = y, y = w, w = x(h, 10), h = o, o = B, B = A + t[e + D[i]] | 0, B += i < 16 ? b(_, C, k) + M[0] : i < 32 ? v(_, C, k) + M[1] : i < 48 ? g(_, C, k) + M[2] : i < 64 ? m(_, C, k) + M[3] : f(_, C, k) + M[4], B = (B = x(B |= 0, T[i])) + E | 0, A = E, E = k, k = x(C, 10), C = _, _ = B;
                            B = S[1] + h + k | 0, S[1] = S[2] + w + E | 0, S[2] = S[3] + y + A | 0, S[3] = S[4] + a + _ | 0, S[4] = S[0] + o + C | 0, S[0] = B
                        },
                        _doFinalize: function() {
                            var t = this._data,
                                e = t.words,
                                i = 8 * this._nDataBytes,
                                n = 8 * t.sigBytes;
                            e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();
                            for (var r = this._hash, a = r.words, o = 0; o < 5; o++) {
                                var s = a[o];
                                a[o] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                            }
                            return r
                        },
                        clone: function() {
                            var t = a.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });

                function f(t, e, i) {
                    return t ^ e ^ i
                }

                function m(t, e, i) {
                    return t & e | ~t & i
                }

                function g(t, e, i) {
                    return (t | ~e) ^ i
                }

                function v(t, e, i) {
                    return t & i | e & ~i
                }

                function b(t, e, i) {
                    return t ^ (e | ~i)
                }

                function x(t, e) {
                    return t << e | t >>> 32 - e
                }
                e.RIPEMD160 = a._createHelper(h), e.HmacRIPEMD160 = a._createHmacHelper(h)
            }(Math), n.RIPEMD160)
        },
        2783: function(t, e, i) {
            var n, r, a, o, s, l, c, d;
            t.exports = (d = i(8249), r = (n = d).lib, a = r.WordArray, o = r.Hasher, s = n.algo, l = [], c = s.SHA1 = o.extend({
                _doReset: function() {
                    this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(t, e) {
                    for (var i = this._hash.words, n = i[0], r = i[1], a = i[2], o = i[3], s = i[4], c = 0; c < 80; c++) {
                        if (c < 16) l[c] = 0 | t[e + c];
                        else {
                            var d = l[c - 3] ^ l[c - 8] ^ l[c - 14] ^ l[c - 16];
                            l[c] = d << 1 | d >>> 31
                        }
                        var u = (n << 5 | n >>> 27) + s + l[c];
                        u += c < 20 ? 1518500249 + (r & a | ~r & o) : c < 40 ? 1859775393 + (r ^ a ^ o) : c < 60 ? (r & a | r & o | a & o) - 1894007588 : (r ^ a ^ o) - 899497514, s = o, o = a, a = r << 30 | r >>> 2, r = n, n = u
                    }
                    i[0] = i[0] + n | 0, i[1] = i[1] + r | 0, i[2] = i[2] + a | 0, i[3] = i[3] + o | 0, i[4] = i[4] + s | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                        e = t.words,
                        i = 8 * this._nDataBytes,
                        n = 8 * t.sigBytes;
                    return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = Math.floor(i / 4294967296), e[15 + (n + 64 >>> 9 << 4)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._hash = this._hash.clone(), t
                }
            }), n.SHA1 = o._createHelper(c), n.HmacSHA1 = o._createHmacHelper(c), d.SHA1)
        },
        7792: function(t, e, i) {
            var n, r, a, o, s, l;
            t.exports = (l = i(8249), i(3770), r = (n = l).lib.WordArray, a = n.algo, o = a.SHA256, s = a.SHA224 = o.extend({
                _doReset: function() {
                    this._hash = new r.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                },
                _doFinalize: function() {
                    var t = o._doFinalize.call(this);
                    return t.sigBytes -= 4, t
                }
            }), n.SHA224 = o._createHelper(s), n.HmacSHA224 = o._createHmacHelper(s), l.SHA224)
        },
        3770: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), function(t) {
                var e = n,
                    i = e.lib,
                    r = i.WordArray,
                    a = i.Hasher,
                    o = e.algo,
                    s = [],
                    l = [];
                ! function() {
                    function e(e) {
                        for (var i = t.sqrt(e), n = 2; n <= i; n++)
                            if (!(e % n)) return !1;
                        return !0
                    }

                    function i(t) {
                        return 4294967296 * (t - (0 | t)) | 0
                    }
                    for (var n = 2, r = 0; r < 64;) e(n) && (r < 8 && (s[r] = i(t.pow(n, .5))), l[r] = i(t.pow(n, 1 / 3)), r++), n++
                }();
                var c = [],
                    d = o.SHA256 = a.extend({
                        _doReset: function() {
                            this._hash = new r.init(s.slice(0))
                        },
                        _doProcessBlock: function(t, e) {
                            for (var i = this._hash.words, n = i[0], r = i[1], a = i[2], o = i[3], s = i[4], d = i[5], u = i[6], p = i[7], h = 0; h < 64; h++) {
                                if (h < 16) c[h] = 0 | t[e + h];
                                else {
                                    var f = c[h - 15],
                                        m = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                                        g = c[h - 2],
                                        v = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                                    c[h] = m + c[h - 7] + v + c[h - 16]
                                }
                                var b = n & r ^ n & a ^ r & a,
                                    x = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),
                                    w = p + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & d ^ ~s & u) + l[h] + c[h];
                                p = u, u = d, d = s, s = o + w | 0, o = a, a = r, r = n, n = w + (x + b) | 0
                            }
                            i[0] = i[0] + n | 0, i[1] = i[1] + r | 0, i[2] = i[2] + a | 0, i[3] = i[3] + o | 0, i[4] = i[4] + s | 0, i[5] = i[5] + d | 0, i[6] = i[6] + u | 0, i[7] = i[7] + p | 0
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                i = e.words,
                                n = 8 * this._nDataBytes,
                                r = 8 * e.sigBytes;
                            return i[r >>> 5] |= 128 << 24 - r % 32, i[14 + (r + 64 >>> 9 << 4)] = t.floor(n / 4294967296), i[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * i.length, this._process(), this._hash
                        },
                        clone: function() {
                            var t = a.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });
                e.SHA256 = a._createHelper(d), e.HmacSHA256 = a._createHmacHelper(d)
            }(Math), n.SHA256)
        },
        3327: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(4938), function(t) {
                var e = n,
                    i = e.lib,
                    r = i.WordArray,
                    a = i.Hasher,
                    o = e.x64.Word,
                    s = e.algo,
                    l = [],
                    c = [],
                    d = [];
                ! function() {
                    for (var t = 1, e = 0, i = 0; i < 24; i++) {
                        l[t + 5 * e] = (i + 1) * (i + 2) / 2 % 64;
                        var n = (2 * t + 3 * e) % 5;
                        t = e % 5, e = n
                    }
                    for (t = 0; t < 5; t++)
                        for (e = 0; e < 5; e++) c[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
                    for (var r = 1, a = 0; a < 24; a++) {
                        for (var s = 0, u = 0, p = 0; p < 7; p++) {
                            if (1 & r) {
                                var h = (1 << p) - 1;
                                h < 32 ? u ^= 1 << h : s ^= 1 << h - 32
                            }
                            128 & r ? r = r << 1 ^ 113 : r <<= 1
                        }
                        d[a] = o.create(s, u)
                    }
                }();
                var u = [];
                ! function() {
                    for (var t = 0; t < 25; t++) u[t] = o.create()
                }();
                var p = s.SHA3 = a.extend({
                    cfg: a.cfg.extend({
                        outputLength: 512
                    }),
                    _doReset: function() {
                        for (var t = this._state = [], e = 0; e < 25; e++) t[e] = new o.init;
                        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                    },
                    _doProcessBlock: function(t, e) {
                        for (var i = this._state, n = this.blockSize / 2, r = 0; r < n; r++) {
                            var a = t[e + 2 * r],
                                o = t[e + 2 * r + 1];
                            a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), (S = i[r]).high ^= o, S.low ^= a
                        }
                        for (var s = 0; s < 24; s++) {
                            for (var p = 0; p < 5; p++) {
                                for (var h = 0, f = 0, m = 0; m < 5; m++) h ^= (S = i[p + 5 * m]).high, f ^= S.low;
                                var g = u[p];
                                g.high = h, g.low = f
                            }
                            for (p = 0; p < 5; p++) {
                                var v = u[(p + 4) % 5],
                                    b = u[(p + 1) % 5],
                                    x = b.high,
                                    w = b.low;
                                for (h = v.high ^ (x << 1 | w >>> 31), f = v.low ^ (w << 1 | x >>> 31), m = 0; m < 5; m++)(S = i[p + 5 * m]).high ^= h, S.low ^= f
                            }
                            for (var y = 1; y < 25; y++) {
                                var A = (S = i[y]).high,
                                    _ = S.low,
                                    C = l[y];
                                C < 32 ? (h = A << C | _ >>> 32 - C, f = _ << C | A >>> 32 - C) : (h = _ << C - 32 | A >>> 64 - C, f = A << C - 32 | _ >>> 64 - C);
                                var k = u[c[y]];
                                k.high = h, k.low = f
                            }
                            var E = u[0],
                                B = i[0];
                            for (E.high = B.high, E.low = B.low, p = 0; p < 5; p++)
                                for (m = 0; m < 5; m++) {
                                    var S = i[y = p + 5 * m],
                                        z = u[y],
                                        M = u[(p + 1) % 5 + 5 * m],
                                        F = u[(p + 2) % 5 + 5 * m];
                                    S.high = z.high ^ ~M.high & F.high, S.low = z.low ^ ~M.low & F.low
                                }
                            S = i[0];
                            var D = d[s];
                            S.high ^= D.high, S.low ^= D.low
                        }
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            i = e.words,
                            n = (this._nDataBytes, 8 * e.sigBytes),
                            a = 32 * this.blockSize;
                        i[n >>> 5] |= 1 << 24 - n % 32, i[(t.ceil((n + 1) / a) * a >>> 5) - 1] |= 128, e.sigBytes = 4 * i.length, this._process();
                        for (var o = this._state, s = this.cfg.outputLength / 8, l = s / 8, c = [], d = 0; d < l; d++) {
                            var u = o[d],
                                p = u.high,
                                h = u.low;
                            p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8), h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8), c.push(h), c.push(p)
                        }
                        return new r.init(c, s)
                    },
                    clone: function() {
                        for (var t = a.clone.call(this), e = t._state = this._state.slice(0), i = 0; i < 25; i++) e[i] = e[i].clone();
                        return t
                    }
                });
                e.SHA3 = a._createHelper(p), e.HmacSHA3 = a._createHmacHelper(p)
            }(Math), n.SHA3)
        },
        7460: function(t, e, i) {
            var n, r, a, o, s, l, c, d;
            t.exports = (d = i(8249), i(4938), i(34), r = (n = d).x64, a = r.Word, o = r.WordArray, s = n.algo, l = s.SHA512, c = s.SHA384 = l.extend({
                _doReset: function() {
                    this._hash = new o.init([new a.init(3418070365, 3238371032), new a.init(1654270250, 914150663), new a.init(2438529370, 812702999), new a.init(355462360, 4144912697), new a.init(1731405415, 4290775857), new a.init(2394180231, 1750603025), new a.init(3675008525, 1694076839), new a.init(1203062813, 3204075428)])
                },
                _doFinalize: function() {
                    var t = l._doFinalize.call(this);
                    return t.sigBytes -= 16, t
                }
            }), n.SHA384 = l._createHelper(c), n.HmacSHA384 = l._createHmacHelper(c), d.SHA384)
        },
        34: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(4938), function() {
                var t = n,
                    e = t.lib.Hasher,
                    i = t.x64,
                    r = i.Word,
                    a = i.WordArray,
                    o = t.algo;

                function s() {
                    return r.create.apply(r, arguments)
                }
                var l = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)],
                    c = [];
                ! function() {
                    for (var t = 0; t < 80; t++) c[t] = s()
                }();
                var d = o.SHA512 = e.extend({
                    _doReset: function() {
                        this._hash = new a.init([new r.init(1779033703, 4089235720), new r.init(3144134277, 2227873595), new r.init(1013904242, 4271175723), new r.init(2773480762, 1595750129), new r.init(1359893119, 2917565137), new r.init(2600822924, 725511199), new r.init(528734635, 4215389547), new r.init(1541459225, 327033209)])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var i = this._hash.words, n = i[0], r = i[1], a = i[2], o = i[3], s = i[4], d = i[5], u = i[6], p = i[7], h = n.high, f = n.low, m = r.high, g = r.low, v = a.high, b = a.low, x = o.high, w = o.low, y = s.high, A = s.low, _ = d.high, C = d.low, k = u.high, E = u.low, B = p.high, S = p.low, z = h, M = f, F = m, D = g, U = v, T = b, L = x, R = w, Z = y, $ = A, O = _, I = C, P = k, j = E, N = B, H = S, W = 0; W < 80; W++) {
                            var q, V, Y = c[W];
                            if (W < 16) V = Y.high = 0 | t[e + 2 * W], q = Y.low = 0 | t[e + 2 * W + 1];
                            else {
                                var X = c[W - 15],
                                    G = X.high,
                                    Q = X.low,
                                    K = (G >>> 1 | Q << 31) ^ (G >>> 8 | Q << 24) ^ G >>> 7,
                                    J = (Q >>> 1 | G << 31) ^ (Q >>> 8 | G << 24) ^ (Q >>> 7 | G << 25),
                                    tt = c[W - 2],
                                    et = tt.high,
                                    it = tt.low,
                                    nt = (et >>> 19 | it << 13) ^ (et << 3 | it >>> 29) ^ et >>> 6,
                                    rt = (it >>> 19 | et << 13) ^ (it << 3 | et >>> 29) ^ (it >>> 6 | et << 26),
                                    at = c[W - 7],
                                    ot = at.high,
                                    st = at.low,
                                    lt = c[W - 16],
                                    ct = lt.high,
                                    dt = lt.low;
                                V = (V = (V = K + ot + ((q = J + st) >>> 0 < J >>> 0 ? 1 : 0)) + nt + ((q += rt) >>> 0 < rt >>> 0 ? 1 : 0)) + ct + ((q += dt) >>> 0 < dt >>> 0 ? 1 : 0), Y.high = V, Y.low = q
                            }
                            var ut, pt = Z & O ^ ~Z & P,
                                ht = $ & I ^ ~$ & j,
                                ft = z & F ^ z & U ^ F & U,
                                mt = M & D ^ M & T ^ D & T,
                                gt = (z >>> 28 | M << 4) ^ (z << 30 | M >>> 2) ^ (z << 25 | M >>> 7),
                                vt = (M >>> 28 | z << 4) ^ (M << 30 | z >>> 2) ^ (M << 25 | z >>> 7),
                                bt = (Z >>> 14 | $ << 18) ^ (Z >>> 18 | $ << 14) ^ (Z << 23 | $ >>> 9),
                                xt = ($ >>> 14 | Z << 18) ^ ($ >>> 18 | Z << 14) ^ ($ << 23 | Z >>> 9),
                                wt = l[W],
                                yt = wt.high,
                                At = wt.low,
                                _t = N + bt + ((ut = H + xt) >>> 0 < H >>> 0 ? 1 : 0),
                                Ct = vt + mt;
                            N = P, H = j, P = O, j = I, O = Z, I = $, Z = L + (_t = (_t = (_t = _t + pt + ((ut += ht) >>> 0 < ht >>> 0 ? 1 : 0)) + yt + ((ut += At) >>> 0 < At >>> 0 ? 1 : 0)) + V + ((ut += q) >>> 0 < q >>> 0 ? 1 : 0)) + (($ = R + ut | 0) >>> 0 < R >>> 0 ? 1 : 0) | 0, L = U, R = T, U = F, T = D, F = z, D = M, z = _t + (gt + ft + (Ct >>> 0 < vt >>> 0 ? 1 : 0)) + ((M = ut + Ct | 0) >>> 0 < ut >>> 0 ? 1 : 0) | 0
                        }
                        f = n.low = f + M, n.high = h + z + (f >>> 0 < M >>> 0 ? 1 : 0), g = r.low = g + D, r.high = m + F + (g >>> 0 < D >>> 0 ? 1 : 0), b = a.low = b + T, a.high = v + U + (b >>> 0 < T >>> 0 ? 1 : 0), w = o.low = w + R, o.high = x + L + (w >>> 0 < R >>> 0 ? 1 : 0), A = s.low = A + $, s.high = y + Z + (A >>> 0 < $ >>> 0 ? 1 : 0), C = d.low = C + I, d.high = _ + O + (C >>> 0 < I >>> 0 ? 1 : 0), E = u.low = E + j, u.high = k + P + (E >>> 0 < j >>> 0 ? 1 : 0), S = p.low = S + H, p.high = B + N + (S >>> 0 < H >>> 0 ? 1 : 0)
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            e = t.words,
                            i = 8 * this._nDataBytes,
                            n = 8 * t.sigBytes;
                        return e[n >>> 5] |= 128 << 24 - n % 32, e[30 + (n + 128 >>> 10 << 5)] = Math.floor(i / 4294967296), e[31 + (n + 128 >>> 10 << 5)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32()
                    },
                    clone: function() {
                        var t = e.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    },
                    blockSize: 32
                });
                t.SHA512 = e._createHelper(d), t.HmacSHA512 = e._createHmacHelper(d)
            }(), n.SHA512)
        },
        4253: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), i(8269), i(8214), i(888), i(5109), function() {
                var t = n,
                    e = t.lib,
                    i = e.WordArray,
                    r = e.BlockCipher,
                    a = t.algo,
                    o = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                    s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                    l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                    c = [{
                        0: 8421888,
                        268435456: 32768,
                        536870912: 8421378,
                        805306368: 2,
                        1073741824: 512,
                        1342177280: 8421890,
                        1610612736: 8389122,
                        1879048192: 8388608,
                        2147483648: 514,
                        2415919104: 8389120,
                        2684354560: 33280,
                        2952790016: 8421376,
                        3221225472: 32770,
                        3489660928: 8388610,
                        3758096384: 0,
                        4026531840: 33282,
                        134217728: 0,
                        402653184: 8421890,
                        671088640: 33282,
                        939524096: 32768,
                        1207959552: 8421888,
                        1476395008: 512,
                        1744830464: 8421378,
                        2013265920: 2,
                        2281701376: 8389120,
                        2550136832: 33280,
                        2818572288: 8421376,
                        3087007744: 8389122,
                        3355443200: 8388610,
                        3623878656: 32770,
                        3892314112: 514,
                        4160749568: 8388608,
                        1: 32768,
                        268435457: 2,
                        536870913: 8421888,
                        805306369: 8388608,
                        1073741825: 8421378,
                        1342177281: 33280,
                        1610612737: 512,
                        1879048193: 8389122,
                        2147483649: 8421890,
                        2415919105: 8421376,
                        2684354561: 8388610,
                        2952790017: 33282,
                        3221225473: 514,
                        3489660929: 8389120,
                        3758096385: 32770,
                        4026531841: 0,
                        134217729: 8421890,
                        402653185: 8421376,
                        671088641: 8388608,
                        939524097: 512,
                        1207959553: 32768,
                        1476395009: 8388610,
                        1744830465: 2,
                        2013265921: 33282,
                        2281701377: 32770,
                        2550136833: 8389122,
                        2818572289: 514,
                        3087007745: 8421888,
                        3355443201: 8389120,
                        3623878657: 0,
                        3892314113: 33280,
                        4160749569: 8421378
                    }, {
                        0: 1074282512,
                        16777216: 16384,
                        33554432: 524288,
                        50331648: 1074266128,
                        67108864: 1073741840,
                        83886080: 1074282496,
                        100663296: 1073758208,
                        117440512: 16,
                        134217728: 540672,
                        150994944: 1073758224,
                        167772160: 1073741824,
                        184549376: 540688,
                        201326592: 524304,
                        218103808: 0,
                        234881024: 16400,
                        251658240: 1074266112,
                        8388608: 1073758208,
                        25165824: 540688,
                        41943040: 16,
                        58720256: 1073758224,
                        75497472: 1074282512,
                        92274688: 1073741824,
                        109051904: 524288,
                        125829120: 1074266128,
                        142606336: 524304,
                        159383552: 0,
                        176160768: 16384,
                        192937984: 1074266112,
                        209715200: 1073741840,
                        226492416: 540672,
                        243269632: 1074282496,
                        260046848: 16400,
                        268435456: 0,
                        285212672: 1074266128,
                        301989888: 1073758224,
                        318767104: 1074282496,
                        335544320: 1074266112,
                        352321536: 16,
                        369098752: 540688,
                        385875968: 16384,
                        402653184: 16400,
                        419430400: 524288,
                        436207616: 524304,
                        452984832: 1073741840,
                        469762048: 540672,
                        486539264: 1073758208,
                        503316480: 1073741824,
                        520093696: 1074282512,
                        276824064: 540688,
                        293601280: 524288,
                        310378496: 1074266112,
                        327155712: 16384,
                        343932928: 1073758208,
                        360710144: 1074282512,
                        377487360: 16,
                        394264576: 1073741824,
                        411041792: 1074282496,
                        427819008: 1073741840,
                        444596224: 1073758224,
                        461373440: 524304,
                        478150656: 0,
                        494927872: 16400,
                        511705088: 1074266128,
                        528482304: 540672
                    }, {
                        0: 260,
                        1048576: 0,
                        2097152: 67109120,
                        3145728: 65796,
                        4194304: 65540,
                        5242880: 67108868,
                        6291456: 67174660,
                        7340032: 67174400,
                        8388608: 67108864,
                        9437184: 67174656,
                        10485760: 65792,
                        11534336: 67174404,
                        12582912: 67109124,
                        13631488: 65536,
                        14680064: 4,
                        15728640: 256,
                        524288: 67174656,
                        1572864: 67174404,
                        2621440: 0,
                        3670016: 67109120,
                        4718592: 67108868,
                        5767168: 65536,
                        6815744: 65540,
                        7864320: 260,
                        8912896: 4,
                        9961472: 256,
                        11010048: 67174400,
                        12058624: 65796,
                        13107200: 65792,
                        14155776: 67109124,
                        15204352: 67174660,
                        16252928: 67108864,
                        16777216: 67174656,
                        17825792: 65540,
                        18874368: 65536,
                        19922944: 67109120,
                        20971520: 256,
                        22020096: 67174660,
                        23068672: 67108868,
                        24117248: 0,
                        25165824: 67109124,
                        26214400: 67108864,
                        27262976: 4,
                        28311552: 65792,
                        29360128: 67174400,
                        30408704: 260,
                        31457280: 65796,
                        32505856: 67174404,
                        17301504: 67108864,
                        18350080: 260,
                        19398656: 67174656,
                        20447232: 0,
                        21495808: 65540,
                        22544384: 67109120,
                        23592960: 256,
                        24641536: 67174404,
                        25690112: 65536,
                        26738688: 67174660,
                        27787264: 65796,
                        28835840: 67108868,
                        29884416: 67109124,
                        30932992: 67174400,
                        31981568: 4,
                        33030144: 65792
                    }, {
                        0: 2151682048,
                        65536: 2147487808,
                        131072: 4198464,
                        196608: 2151677952,
                        262144: 0,
                        327680: 4198400,
                        393216: 2147483712,
                        458752: 4194368,
                        524288: 2147483648,
                        589824: 4194304,
                        655360: 64,
                        720896: 2147487744,
                        786432: 2151678016,
                        851968: 4160,
                        917504: 4096,
                        983040: 2151682112,
                        32768: 2147487808,
                        98304: 64,
                        163840: 2151678016,
                        229376: 2147487744,
                        294912: 4198400,
                        360448: 2151682112,
                        425984: 0,
                        491520: 2151677952,
                        557056: 4096,
                        622592: 2151682048,
                        688128: 4194304,
                        753664: 4160,
                        819200: 2147483648,
                        884736: 4194368,
                        950272: 4198464,
                        1015808: 2147483712,
                        1048576: 4194368,
                        1114112: 4198400,
                        1179648: 2147483712,
                        1245184: 0,
                        1310720: 4160,
                        1376256: 2151678016,
                        1441792: 2151682048,
                        1507328: 2147487808,
                        1572864: 2151682112,
                        1638400: 2147483648,
                        1703936: 2151677952,
                        1769472: 4198464,
                        1835008: 2147487744,
                        1900544: 4194304,
                        1966080: 64,
                        2031616: 4096,
                        1081344: 2151677952,
                        1146880: 2151682112,
                        1212416: 0,
                        1277952: 4198400,
                        1343488: 4194368,
                        1409024: 2147483648,
                        1474560: 2147487808,
                        1540096: 64,
                        1605632: 2147483712,
                        1671168: 4096,
                        1736704: 2147487744,
                        1802240: 2151678016,
                        1867776: 4160,
                        1933312: 2151682048,
                        1998848: 4194304,
                        2064384: 4198464
                    }, {
                        0: 128,
                        4096: 17039360,
                        8192: 262144,
                        12288: 536870912,
                        16384: 537133184,
                        20480: 16777344,
                        24576: 553648256,
                        28672: 262272,
                        32768: 16777216,
                        36864: 537133056,
                        40960: 536871040,
                        45056: 553910400,
                        49152: 553910272,
                        53248: 0,
                        57344: 17039488,
                        61440: 553648128,
                        2048: 17039488,
                        6144: 553648256,
                        10240: 128,
                        14336: 17039360,
                        18432: 262144,
                        22528: 537133184,
                        26624: 553910272,
                        30720: 536870912,
                        34816: 537133056,
                        38912: 0,
                        43008: 553910400,
                        47104: 16777344,
                        51200: 536871040,
                        55296: 553648128,
                        59392: 16777216,
                        63488: 262272,
                        65536: 262144,
                        69632: 128,
                        73728: 536870912,
                        77824: 553648256,
                        81920: 16777344,
                        86016: 553910272,
                        90112: 537133184,
                        94208: 16777216,
                        98304: 553910400,
                        102400: 553648128,
                        106496: 17039360,
                        110592: 537133056,
                        114688: 262272,
                        118784: 536871040,
                        122880: 0,
                        126976: 17039488,
                        67584: 553648256,
                        71680: 16777216,
                        75776: 17039360,
                        79872: 537133184,
                        83968: 536870912,
                        88064: 17039488,
                        92160: 128,
                        96256: 553910272,
                        100352: 262272,
                        104448: 553910400,
                        108544: 0,
                        112640: 553648128,
                        116736: 16777344,
                        120832: 262144,
                        124928: 537133056,
                        129024: 536871040
                    }, {
                        0: 268435464,
                        256: 8192,
                        512: 270532608,
                        768: 270540808,
                        1024: 268443648,
                        1280: 2097152,
                        1536: 2097160,
                        1792: 268435456,
                        2048: 0,
                        2304: 268443656,
                        2560: 2105344,
                        2816: 8,
                        3072: 270532616,
                        3328: 2105352,
                        3584: 8200,
                        3840: 270540800,
                        128: 270532608,
                        384: 270540808,
                        640: 8,
                        896: 2097152,
                        1152: 2105352,
                        1408: 268435464,
                        1664: 268443648,
                        1920: 8200,
                        2176: 2097160,
                        2432: 8192,
                        2688: 268443656,
                        2944: 270532616,
                        3200: 0,
                        3456: 270540800,
                        3712: 2105344,
                        3968: 268435456,
                        4096: 268443648,
                        4352: 270532616,
                        4608: 270540808,
                        4864: 8200,
                        5120: 2097152,
                        5376: 268435456,
                        5632: 268435464,
                        5888: 2105344,
                        6144: 2105352,
                        6400: 0,
                        6656: 8,
                        6912: 270532608,
                        7168: 8192,
                        7424: 268443656,
                        7680: 270540800,
                        7936: 2097160,
                        4224: 8,
                        4480: 2105344,
                        4736: 2097152,
                        4992: 268435464,
                        5248: 268443648,
                        5504: 8200,
                        5760: 270540808,
                        6016: 270532608,
                        6272: 270540800,
                        6528: 270532616,
                        6784: 8192,
                        7040: 2105352,
                        7296: 2097160,
                        7552: 0,
                        7808: 268435456,
                        8064: 268443656
                    }, {
                        0: 1048576,
                        16: 33555457,
                        32: 1024,
                        48: 1049601,
                        64: 34604033,
                        80: 0,
                        96: 1,
                        112: 34603009,
                        128: 33555456,
                        144: 1048577,
                        160: 33554433,
                        176: 34604032,
                        192: 34603008,
                        208: 1025,
                        224: 1049600,
                        240: 33554432,
                        8: 34603009,
                        24: 0,
                        40: 33555457,
                        56: 34604032,
                        72: 1048576,
                        88: 33554433,
                        104: 33554432,
                        120: 1025,
                        136: 1049601,
                        152: 33555456,
                        168: 34603008,
                        184: 1048577,
                        200: 1024,
                        216: 34604033,
                        232: 1,
                        248: 1049600,
                        256: 33554432,
                        272: 1048576,
                        288: 33555457,
                        304: 34603009,
                        320: 1048577,
                        336: 33555456,
                        352: 34604032,
                        368: 1049601,
                        384: 1025,
                        400: 34604033,
                        416: 1049600,
                        432: 1,
                        448: 0,
                        464: 34603008,
                        480: 33554433,
                        496: 1024,
                        264: 1049600,
                        280: 33555457,
                        296: 34603009,
                        312: 1,
                        328: 33554432,
                        344: 1048576,
                        360: 1025,
                        376: 34604032,
                        392: 33554433,
                        408: 34603008,
                        424: 0,
                        440: 34604033,
                        456: 1049601,
                        472: 1024,
                        488: 33555456,
                        504: 1048577
                    }, {
                        0: 134219808,
                        1: 131072,
                        2: 134217728,
                        3: 32,
                        4: 131104,
                        5: 134350880,
                        6: 134350848,
                        7: 2048,
                        8: 134348800,
                        9: 134219776,
                        10: 133120,
                        11: 134348832,
                        12: 2080,
                        13: 0,
                        14: 134217760,
                        15: 133152,
                        2147483648: 2048,
                        2147483649: 134350880,
                        2147483650: 134219808,
                        2147483651: 134217728,
                        2147483652: 134348800,
                        2147483653: 133120,
                        2147483654: 133152,
                        2147483655: 32,
                        2147483656: 134217760,
                        2147483657: 2080,
                        2147483658: 131104,
                        2147483659: 134350848,
                        2147483660: 0,
                        2147483661: 134348832,
                        2147483662: 134219776,
                        2147483663: 131072,
                        16: 133152,
                        17: 134350848,
                        18: 32,
                        19: 2048,
                        20: 134219776,
                        21: 134217760,
                        22: 134348832,
                        23: 131072,
                        24: 0,
                        25: 131104,
                        26: 134348800,
                        27: 134219808,
                        28: 134350880,
                        29: 133120,
                        30: 2080,
                        31: 134217728,
                        2147483664: 131072,
                        2147483665: 2048,
                        2147483666: 134348832,
                        2147483667: 133152,
                        2147483668: 32,
                        2147483669: 134348800,
                        2147483670: 134217728,
                        2147483671: 134219808,
                        2147483672: 134350880,
                        2147483673: 134217760,
                        2147483674: 134219776,
                        2147483675: 0,
                        2147483676: 133120,
                        2147483677: 2080,
                        2147483678: 131104,
                        2147483679: 134350848
                    }],
                    d = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                    u = a.DES = r.extend({
                        _doReset: function() {
                            for (var t = this._key.words, e = [], i = 0; i < 56; i++) {
                                var n = o[i] - 1;
                                e[i] = t[n >>> 5] >>> 31 - n % 32 & 1
                            }
                            for (var r = this._subKeys = [], a = 0; a < 16; a++) {
                                var c = r[a] = [],
                                    d = l[a];
                                for (i = 0; i < 24; i++) c[i / 6 | 0] |= e[(s[i] - 1 + d) % 28] << 31 - i % 6, c[4 + (i / 6 | 0)] |= e[28 + (s[i + 24] - 1 + d) % 28] << 31 - i % 6;
                                for (c[0] = c[0] << 1 | c[0] >>> 31, i = 1; i < 7; i++) c[i] = c[i] >>> 4 * (i - 1) + 3;
                                c[7] = c[7] << 5 | c[7] >>> 27
                            }
                            var u = this._invSubKeys = [];
                            for (i = 0; i < 16; i++) u[i] = r[15 - i]
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._subKeys)
                        },
                        decryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._invSubKeys)
                        },
                        _doCryptBlock: function(t, e, i) {
                            this._lBlock = t[e], this._rBlock = t[e + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), h.call(this, 2, 858993459), h.call(this, 8, 16711935), p.call(this, 1, 1431655765);
                            for (var n = 0; n < 16; n++) {
                                for (var r = i[n], a = this._lBlock, o = this._rBlock, s = 0, l = 0; l < 8; l++) s |= c[l][((o ^ r[l]) & d[l]) >>> 0];
                                this._lBlock = o, this._rBlock = a ^ s
                            }
                            var u = this._lBlock;
                            this._lBlock = this._rBlock, this._rBlock = u, p.call(this, 1, 1431655765), h.call(this, 8, 16711935), h.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), t[e] = this._lBlock, t[e + 1] = this._rBlock
                        },
                        keySize: 2,
                        ivSize: 2,
                        blockSize: 2
                    });

                function p(t, e) {
                    var i = (this._lBlock >>> t ^ this._rBlock) & e;
                    this._rBlock ^= i, this._lBlock ^= i << t
                }

                function h(t, e) {
                    var i = (this._rBlock >>> t ^ this._lBlock) & e;
                    this._lBlock ^= i, this._rBlock ^= i << t
                }
                t.DES = r._createHelper(u);
                var f = a.TripleDES = r.extend({
                    _doReset: function() {
                        var t = this._key.words;
                        if (2 !== t.length && 4 !== t.length && t.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                        var e = t.slice(0, 2),
                            n = t.length < 4 ? t.slice(0, 2) : t.slice(2, 4),
                            r = t.length < 6 ? t.slice(0, 2) : t.slice(4, 6);
                        this._des1 = u.createEncryptor(i.create(e)), this._des2 = u.createEncryptor(i.create(n)), this._des3 = u.createEncryptor(i.create(r))
                    },
                    encryptBlock: function(t, e) {
                        this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e)
                    },
                    decryptBlock: function(t, e) {
                        this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e)
                    },
                    keySize: 6,
                    ivSize: 2,
                    blockSize: 2
                });
                t.TripleDES = r._createHelper(f)
            }(), n.TripleDES)
        },
        4938: function(t, e, i) {
            var n;
            t.exports = (n = i(8249), function(t) {
                var e = n,
                    i = e.lib,
                    r = i.Base,
                    a = i.WordArray,
                    o = e.x64 = {};
                o.Word = r.extend({
                    init: function(t, e) {
                        this.high = t, this.low = e
                    }
                }), o.WordArray = r.extend({
                    init: function(e, i) {
                        e = this.words = e || [], this.sigBytes = i != t ? i : 8 * e.length
                    },
                    toX32: function() {
                        for (var t = this.words, e = t.length, i = [], n = 0; n < e; n++) {
                            var r = t[n];
                            i.push(r.high), i.push(r.low)
                        }
                        return a.create(i, this.sigBytes)
                    },
                    clone: function() {
                        for (var t = r.clone.call(this), e = t.words = this.words.slice(0), i = e.length, n = 0; n < i; n++) e[n] = e[n].clone();
                        return t
                    }
                })
            }(), n)
        },
        4202: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => s
            });
            var n = i(7537),
                r = i.n(n),
                a = i(3645),
                o = i.n(a)()(r());
            o.push([t.id, ".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12) !important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(255,255,255,.12) !important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(255,255,255,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child){border-left-width:0}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent !important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}", "", {
                version: 3,
                sources: ["webpack://./node_modules/vuetify/src/components/VBtnToggle/VBtnToggle.sass", "webpack://./node_modules/vuetify/src/styles/settings/_variables.scss", "webpack://./node_modules/vuetify/src/components/VBtnToggle/_variables.scss", "webpack://./node_modules/vuetify/src/styles/tools/_rtl.sass"],
                names: [],
                mappings: "AAME,qDACE,eAAA,CACA,qBAAA,CAEA,kEACE,uCAAA,CAEA,qFACE,4BAAA,CAEF,0EACE,UAAA,CAXN,oDACE,kBAAA,CACA,UAAA,CAEA,iEACE,6CAAA,CAEA,oFACE,iCAAA,CAEF,yEACE,UAAA,CAGR,cACE,iBCdmB,CDenB,mBAAA,CACA,cAAA,CAEA,2BACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,UExBqB,CFyBrB,cE3BqB,CAAA,8DF+BjB,8BAAA,CACA,iCAAA,CGpCN,8DHuCM,+BAAA,CACA,kCAAA,CGpCN,6DHwCM,+BAAA,CACA,kCAAA,CG7CN,6DHgDM,8BAAA,CACA,iCAAA,CAEJ,mCACE,aAAA,CACA,SAAA,CAEF,iCACE,YAAA,CAGA,oEACE,mBAAA,CAGF,mEACE,mBAAA,CAEN,2CACE,cE9DmB,CF+DnB,YAAA,CAGA,qEACE,WErEkB,CFwEtB,uCACE,cAAA,CAGF,kCACE,aExE2B,CF0E/B,qBACE,eAAA,CAEA,kCACE,uCAAA,CACA,wBAAA,CACA,UE/E0B,CFgF1B,cAAA,CAEJ,uBACE,kBErF+B,CFuFjC,sBACE,sBAAA,CAEF,oBACE,eAAA",
                sourcesContent: ["@import /home/forge/voice.ai/resources/scss/override.scss\n// Imports\n@import './_variables.scss'\n\n// Theme\n+theme(v-btn-toggle) using ($material)\n  &:not(.v-btn-toggle--group)\n    background: map-get($material, 'cards')\n    color: map-deep-get($material, 'text', 'primary')\n\n    .v-btn.v-btn\n      border-color: map-get($material, 'dividers') !important\n\n      &:focus:not(:active)\n        border-color: map-deep-get($material, 'buttons', 'disabled')\n\n      .v-icon\n        color: map-deep-get($material, 'toggle-buttons', 'color')\n\n// Block\n.v-btn-toggle\n  border-radius: $btn-toggle-border-radius\n  display: inline-flex\n  max-width: 100%\n\n  > .v-btn.v-btn\n    border-radius: 0\n    border-style: solid\n    border-width: thin\n    box-shadow: none\n    box-shadow: none\n    opacity: $btn-toggle-btn-opacity\n    padding: $btn-toggle-btn-padding\n\n    &:first-child\n      +ltr()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n      +rtl()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n    &:last-child\n      +ltr()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n      +rtl()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n    &--active\n      color: inherit\n      opacity: 1\n\n    &:after\n      display: none\n\n    +ltr()\n      &:not(:first-child)\n        border-left-width: 0\n\n    +rtl()\n      &:not(:last-child)\n        border-left-width: 0\n\n  .v-btn.v-btn.v-size--default\n    min-width: $btn-toggle-btn-width\n    min-height: 0\n\n  &:not(.v-btn-toggle--dense)\n    .v-btn.v-btn.v-size--default\n      height: $btn-toggle-btn-height\n\n.v-btn-toggle--borderless\n  > .v-btn.v-btn\n    border-width: 0\n\n.v-btn-toggle--dense\n  > .v-btn.v-btn\n    padding: $btn-toggle-dense-btn-padding\n\n.v-btn-toggle--group\n  border-radius: 0\n\n  > .v-btn.v-btn\n    background-color: transparent !important\n    border-color: transparent\n    margin: $btn-toggle-group-btn-margin\n    min-width: auto\n\n.v-btn-toggle--rounded\n  border-radius: $btn-toggle-round-border-radius\n\n.v-btn-toggle--shaped\n  border-radius: $btn-toggle-shaped-border-radius $btn-toggle-border-radius\n\n.v-btn-toggle--tile\n  border-radius: 0\n", "@import '../tools/_functions.sass';\n\n$color-pack: true !default;\n\n$body-font-family: 'Roboto', sans-serif !default;\n$font-size-root: 16px !default;\n$line-height-root: 1.5 !default;\n$border-radius-root: 4px !default;\n\n$rounded: () !default;\n$rounded: map-deep-merge(\n  (\n    0: 0,\n    'sm': $border-radius-root / 2,\n    null: $border-radius-root,\n    'lg': $border-radius-root * 2,\n    'xl': $border-radius-root * 6,\n    'pill': 9999px,\n    'circle': 50%\n  ),\n  $rounded\n);\n\n$spacer: 4px !default;\n$spacers-steps: 16 !default; \n\n$spacers: () !default;\n@if (type-of($spacers) == list) {\n  @for $i from 0 through $spacers-steps {\n    $spacers: map-merge($spacers, ($i: $spacer * $i))\n  }\n}\n\n$negative-spacers: () !default;\n@if (type-of($negative-spacers) == list) {\n  @for $i from 1 through $spacers-steps {\n    $negative-spacers: map-merge($negative-spacers, (\"n\" + $i: -$spacer * $i))\n  }\n}\n\n$grid-breakpoints: () !default;\n$grid-breakpoints: map-deep-merge(\n  (\n    'xs': 0,\n    'sm': 600px,\n    'md': 960px,\n    'lg': 1280px - 16px,\n    'xl': 1920px - 16px\n  ),\n  $grid-breakpoints\n);\n\n$grid-gutter: $spacer * 6 !default;\n$form-grid-gutter: $spacer * 2 !default;\n$grid-columns: 12 !default;\n\n$container-padding-x: $grid-gutter / 2 !default;\n\n$grid-gutters: () !default;\n$grid-gutters: map-deep-merge(\n  (\n    'xs': $grid-gutter / 12,\n    'sm': $grid-gutter / 6,\n    'md': $grid-gutter / 3,\n    'lg': $grid-gutter * 2/3,\n    'xl': $grid-gutter\n  ),\n  $grid-gutters\n);\n\n$container-max-widths: () !default;\n$container-max-widths: map-deep-merge(\n  (\n    'md': map-get($grid-breakpoints, 'md') * 0.9375,\n    'lg': map-get($grid-breakpoints, 'lg') * 0.9375,\n    'xl': map-get($grid-breakpoints, 'xl') * 0.9375\n  ),\n  $container-max-widths\n);\n\n$display-breakpoints: () !default;\n$display-breakpoints: map-deep-merge(\n  (\n    'print-only': 'only print',\n    'screen-only': 'only screen',\n    'xs-only': 'only screen and (max-width: #{map-get($grid-breakpoints, 'sm') - 0.02})',\n    'sm-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')}) and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')})',\n    'md-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')}) and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')})',\n    'lg-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')})',\n    'xl-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'xl')})'\n  ),\n  $display-breakpoints\n);\n\n$font-weights: () !default;\n$font-weights: map-deep-merge(\n  (\n    'thin': 100,\n    'light': 300,\n    'regular': 400,\n    'medium': 500,\n    'bold': 700,\n    'black': 900\n  ),\n  $font-weights\n);\n\n$heading-font-family: $body-font-family !default;\n\n$headings: () !default;\n$headings: map-deep-merge(\n  (\n    'h1': (\n      'size': 6rem,\n      'weight': 300,\n      'line-height': 6rem,\n      'letter-spacing': -.015625em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h2': (\n      'size': 3.75rem,\n      'weight': 300,\n      'line-height': 3.75rem,\n      'letter-spacing': -.0083333333em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h3': (\n      'size': 3rem,\n      'weight': 400,\n      'line-height': 3.125rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h4': (\n      'size': 2.125rem,\n      'weight': 400,\n      'line-height': 2.5rem,\n      'letter-spacing': .0073529412em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h5': (\n      'size': 1.5rem,\n      'weight': 400,\n      'line-height': 2rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h6': (\n      'size': 1.25rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .0125em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'subtitle-1': (\n      'size': 1rem,\n      'weight': normal,\n      'line-height': 1.75rem,\n      'letter-spacing': .009375em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'subtitle-2': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 1.375rem,\n      'letter-spacing': .0071428571em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-1': (\n      'size': 1rem,\n      'weight': 400,\n      'line-height': 1.5rem,\n      'letter-spacing': .03125em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-2': (\n      'size': .875rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0178571429em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'button': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 2.25rem,\n      'letter-spacing': .0892857143em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    ),\n    'caption': (\n      'size': .75rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0333333333em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'overline': (\n      'size': .75rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .1666666667em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    )\n  ),\n  $headings\n);\n\n$typography: () !default;\n@each $type, $values in $headings {\n  $typography: map-deep-merge(\n    $typography,\n    (#{$type}: map-values($values))\n  );\n}\n\n$transition: () !default;\n$transition: map-deep-merge(\n  (\n    'fast-out-slow-in': cubic-bezier(0.4, 0, 0.2, 1),\n    'linear-out-slow-in': cubic-bezier(0, 0, 0.2, 1),\n    'fast-out-linear-in': cubic-bezier(0.4, 0, 1, 1),\n    'ease-in-out': cubic-bezier(0.4, 0, 0.6, 1),\n    'fast-in-fast-out': cubic-bezier(0.25, 0.8, 0.25, 1),\n    'swing': cubic-bezier(0.25, 0.8, 0.5, 1)\n  ),\n  $transition\n);\n$primary-transition: 0.3s map-get($transition, 'swing') !default;\n$secondary-transition: 0.2s map-get($transition, 'ease-in-out') !default;\n\n// Ripples //;\n$ripple-animation-transition-in: transform 0.25s map-get($transition, 'fast-out-slow-in'), opacity 0.1s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-transition-out: opacity 0.3s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-visible-opacity: 0.25 !default;\n\n// Elements //;\n$bootable-transition: 0.2s map-get($transition, 'fast-out-slow-in') !default;\n$blockquote-font-size: 18px !default;\n$blockquote-font-weight: 300 !default;\n$code-kbd-border-radius: 3px !default;\n$code-kbd-font-size: 85% !default;\n$code-kbd-font-weight: normal !default;\n$code-padding: .2em .4em !default;\n$kbd-padding: .2em .4rem !default;\n$input-top-spacing: 16px !default;\n$text-field-active-label-height: 12px !default;\n", "@import '../../styles/styles.sass';\n\n$btn-toggle-border-radius: $border-radius-root !default;\n$btn-toggle-shaped-border-radius: 24px !default;\n$btn-toggle-btn-height: 48px !default;\n$btn-toggle-btn-padding: 0 12px !default;\n$btn-toggle-btn-width: 48px !default;\n$btn-toggle-btn-opacity: 0.8 !default;\n$btn-toggle-round-border-radius: 24px !default;\n$btn-toggle-dense-btn-padding: 0 8px !default;\n$btn-toggle-group-btn-margin: 4px !default;\n", "@mixin rtl()\n  .v-application--is-rtl &\n    @content\n\n@mixin ltr()\n  .v-application--is-ltr &\n    @content\n"],
                sourceRoot: ""
            }]);
            const s = o
        },
        903: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            var n = function t() {
                var e = [].slice.call(arguments),
                    i = !1;
                "boolean" == typeof e[0] && (i = e.shift());
                var n = e[0];
                if (r(n)) throw new Error("extendee must be an object");
                for (var a = e.slice(1), o = a.length, s = 0; s < o; s++) {
                    var l = a[s];
                    for (var c in l)
                        if (Object.prototype.hasOwnProperty.call(l, c)) {
                            var d = l[c];
                            if (i && (p = d, Array.isArray(p) || "[object Object]" == {}.toString.call(p))) {
                                var u = Array.isArray(d) ? [] : {};
                                n[c] = t(!0, Object.prototype.hasOwnProperty.call(n, c) && !r(n[c]) ? n[c] : u, d)
                            } else n[c] = d
                        }
                }
                var p;
                return n
            };

            function r(t) {
                return !t || "object" != typeof t && "function" != typeof t
            }
        },
        7506: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            var n = i(7897),
                r = i.n(n),
                a = i(1519),
                o = i.n(a)()(r());
            o.push([t.id, '/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}', "", {
                version: 3,
                sources: ["webpack://./node_modules/cropperjs/dist/cropper.css"],
                names: [],
                mappings: "AAAA;;;;;;;;EAQE,CAEF,mBACE,aAAc,CACd,WAAY,CACZ,aAAc,CACd,iBAAkB,CAEd,iBAAkB,CACtB,wBAAyB,CACtB,qBAAsB,CAEjB,gBACV,CAEA,uBAEY,0BAA2B,CACnC,aAAc,CACd,WAAY,CACZ,sBAAuB,CACvB,yBAA2B,CAC3B,wBAA0B,CAC1B,sBAAwB,CACxB,qBAAuB,CACvB,UACF,CAEF,qFAKE,QAAS,CACT,MAAO,CACP,iBAAkB,CAClB,OAAQ,CACR,KACF,CAEA,kCAEE,eACF,CAEA,kBACE,qBAAsB,CACtB,SACF,CAEA,eACE,qBAAsB,CACtB,UACF,CAEA,kBACE,aAAc,CACd,WAAY,CACZ,sBAAuB,CACvB,kCAAsC,CACtC,eAAgB,CAChB,UACF,CAEA,gBACE,oBAAqB,CACrB,aAAc,CACd,UAAY,CACZ,iBACF,CAEA,yBACI,uBAAwB,CACxB,oBAAqB,CACrB,gBAAsB,CACtB,MAAO,CACP,aAAmB,CACnB,UACF,CAEF,yBACI,qBAAsB,CACtB,sBAAuB,CACvB,WAAY,CACZ,cAAoB,CACpB,KAAM,CACN,eACF,CAEF,gBACE,aAAc,CACd,QAAS,CACT,QAAS,CACT,WAAa,CACb,iBAAkB,CAClB,OAAQ,CACR,OACF,CAEA,6CAEI,qBAAsB,CACtB,WAAY,CACZ,aAAc,CACd,iBACF,CAEF,uBACI,UAAW,CACX,SAAU,CACV,KAAM,CACN,SACF,CAEF,sBACI,UAAW,CACX,MAAO,CACP,QAAS,CACT,SACF,CAEF,2CAGE,aAAc,CACd,WAAY,CACZ,UAAY,CACZ,iBAAkB,CAClB,UACF,CAEA,cACE,qBAAsB,CACtB,MAAO,CACP,KACF,CAEA,cACE,qBACF,CAEA,qBACI,gBAAiB,CACjB,UAAW,CACX,KAAM,CACN,SACF,CAEF,qBACI,gBAAiB,CACjB,UAAW,CACX,MAAO,CACP,QACF,CAEF,qBACI,gBAAiB,CACjB,SAAU,CACV,KAAM,CACN,SACF,CAEF,qBACI,WAAY,CACZ,gBAAiB,CACjB,UAAW,CACX,MACF,CAEF,eACE,qBAAsB,CACtB,UAAW,CACX,WAAa,CACb,SACF,CAEA,uBACI,gBAAiB,CACjB,eAAgB,CAChB,UAAW,CACX,OACF,CAEF,uBACI,gBAAiB,CACjB,QAAS,CACT,gBAAiB,CACjB,QACF,CAEF,uBACI,gBAAiB,CACjB,SAAU,CACV,eAAgB,CAChB,OACF,CAEF,uBACI,WAAY,CACZ,eAAgB,CAChB,QAAS,CACT,gBACF,CAEF,wBACI,kBAAmB,CACnB,UAAW,CACX,QACF,CAEF,wBACI,kBAAmB,CACnB,SAAU,CACV,QACF,CAEF,wBACI,WAAY,CACZ,kBAAmB,CACnB,SACF,CAEF,wBACI,WAAY,CACZ,kBAAmB,CACnB,WAAY,CACZ,SAAU,CACV,UAAW,CACX,UACF,CAEF,yBAEA,wBACM,WAAY,CACZ,UACJ,CACE,CAEJ,yBAEA,wBACM,WAAY,CACZ,UACJ,CACE,CAEJ,0BAEA,wBACM,UAAW,CACX,WAAa,CACb,SACJ,CACE,CAEJ,+BACI,qBAAsB,CACtB,WAAY,CACZ,WAAY,CACZ,aAAc,CACd,WAAY,CACZ,SAAU,CACV,iBAAkB,CAClB,UAAW,CACX,UACF,CAEF,mBACE,SACF,CAEA,YACE,8QACF,CAEA,cACE,aAAc,CACd,QAAS,CACT,iBAAkB,CAClB,OACF,CAEA,gBACE,sBACF,CAEA,cACE,WACF,CAEA,cACE,gBACF,CAEA,qIAIE,kBACF",
                sourcesContent: ['/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n      touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.cropper-container img {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    display: block;\n    height: 100%;\n    image-orientation: 0deg;\n    max-height: none !important;\n    max-width: none !important;\n    min-height: 0 !important;\n    min-width: 0 !important;\n    width: 100%;\n  }\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 75%);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n    border-bottom-width: 1px;\n    border-top-width: 1px;\n    height: calc(100% / 3);\n    left: 0;\n    top: calc(100% / 3);\n    width: 100%;\n  }\n\n.cropper-dashed.dashed-v {\n    border-left-width: 1px;\n    border-right-width: 1px;\n    height: 100%;\n    left: calc(100% / 3);\n    top: 0;\n    width: calc(100% / 3);\n  }\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n  .cropper-center::after {\n    background-color: #eee;\n    content: " ";\n    display: block;\n    position: absolute;\n  }\n\n.cropper-center::before {\n    height: 1px;\n    left: -3px;\n    top: 0;\n    width: 7px;\n  }\n\n.cropper-center::after {\n    height: 7px;\n    left: 0;\n    top: -3px;\n    width: 1px;\n  }\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n    cursor: ew-resize;\n    right: -3px;\n    top: 0;\n    width: 5px;\n  }\n\n.cropper-line.line-n {\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n    top: -3px;\n  }\n\n.cropper-line.line-w {\n    cursor: ew-resize;\n    left: -3px;\n    top: 0;\n    width: 5px;\n  }\n\n.cropper-line.line-s {\n    bottom: -3px;\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n  }\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n    cursor: ew-resize;\n    margin-top: -3px;\n    right: -3px;\n    top: 50%;\n  }\n\n.cropper-point.point-n {\n    cursor: ns-resize;\n    left: 50%;\n    margin-left: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-w {\n    cursor: ew-resize;\n    left: -3px;\n    margin-top: -3px;\n    top: 50%;\n  }\n\n.cropper-point.point-s {\n    bottom: -3px;\n    cursor: s-resize;\n    left: 50%;\n    margin-left: -3px;\n  }\n\n.cropper-point.point-ne {\n    cursor: nesw-resize;\n    right: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-nw {\n    cursor: nwse-resize;\n    left: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-sw {\n    bottom: -3px;\n    cursor: nesw-resize;\n    left: -3px;\n  }\n\n.cropper-point.point-se {\n    bottom: -3px;\n    cursor: nwse-resize;\n    height: 20px;\n    opacity: 1;\n    right: -3px;\n    width: 20px;\n  }\n\n@media (min-width: 768px) {\n\n.cropper-point.point-se {\n      height: 15px;\n      width: 15px;\n  }\n    }\n\n@media (min-width: 992px) {\n\n.cropper-point.point-se {\n      height: 10px;\n      width: 10px;\n  }\n    }\n\n@media (min-width: 1200px) {\n\n.cropper-point.point-se {\n      height: 5px;\n      opacity: 0.75;\n      width: 5px;\n  }\n    }\n\n.cropper-point.point-se::before {\n    background-color: #39f;\n    bottom: -50%;\n    content: " ";\n    display: block;\n    height: 200%;\n    opacity: 0;\n    position: absolute;\n    right: -50%;\n    width: 200%;\n  }\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n'],
                sourceRoot: ""
            }]);
            const s = o
        },
        914: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            var n = i(7897),
                r = i.n(n),
                a = i(1519),
                o = i.n(a)()(r());
            o.push([t.id, ".dropzone,.dropzone *{box-sizing:border-box}.dropzone{position:relative}.dropzone .dz-preview{display:inline-block;margin:.5em;position:relative;width:120px}.dropzone .dz-preview .dz-progress{border:1px solid #aaa;display:block;height:15px}.dropzone .dz-preview .dz-progress .dz-upload{background:green;display:block;height:100%;width:0}.dropzone .dz-preview .dz-error-message{color:red;display:none}.dropzone .dz-preview.dz-error .dz-error-mark,.dropzone .dz-preview.dz-error .dz-error-message,.dropzone .dz-preview.dz-success .dz-success-mark{display:block}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{display:none;height:58px;left:30px;left:50%;margin-left:-27px;position:absolute;top:30px;width:54px}", "", {
                version: 3,
                sources: ["webpack://./node_modules/dropzone/src/basic.scss"],
                names: [],
                mappings: "AAEA,sBACE,qBAAA,CAEF,UAEE,iBAAA,CAEA,sBAEE,oBAAA,CAEA,WAAA,CAHA,iBAAA,CAEA,WACA,CAEA,mCAGE,qBAAA,CAFA,aAAA,CACA,WACA,CACA,8CAIE,gBAAA,CAHA,aAAA,CACA,WAAA,CACA,OACA,CAIJ,wCACE,SAAA,CACA,YAAA,CAQA,iJACE,aAAA,CAIJ,4EAEE,YAAA,CAIA,WAAA,CAHA,SAAA,CAIA,QAAA,CACA,iBAAA,CAPA,iBAAA,CAGA,QAAA,CACA,UAGA",
                sourceRoot: ""
            }]);
            const s = o
        },
        6649: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            var n = i(7897),
                r = i.n(n),
                a = i(1519),
                o = i.n(a)()(r());
            o.push([t.id, ".public-navbar[data-v-ff4f83f6]{border-right:1px solid transparent;box-shadow:inset -1px 0 0 hsla(0,0%,89%,.1);color:#fff;min-height:calc(100vh - 20px)}.public-navbar .img-logo[data-v-ff4f83f6]{margin:50px auto 45px;max-width:210px;padding:0}.public-navbar .menu-label[data-v-ff4f83f6]{font-size:12px;font-style:normal;font-weight:500;line-height:16px;margin-bottom:30px;margin-left:30px}.public-navbar .menu-item-wrapper[data-v-ff4f83f6]{padding-left:.75rem;padding-right:.75rem;width:100%}.public-navbar .menu-item-wrapper .btn-link[data-v-ff4f83f6]{border-radius:12px;color:#fff;display:inline-block;font-size:14px;font-weight:600;height:42px;line-height:20px;margin-bottom:10px;padding:10px 20px;text-align:left;text-decoration:none;width:94%}.public-navbar .menu-item-wrapper .btn-link img[data-v-ff4f83f6]{margin-right:5px;max-width:22px;position:relative;top:-2px;vertical-align:middle;width:22px}.public-navbar .menu-item-wrapper .btn-link.router-link-active[data-v-ff4f83f6]{color:#fff}.public-navbar hr[data-v-ff4f83f6]{background:#e4e4e4;border:0;height:1px;margin:70px auto;position:relative;width:65%}.soon-wrapper[data-v-ff4f83f6]{left:30px;position:relative;top:-6px}.soon-wrapper .btn-link[data-v-ff4f83f6]{color:#808191}.soon[data-v-ff4f83f6]{background:#22b07d;border-radius:8px;color:#fff;font-family:Inter;font-size:7px;font-style:normal;font-weight:600;line-height:18px;padding:3px 8px;text-align:center}.btn-check:focus+.btn[data-v-ff4f83f6],.btn[data-v-ff4f83f6]:focus{box-shadow:unset!important}", "", {
                version: 3,
                sources: ["webpack://./resources/js/Components/NavbarSimple.vue"],
                names: [],
                mappings: "AACA,gCACI,kCAAA,CAEA,2CAAA,CAEA,UAAA,CACA,6BAFJ,CAII,0CAMI,qBAAA,CALA,eAAA,CAGA,SAAR,CAKI,4CAGI,cAAA,CAFA,iBAAA,CACA,eAAA,CAEA,gBAAA,CACA,kBAAA,CACA,gBAHR,CAMI,mDAEI,mBAAA,CACA,oBAAA,CAFA,UAFR,CAMQ,6DASI,kBAAA,CANA,UAAA,CAFA,oBAAA,CAMA,cAAA,CADA,eAAA,CAKA,WAAA,CAHA,gBAAA,CAHA,kBAAA,CADA,iBAAA,CAMA,eAAA,CARA,oBAAA,CAUA,SAJZ,CAMY,iEAGI,gBAAA,CACA,cAAA,CAHA,iBAAA,CACA,QAAA,CAIA,qBAAA,CADA,UAHhB,CAQQ,gFACI,UANZ,CAWI,mCAMI,kBAAA,CALA,QAAA,CACA,UAAA,CAGA,gBAAA,CADA,iBAAA,CADA,SANR,CAaA,+BAEI,SAAA,CADA,iBAAA,CAEA,QAVJ,CAYI,yCACI,aAVR,CAcA,uBACI,kBAAA,CACA,iBAAA,CAOA,UAAA,CANA,iBAAA,CAGA,aAAA,CAFA,iBAAA,CACA,eAAA,CAEA,gBAAA,CAGA,eAAA,CAFA,iBATJ,CAcA,mEACI,0BAXJ",
                sourcesContent: ["\n.public-navbar {\n    border-right: 1px solid rgba(0, 0, 0, 0.0001);\n\n    box-shadow: inset -1px 0px 0px rgba(228, 228, 228, 0.1);\n\n    color: white;\n    min-height: calc(100vh - 20px);\n\n    .img-logo {\n        max-width: 210px;\n        margin-left: auto;\n        margin-right: auto;\n        padding: 0;\n        margin-top: 50px;\n        margin-bottom: 45px;\n    }\n\n    .menu-label {\n        font-style: normal;\n        font-weight: 500;\n        font-size: 12px;\n        line-height: 16px;\n        margin-bottom: 30px;\n        margin-left: 30px;\n    }\n\n    .menu-item-wrapper {\n        width: 100%;\n        padding-left: 0.75rem;\n        padding-right: 0.75rem;\n\n        .btn-link {\n            display: inline-block;\n            text-decoration: none;\n            color: white;\n            padding: 10px 20px;\n            margin-bottom: 10px;\n            font-weight: 600;\n            font-size: 14px;\n            line-height: 20px;\n            border-radius: 12px;\n            text-align: left;\n            height: 42px;\n            width: 94%;\n\n            img {\n                position: relative;\n                top: -2px;\n                margin-right: 5px;\n                max-width: 22px;\n                width: 22px;\n                vertical-align: middle;\n            }\n        }\n\n        .btn-link.router-link-active {\n            color: #FFFFFF;\n        }\n\n    }\n\n    hr {\n        border: 0;\n        height: 1px;\n        width: 65%;\n        position: relative;\n        margin: 70px auto;\n        background: #E4E4E4;\n    }\n}\n\n.soon-wrapper {\n    position: relative;\n    left: 30px;\n    top: -6px;\n\n    .btn-link {\n        color: #808191;\n    }\n}\n\n.soon {\n    background: #22B07D;\n    border-radius: 8px;\n    font-family: Inter;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 7px;\n    line-height: 18px;\n    text-align: center;\n    color: #FFFFFF;\n    padding: 3px 8px;\n}\n\n.btn-check:focus+.btn, .btn:focus {\n    box-shadow: unset !important;\n}\n\n"],
                sourceRoot: ""
            }]);
            const s = o
        },
        2471: (t, e, i) => {
            "use strict";
            var n = i(3379),
                r = i.n(n),
                a = i(7506),
                o = {
                    insert: "head",
                    singleton: !1
                };
            r()(a.Z, o), a.Z.locals
        },
        9464: (t, e, i) => {
            "use strict";
            var n = i(3379),
                r = i.n(n),
                a = i(914),
                o = {
                    insert: "head",
                    singleton: !1
                };
            r()(a.Z, o), a.Z.locals
        },
        7652: (t, e, i) => {
            "use strict";
            var n, r = i(3129),
                a = (n = r) && n.__esModule ? n : {
                    default: n
                };
            var o = "undefined" == typeof window ? [String, Array] : [String, Array, Element, NodeList];
            e.Z = {
                render: function(t) {
                    var e = this.crossorigin || void 0;
                    return t("div", {
                        style: this.containerStyle
                    }, [t("img", {
                        ref: "img",
                        attrs: {
                            src: this.src,
                            alt: this.alt || "image",
                            style: "max-width: 100%",
                            crossorigin: e
                        },
                        on: this.$listeners,
                        style: this.imgStyle
                    })])
                },
                props: {
                    containerStyle: Object,
                    src: {
                        type: String,
                        default: ""
                    },
                    alt: String,
                    imgStyle: Object,
                    viewMode: Number,
                    dragMode: String,
                    initialAspectRatio: Number,
                    aspectRatio: Number,
                    data: Object,
                    preview: o,
                    responsive: {
                        type: Boolean,
                        default: !0
                    },
                    restore: {
                        type: Boolean,
                        default: !0
                    },
                    checkCrossOrigin: {
                        type: Boolean,
                        default: !0
                    },
                    checkOrientation: {
                        type: Boolean,
                        default: !0
                    },
                    crossorigin: {
                        type: String
                    },
                    modal: {
                        type: Boolean,
                        default: !0
                    },
                    guides: {
                        type: Boolean,
                        default: !0
                    },
                    center: {
                        type: Boolean,
                        default: !0
                    },
                    highlight: {
                        type: Boolean,
                        default: !0
                    },
                    background: {
                        type: Boolean,
                        default: !0
                    },
                    autoCrop: {
                        type: Boolean,
                        default: !0
                    },
                    autoCropArea: Number,
                    movable: {
                        type: Boolean,
                        default: !0
                    },
                    rotatable: {
                        type: Boolean,
                        default: !0
                    },
                    scalable: {
                        type: Boolean,
                        default: !0
                    },
                    zoomable: {
                        type: Boolean,
                        default: !0
                    },
                    zoomOnTouch: {
                        type: Boolean,
                        default: !0
                    },
                    zoomOnWheel: {
                        type: Boolean,
                        default: !0
                    },
                    wheelZoomRatio: Number,
                    cropBoxMovable: {
                        type: Boolean,
                        default: !0
                    },
                    cropBoxResizable: {
                        type: Boolean,
                        default: !0
                    },
                    toggleDragModeOnDblclick: {
                        type: Boolean,
                        default: !0
                    },
                    minCanvasWidth: Number,
                    minCanvasHeight: Number,
                    minCropBoxWidth: Number,
                    minCropBoxHeight: Number,
                    minContainerWidth: Number,
                    minContainerHeight: Number,
                    ready: Function,
                    cropstart: Function,
                    cropmove: Function,
                    cropend: Function,
                    crop: Function,
                    zoom: Function
                },
                mounted: function() {
                    var t = this.$options.props,
                        e = (t.containerStyle, t.src, t.alt, t.imgStyle, function(t, e) {
                            var i = {};
                            for (var n in t) e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
                            return i
                        }(t, ["containerStyle", "src", "alt", "imgStyle"])),
                        i = {};
                    for (var n in e) void 0 !== this[n] && (i[n] = this[n]);
                    this.cropper = new a.default(this.$refs.img, i)
                },
                methods: {
                    reset: function() {
                        return this.cropper.reset()
                    },
                    clear: function() {
                        return this.cropper.clear()
                    },
                    initCrop: function() {
                        return this.cropper.crop()
                    },
                    replace: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return this.cropper.replace(t, e)
                    },
                    enable: function() {
                        return this.cropper.enable()
                    },
                    disable: function() {
                        return this.cropper.disable()
                    },
                    destroy: function() {
                        return this.cropper.destroy()
                    },
                    move: function(t, e) {
                        return this.cropper.move(t, e)
                    },
                    moveTo: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                        return this.cropper.moveTo(t, e)
                    },
                    relativeZoom: function(t, e) {
                        return this.cropper.zoom(t, e)
                    },
                    zoomTo: function(t, e) {
                        return this.cropper.zoomTo(t, e)
                    },
                    rotate: function(t) {
                        return this.cropper.rotate(t)
                    },
                    rotateTo: function(t) {
                        return this.cropper.rotateTo(t)
                    },
                    scaleX: function(t) {
                        return this.cropper.scaleX(t)
                    },
                    scaleY: function(t) {
                        return this.cropper.scaleY(t)
                    },
                    scale: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                        return this.cropper.scale(t, e)
                    },
                    getData: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.cropper.getData(t)
                    },
                    setData: function(t) {
                        return this.cropper.setData(t)
                    },
                    getContainerData: function() {
                        return this.cropper.getContainerData()
                    },
                    getImageData: function() {
                        return this.cropper.getImageData()
                    },
                    getCanvasData: function() {
                        return this.cropper.getCanvasData()
                    },
                    setCanvasData: function(t) {
                        return this.cropper.setCanvasData(t)
                    },
                    getCropBoxData: function() {
                        return this.cropper.getCropBoxData()
                    },
                    setCropBoxData: function(t) {
                        return this.cropper.setCropBoxData(t)
                    },
                    getCroppedCanvas: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.cropper.getCroppedCanvas(t)
                    },
                    setAspectRatio: function(t) {
                        return this.cropper.setAspectRatio(t)
                    },
                    setDragMode: function(t) {
                        return this.cropper.setDragMode(t)
                    }
                }
            }
        },
        6139: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(8729),
                r = i(9404);
            const a = (0, i(1900).Z)(r.Z, n.s, n.x, !1, null, null, null).exports
        },
        4168: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(5619),
                r = i(1083);
            const a = (0, i(1900).Z)(r.Z, n.s, n.x, !1, null, null, null).exports
        },
        723: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(8628),
                r = i(239);
            const a = (0, i(1900).Z)(r.Z, n.s, n.x, !1, null, null, null).exports
        },
        5562: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(161),
                r = i(8284);
            const a = (0, i(1900).Z)(r.Z, n.s, n.x, !1, null, null, null).exports
        },
        8770: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(7194),
                r = i(8053);
            const a = (0, i(1900).Z)(r.Z, n.s, n.x, !1, null, null, null).exports
        },
        9329: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(9120),
                r = i(8600);
            const a = (0, i(1900).Z)(r.Z, n.s, n.x, !1, null, null, null).exports
        },
        406: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(3245),
                r = i(5622);
            const a = (0, i(1900).Z)(r.Z, n.s, n.x, !1, null, null, null).exports
        },
        1844: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => u
            });
            var n = i(3489),
                r = i(5893),
                a = i(7024),
                o = i(1765),
                s = i(6474),
                l = i(7894),
                c = i(5444);
            const d = {
                name: "SetUsernameModal",
                props: {
                    open: {
                        required: !0,
                        default: !1
                    },
                    zendesk: {
                        required: !1,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isSaving: !1,
                        username: null,
                        usernameRules: [function(t) {
                            return !!t || "Username is required"
                        }, function(t) {
                            return t && t.length >= 4 || "Minimum 4 characters"
                        }, function(t) {
                            return t && t.length <= 250 || "Maximum 250 characters"
                        }]
                    }
                },
                computed: {
                    showModal: {
                        get: function() {
                            return this.open
                        },
                        set: function(t) {
                            this.$emit("change", t)
                        }
                    }
                },
                methods: {
                    saveUsername: function() {
                        var t = this;
                        this.$refs.usernameField.validate(!0) && (this.isSaving = !0, axios.post(route("api.user.save-username", {
                            user: this.$root.appStore.user
                        }), {
                            username: this.username
                        }).then((function(e) {
                            t.zendesk ? window.location = route("zendesk-sso") : (t.$root.appStore.user.name = t.username, t.username = null, t.isSaving = !1, t.showModal = !1, t.$root.openCustomVoice = !0, t.$root.$emit("show-success-message", "Username successfully changed"))
                        })).catch((function(e) {
                            _.get(e, "response.data.errors.username") && t.$root.$emit("show-warning-message", e.response.data.errors.username[0]), t.isSaving = !1
                        })))
                    }
                }
            };
            const u = (0, i(1900).Z)(d, (function() {
                var t = this,
                    e = t._self._c;
                return e(o.Z, {
                    attrs: {
                        "content-class": "set-username-modal",
                        "hide-overlay": !1,
                        width: "768",
                        persistent: t.zendesk,
                        "overlay-opacity": "1"
                    },
                    model: {
                        value: t.showModal,
                        callback: function(e) {
                            t.showModal = e
                        },
                        expression: "showModal"
                    }
                }, [e(r.Z, {
                    attrs: {
                        dark: ""
                    }
                }, [
                    [e(a.Z, [e(s.Z, {
                        staticClass: "my-5",
                        attrs: {
                            eager: "",
                            contain: "",
                            "max-height": "105px",
                            src: "/img/icons/id-card.svg"
                        }
                    }), t._v(" "), e("h3", [t._v("\n                    Set Username\n                ")]), t._v(" "), e("h4", [t._v("\n                    Username will be publicly visible\n                ")]), t._v(" "), e(l.Z, {
                        staticClass: "mt-5"
                    }, [e(a.Z, {
                        staticClass: "ml-auto py-0",
                        attrs: {
                            cols: "11"
                        }
                    }, [e("span", {
                        staticClass: "username-label"
                    }, [t._v("Username")])]), t._v(" "), e(l.Z, {
                        staticClass: "justify-center ma-0"
                    }, [e(a.Z, {
                        attrs: {
                            cols: "11",
                            md: "6"
                        }
                    }, [e(c.Z, {
                        ref: "usernameField",
                        attrs: {
                            color: "grey",
                            solo: "",
                            placeholder: "Type here your username",
                            rules: t.usernameRules
                        },
                        model: {
                            value: t.username,
                            callback: function(e) {
                                t.username = e
                            },
                            expression: "username"
                        }
                    })], 1), t._v(" "), e(a.Z, {
                        attrs: {
                            cols: "11",
                            md: "4"
                        }
                    }, [e(n.Z, {
                        staticClass: "btn-purple",
                        attrs: {
                            disabled: t.isSaving,
                            loading: t.isSaving
                        },
                        on: {
                            click: t.saveUsername
                        }
                    }, [t._v("\n                                Next\n                            ")])], 1)], 1)], 1)], 1)]
                ], 2)], 1)
            }), [], !1, null, null, null).exports
        },
        70: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => p
            });
            var n = i(3489),
                r = i(7024),
                a = i(2545),
                o = i(3347),
                s = i(3560),
                l = i(6925),
                c = i(1986),
                d = i(7894);
            const u = {
                name: "TopNavbar",
                props: {
                    user: {
                        required: !1,
                        default: null
                    }
                }
            };
            const p = (0, i(1900).Z)(u, (function() {
                var t = this,
                    e = t._self._c;
                return e(r.Z, {
                    staticClass: "top-navbar-wrapper",
                    attrs: {
                        cols: "12",
                        id: "top-navbar-wrapper"
                    }
                }, [e(d.Z, [e(r.Z, {
                    staticClass: "d-none d-sm-flex col-7 col-md-9",
                    attrs: {
                        cols: "7"
                    }
                }, [t._t("nav-content")], 2), t._v(" "), t.user ? e(r.Z, {
                    staticClass: "text-right mt-5 mt-md-0",
                    attrs: {
                        cols: "12",
                        md: "3",
                        sm: "5"
                    }
                }, [e("div", {
                    staticClass: "user-icon-wrapper"
                }, [e("span", {
                    staticClass: "avatar avatar-128 rounded-circle"
                }, [t._v(t._s(t.user.email.charAt(0)))])]), t._v(" "), e(c.Z, {
                    attrs: {
                        "offset-y": "",
                        "min-width": "360px",
                        "content-class": "v-menu-top-navbar-wrapper"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(i) {
                            var r = i.on,
                                a = i.attrs;
                            return [e(n.Z, t._g(t._b({
                                staticClass: "mx-1 top-navbar-menu-button",
                                attrs: {
                                    color: "transparent",
                                    dark: "",
                                    width: "36px",
                                    "min-width": "36px",
                                    ripple: !1,
                                    elevation: "0"
                                }
                            }, "v-btn", a, !1), r))]
                        }
                    }], null, !1, 4175874647)
                }, [t._v(" "), e(a.Z, {
                    attrs: {
                        color: "rgba(13, 12, 12, 0.98)"
                    }
                }, [e(o.Z, [e(s.Z, [e("div", {
                    staticClass: "user-icon-wrapper"
                }, [e("span", {
                    staticClass: "avatar avatar-128 rounded-circle"
                }, [t._v(t._s(t.user.email.charAt(0)))])])]), t._v(" "), e(l.V9, [e("div", {
                    staticClass: "dropdown-item"
                }, [e("div", {
                    staticClass: "user-details-wrapper"
                }, [t._v("\n                                    " + t._s(t.user.email) + "\n                                ")])])])], 1), t._v(" "), e(o.Z, [e("span", {
                    staticClass: "menu-item-wrapper mt-3"
                }, [e("router-link", {
                    staticClass: "dropdown-item",
                    attrs: {
                        to: {
                            name: "voice-universe"
                        }
                    }
                }, [e("img", {
                    staticClass: "img img-fluid",
                    attrs: {
                        src: "/img/voice-universe.svg",
                        alt: "voice universe"
                    }
                }), t._v(" Voice\n                                Universe\n                            ")])], 1)]), t._v(" "), t.user.affiliate ? e(o.Z, [e("span", {
                    staticClass: "menu-item-wrapper mt-3"
                }, [e("router-link", {
                    staticClass: "dropdown-item",
                    attrs: {
                        to: {
                            name: "affiliate-panel"
                        }
                    }
                }, [e("img", {
                    staticClass: "img img-fluid pl-1",
                    attrs: {
                        src: "/img/voice-universe-affiliate.svg",
                        alt: "affiliate panel"
                    }
                }), t._v(" Affiliate Panel\n                            ")])], 1)]) : t._e(), t._v(" "), e(o.Z, [e("span", {
                    staticClass: "menu-item-wrapper mt-3"
                }, [e("router-link", {
                    staticClass: "dropdown-item",
                    attrs: {
                        to: {
                            name: "account-settings"
                        }
                    }
                }, [e("img", {
                    staticClass: "img img-fluid",
                    attrs: {
                        src: "/img/user-icon.svg",
                        alt: "Account Settings"
                    }
                }), t._v(" Account\n                                Settings\n                            ")])], 1)]), t._v(" "), e(o.Z, [e("span", {
                    staticClass: "menu-item-wrapper mt-3"
                }, [e("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                        href: "/logout"
                    }
                }, [e("img", {
                    staticClass: "img img-fluid pl-1",
                    attrs: {
                        src: "/img/logout.svg",
                        alt: "Log Out"
                    }
                }), t._v(" Log Out\n                            ")])])])], 1)], 1)], 1) : t._e()], 1)], 1)
            }), [], !1, null, null, null).exports
        },
        4416: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => y
            });
            var n = i(7024),
                r = i(6530),
                a = i(7894),
                o = i(406),
                s = i(3489);

            function l(t) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, l(t)
            }

            function c(t, e, i) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== l(t) || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" !== l(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === l(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const d = {
                name: "Navbar",
                methods: {
                    downloadApp: function() {
                        this.$root.appStore.trackClick("voice_universe_download_app"), window.open(route("download-installer"))
                    },
                    openApp: function() {
                        this.$root.appStore.trackClick("voice_universe_open_app"), window.open(route("open-app"))
                    }
                }
            };
            var u = i(3379),
                p = i.n(u),
                h = i(6649),
                f = {
                    insert: "head",
                    singleton: !1
                };
            p()(h.Z, f);
            h.Z.locals;
            var m = i(1900);
            const g = (0, m.Z)(d, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "public-navbar"
                }, [t.$root.hideLogo ? t._e() : e(a.Z, {
                    staticClass: "pl-5"
                }, [e("a", {
                    attrs: {
                        href: "/"
                    }
                }, [e("img", {
                    staticClass: "img img-fluid img-logo",
                    attrs: {
                        src: "/img/logo.svg",
                        alt: "voice.ai"
                    }
                })])]), t._v(" "), e(a.Z, [e("div", {
                    staticClass: "menu-item-wrapper",
                    class: {
                        "mt-5": t.$root.hideLogo
                    }
                }, [e("router-link", {
                    attrs: {
                        to: {
                            name: "voice-universe"
                        },
                        custom: ""
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function(i) {
                            var n = i.href,
                                r = (i.route, i.navigate),
                                a = (i.isActive, i.isExactActive);
                            return [e("a", {
                                staticClass: "btn btn-link",
                                class: {
                                    "router-link-active": a
                                },
                                attrs: {
                                    href: n
                                },
                                on: {
                                    click: r
                                }
                            }, [e("img", {
                                staticClass: "img img-fluid",
                                attrs: {
                                    src: "/img/voice-universe.svg",
                                    alt: "voice universe"
                                }
                            }), t._v("\n                    Voice Universe\n                ")])]
                        }
                    }])
                }), t._v(" "), t.$root.appStore.user.affiliate ? e("router-link", {
                    attrs: {
                        to: {
                            name: "affiliate-panel"
                        },
                        custom: ""
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function(i) {
                            var n = i.href,
                                r = (i.route, i.navigate),
                                a = i.isActive,
                                o = i.isExactActive;
                            return [e("a", {
                                staticClass: "btn btn-link",
                                class: c({
                                    "router-link-active": o
                                }, "router-link-active", a),
                                attrs: {
                                    href: n
                                },
                                on: {
                                    click: r
                                }
                            }, [e("img", {
                                staticClass: "img img-fluid",
                                attrs: {
                                    src: "/img/voice-universe-affiliate.svg",
                                    alt: "affiliate panel"
                                }
                            }), t._v("\n                    Affiliate Panel\n                ")])]
                        }
                    }], null, !1, 3439356817)
                }) : t._e(), t._v(" "), e("router-link", {
                    attrs: {
                        to: {
                            name: "account-settings"
                        },
                        custom: ""
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function(i) {
                            var n = i.href,
                                r = (i.route, i.navigate),
                                a = i.isActive,
                                o = i.isExactActive;
                            return [e("a", {
                                staticClass: "btn btn-link",
                                class: {
                                    "router-link-exact-active": o, "router-link-active": a
                                },
                                attrs: {
                                    href: n
                                },
                                on: {
                                    click: r
                                }
                            }, [e("img", {
                                staticClass: "img img-fluid",
                                attrs: {
                                    src: "/img/user-icon.svg",
                                    alt: "Account Settings"
                                }
                            }), t._v("\n                    Account Settings\n                ")])]
                        }
                    }])
                })], 1)]), t._v(" "), e("hr"), t._v(" "), e(a.Z, [e("div", {
                    staticClass: "menu-item-wrapper float-bottom bottom-menu-item"
                }, [e("a", {
                    staticClass: "btn btn-link",
                    attrs: {
                        href: t.route("logout")
                    }
                }, [e("img", {
                    staticClass: "img img-fluid",
                    attrs: {
                        src: "/img/logout.svg",
                        alt: "log out"
                    }
                }), t._v(" Log Out\n          ")])])]), t._v(" "), t.$root.isWindows ? e("div", {
                    staticClass: "menu-cta items-center"
                }, [t._m(0), t._v(" "), e(s.Z, {
                    staticClass: "btn btn-purple",
                    on: {
                        click: t.downloadApp
                    }
                }, [t._v("Download app")]), t._v(" "), e("p", {
                    staticClass: "mt-2 mb-0"
                }, [e("small", [t._v("\n              Already downloaded?\n              "), e("a", {
                    on: {
                        click: t.openApp
                    }
                }, [t._v("Open app")])])])], 1) : t._e()], 1)
            }), [function() {
                var t = this,
                    e = t._self._c;
                return e("p", [t._v("Get the app to use Real-time "), e("br"), t._v(" Voice Changer")])
            }], !1, null, "ff4f83f6", null).exports;
            var v = i(1844),
                b = i(6139),
                x = i(70);
            const w = {
                name: "VoiceUniverseLayout",
                components: {
                    GetTokenModal: o.Z,
                    NavbarSimple: g,
                    SetUsernameModal: v.default,
                    TokenCounter: b.Z,
                    TopNavbar: x.default
                }
            };
            const y = (0, m.Z)(w, (function() {
                var t = this,
                    e = t._self._c;
                return e(r.Z, {
                    staticClass: "py-0",
                    attrs: {
                        fluid: ""
                    }
                }, [e(a.Z, {
                    staticClass: "d-flex d-sm-none"
                }, [t.$root.hideLogo ? t._e() : e(n.Z, {
                    staticClass: "align-self-center"
                }, [e("a", {
                    attrs: {
                        href: "/"
                    }
                }, [e("img", {
                    staticClass: "img img-fluid img-logo",
                    attrs: {
                        src: "/img/logo.svg",
                        alt: "voice.ai"
                    }
                })])]), t._v(" "), e(n.Z, [e("top-navbar", {
                    attrs: {
                        user: t.$root.user
                    }
                })], 1)], 1), t._v(" "), e(a.Z, {
                    staticClass: "mt-0"
                }, [e(n.Z, {
                    staticClass: "navbar-outer-wrapper d-none d-sm-block",
                    attrs: {
                        cols: "3"
                    }
                }, [e("navbar-simple")], 1), t._v(" "), e(n.Z, {
                    staticClass: "content-outer-wrapper"
                }, [e("div", {
                    staticClass: "mt-3"
                }, [e(a.Z, [e(n.Z, {
                    staticClass: "text-center text-sm-left",
                    attrs: {
                        cols: "12",
                        sm: "5"
                    }
                }, [e("h3", {
                    staticClass: "decorated mb-0 mb-sm-6"
                }, [t._v("Voice Universe")])]), t._v(" "), e(n.Z, {
                    staticClass: "text-center text-sm-right mb-5 mb-sm-0"
                }, [t.$root.hideLogo ? t._e() : e("token-counter", {
                    staticClass: "mr-md-5",
                    attrs: {
                        "allow-training-modal": !1
                    }
                }), t._v(" "), t.$root.hideLogo ? t._e() : e("get-token-modal", {
                    attrs: {
                        "show-earn-button": !1
                    }
                })], 1)], 1), t._v(" "), e("router-view"), t._v(" "), e("alerts-modal")], 1)])], 1)], 1)
            }), [], !1, null, null, null).exports
        },
        445: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => h
            });
            var n = i(3489),
                r = i(7024),
                a = i(2448),
                o = i(7894),
                s = i(9329),
                l = i(1844),
                c = i(5562);

            function d(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return u(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            const p = {
                name: "VoiceUniverse",
                components: {
                    CustomVoiceModal: s.Z,
                    SetUsernameModal: l.default,
                    HiddenAudioPlayer: c.Z
                },
                data: function() {
                    return {
                        activeTab: "voices",
                        openUsernameModal: !1,
                        isHovering: !1,
                        selectedCustomVoice: null,
                        myVoices: [],
                        favoriteVoices: [],
                        voices: [],
                        isLoading: !1,
                        isLoadingMore: !1,
                        voicesCancelToken: null,
                        favoritesCancelToken: null,
                        myVoicesCancelToken: null,
                        hasMoreVoices: !0,
                        getVoicesUrl: route("api.voice.voice-universe")
                    }
                },
                mounted: function() {
                    var t = this;
                    void 0 !== window.CefSharp && (window.location = "/v1/beta"), this.$root.appStore.page = "Voice Universe", this.$root.$on("open-username-modal", (function(e) {
                        t.openUsernameModal = !0, t.$root.openCustomVoice = !1
                    })), this.$root.$on("delete-custom-voice", (function(e) {
                        t.myVoices = t.myVoices.filter((function(t) {
                            return t.uuid !== e.uuid
                        }))
                    })), this.$route.query.upload && (this.activeTab = "upload", this.openCustomVoiceModal()), this.getVoices().then((function() {
                        t.$root.$emit("loaded")
                    }))
                },
                watch: {
                    activeTab: function(t) {
                        "voices" === t ? this.getVoices() : "favorites" === t ? this.getFavoriteVoices() : "upload" === t && this.getMyCustomVoices()
                    }
                },
                methods: {
                    openCustomVoiceModal: function() {
                        this.$root.appStore.user.name ? (this.$root.openCustomVoice = !0, this.selectedCustomVoice = null) : this.openUsernameModal = !0
                    },
                    handleScroll: _.debounce((function(t, e, i) {
                        !this.isLoadingMore && t.process >= .95 && this.hasMoreVoices && this.getVoices(!0)
                    }), 300),
                    cancelRequests: function() {
                        this.myVoicesCancelToken && this.myVoicesCancelToken.cancel(), this.voicesCancelToken && this.voicesCancelToken.cancel(), this.favoritesCancelToken && this.favoritesCancelToken.cancel()
                    },
                    getMyCustomVoices: function() {
                        var t = this;
                        return this.isLoading = !0, this.myVoices = [], this.cancelRequests(), this.myVoicesCancelToken = axios.CancelToken.source(), axios.get(route("api.voice.get-my-voices"), {
                            cancelToken: this.myVoicesCancelToken.token
                        }).then((function(e) {
                            e.data && (t.myVoices = e.data.data), t.isLoading = !1
                        })).catch((function(e) {
                            axios.isCancel(e) || (window.bugsnag.notify(e), t.isLoading = !1)
                        }))
                    },
                    getVoices: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.isLoadingMore = !0, e || (this.voices = [], this.getVoicesUrl = route("api.voice.voice-universe")), this.cancelRequests(), this.voicesCancelToken = axios.CancelToken.source(), axios.get(this.getVoicesUrl, {
                            cancelToken: this.voicesCancelToken.token
                        }).then((function(e) {
                            var i;
                            e.data && ((i = t.voices).push.apply(i, d(e.data.data)), t.getVoicesUrl = e.data.links.next, t.hasMoreVoices = !!e.data.links.next);
                            t.isLoadingMore = !1
                        })).catch((function(e) {
                            axios.isCancel(e) || (window.bugsnag.notify(e), t.isLoadingMore = !1)
                        }))
                    },
                    getFavoriteVoices: function() {
                        var t = this;
                        return this.isLoading = !0, this.favoriteVoices = [], this.cancelRequests(), this.favoritesCancelToken = axios.CancelToken.source(), axios.get(route("api.voice.get-favorites"), {
                            cancelToken: this.favoritesCancelToken.token
                        }).then((function(e) {
                            e.data && (t.favoriteVoices = e.data.data), t.isLoading = !1
                        })).catch((function(e) {
                            axios.isCancel(e) || (window.bugsnag.notify(e), t.isLoading = !1)
                        }))
                    },
                    updateCustomVoice: function(t) {
                        var e = this.myVoices.findIndex((function(e) {
                            return e.uuid === t.uuid
                        }));
                        this.$set(this.myVoices, e, t)
                    }
                }
            };
            const h = (0, i(1900).Z)(p, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "voice-universe-wrapper"
                }, [e(o.Z, [e(r.Z, {
                    staticClass: "ml-sm-3",
                    attrs: {
                        cols: "12"
                    }
                }, [e("button", {
                    staticClass: "btn btn-purple",
                    class: {
                        active: "voices" === t.activeTab
                    },
                    on: {
                        click: function(e) {
                            t.activeTab = "voices"
                        }
                    }
                }, [t._v("\n                Voices\n            ")]), t._v(" "), e("button", {
                    staticClass: "btn btn-purple",
                    class: {
                        active: "favorites" === t.activeTab
                    },
                    on: {
                        click: function(e) {
                            t.activeTab = "favorites"
                        }
                    }
                }, [t._v("\n                Favorites\n            ")]), t._v(" "), e("button", {
                    staticClass: "btn btn-purple",
                    class: {
                        active: "upload" === t.activeTab
                    },
                    on: {
                        click: function(e) {
                            t.activeTab = "upload"
                        }
                    }
                }, [t._v("\n                Upload Voice\n            ")])])], 1), t._v(" "), e(o.Z, [e(r.Z, {
                    staticClass: "scrollable"
                }, [e("vue-scroll", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "voices" === t.activeTab,
                        expression: "activeTab === 'voices'"
                    }],
                    on: {
                        "handle-scroll": t.handleScroll
                    }
                }, [e(r.Z, {
                    staticClass: "py-0"
                }, t._l(t.voices, (function(t) {
                    return e("voice", {
                        key: t.uuid,
                        attrs: {
                            "disable-vote": !0,
                            "show-use": !0,
                            "show-vote": !0,
                            voice: t
                        }
                    })
                })), 1), t._v(" "), e(r.Z, {
                    staticClass: "text-center",
                    attrs: {
                        cols: "12"
                    }
                }, [e(a.Z, {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isLoadingMore,
                        expression: "isLoadingMore"
                    }],
                    staticClass: "mr-3",
                    attrs: {
                        size: 23,
                        width: 3,
                        color: "primary",
                        indeterminate: ""
                    }
                }), t._v(" "), e(n.Z, {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isLoadingMore && t.hasMoreVoices,
                        expression: "!isLoadingMore && hasMoreVoices"
                    }],
                    attrs: {
                        color: "primary",
                        "min-width": "150",
                        rounded: ""
                    },
                    on: {
                        click: function(e) {
                            return t.getVoices(!0)
                        }
                    }
                }, [t._v("\n                        Load More\n                    ")])], 1)], 1), t._v(" "), e("vue-scroll", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "favorites" === t.activeTab,
                        expression: "activeTab === 'favorites'"
                    }]
                }, [t.isLoading ? e(r.Z, {
                    staticClass: "text-center",
                    attrs: {
                        cols: "12"
                    }
                }, [e(a.Z, {
                    staticClass: "mr-3",
                    attrs: {
                        size: 23,
                        width: 3,
                        color: "primary",
                        indeterminate: ""
                    }
                })], 1) : t.favoriteVoices.length ? e("div", [e(r.Z, {
                    staticClass: "py-0"
                }, [e("h3", [t._v("Favorites")]), t._v(" "), t._l(t.favoriteVoices, (function(t) {
                    return e("voice", {
                        key: t.uuid,
                        attrs: {
                            "disable-vote": !0,
                            "show-use": !0,
                            "show-vote": !0,
                            voice: t
                        }
                    })
                }))], 2)], 1) : e("div", {
                    staticClass: "text-center"
                }, [t._v("\n                    Your favorite voices will appear here\n                ")])], 1), t._v(" "), e("vue-scroll", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "upload" === t.activeTab,
                        expression: "activeTab === 'upload'"
                    }]
                }, [t.isLoading ? e(r.Z, {
                    staticClass: "text-center",
                    attrs: {
                        cols: "12"
                    }
                }, [e(a.Z, {
                    staticClass: "mr-3",
                    attrs: {
                        size: 23,
                        width: 3,
                        color: "primary",
                        indeterminate: ""
                    }
                })], 1) : e(r.Z, {
                    staticClass: "py-0"
                }, [e("h3", [t._v("My Voices")]), t._v(" "), e("div", {
                    staticClass: "voice-component-wrapper add-wrapper-outer cursor-pointer",
                    class: {
                        hovering: t.isHovering
                    },
                    on: {
                        click: t.openCustomVoiceModal,
                        mouseout: function(e) {
                            t.isHovering = !1
                        },
                        mouseover: function(e) {
                            t.isHovering = !0
                        }
                    }
                }, [e("div", {
                    staticClass: "voice-wrapper text-center"
                }, [e("div", {
                    staticClass: "img-wrapper"
                }, [e("img", {
                    staticClass: "img img-fluid rounded-circle",
                    attrs: {
                        draggable: "false",
                        src: "/img/add-button.png"
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "use-wrapper add-wrapper"
                }, [e(o.Z, [e(r.Z, {
                    staticClass: "text-center"
                }, [e("h3", [t._v("Add yours")])])], 1)], 1)])]), t._v(" "), t._l(t.myVoices, (function(i) {
                    return e("voice", {
                        key: i.uuid + "custom",
                        attrs: {
                            "disable-vote": !0,
                            "is-custom": !0,
                            "show-use": !0,
                            voice: i
                        },
                        on: {
                            clicked: function(e) {
                                t.$root.openCustomVoice = !0, t.selectedCustomVoice = i
                            }
                        }
                    })
                }))], 2)], 1)], 1)], 1), t._v(" "), e("custom-voice-modal", {
                    attrs: {
                        open: t.$root.openCustomVoice,
                        "selected-voice": t.selectedCustomVoice,
                        user: t.$root.user,
                        "show-custom-model-upload": t.selectedCustomVoice && t.selectedCustomVoice.is_3rd_party,
                        "allow-model-update": !1
                    },
                    on: {
                        change: function(e) {
                            t.$root.openCustomVoice = e
                        },
                        "custom-voice": function(e) {
                            return t.myVoices.push(e)
                        },
                        "custom-voice-update": function(e) {
                            return t.updateCustomVoice(e)
                        }
                    }
                }), t._v(" "), e("hidden-audio-player"), t._v(" "), e("set-username-modal", {
                    attrs: {
                        open: t.openUsernameModal,
                        zendesk: !1
                    },
                    on: {
                        change: function(e) {
                            t.openUsernameModal = e
                        }
                    }
                })], 1)
            }), [], !1, null, null, null).exports
        },
        9228: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => p
            });
            var n = i(3489),
                r = i(7441),
                a = i(7024),
                o = i(3240),
                s = i(4786),
                l = i(7134),
                c = i(7894),
                d = i(5444);
            const u = {
                name: "VoiceUniverseAffiliatePanel",
                data: function() {
                    var t = this;
                    return {
                        affiliateTier: null,
                        affiliateCode: null,
                        affiliateUrl: null,
                        tosAccepted: !1,
                        tosOpened: !1,
                        maxLength: 200,
                        checkBoxRules: [function(e) {
                            return t.tosOpened || "Please read the TOS"
                        }, function(t) {
                            return !!t || "Please accept the TOS"
                        }],
                        nameRules: [function(t) {
                            return !!t || "Name is required"
                        }, function(t) {
                            return t && t.length >= 3 || "Minimum 3 characters"
                        }],
                        fieldRules: [function(e) {
                            return (e || "").length < t.maxLength || "Maximum " + t.maxLength + " characters"
                        }],
                        name: null,
                        youtube: null,
                        tiktok: null,
                        facebook: null,
                        snapchat: null,
                        twitch: null,
                        instagram: null,
                        reddit: null,
                        other: null,
                        bankName: null,
                        bankAccount: null,
                        paypalAccount: null,
                        isBusy: !1,
                        errorMessage: null
                    }
                },
                mounted: function() {
                    var t, e;
                    void 0 !== window.CefSharp && (window.location = "/v1/beta"), "affiliate-panel" !== this.$route.name || this.$root.appStore.user.affiliate || this.$router.push({
                        name: "voice-universe"
                    }), this.$root.appStore.page = "Voice Universe Affiliate", this.affiliateCode = null === (t = this.$root.appStore.user.affiliate) || void 0 === t ? void 0 : t.affiliate_code, this.affiliateUrl = null === (e = this.$root.appStore.user.affiliate) || void 0 === e ? void 0 : e.affiliate_url, this.$root.affiliate_tier && (this.affiliateTier = this.$root.affiliate_tiers[this.$root.affiliate_tier]), this.$root.$emit("loaded")
                },
                methods: {
                    openTos: function() {
                        this.tosOpened = !0;
                        var t = route("affiliate-tos");
                        this.$root.appStore.trackClick("affiliate_tos_clicked"), window.open(t, "_blank").focus()
                    },
                    copyUrl: function() {
                        navigator.clipboard.writeText(this.affiliateUrl), this.$root.$emit("show-success-message", "Link copied to clipboard!")
                    },
                    submitAffiliate: function() {
                        var t = this;
                        this.$refs.affiliateForm.validate() && (this.errorMessage = null, this.isBusy = !0, axios.post(route("api.store-affiliate-registration"), {
                            name: this.name,
                            youtube: this.youtube,
                            tiktok: this.tiktok,
                            facebook: this.facebook,
                            snapchat: this.snapchat,
                            twitch: this.twitch,
                            instagram: this.instagram,
                            reddit: this.reddit,
                            other: this.other,
                            bank_name: this.bankName,
                            bank_account: this.bankAccount,
                            paypal_account: this.paypalAccount,
                            affiliate_tier: this.affiliateTier
                        }).then((function(e) {
                            e.data.success && (t.$root.$emit("show-success-message", "Thank you for submitting your details!"), setTimeout((function() {
                                window.location = route("affiliate-panel")
                            }), 2e3))
                        })).catch((function(e) {
                            e && _.get(e.response.data.errors, "message") && (t.errorMessage = e.response.data.errors.message[0], t.$root.$emit("show-warning-message", t.errorMessage)), t.isBusy = !1
                        })))
                    }
                }
            };
            const p = (0, i(1900).Z)(u, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "mt-3"
                }, [t.affiliateCode ? e("div", {
                    staticClass: "voice-universe-wrapper"
                }, [e(c.Z, [e(a.Z, {
                    staticClass: "mb-5"
                }, [e("h2", {
                    staticClass: "headline font-weight-medium"
                }, [t._v("Affiliate Panel")])])], 1), t._v("\n\n        Affiliate link\n\n        "), e("div", {
                    staticClass: "link-copy-box px-3",
                    on: {
                        click: t.copyUrl
                    }
                }, [e(s.Z, {
                    attrs: {
                        size: "13",
                        color: "white"
                    }
                }, [t._v("\n                fas fa-link\n            ")]), t._v(" "), e("span", {
                    staticClass: "link"
                }, [t._v(t._s(t.affiliateUrl))])], 1)], 1) : t.$root.affiliate_tier ? e("div", {
                    staticClass: "voice-universe-wrapper"
                }, [e(c.Z, {
                    attrs: {
                        id: "affiliate-form-wrapper"
                    }
                }, [e(a.Z, {
                    attrs: {
                        cols: "12"
                    }
                }, [e("h2", [t._v(t._s(t.affiliateTier) + " Affiliate Registration")])]), t._v(" "), e(a.Z, {
                    staticClass: "scrollable",
                    attrs: {
                        cols: "12"
                    }
                }, [e("vue-scroll", [e(a.Z, {
                    staticClass: "affiliate-form-wrapper",
                    attrs: {
                        cols: "12"
                    }
                }, [e(o.Z, {
                    ref: "affiliateForm",
                    attrs: {
                        "lazy-validation": ""
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.submitAffiliate.apply(null, arguments)
                        }
                    }
                }, [e(c.Z, [e(a.Z, {
                    attrs: {
                        cols: "11",
                        md: "6"
                    }
                }, [e(l.Z, [t._v("Full Name*")]), t._v(" "), e(d.Z, {
                    staticClass: "data-hj-allow",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        dark: "",
                        placeholder: "Your name here",
                        rules: t.nameRules,
                        required: ""
                    },
                    model: {
                        value: t.name,
                        callback: function(e) {
                            t.name = e
                        },
                        expression: "name"
                    }
                })], 1)], 1), t._v(" "), e("h3", [t._v("Social Profiles")]), t._v(" "), e(c.Z, {
                    staticClass: "social-profile-fields mx-3 mb-3"
                }, [e(a.Z, {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [e(c.Z, [e(a.Z, {
                    staticClass: "mt-2 text-end",
                    attrs: {
                        cols: "4",
                        md: "3"
                    }
                }, [e(l.Z, [t._v("YouTube")])], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "8",
                        md: "9"
                    }
                }, [e(d.Z, {
                    staticClass: "data-hj-allow my-auto",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        maxlength: t.maxLength,
                        messages: t.fieldRules,
                        dark: "",
                        placeholder: "Your profile link here"
                    },
                    model: {
                        value: t.youtube,
                        callback: function(e) {
                            t.youtube = e
                        },
                        expression: "youtube"
                    }
                })], 1)], 1), t._v(" "), e(c.Z, [e(a.Z, {
                    staticClass: "mt-2 text-end",
                    attrs: {
                        cols: "4",
                        md: "3"
                    }
                }, [e(l.Z, [t._v("TikTok")])], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "8",
                        md: "9"
                    }
                }, [e(d.Z, {
                    staticClass: "data-hj-allow my-auto",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        maxlength: t.maxLength,
                        messages: t.fieldRules,
                        dark: "",
                        placeholder: "Your profile link here"
                    },
                    model: {
                        value: t.tiktok,
                        callback: function(e) {
                            t.tiktok = e
                        },
                        expression: "tiktok"
                    }
                })], 1)], 1), t._v(" "), e(c.Z, [e(a.Z, {
                    staticClass: "mt-2 text-end",
                    attrs: {
                        cols: "4",
                        md: "3"
                    }
                }, [e(l.Z, [t._v("Facebook")])], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "8",
                        md: "9"
                    }
                }, [e(d.Z, {
                    staticClass: "data-hj-allow my-auto",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        maxlength: t.maxLength,
                        messages: t.fieldRules,
                        dark: "",
                        placeholder: "Your profile link here"
                    },
                    model: {
                        value: t.facebook,
                        callback: function(e) {
                            t.facebook = e
                        },
                        expression: "facebook"
                    }
                })], 1)], 1), t._v(" "), e(c.Z, [e(a.Z, {
                    staticClass: "mt-2 text-end",
                    attrs: {
                        cols: "4",
                        md: "3"
                    }
                }, [e(l.Z, [t._v("Snapchat")])], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "8",
                        md: "9"
                    }
                }, [e(d.Z, {
                    staticClass: "data-hj-allow my-auto",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        maxlength: t.maxLength,
                        messages: t.fieldRules,
                        dark: "",
                        placeholder: "Your profile link here"
                    },
                    model: {
                        value: t.snapchat,
                        callback: function(e) {
                            t.snapchat = e
                        },
                        expression: "snapchat"
                    }
                })], 1)], 1)], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [e(c.Z, [e(a.Z, {
                    staticClass: "mt-2 text-end",
                    attrs: {
                        cols: "4",
                        md: "3"
                    }
                }, [e(l.Z, [t._v("Twitch")])], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "8",
                        md: "9"
                    }
                }, [e(d.Z, {
                    staticClass: "data-hj-allow my-auto",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        maxlength: t.maxLength,
                        messages: t.fieldRules,
                        dark: "",
                        placeholder: "Your profile link here"
                    },
                    model: {
                        value: t.twitch,
                        callback: function(e) {
                            t.twitch = e
                        },
                        expression: "twitch"
                    }
                })], 1)], 1), t._v(" "), e(c.Z, [e(a.Z, {
                    staticClass: "mt-2 text-end",
                    attrs: {
                        cols: "4",
                        md: "3"
                    }
                }, [e(l.Z, [t._v("Instagram")])], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "8",
                        md: "9"
                    }
                }, [e(d.Z, {
                    staticClass: "data-hj-allow my-auto",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        maxlength: t.maxLength,
                        messages: t.fieldRules,
                        dark: "",
                        placeholder: "Your profile link here"
                    },
                    model: {
                        value: t.instagram,
                        callback: function(e) {
                            t.instagram = e
                        },
                        expression: "instagram"
                    }
                })], 1)], 1), t._v(" "), e(c.Z, [e(a.Z, {
                    staticClass: "mt-2 text-end",
                    attrs: {
                        cols: "4",
                        md: "3"
                    }
                }, [e(l.Z, [t._v("Reddit")])], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "8",
                        md: "9"
                    }
                }, [e(d.Z, {
                    staticClass: "data-hj-allow my-auto",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        maxlength: t.maxLength,
                        messages: t.fieldRules,
                        dark: "",
                        placeholder: "Your profile link here"
                    },
                    model: {
                        value: t.reddit,
                        callback: function(e) {
                            t.reddit = e
                        },
                        expression: "reddit"
                    }
                })], 1)], 1), t._v(" "), e(c.Z, [e(a.Z, {
                    staticClass: "mt-2 text-end",
                    attrs: {
                        cols: "4",
                        md: "3"
                    }
                }, [e(l.Z, [t._v("Other")])], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "8",
                        md: "9"
                    }
                }, [e(d.Z, {
                    staticClass: "data-hj-allow my-auto",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        maxlength: t.maxLength,
                        messages: t.fieldRules,
                        dark: "",
                        placeholder: "Your profile link here"
                    },
                    model: {
                        value: t.other,
                        callback: function(e) {
                            t.other = e
                        },
                        expression: "other"
                    }
                })], 1)], 1)], 1)], 1), t._v(" "), e("h3", [t._v("Payout Method")]), t._v(" "), e(c.Z, {
                    staticClass: "mx-3 mb-3"
                }, [e(a.Z, {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [e(l.Z, [t._v("Bank Name")]), t._v(" "), e(d.Z, {
                    staticClass: "data-hj-allow",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        "hide-details": "",
                        dark: "",
                        placeholder: "Your bank name here"
                    },
                    model: {
                        value: t.bankName,
                        callback: function(e) {
                            t.bankName = e
                        },
                        expression: "bankName"
                    }
                })], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [e(l.Z, [t._v("Bank Account")]), t._v(" "), e(d.Z, {
                    staticClass: "data-hj-allow",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        "hide-details": "",
                        dark: "",
                        placeholder: "Your bank account here"
                    },
                    model: {
                        value: t.bankAccount,
                        callback: function(e) {
                            t.bankAccount = e
                        },
                        expression: "bankAccount"
                    }
                })], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [e(l.Z, [t._v("Paypal Account")]), t._v(" "), e(d.Z, {
                    staticClass: "data-hj-allow",
                    attrs: {
                        "data-hj-allow": "",
                        solo: "",
                        "hide-details": "",
                        dark: "",
                        placeholder: "Your paypal account here"
                    },
                    model: {
                        value: t.paypalAccount,
                        callback: function(e) {
                            t.paypalAccount = e
                        },
                        expression: "paypalAccount"
                    }
                })], 1)], 1), t._v(" "), e(c.Z, [e(a.Z, {
                    attrs: {
                        cols: "12"
                    }
                }, [e(r.Z, {
                    staticClass: "affiliate-checkbox",
                    attrs: {
                        rules: t.checkBoxRules,
                        readonly: !t.tosOpened,
                        error: !t.tosOpened,
                        "background-color": "black",
                        required: ""
                    },
                    scopedSlots: t._u([{
                        key: "label",
                        fn: function() {
                            return [t._v("\n                                            I’ve read and agreed to the\n                                            "), e("a", {
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), e.preventDefault(), t.openTos.apply(null, arguments)
                                    }
                                }
                            }, [t._v("\n                                                affiliate’s terms of service.\n                                            ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.tosAccepted,
                        callback: function(e) {
                            t.tosAccepted = e
                        },
                        expression: "tosAccepted"
                    }
                })], 1), t._v(" "), e(a.Z, {
                    attrs: {
                        cols: "12"
                    }
                }, [e(n.Z, {
                    attrs: {
                        type: "submit",
                        loading: t.isBusy,
                        depressed: ""
                    }
                }, [t._v("\n                                        Register\n                                    ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : t._e()])
            }), [], !1, null, null, null).exports
        },
        9404: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = i(1984).Z
        },
        1083: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = i(3499).Z
        },
        239: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = i(7152).Z
        },
        8284: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = i(4326).Z
        },
        8053: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = i(8693).Z
        },
        8600: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = i(8347).Z
        },
        5622: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = i(7903).Z
        },
        4785: (t, e, i) => {
            var n = i(4202);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.id, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, i(4402).Z)("766639d5", n, !0, {})
        },
        8729: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => a,
                x: () => o
            });
            var n = i(4786),
                r = i(6474),
                a = function() {
                    var t = this,
                        e = t._self._c;
                    return e("span", {
                        staticClass: "token-count",
                        on: {
                            click: t.showTokenModal
                        }
                    }, [e(r.Z, {
                        staticClass: "mx-1 my-auto",
                        attrs: {
                            draggable: "false",
                            width: "26",
                            height: "26",
                            alt: "tokens",
                            src: "/img/coinicon.svg"
                        }
                    }), t._v(" "), e("span", {
                        staticClass: "font-weight-bold",
                        class: {
                            "mr-3": t.showPlus
                        }
                    }, [t._v("\n        " + t._s(Number(t.displayNumber).toLocaleString("en-US")) + "\n    ")]), t._v(" "), t.showPlus ? e(n.Z, {
                        attrs: {
                            size: "16"
                        }
                    }, [t._v("\n        fa-plus\n    ")]) : t._e()], 1)
                },
                o = []
        },
        5619: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => s,
                x: () => l
            });
            var n = i(7024),
                r = i(3776),
                a = i(7894),
                o = i(6640),
                s = function() {
                    var t = this,
                        e = t._self._c;
                    return e(a.Z, [e(n.Z, {
                        staticClass: "player-button-wrapper py-0 my-auto",
                        attrs: {
                            cols: "1"
                        }
                    }, [e("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.playing,
                            expression: "!playing"
                        }],
                        staticClass: "fas fa-play cursor-pointer",
                        class: {
                            disabled: t.disabled, "fa-2x": t.large
                        },
                        attrs: {
                            "aria-label": "Play button for " + t.filename
                        },
                        on: {
                            click: t.toggleAudioPlaying
                        }
                    }), t._v(" "), e("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.playing,
                            expression: "playing"
                        }],
                        staticClass: "fas fa-pause cursor-pointer",
                        class: {
                            disabled: t.disabled, "fa-2x": t.large
                        },
                        attrs: {
                            "aria-label": "Pause button"
                        },
                        on: {
                            click: t.toggleAudioPlaying
                        }
                    })]), t._v(" "), e(n.Z, {
                        staticClass: "player-progress-wrapper my-auto py-0"
                    }, [t.showDetails ? e(a.Z, {
                        staticClass: "text-wrapper"
                    }, [e(o.Z, {
                        attrs: {
                            top: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function(i) {
                                var r = i.on,
                                    a = i.attrs;
                                return [t.filename ? e(n.Z, t._g(t._b({
                                    staticClass: "name text-truncate p-0",
                                    attrs: {
                                        cols: "8",
                                        md: "9"
                                    },
                                    domProps: {
                                        innerHTML: t._s(t.filename)
                                    }
                                }, "v-col", a, !1), r)) : t._e()]
                            }
                        }], null, !1, 2047749233)
                    }, [t._v(" "), e("span", {
                        domProps: {
                            innerHTML: t._s(t.filename)
                        }
                    })]), t._v(" "), e(n.Z, {
                        staticClass: "time text-right p-0"
                    }, [t._v("\n                " + t._s(t.currentTime) + "/" + t._s(t.length) + "\n            ")])], 1) : t._e(), t._v(" "), e(a.Z, {
                        staticClass: "mt-0"
                    }, [e(n.Z, {
                        staticClass: "p-0",
                        attrs: {
                            cols: "12"
                        }
                    }, [e(r.Z, {
                        staticClass: "d-inline-block",
                        staticStyle: {
                            "margin-top": "5px",
                            "margin-bottom": "15px"
                        },
                        attrs: {
                            disabled: !0,
                            height: "5",
                            rounded: ""
                        },
                        on: {
                            change: function(e) {
                                return t.seekAudio(t.percentage)
                            }
                        },
                        model: {
                            value: t.percentage,
                            callback: function(e) {
                                t.percentage = e
                            },
                            expression: "percentage"
                        }
                    })], 1)], 1)], 1)], 1)
                },
                l = []
        },
        8628: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => r,
                x: () => a
            });
            var n = i(3489),
                r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "filedrop-wrapper"
                    }, [e("div", {
                        ref: "dropzone",
                        staticClass: "dropzone",
                        class: {
                            disabled: t.processing
                        },
                        attrs: {
                            id: "dropzone-file-drop"
                        }
                    }, [e("div", {
                        staticClass: "cursor-pointer upload-file-wrapper",
                        on: {
                            click: t.clickedDropzone
                        }
                    }, [e("div", {
                        staticClass: "mb-8"
                    }, [e("p", {
                        staticClass: "mb-0"
                    }, [t._v(t._s(t.title))]), t._v(" "), e("span", [t._v(t._s(t.subtitle))])]), t._v(" "), e(n.Z, {
                        staticClass: "cta",
                        attrs: {
                            disabled: t.processing,
                            loading: t.processing
                        }
                    }, [e("i", {
                        staticClass: "fas fa-upload mr-2"
                    }), t._v(" Browse\n            ")])], 1)])])
                },
                a = []
        },
        161: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => n,
                x: () => r
            });
            var n = function() {
                    return (0, this._self._c)("audio", {
                        ref: "audio",
                        staticClass: "d-none",
                        attrs: {
                            autoplay: "false",
                            controls: "",
                            src: this.audioUrl,
                            id: "audio"
                        }
                    })
                },
                r = []
        },
        7194: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => o,
                x: () => s
            });
            var n = i(5893),
                r = i(7024),
                a = i(1765),
                o = function() {
                    var t = this,
                        e = t._self._c;
                    return e(a.Z, {
                        attrs: {
                            value: t.value,
                            "hide-overlay": !0,
                            "content-class": "train-confirm-modal",
                            width: "520"
                        },
                        on: {
                            input: function(e) {
                                t.$emit("input", !1), t.$emit("cancelled", !0)
                            }
                        }
                    }, [e(n.Z, {
                        attrs: {
                            dark: ""
                        }
                    }, [e(r.Z, {
                        staticClass: "text-center d-flex flex-column align-items-center"
                    }, [e("span", [t._v("\n                " + t._s(t.heading) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "d-flex justify-content-between mt-5"
                    }, [e("button", {
                        staticClass: "btn btn-secondary mr-5",
                        on: {
                            click: function(e) {
                                t.$emit("input", !1), t.$emit("cancelled", !0)
                            }
                        }
                    }, [t._v("\n                    " + t._s(t.noText) + "\n                ")]), t._v(" "), e("button", {
                        staticClass: "btn btn-purple",
                        on: {
                            click: function(e) {
                                t.$emit("input", !1), t.$emit("confirmed", !0)
                            }
                        }
                    }, [t._v("\n                    " + t._s(t.yesText) + "\n                ")])])])], 1)], 1)
                },
                s = []
        },
        9120: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => g,
                x: () => v
            });
            var n = i(3489),
                r = i(6407),
                a = i(5893),
                o = i(5255),
                s = i(7024),
                l = i(1765),
                c = i(4786),
                d = i(2448),
                u = i(3776),
                p = i(7894),
                h = i(1640),
                f = i(5444),
                m = i(6640),
                g = function() {
                    var t = this,
                        e = t._self._c;
                    return e(l.Z, {
                        attrs: {
                            "content-class": "custom-voice-modal",
                            "hide-overlay": !0,
                            width: "768",
                            persistent: "",
                            "no-click-animation": "",
                            eager: ""
                        },
                        model: {
                            value: t.showModal,
                            callback: function(e) {
                                t.showModal = e
                            },
                            expression: "showModal"
                        }
                    }, [e(a.Z, {
                        attrs: {
                            dark: ""
                        }
                    }, [e(s.Z, [e("span", {
                        staticClass: "modal-close-button cursor-pointer",
                        on: {
                            click: t.closeModal
                        }
                    }), t._v(" "), e(p.Z, {
                        staticClass: "info-wrapper mt-5"
                    }, [e(s.Z, {
                        staticClass: "my-auto text-center text-sm-left",
                        attrs: {
                            cols: "12",
                            sm: "6"
                        }
                    }, [e("h3", {
                        staticClass: "mb-0"
                    }, [t._v("Upload Custom Voice")])]), t._v(" "), e(s.Z, {
                        staticClass: "text-center text-sm-right",
                        attrs: {
                            cols: "12",
                            sm: "6"
                        }
                    }, [e(m.Z, {
                        attrs: {
                            disabled: t.progressPercent >= 100,
                            bottom: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function(i) {
                                var r = i.on,
                                    a = i.attrs;
                                return [e("span", t._g(t._b({
                                    staticClass: "d-inline-block"
                                }, "span", a, !1), r), [t._.get(t.customVoice, "id") && null == t._.get(t.customVoice, "build_queue_position", null) && !t.customVoice.is_3rd_party ? e(n.Z, {
                                    staticClass: "mr-sm-2",
                                    attrs: {
                                        rounded: "",
                                        color: "green",
                                        disabled: t.isBuildRequestProcessing || t.progress < 5 || null !== t._.get(t.customVoice, "build_queue_position", null)
                                    },
                                    on: {
                                        click: t.buildVoice
                                    }
                                }, [t.isBuildRequestProcessing ? [t._v(" Processing... ")] : [t._v(" Build ")]], 2) : t._e()], 1)]
                            }
                        }])
                    }, [t._v(" "), e("span", [t._v("You need 5 minutes of clean audio to start voice building.")])]), t._v(" "), null !== t._.get(t.customVoice, "build_queue_position", null) && 0 !== t._.get(t.customVoice, "build_queue_position", null) ? e(n.Z, {
                        staticClass: "mr-sm-2",
                        attrs: {
                            color: "red",
                            rounded: ""
                        },
                        on: {
                            click: function(e) {
                                t.showCancelBuildConfirmation = !0
                            }
                        }
                    }, [e("span", [t._v(" Cancel build ")])]) : t._e(), t._v(" "), e(n.Z, {
                        attrs: {
                            color: "primary",
                            rounded: "",
                            disabled: t.uploadingCustomModel || t.isSaving || !t.changedInputs
                        },
                        on: {
                            click: t.save
                        }
                    }, [t.isSaving ? e(d.Z, {
                        staticClass: "mr-sm-3",
                        attrs: {
                            size: 23,
                            width: 3,
                            indeterminate: "",
                            color: "primary"
                        }
                    }) : t._e(), t._v(" "), e("span", [t._v(" Save ")])], 1)], 1)], 1), t._v(" "), e(p.Z, [e(s.Z, {
                        staticClass: "scrollable"
                    }, [e("vue-scroll", [e(s.Z, {
                        staticClass: "info-wrapper",
                        attrs: {
                            cols: "12"
                        }
                    }, [e(p.Z, [t.showCustomModelUpload ? t._e() : e(s.Z, {
                        staticClass: "text-center text-sm-left avatar-upload-wrapper",
                        attrs: {
                            cols: "12",
                            sm: "3"
                        }
                    }, [e("h2", {
                        staticClass: "white--text"
                    }, [t._v("Voice Avatar")]), t._v(" "), e("div", {
                        staticClass: "img-wrapper"
                    }, [e("img", {
                        staticClass: "img img-fluid rounded-circle",
                        attrs: {
                            src: t.avatarSource,
                            alt: "avatar"
                        }
                    }), t._v(" "), e("i", {
                        staticClass: "fa cursor-pointer fa-arrow-up fa-2x",
                        on: {
                            click: t.openInput
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "text-small mt-3"
                    }, [t._v("\n                                        1024x1024 pixels required\n                                    ")]), t._v(" "), e("input", {
                        ref: "avatarinput",
                        staticClass: "d-none",
                        attrs: {
                            type: "file",
                            accept: "image/png, image/jpeg, image/webp, image/gif, image/svg+xml, image/bmp, image/x-icon, image/avif",
                            required: ""
                        },
                        on: {
                            change: t.onFileSelect
                        }
                    })]), t._v(" "), t.showCustomModelUpload ? t._e() : e(l.Z, {
                        attrs: {
                            width: "630",
                            "content-class": "avatar-cropper",
                            persistent: ""
                        },
                        model: {
                            value: t.cropModal,
                            callback: function(e) {
                                t.cropModal = e
                            },
                            expression: "cropModal"
                        }
                    }, [e(a.Z, {
                        attrs: {
                            dark: ""
                        }
                    }, [e(o.ZB, [e("vue-cropper", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.selectedFile,
                            expression: "selectedFile"
                        }],
                        ref: "cropper",
                        attrs: {
                            src: t.selectedFile,
                            alt: "Source Image",
                            "aspect-ratio": 1,
                            "min-crop-box-width": 1024,
                            "min-crop-box-height": 1024,
                            "img-style": {
                                "max-height": "600px"
                            },
                            "view-mode": 1,
                            movable: !1,
                            zoomable: !1,
                            "drag-mode": "move"
                        }
                    }), t._v(" "), t.selectedFile ? t._e() : e(s.Z, {
                        staticClass: "text-center"
                    }, [t._v(" Processing...")])], 1), t._v(" "), e(o.h7, [e(n.Z, {
                        staticClass: "btn-purple px-3",
                        on: {
                            click: t.saveImage
                        }
                    }, [t._v("\n                                                Crop\n                                            ")]), t._v(" "), e(n.Z, {
                        attrs: {
                            color: "btn-purple",
                            text: ""
                        },
                        on: {
                            click: t.resetAvatar
                        }
                    }, [t._v("\n                                                Cancel")])], 1)], 1)], 1), t._v(" "), e(s.Z, {
                        staticClass: "voice-properties-wrapper",
                        attrs: {
                            cols: "12",
                            sm: "9"
                        }
                    }, [e(p.Z, [e(s.Z, {
                        attrs: {
                            cols: "12"
                        }
                    }, [e("h2", {
                        staticClass: "white--text"
                    }, [t._v("Voice Name")]), t._v(" "), e(f.Z, {
                        staticClass: "mt-4",
                        attrs: {
                            color: "grey",
                            solo: "",
                            maxlength: t.maxNameLength,
                            messages: t.fieldRules,
                            rounded: "",
                            flat: "",
                            "background-color": "grey darken-3",
                            placeholder: "Type here your voice name"
                        },
                        model: {
                            value: t.name,
                            callback: function(e) {
                                t.name = e
                            },
                            expression: "name"
                        }
                    })], 1)], 1), t._v(" "), e(p.Z, [t.showCustomModelUpload ? t._e() : e(s.Z, {
                        attrs: {
                            cols: "12",
                            sm: "7",
                            order: "2",
                            "order-sm": "1"
                        }
                    }, [e(h.Z, {
                        attrs: {
                            items: t.languages,
                            "item-text": "name",
                            "item-value": "id",
                            solo: "",
                            outlined: "",
                            color: "primary",
                            "background-color": "transparent",
                            label: "Select Language",
                            "hide-details": !0
                        },
                        scopedSlots: t._u([{
                            key: "prepend",
                            fn: function() {
                                return [e("p", {
                                    staticClass: "mb-0 white--text"
                                }, [t._v("Language")])]
                            },
                            proxy: !0
                        }], null, !1, 541778174),
                        model: {
                            value: t.language,
                            callback: function(e) {
                                t.language = e
                            },
                            expression: "language"
                        }
                    })], 1), t._v(" "), e(s.Z, {
                        staticClass: "text-center text-sm-end",
                        attrs: {
                            cols: "12",
                            sm: "5",
                            order: "1",
                            "order-sm": "2"
                        }
                    }, [e(r.Z, {
                        attrs: {
                            id: "private-voice-switch",
                            mandatory: ""
                        },
                        model: {
                            value: t.isPrivate,
                            callback: function(e) {
                                t.isPrivate = e
                            },
                            expression: "isPrivate"
                        }
                    }, [e(n.Z, {
                        staticClass: "btn-purple py-5 text-none",
                        attrs: {
                            "active-class": "active",
                            rounded: "",
                            "x-small": "",
                            value: !0,
                            disabled: t.showCustomModelUpload
                        }
                    }, [e("span", [t._v("Unlisted")])]), t._v(" "), e(n.Z, {
                        staticClass: "btn-purple py-5 text-none",
                        attrs: {
                            "active-class": "active",
                            rounded: "",
                            "x-small": "",
                            value: !1,
                            disabled: t.showCustomModelUpload
                        }
                    }, [e("span", [t._v("Listed")])])], 1), t._v(" "), e(m.Z, {
                        attrs: {
                            top: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function(i) {
                                var n = i.on,
                                    r = i.attrs;
                                return [e(c.Z, t._g(t._b({
                                    staticClass: "ml-3",
                                    attrs: {
                                        size: "15",
                                        color: "white"
                                    }
                                }, "v-icon", r, !1), n), [t._v("\n                                                        fas fa-info\n                                                    ")])]
                            }
                        }])
                    }, [t._v(" "), e("div", [e("h3", {
                        staticClass: "font-weight-medium mb-0"
                    }, [t.showCustomModelUpload ? [t._v("\n                                                            All uploaded 3rd party voices are private\n                                                        ")] : [t._v("\n                                                            Unable to take this voice back once it's listed.\n                                                        ")]], 2)])])], 1)], 1), t._v(" "), t.showCustomModelUpload ? t._e() : e(p.Z, [e(s.Z, {
                        attrs: {
                            cols: "12",
                            sm: "7"
                        }
                    }, [e(h.Z, {
                        attrs: {
                            items: t.categories,
                            "item-text": "name",
                            "item-value": "id",
                            solo: "",
                            outlined: "",
                            dark: "",
                            color: "primary",
                            "background-color": "transparent",
                            label: "Select Category",
                            "hide-details": !0
                        },
                        scopedSlots: t._u([{
                            key: "prepend",
                            fn: function() {
                                return [e("p", {
                                    staticClass: "mb-0 white--text"
                                }, [t._v("Category")])]
                            },
                            proxy: !0
                        }], null, !1, 72734524),
                        model: {
                            value: t.category,
                            callback: function(e) {
                                t.category = e
                            },
                            expression: "category"
                        }
                    })], 1)], 1)], 1), t._v(" "), t.showCustomModelUpload ? t._e() : e(s.Z, {
                        staticClass: "pb-0",
                        class: {
                            "text-center": t.isBuildRequestProcessing
                        },
                        attrs: {
                            cols: "12"
                        }
                    }, [t.canUploadAudio ? [e("p", [t._v("Select Tags")]), t._v(" "), e("tags-input", {
                        attrs: {
                            "element-id": "tags-input",
                            typeahead: !0,
                            "typeahead-hide-discard": !0,
                            "typeahead-activation-threshold": 0,
                            "id-field": "id",
                            "text-field": "name_value",
                            "existing-tags": t.tagSuggestions,
                            placeholder: "＋ Add new tag",
                            "add-tags-on-commas": !0,
                            "sort-search-results": !1
                        },
                        on: {
                            change: t.onTagsChange
                        },
                        model: {
                            value: t.tags,
                            callback: function(e) {
                                t.tags = e
                            },
                            expression: "tags"
                        }
                    }), t._v(" "), t._.get(t.customVoice, "build_failed_text") ? [e("hr", {
                        staticClass: "my-5"
                    }), t._v(" "), e("h3", [t._v("Voice building failed, try again!")]), t._v(" "), t.customVoice.last_successful_build_at ? e("p", [t._v("\n                                                Last successful build date:\n                                                " + t._s(t.customVoice.last_successful_build_at) + "\n                                            ")]) : t._e()] : t._e(), t._v(" "), t.customVoice && !t.showCustomModelUpload ? e("span", [e("hr", {
                        staticClass: "my-5"
                    }), t._v(" "), e("h3", [t._v("Upload Audio")]), t._v(" "), e("p", [t._v("\n                                                15 minutes of clean audio from a single speaker is recommended. The\n                                                presence of a different speaker, music, or background noise will\n                                                significantly degrade the quality of the trained voice.\n                                            ")]), t._v(" "), e("file-drop-new", {
                        attrs: {
                            title: "Drag and Drop audio file",
                            "max-file-size": t._.get(t.$root, "user.limits.max_file_size")
                        },
                        on: {
                            success: function(e) {
                                return t.onAudioAdded(e)
                            }
                        }
                    }), t._v(" "), e(u.Z, {
                        staticClass: "my-5",
                        attrs: {
                            value: t.progressPercent,
                            color: "purple",
                            height: "25"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(i) {
                                i.value;
                                return [t.progress <= 15 ? e("strong", [t._v("\n                                                        Progress: " + t._s(Math.ceil(t.progress)) + " minute"), Math.ceil(t.progress) > 1 ? [t._v("s")] : t._e(), t._v("\n                                                        out of 15 recommended\n                                                    ")], 2) : e("strong", [t._v(" Progress: 100 % ")])]
                            }
                        }], null, !1, 1782645099)
                    })], 1) : t._e(), t._v(" "), t.customAudios.length ? e("div", {
                        staticClass: "audios-wrapper mt-5"
                    }, t._l(t.customAudios, (function(i) {
                        return e(p.Z, {
                            key: "custom-audio-" + i.uuid,
                            staticClass: "audio-row"
                        }, [e(s.Z, {
                            staticClass: "audio-player-wrapper my-auto",
                            attrs: {
                                cols: "11",
                                sm: "10"
                            }
                        }, [e("audio-player", {
                            key: "custom-audio-player" + i.uuid,
                            attrs: {
                                large: !0,
                                filename: i.name,
                                "audio-url": i.audio_url
                            }
                        })], 1), t._v(" "), e(s.Z, {
                            staticClass: "align-self-center text-center px-0 px-sm-3",
                            attrs: {
                                cols: "1",
                                sm: "2"
                            }
                        }, [e("div", {
                            staticClass: "cursor-pointer actions-wrapper"
                        }, [e("i", {
                            staticClass: "fas fa-trash-alt fa-2x action",
                            class: {
                                disabled: t.isDeleting
                            },
                            on: {
                                click: function(e) {
                                    return t.deleteAudio(i)
                                }
                            }
                        })])])], 1)
                    })), 1) : t._e()] : t.isBuildRequestProcessing ? [e(d.Z, {
                        staticClass: "mt-5 mb-5",
                        attrs: {
                            indeterminate: "",
                            size: "40",
                            color: "primary"
                        }
                    })] : [e("h3", {
                        staticClass: "mt-5"
                    }, [t._v("Voice Building in Progress...")]), t._v(" "), e("p", {
                        staticClass: "mt-4 build-info"
                    }, [t.customVoice.build_queue_position > 0 ? [t._v("\n                                                Your voice is #" + t._s(t.customVoice.build_queue_position) + " in line\n                                            ")] : 0 === t.customVoice.build_queue_position ? [t._v("\n                                                Your voice is currently building\n                                            ")] : t._e()], 2)]], 2), t._v(" "), t.allowCustomModelUpload ? e(s.Z, {
                        staticClass: "pb-0 model-file-drop",
                        attrs: {
                            cols: "12"
                        }
                    }, [e("file-drop-new", {
                        attrs: {
                            title: "Drag and Drop custom model file",
                            "accepted-files": "application/zip, application/x-zip-compressed, multipart/x-zip",
                            "remove-after-success": !1,
                            "validate-callback": t.validateZipFile,
                            "max-files": 1
                        },
                        on: {
                            success: function(e) {
                                return t.onModelAdded(e)
                            },
                            empty: function(e) {
                                t.customModelData = null
                            },
                            processing: function(e) {
                                t.uploadingCustomModel = e
                            }
                        }
                    })], 1) : t._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1), t._v(" "), e("confirmation-modal", {
                        attrs: {
                            heading: "Are you sure you want to cancel the build?"
                        },
                        on: {
                            confirmed: t.cancelBuildVoice
                        },
                        model: {
                            value: t.showCancelBuildConfirmation,
                            callback: function(e) {
                                t.showCancelBuildConfirmation = e
                            },
                            expression: "showCancelBuildConfirmation"
                        }
                    })], 1)
                },
                v = []
        },
        3245: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => d,
                x: () => u
            });
            var n = i(3489),
                r = i(5893),
                a = i(5255),
                o = i(7024),
                s = i(1765),
                l = i(6474),
                c = i(7894),
                d = function() {
                    var t = this,
                        e = t._self._c;
                    return e(s.Z, {
                        attrs: {
                            "content-class": "get-tokens-modal",
                            "max-width": "1030px",
                            "overlay-opacity": 1
                        },
                        model: {
                            value: t.appStore.showGetTokenModal,
                            callback: function(e) {
                                t.$set(t.appStore, "showGetTokenModal", e)
                            },
                            expression: "appStore.showGetTokenModal"
                        }
                    }, [e(r.Z, {
                        attrs: {
                            dark: ""
                        }
                    }, [e(o.Z, [e(c.Z, [e(o.Z, {
                        staticClass: "title-wrapper text-center",
                        attrs: {
                            cols: "12"
                        }
                    }, [e("h3", {
                        staticClass: "mb-1"
                    }, [t._v("\n                        Get Credits\n                    ")]), t._v(" "), e("span", {
                        staticClass: "modal-close-button",
                        attrs: {
                            "aria-label": "Close modal"
                        },
                        on: {
                            click: function(e) {
                                t.appStore.showGetTokenModal = !1
                            }
                        }
                    })]), t._v(" "), t.saleExpired ? t._e() : e(o.Z, {
                        staticClass: "promo-wrapper mb-5",
                        attrs: {
                            cols: "10",
                            offset: "1"
                        }
                    }, [e(c.Z, [e(o.Z, {
                        staticClass: "p-relative promo-text-wrapper",
                        attrs: {
                            cols: "12",
                            md: "7"
                        }
                    }, [e("div", {
                        staticClass: "bonus-times-wrapper"
                    }, [e("p", {
                        staticClass: "mb-0"
                    }, [t._v("\n                                    2x\n                                ")])]), t._v(" "), e("h4", {
                        staticClass: "text-center"
                    }, [t._v("\n                                Bonus Ends in:\n                            ")])]), t._v(" "), e(o.Z, {
                        staticClass: "p-relative",
                        attrs: {
                            cols: "12",
                            md: "5"
                        }
                    }, [e("div", {
                        staticClass: "countdown-wrapper"
                    }, [e("div", {
                        staticClass: "d-flex justify-center"
                    }, [e(r.Z, {
                        staticClass: "opacitybg mr-4",
                        attrs: {
                            width: "94",
                            height: "94",
                            "min-width": 94
                        }
                    }, [e(a.ZB, {
                        staticClass: "p-0 text-wrapper"
                    }, [e("p", {
                        staticClass: "counter text--primary text-center font-weight-bold"
                    }, [t._v("\n                                                " + t._s(t.hours) + "\n                                            ")]), t._v(" "), e("p", {
                        staticClass: "text-center mb-0"
                    }, [t._v("\n                                                hours\n                                            ")])])], 1), t._v(" "), e(r.Z, {
                        staticClass: "opacitybg mr-4",
                        attrs: {
                            width: "94",
                            height: "94",
                            "min-width": 94
                        }
                    }, [e(a.ZB, {
                        staticClass: "p-0 text-wrapper"
                    }, [e("p", {
                        staticClass: "counter text--primary text-center font-weight-bold"
                    }, [t._v("\n                                                " + t._s(t.minutes % 60) + "\n                                            ")]), t._v(" "), e("p", {
                        staticClass: "text-center mb-0"
                    }, [t._v("\n                                                minutes\n                                            ")])])], 1), t._v(" "), e(r.Z, {
                        staticClass: "opacitybg",
                        attrs: {
                            width: "94",
                            height: "94",
                            "min-width": 94
                        }
                    }, [e(a.ZB, {
                        staticClass: "p-0 text-wrapper"
                    }, [e("p", {
                        staticClass: "counter text--primary text-center font-weight-bold"
                    }, [t._v("\n                                                " + t._s(t.seconds % 60) + "\n                                            ")]), t._v(" "), e("p", {
                        staticClass: "text-center mb-0"
                    }, [t._v("\n                                                seconds\n                                            ")])])], 1)], 1)])])], 1)], 1)], 1), t._v(" "), e(c.Z, {
                        staticClass: "modal-token-list mx-auto justify-center mb-6"
                    }, t._l(t.appStore.packages, (function(i) {
                        return e(o.Z, {
                            key: i.uuid,
                            staticClass: "mb-5 mb-sm-0",
                            attrs: {
                                cols: "12",
                                sm: "6",
                                md: "3"
                            }
                        }, [e(c.Z, [e(o.Z, [e("div", {
                            staticClass: "package-wrapper",
                            on: {
                                click: function(e) {
                                    return t.getPackage(i)
                                }
                            }
                        }, [(i.is_popular, t._e()), t._v(" "), e("div", {
                            staticClass: "token-amount"
                        }, [t.saleExpired ? t._e() : e("strike", [t._v("\n                                        " + t._s(Number(i.tokens / 2).toLocaleString()) + "\n                                    ")]), t._v(" "), e("h2", {
                            class: {
                                "mt-1": !t.saleExpired, "mt-4": t.saleExpired
                            }
                        }, [t._v("\n                                        " + t._s(i.tokens.toLocaleString()))]), t._v("\n                                    credits\n                                ")], 1), t._v(" "), e(l.Z, {
                            attrs: {
                                contain: "",
                                eager: "",
                                draggable: "false",
                                alt: "tokens",
                                height: "160",
                                src: "/img/doublemicicon.svg"
                            }
                        }), t._v(" "), i.is_popular ? e("div", {
                            staticClass: "best-tag mb-1"
                        }, [t._v("\n                                    BEST CHOICE\n                                ")]) : t._e(), t._v(" "), e("div", {
                            staticClass: "price-tag text-center"
                        }, [i.discount_percentage ? e("div", {
                            staticClass: "discount-tag mb-1"
                        }, [t._v("\n                                        " + t._s(i.discount_percentage) + "% OFF\n                                    ")]) : t._e(), t._v(" "), e("span", {
                            staticClass: "mt-auto"
                        }, [t._v("$" + t._s(i.price))])]), t._v(" "), e(n.Z, {
                            staticClass: "get-button",
                            attrs: {
                                rounded: "",
                                outlined: "",
                                "x-large": "",
                                block: ""
                            }
                        }, [t._v("\n                                    GET\n                                ")])], 1)])], 1)], 1)
                    })), 1), t._v(" "), t.showEarnButton ? e(c.Z, [e(o.Z, {
                        staticClass: "text-center"
                    }, [e(n.Z, {
                        staticClass: "btn-green",
                        attrs: {
                            color: "teal darken-3",
                            "x-large": "",
                            rounded: ""
                        },
                        on: {
                            click: function(e) {
                                return t.showEarningModal()
                            }
                        }
                    }, [t._v("\n                        Earn Free Credits\n                    ")])], 1)], 1) : t._e()], 1)], 1)], 1)
                },
                u = []
        },
        6407: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            i(4785);
            var n = i(7565),
                r = i(5836);
            const a = (0, i(5530).Z)(n.Z, r.Z).extend({
                name: "v-btn-toggle",
                props: {
                    backgroundColor: String,
                    borderless: Boolean,
                    dense: Boolean,
                    group: Boolean,
                    rounded: Boolean,
                    shaped: Boolean,
                    tile: Boolean
                },
                computed: {
                    classes() {
                        return { ...n.Z.options.computed.classes.call(this),
                            "v-btn-toggle": !0,
                            "v-btn-toggle--borderless": this.borderless,
                            "v-btn-toggle--dense": this.dense,
                            "v-btn-toggle--group": this.group,
                            "v-btn-toggle--rounded": this.rounded,
                            "v-btn-toggle--shaped": this.shaped,
                            "v-btn-toggle--tile": this.tile,
                            ...this.themeClasses
                        }
                    }
                },
                methods: {
                    genData() {
                        const t = this.setTextColor(this.color, { ...n.Z.options.methods.genData.call(this)
                        });
                        return this.group ? t : this.setBackgroundColor(this.backgroundColor, t)
                    }
                }
            })
        },
        5255: (t, e, i) => {
            "use strict";
            i.d(e, {
                ZB: () => s,
                h7: () => a
            });
            var n = i(5893),
                r = i(8131);
            const a = (0, r.Ji)("v-card__actions"),
                o = (0, r.Ji)("v-card__subtitle"),
                s = (0, r.Ji)("v-card__text"),
                l = (0, r.Ji)("v-card__title");
            n.Z
        },
        7565: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => r
            });
            var n = i(639);
            const r = n.y.extend({
                name: "button-group",
                provide() {
                    return {
                        btnToggle: this
                    }
                },
                computed: {
                    classes() {
                        return n.y.options.computed.classes.call(this)
                    }
                },
                methods: {
                    genData: n.y.options.methods.genData
                }
            })
        },
        2480: () => {},
        7743: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            var n = i(903);

            function r(t) {
                return t && t.__esModule ? t.default : t
            }
            class a {
                on(t, e) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[t] || (this._callbacks[t] = []), this._callbacks[t].push(e), this
                }
                emit(t, ...e) {
                    this._callbacks = this._callbacks || {};
                    let i = this._callbacks[t];
                    if (i)
                        for (let t of i) t.apply(this, e);
                    return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + t, {
                        args: e
                    })), this
                }
                makeEvent(t, e) {
                    let i = {
                        bubbles: !0,
                        cancelable: !0,
                        detail: e
                    };
                    if ("function" == typeof window.CustomEvent) return new CustomEvent(t, i);
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), n
                }
                off(t, e) {
                    if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
                    let i = this._callbacks[t];
                    if (!i) return this;
                    if (1 === arguments.length) return delete this._callbacks[t], this;
                    for (let t = 0; t < i.length; t++) {
                        if (i[t] === e) {
                            i.splice(t, 1);
                            break
                        }
                    }
                    return this
                }
            }
            var o = {
                url: null,
                method: "post",
                withCredentials: !1,
                timeout: null,
                parallelUploads: 2,
                uploadMultiple: !1,
                chunking: !1,
                forceChunking: !1,
                chunkSize: 2097152,
                parallelChunkUploads: !1,
                retryChunks: !1,
                retryChunksLimit: 3,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                thumbnailMethod: "crop",
                resizeWidth: null,
                resizeHeight: null,
                resizeMimeType: null,
                resizeQuality: .8,
                resizeMethod: "contain",
                filesizeBase: 1e3,
                maxFiles: null,
                headers: null,
                defaultHeaders: !0,
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                disablePreviews: !1,
                hiddenInputContainer: "body",
                capture: null,
                renameFilename: null,
                renameFile: null,
                forceFallback: !1,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictUploadCanceled: "Upload canceled.",
                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                dictFileSizeUnits: {
                    tb: "TB",
                    gb: "GB",
                    mb: "MB",
                    kb: "KB",
                    b: "b"
                },
                init() {},
                params(t, e, i) {
                    if (i) return {
                        dzuuid: i.file.upload.uuid,
                        dzchunkindex: i.index,
                        dztotalfilesize: i.file.size,
                        dzchunksize: this.options.chunkSize,
                        dztotalchunkcount: i.file.upload.totalChunkCount,
                        dzchunkbyteoffset: i.index * this.options.chunkSize
                    }
                },
                accept: (t, e) => e(),
                chunksUploaded: function(t, e) {
                    e()
                },
                binaryBody: !1,
                fallback() {
                    let t;
                    this.element.className = `${this.element.className} dz-browser-not-supported`;
                    for (let e of this.element.getElementsByTagName("div"))
                        if (/(^| )dz-message($| )/.test(e.className)) {
                            t = e, e.className = "dz-message";
                            break
                        }
                    t || (t = s.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(t));
                    let e = t.getElementsByTagName("span")[0];
                    return e && (null != e.textContent ? e.textContent = this.options.dictFallbackMessage : null != e.innerText && (e.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
                },
                resize(t, e, i, n) {
                    let r = {
                            srcX: 0,
                            srcY: 0,
                            srcWidth: t.width,
                            srcHeight: t.height
                        },
                        a = t.width / t.height;
                    null == e && null == i ? (e = r.srcWidth, i = r.srcHeight) : null == e ? e = i * a : null == i && (i = e / a);
                    let o = (e = Math.min(e, r.srcWidth)) / (i = Math.min(i, r.srcHeight));
                    if (r.srcWidth > e || r.srcHeight > i)
                        if ("crop" === n) a > o ? (r.srcHeight = t.height, r.srcWidth = r.srcHeight * o) : (r.srcWidth = t.width, r.srcHeight = r.srcWidth / o);
                        else {
                            if ("contain" !== n) throw new Error(`Unknown resizeMethod '${n}'`);
                            a > o ? i = e / a : e = i * a
                        }
                    return r.srcX = (t.width - r.srcWidth) / 2, r.srcY = (t.height - r.srcHeight) / 2, r.trgWidth = e, r.trgHeight = i, r
                },
                transformFile(t, e) {
                    return (this.options.resizeWidth || this.options.resizeHeight) && t.type.match(/image.*/) ? this.resizeImage(t, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, e) : e(t)
                },
                previewTemplate: r('<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail=""></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size=""></span></div>\n    <div class="dz-filename"><span data-dz-name=""></span></div>\n  </div>\n  <div class="dz-progress">\n    <span class="dz-upload" data-dz-uploadprogress=""></span>\n  </div>\n  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>\n  <div class="dz-success-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>\n    </svg>\n  </div>\n</div>\n'),
                drop(t) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragstart(t) {},
                dragend(t) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragenter(t) {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragover(t) {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragleave(t) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                paste(t) {},
                reset() {
                    return this.element.classList.remove("dz-started")
                },
                addedfile(t) {
                    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) {
                        for (var e of (t.previewElement = s.createElement(this.options.previewTemplate.trim()), t.previewTemplate = t.previewElement, this.previewsContainer.appendChild(t.previewElement), t.previewElement.querySelectorAll("[data-dz-name]"))) e.textContent = t.name;
                        for (e of t.previewElement.querySelectorAll("[data-dz-size]")) e.innerHTML = this.filesize(t.size);
                        this.options.addRemoveLinks && (t._removeLink = s.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`), t.previewElement.appendChild(t._removeLink));
                        let i = e => (e.preventDefault(), e.stopPropagation(), t.status === s.UPLOADING ? s.confirm(this.options.dictCancelUploadConfirmation, (() => this.removeFile(t))) : this.options.dictRemoveFileConfirmation ? s.confirm(this.options.dictRemoveFileConfirmation, (() => this.removeFile(t))) : this.removeFile(t));
                        for (let e of t.previewElement.querySelectorAll("[data-dz-remove]")) e.addEventListener("click", i)
                    }
                },
                removedfile(t) {
                    return null != t.previewElement && null != t.previewElement.parentNode && t.previewElement.parentNode.removeChild(t.previewElement), this._updateMaxFilesReachedClass()
                },
                thumbnail(t, e) {
                    if (t.previewElement) {
                        t.previewElement.classList.remove("dz-file-preview");
                        for (let i of t.previewElement.querySelectorAll("[data-dz-thumbnail]")) i.alt = t.name, i.src = e;
                        return setTimeout((() => t.previewElement.classList.add("dz-image-preview")), 1)
                    }
                },
                error(t, e) {
                    if (t.previewElement) {
                        t.previewElement.classList.add("dz-error"), "string" != typeof e && e.error && (e = e.error);
                        for (let i of t.previewElement.querySelectorAll("[data-dz-errormessage]")) i.textContent = e
                    }
                },
                errormultiple() {},
                processing(t) {
                    if (t.previewElement && (t.previewElement.classList.add("dz-processing"), t._removeLink)) return t._removeLink.innerHTML = this.options.dictCancelUpload
                },
                processingmultiple() {},
                uploadprogress(t, e, i) {
                    if (t.previewElement)
                        for (let i of t.previewElement.querySelectorAll("[data-dz-uploadprogress]")) "PROGRESS" === i.nodeName ? i.value = e : i.style.width = `${e}%`
                },
                totaluploadprogress() {},
                sending() {},
                sendingmultiple() {},
                success(t) {
                    if (t.previewElement) return t.previewElement.classList.add("dz-success")
                },
                successmultiple() {},
                canceled(t) {
                    return this.emit("error", t, this.options.dictUploadCanceled)
                },
                canceledmultiple() {},
                complete(t) {
                    if (t._removeLink && (t._removeLink.innerHTML = this.options.dictRemoveFile), t.previewElement) return t.previewElement.classList.add("dz-complete")
                },
                completemultiple() {},
                maxfilesexceeded() {},
                maxfilesreached() {},
                queuecomplete() {},
                addedfiles() {}
            };
            class s extends a {
                static initClass() {
                    this.prototype.Emitter = a, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
                }
                getAcceptedFiles() {
                    return this.files.filter((t => t.accepted)).map((t => t))
                }
                getRejectedFiles() {
                    return this.files.filter((t => !t.accepted)).map((t => t))
                }
                getFilesWithStatus(t) {
                    return this.files.filter((e => e.status === t)).map((t => t))
                }
                getQueuedFiles() {
                    return this.getFilesWithStatus(s.QUEUED)
                }
                getUploadingFiles() {
                    return this.getFilesWithStatus(s.UPLOADING)
                }
                getAddedFiles() {
                    return this.getFilesWithStatus(s.ADDED)
                }
                getActiveFiles() {
                    return this.files.filter((t => t.status === s.UPLOADING || t.status === s.QUEUED)).map((t => t))
                }
                init() {
                    if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(s.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`)), this.clickableElements.length) {
                        let t = () => {
                            this.hiddenFileInput && this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = document.createElement("input"), this.hiddenFileInput.setAttribute("type", "file"), (null === this.options.maxFiles || this.options.maxFiles > 1) && this.hiddenFileInput.setAttribute("multiple", "multiple"), this.hiddenFileInput.className = "dz-hidden-input", null !== this.options.acceptedFiles && this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles), null !== this.options.capture && this.hiddenFileInput.setAttribute("capture", this.options.capture), this.hiddenFileInput.setAttribute("tabindex", "-1"), this.hiddenFileInput.style.visibility = "hidden", this.hiddenFileInput.style.position = "absolute", this.hiddenFileInput.style.top = "0", this.hiddenFileInput.style.left = "0", this.hiddenFileInput.style.height = "0", this.hiddenFileInput.style.width = "0", s.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput), this.hiddenFileInput.addEventListener("change", (() => {
                                let {
                                    files: e
                                } = this.hiddenFileInput;
                                if (e.length)
                                    for (let t of e) this.addFile(t);
                                this.emit("addedfiles", e), t()
                            }))
                        };
                        t()
                    }
                    this.URL = null !== window.URL ? window.URL : window.webkitURL;
                    for (let t of this.events) this.on(t, this.options[t]);
                    this.on("uploadprogress", (() => this.updateTotalUploadProgress())), this.on("removedfile", (() => this.updateTotalUploadProgress())), this.on("canceled", (t => this.emit("complete", t))), this.on("complete", (t => {
                        if (0 === this.getAddedFiles().length && 0 === this.getUploadingFiles().length && 0 === this.getQueuedFiles().length) return setTimeout((() => this.emit("queuecomplete")), 0)
                    }));
                    let t = function(t) {
                        if (function(t) {
                                if (t.dataTransfer.types)
                                    for (var e = 0; e < t.dataTransfer.types.length; e++)
                                        if ("Files" === t.dataTransfer.types[e]) return !0;
                                return !1
                            }(t)) return t.stopPropagation(), t.preventDefault ? t.preventDefault() : t.returnValue = !1
                    };
                    return this.listeners = [{
                        element: this.element,
                        events: {
                            dragstart: t => this.emit("dragstart", t),
                            dragenter: e => (t(e), this.emit("dragenter", e)),
                            dragover: e => {
                                let i;
                                try {
                                    i = e.dataTransfer.effectAllowed
                                } catch (t) {}
                                return e.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy", t(e), this.emit("dragover", e)
                            },
                            dragleave: t => this.emit("dragleave", t),
                            drop: e => (t(e), this.drop(e)),
                            dragend: t => this.emit("dragend", t)
                        }
                    }], this.clickableElements.forEach((t => this.listeners.push({
                        element: t,
                        events: {
                            click: e => ((t !== this.element || e.target === this.element || s.elementInside(e.target, this.element.querySelector(".dz-message"))) && this.hiddenFileInput.click(), !0)
                        }
                    }))), this.enable(), this.options.init.call(this)
                }
                destroy() {
                    return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, s.instances.splice(s.instances.indexOf(this), 1)
                }
                updateTotalUploadProgress() {
                    let t, e = 0,
                        i = 0;
                    if (this.getActiveFiles().length) {
                        for (let t of this.getActiveFiles()) e += t.upload.bytesSent, i += t.upload.total;
                        t = 100 * e / i
                    } else t = 100;
                    return this.emit("totaluploadprogress", t, i, e)
                }
                _getParamName(t) {
                    return "function" == typeof this.options.paramName ? this.options.paramName(t) : `${this.options.paramName}${this.options.uploadMultiple?`[${t}]`:""}`
                }
                _renameFile(t) {
                    return "function" != typeof this.options.renameFile ? t.name : this.options.renameFile(t)
                }
                getFallbackForm() {
                    let t, e;
                    if (t = this.getExistingFallback()) return t;
                    let i = '<div class="dz-fallback">';
                    this.options.dictFallbackText && (i += `<p>${this.options.dictFallbackText}</p>`), i += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple?'multiple="multiple"':void 0} /><input type="submit" value="Upload!"></div>`;
                    let n = s.createElement(i);
                    return "FORM" !== this.element.tagName ? (e = s.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`), e.appendChild(n)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != e ? e : n
                }
                getExistingFallback() {
                    let t = function(t) {
                        for (let e of t)
                            if (/(^| )fallback($| )/.test(e.className)) return e
                    };
                    for (let i of ["div", "form"]) {
                        var e;
                        if (e = t(this.element.getElementsByTagName(i))) return e
                    }
                }
                setupEventListeners() {
                    return this.listeners.map((t => (() => {
                        let e = [];
                        for (let i in t.events) {
                            let n = t.events[i];
                            e.push(t.element.addEventListener(i, n, !1))
                        }
                        return e
                    })()))
                }
                removeEventListeners() {
                    return this.listeners.map((t => (() => {
                        let e = [];
                        for (let i in t.events) {
                            let n = t.events[i];
                            e.push(t.element.removeEventListener(i, n, !1))
                        }
                        return e
                    })()))
                }
                disable() {
                    return this.clickableElements.forEach((t => t.classList.remove("dz-clickable"))), this.removeEventListeners(), this.disabled = !0, this.files.map((t => this.cancelUpload(t)))
                }
                enable() {
                    return delete this.disabled, this.clickableElements.forEach((t => t.classList.add("dz-clickable"))), this.setupEventListeners()
                }
                filesize(t) {
                    let e = 0,
                        i = "b";
                    if (t > 0) {
                        let n = ["tb", "gb", "mb", "kb", "b"];
                        for (let r = 0; r < n.length; r++) {
                            let a = n[r];
                            if (t >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                                e = t / Math.pow(this.options.filesizeBase, 4 - r), i = a;
                                break
                            }
                        }
                        e = Math.round(10 * e) / 10
                    }
                    return `<strong>${e}</strong> ${this.options.dictFileSizeUnits[i]}`
                }
                _updateMaxFilesReachedClass() {
                    return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
                }
                drop(t) {
                    if (!t.dataTransfer) return;
                    this.emit("drop", t);
                    let e = [];
                    for (let i = 0; i < t.dataTransfer.files.length; i++) e[i] = t.dataTransfer.files[i];
                    if (e.length) {
                        let {
                            items: i
                        } = t.dataTransfer;
                        i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(e)
                    }
                    this.emit("addedfiles", e)
                }
                paste(t) {
                    if (null == (e = null != t ? t.clipboardData : void 0, i = t => t.items, null != e ? i(e) : void 0)) return;
                    var e, i;
                    this.emit("paste", t);
                    let {
                        items: n
                    } = t.clipboardData;
                    return n.length ? this._addFilesFromItems(n) : void 0
                }
                handleFiles(t) {
                    for (let e of t) this.addFile(e)
                }
                _addFilesFromItems(t) {
                    return (() => {
                        let e = [];
                        for (let n of t) {
                            var i;
                            null != n.webkitGetAsEntry && (i = n.webkitGetAsEntry()) ? i.isFile ? e.push(this.addFile(n.getAsFile())) : i.isDirectory ? e.push(this._addFilesFromDirectory(i, i.name)) : e.push(void 0) : null != n.getAsFile && (null == n.kind || "file" === n.kind) ? e.push(this.addFile(n.getAsFile())) : e.push(void 0)
                        }
                        return e
                    })()
                }
                _addFilesFromDirectory(t, e) {
                    let i = t.createReader(),
                        n = t => {
                            return e = console, i = "log", n = e => e.log(t), null != e && "function" == typeof e[i] ? n(e, i) : void 0;
                            var e, i, n
                        };
                    var r = () => i.readEntries((t => {
                        if (t.length > 0) {
                            for (let i of t) i.isFile ? i.file((t => {
                                if (!this.options.ignoreHiddenFiles || "." !== t.name.substring(0, 1)) return t.fullPath = `${e}/${t.name}`, this.addFile(t)
                            })) : i.isDirectory && this._addFilesFromDirectory(i, `${e}/${i.name}`);
                            r()
                        }
                        return null
                    }), n);
                    return r()
                }
                accept(t, e) {
                    this.options.maxFilesize && t.size > 1048576 * this.options.maxFilesize ? e(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(t.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : s.isValidFile(t, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (e(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", t)) : this.options.accept.call(this, t, e) : e(this.options.dictInvalidFileType)
                }
                addFile(t) {
                    t.upload = {
                        uuid: s.uuidv4(),
                        progress: 0,
                        total: t.size,
                        bytesSent: 0,
                        filename: this._renameFile(t)
                    }, this.files.push(t), t.status = s.ADDED, this.emit("addedfile", t), this._enqueueThumbnail(t), this.accept(t, (e => {
                        e ? (t.accepted = !1, this._errorProcessing([t], e)) : (t.accepted = !0, this.options.autoQueue && this.enqueueFile(t)), this._updateMaxFilesReachedClass()
                    }))
                }
                enqueueFiles(t) {
                    for (let e of t) this.enqueueFile(e);
                    return null
                }
                enqueueFile(t) {
                    if (t.status !== s.ADDED || !0 !== t.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                    if (t.status = s.QUEUED, this.options.autoProcessQueue) return setTimeout((() => this.processQueue()), 0)
                }
                _enqueueThumbnail(t) {
                    if (this.options.createImageThumbnails && t.type.match(/image.*/) && t.size <= 1048576 * this.options.maxThumbnailFilesize) return this._thumbnailQueue.push(t), setTimeout((() => this._processThumbnailQueue()), 0)
                }
                _processThumbnailQueue() {
                    if (this._processingThumbnail || 0 === this._thumbnailQueue.length) return;
                    this._processingThumbnail = !0;
                    let t = this._thumbnailQueue.shift();
                    return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, (e => (this.emit("thumbnail", t, e), this._processingThumbnail = !1, this._processThumbnailQueue())))
                }
                removeFile(t) {
                    if (t.status === s.UPLOADING && this.cancelUpload(t), this.files = l(this.files, t), this.emit("removedfile", t), 0 === this.files.length) return this.emit("reset")
                }
                removeAllFiles(t) {
                    null == t && (t = !1);
                    for (let e of this.files.slice())(e.status !== s.UPLOADING || t) && this.removeFile(e);
                    return null
                }
                resizeImage(t, e, i, n, r) {
                    return this.createThumbnail(t, e, i, n, !0, ((e, i) => {
                        if (null == i) return r(t); {
                            let {
                                resizeMimeType: e
                            } = this.options;
                            null == e && (e = t.type);
                            let n = i.toDataURL(e, this.options.resizeQuality);
                            return "image/jpeg" !== e && "image/jpg" !== e || (n = u.restore(t.dataURL, n)), r(s.dataURItoBlob(n))
                        }
                    }))
                }
                createThumbnail(t, e, i, n, r, a) {
                    let o = new FileReader;
                    o.onload = () => {
                        t.dataURL = o.result, "image/svg+xml" !== t.type ? this.createThumbnailFromUrl(t, e, i, n, r, a) : null != a && a(o.result)
                    }, o.readAsDataURL(t)
                }
                displayExistingFile(t, e, i, n, r = !0) {
                    if (this.emit("addedfile", t), this.emit("complete", t), r) {
                        let r = e => {
                            this.emit("thumbnail", t, e), i && i()
                        };
                        t.dataURL = e, this.createThumbnailFromUrl(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, r, n)
                    } else this.emit("thumbnail", t, e), i && i()
                }
                createThumbnailFromUrl(t, e, i, n, r, a, o) {
                    let s = document.createElement("img");
                    return o && (s.crossOrigin = o), r = "from-image" != getComputedStyle(document.body).imageOrientation && r, s.onload = () => {
                        let o = t => t(1);
                        return "undefined" != typeof EXIF && null !== EXIF && r && (o = t => EXIF.getData(s, (function() {
                            return t(EXIF.getTag(this, "Orientation"))
                        }))), o((r => {
                            t.width = s.width, t.height = s.height;
                            let o = this.options.resize.call(this, t, e, i, n),
                                l = document.createElement("canvas"),
                                c = l.getContext("2d");
                            switch (l.width = o.trgWidth, l.height = o.trgHeight, r > 4 && (l.width = o.trgHeight, l.height = o.trgWidth), r) {
                                case 2:
                                    c.translate(l.width, 0), c.scale(-1, 1);
                                    break;
                                case 3:
                                    c.translate(l.width, l.height), c.rotate(Math.PI);
                                    break;
                                case 4:
                                    c.translate(0, l.height), c.scale(1, -1);
                                    break;
                                case 5:
                                    c.rotate(.5 * Math.PI), c.scale(1, -1);
                                    break;
                                case 6:
                                    c.rotate(.5 * Math.PI), c.translate(0, -l.width);
                                    break;
                                case 7:
                                    c.rotate(.5 * Math.PI), c.translate(l.height, -l.width), c.scale(-1, 1);
                                    break;
                                case 8:
                                    c.rotate(-.5 * Math.PI), c.translate(-l.height, 0)
                            }
                            d(c, s, null != o.srcX ? o.srcX : 0, null != o.srcY ? o.srcY : 0, o.srcWidth, o.srcHeight, null != o.trgX ? o.trgX : 0, null != o.trgY ? o.trgY : 0, o.trgWidth, o.trgHeight);
                            let u = l.toDataURL("image/png");
                            if (null != a) return a(u, l)
                        }))
                    }, null != a && (s.onerror = a), s.src = t.dataURL
                }
                processQueue() {
                    let {
                        parallelUploads: t
                    } = this.options, e = this.getUploadingFiles().length, i = e;
                    if (e >= t) return;
                    let n = this.getQueuedFiles();
                    if (n.length > 0) {
                        if (this.options.uploadMultiple) return this.processFiles(n.slice(0, t - e));
                        for (; i < t;) {
                            if (!n.length) return;
                            this.processFile(n.shift()), i++
                        }
                    }
                }
                processFile(t) {
                    return this.processFiles([t])
                }
                processFiles(t) {
                    for (let e of t) e.processing = !0, e.status = s.UPLOADING, this.emit("processing", e);
                    return this.options.uploadMultiple && this.emit("processingmultiple", t), this.uploadFiles(t)
                }
                _getFilesWithXhr(t) {
                    return this.files.filter((e => e.xhr === t)).map((t => t))
                }
                cancelUpload(t) {
                    if (t.status === s.UPLOADING) {
                        let e = this._getFilesWithXhr(t.xhr);
                        for (let t of e) t.status = s.CANCELED;
                        void 0 !== t.xhr && t.xhr.abort();
                        for (let t of e) this.emit("canceled", t);
                        this.options.uploadMultiple && this.emit("canceledmultiple", e)
                    } else t.status !== s.ADDED && t.status !== s.QUEUED || (t.status = s.CANCELED, this.emit("canceled", t), this.options.uploadMultiple && this.emit("canceledmultiple", [t]));
                    if (this.options.autoProcessQueue) return this.processQueue()
                }
                resolveOption(t, ...e) {
                    return "function" == typeof t ? t.apply(this, e) : t
                }
                uploadFile(t) {
                    return this.uploadFiles([t])
                }
                uploadFiles(t) {
                    this._transformFiles(t, (e => {
                        if (this.options.chunking) {
                            let i = e[0];
                            t[0].upload.chunked = this.options.chunking && (this.options.forceChunking || i.size > this.options.chunkSize), t[0].upload.totalChunkCount = Math.ceil(i.size / this.options.chunkSize)
                        }
                        if (t[0].upload.chunked) {
                            let i = t[0],
                                n = e[0],
                                r = 0;
                            i.upload.chunks = [];
                            let a = () => {
                                let e = 0;
                                for (; void 0 !== i.upload.chunks[e];) e++;
                                if (e >= i.upload.totalChunkCount) return;
                                r++;
                                let a = e * this.options.chunkSize,
                                    o = Math.min(a + this.options.chunkSize, n.size),
                                    l = {
                                        name: this._getParamName(0),
                                        data: n.webkitSlice ? n.webkitSlice(a, o) : n.slice(a, o),
                                        filename: i.upload.filename,
                                        chunkIndex: e
                                    };
                                i.upload.chunks[e] = {
                                    file: i,
                                    index: e,
                                    dataBlock: l,
                                    status: s.UPLOADING,
                                    progress: 0,
                                    retries: 0
                                }, this._uploadData(t, [l])
                            };
                            if (i.upload.finishedChunkUpload = (e, n) => {
                                    let r = !0;
                                    e.status = s.SUCCESS, e.dataBlock = null, e.response = e.xhr.responseText, e.responseHeaders = e.xhr.getAllResponseHeaders(), e.xhr = null;
                                    for (let t = 0; t < i.upload.totalChunkCount; t++) {
                                        if (void 0 === i.upload.chunks[t]) return a();
                                        i.upload.chunks[t].status !== s.SUCCESS && (r = !1)
                                    }
                                    r && this.options.chunksUploaded(i, (() => {
                                        this._finished(t, n, null)
                                    }))
                                }, this.options.parallelChunkUploads)
                                for (let t = 0; t < i.upload.totalChunkCount; t++) a();
                            else a()
                        } else {
                            let i = [];
                            for (let n = 0; n < t.length; n++) i[n] = {
                                name: this._getParamName(n),
                                data: e[n],
                                filename: t[n].upload.filename
                            };
                            this._uploadData(t, i)
                        }
                    }))
                }
                _getChunk(t, e) {
                    for (let i = 0; i < t.upload.totalChunkCount; i++)
                        if (void 0 !== t.upload.chunks[i] && t.upload.chunks[i].xhr === e) return t.upload.chunks[i]
                }
                _uploadData(t, e) {
                    let i = new XMLHttpRequest;
                    for (let e of t) e.xhr = i;
                    t[0].upload.chunked && (t[0].upload.chunks[e[0].chunkIndex].xhr = i);
                    let r = this.resolveOption(this.options.method, t, e),
                        a = this.resolveOption(this.options.url, t, e);
                    i.open(r, a, !0), this.resolveOption(this.options.timeout, t) && (i.timeout = this.resolveOption(this.options.timeout, t)), i.withCredentials = !!this.options.withCredentials, i.onload = e => {
                        this._finishedUploading(t, i, e)
                    }, i.ontimeout = () => {
                        this._handleUploadError(t, i, `Request timedout after ${this.options.timeout/1e3} seconds`)
                    }, i.onerror = () => {
                        this._handleUploadError(t, i)
                    }, (null != i.upload ? i.upload : i).onprogress = e => this._updateFilesUploadProgress(t, i, e);
                    let o = this.options.defaultHeaders ? {
                        Accept: "application/json",
                        "Cache-Control": "no-cache",
                        "X-Requested-With": "XMLHttpRequest"
                    } : {};
                    this.options.binaryBody && (o["Content-Type"] = t[0].type), this.options.headers && (0, n.Z)(o, this.options.headers);
                    for (let t in o) {
                        let e = o[t];
                        e && i.setRequestHeader(t, e)
                    }
                    if (this.options.binaryBody) {
                        for (let e of t) this.emit("sending", e, i);
                        this.options.uploadMultiple && this.emit("sendingmultiple", t, i), this.submitRequest(i, null, t)
                    } else {
                        let n = new FormData;
                        if (this.options.params) {
                            let e = this.options.params;
                            "function" == typeof e && (e = e.call(this, t, i, t[0].upload.chunked ? this._getChunk(t[0], i) : null));
                            for (let t in e) {
                                let i = e[t];
                                if (Array.isArray(i))
                                    for (let e = 0; e < i.length; e++) n.append(t, i[e]);
                                else n.append(t, i)
                            }
                        }
                        for (let e of t) this.emit("sending", e, i, n);
                        this.options.uploadMultiple && this.emit("sendingmultiple", t, i, n), this._addFormElementData(n);
                        for (let t = 0; t < e.length; t++) {
                            let i = e[t];
                            n.append(i.name, i.data, i.filename)
                        }
                        this.submitRequest(i, n, t)
                    }
                }
                _transformFiles(t, e) {
                    let i = [],
                        n = 0;
                    for (let r = 0; r < t.length; r++) this.options.transformFile.call(this, t[r], (a => {
                        i[r] = a, ++n === t.length && e(i)
                    }))
                }
                _addFormElementData(t) {
                    if ("FORM" === this.element.tagName)
                        for (let e of this.element.querySelectorAll("input, textarea, select, button")) {
                            let i = e.getAttribute("name"),
                                n = e.getAttribute("type");
                            if (n && (n = n.toLowerCase()), null != i)
                                if ("SELECT" === e.tagName && e.hasAttribute("multiple"))
                                    for (let n of e.options) n.selected && t.append(i, n.value);
                                else(!n || "checkbox" !== n && "radio" !== n || e.checked) && t.append(i, e.value)
                        }
                }
                _updateFilesUploadProgress(t, e, i) {
                    if (t[0].upload.chunked) {
                        let n = t[0],
                            r = this._getChunk(n, e);
                        i ? (r.progress = 100 * i.loaded / i.total, r.total = i.total, r.bytesSent = i.loaded) : (r.progress = 100, r.bytesSent = r.total), n.upload.progress = 0, n.upload.total = 0, n.upload.bytesSent = 0;
                        for (let t = 0; t < n.upload.totalChunkCount; t++) n.upload.chunks[t] && void 0 !== n.upload.chunks[t].progress && (n.upload.progress += n.upload.chunks[t].progress, n.upload.total += n.upload.chunks[t].total, n.upload.bytesSent += n.upload.chunks[t].bytesSent);
                        n.upload.progress = n.upload.progress / n.upload.totalChunkCount, this.emit("uploadprogress", n, n.upload.progress, n.upload.bytesSent)
                    } else
                        for (let e of t) e.upload.total && e.upload.bytesSent && e.upload.bytesSent == e.upload.total || (i ? (e.upload.progress = 100 * i.loaded / i.total, e.upload.total = i.total, e.upload.bytesSent = i.loaded) : (e.upload.progress = 100, e.upload.bytesSent = e.upload.total), this.emit("uploadprogress", e, e.upload.progress, e.upload.bytesSent))
                }
                _finishedUploading(t, e, i) {
                    let n;
                    if (t[0].status !== s.CANCELED && 4 === e.readyState) {
                        if ("arraybuffer" !== e.responseType && "blob" !== e.responseType && (n = e.responseText, e.getResponseHeader("content-type") && ~e.getResponseHeader("content-type").indexOf("application/json"))) try {
                            n = JSON.parse(n)
                        } catch (t) {
                            i = t, n = "Invalid JSON response from server."
                        }
                        this._updateFilesUploadProgress(t, e), 200 <= e.status && e.status < 300 ? t[0].upload.chunked ? t[0].upload.finishedChunkUpload(this._getChunk(t[0], e), n) : this._finished(t, n, i) : this._handleUploadError(t, e, n)
                    }
                }
                _handleUploadError(t, e, i) {
                    if (t[0].status !== s.CANCELED) {
                        if (t[0].upload.chunked && this.options.retryChunks) {
                            let i = this._getChunk(t[0], e);
                            if (i.retries++ < this.options.retryChunksLimit) return void this._uploadData(t, [i.dataBlock]);
                            console.warn("Retried this chunk too often. Giving up.")
                        }
                        this._errorProcessing(t, i || this.options.dictResponseError.replace("{{statusCode}}", e.status), e)
                    }
                }
                submitRequest(t, e, i) {
                    if (1 == t.readyState)
                        if (this.options.binaryBody)
                            if (i[0].upload.chunked) {
                                const e = this._getChunk(i[0], t);
                                t.send(e.dataBlock.data)
                            } else t.send(i[0]);
                    else t.send(e);
                    else console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.")
                }
                _finished(t, e, i) {
                    for (let n of t) n.status = s.SUCCESS, this.emit("success", n, e, i), this.emit("complete", n);
                    if (this.options.uploadMultiple && (this.emit("successmultiple", t, e, i), this.emit("completemultiple", t)), this.options.autoProcessQueue) return this.processQueue()
                }
                _errorProcessing(t, e, i) {
                    for (let n of t) n.status = s.ERROR, this.emit("error", n, e, i), this.emit("complete", n);
                    if (this.options.uploadMultiple && (this.emit("errormultiple", t, e, i), this.emit("completemultiple", t)), this.options.autoProcessQueue) return this.processQueue()
                }
                static uuidv4() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                        let e = 16 * Math.random() | 0;
                        return ("x" === t ? e : 3 & e | 8).toString(16)
                    }))
                }
                constructor(t, e) {
                    let i, r;
                    if (super(), this.element = t, this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
                    if (this.element.dropzone) throw new Error("Dropzone already attached.");
                    s.instances.push(this), this.element.dropzone = this;
                    let a = null != (r = s.optionsForElement(this.element)) ? r : {};
                    if (this.options = (0, n.Z)(!0, {}, o, a, null != e ? e : {}), this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, ""), this.options.forceFallback || !s.isBrowserSupported()) return this.options.fallback.call(this);
                    if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
                    if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    if (this.options.uploadMultiple && this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
                    if (this.options.binaryBody && this.options.uploadMultiple) throw new Error("You cannot set both: binaryBody and uploadMultiple.");
                    this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), null != this.options.renameFilename && (this.options.renameFile = t => this.options.renameFilename.call(this, t.name, t)), "string" == typeof this.options.method && (this.options.method = this.options.method.toUpperCase()), (i = this.getExistingFallback()) && i.parentNode && i.parentNode.removeChild(i), !1 !== this.options.previewsContainer && (this.options.previewsContainer ? this.previewsContainer = s.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (!0 === this.options.clickable ? this.clickableElements = [this.element] : this.clickableElements = s.getElements(this.options.clickable, "clickable")), this.init()
                }
            }
            s.initClass(), s.options = {}, s.optionsForElement = function(t) {
                return t.getAttribute("id") ? s.options[c(t.getAttribute("id"))] : void 0
            }, s.instances = [], s.forElement = function(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), null == (null != t ? t.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return t.dropzone
            }, s.discover = function() {
                let t;
                if (document.querySelectorAll) t = document.querySelectorAll(".dropzone");
                else {
                    t = [];
                    let e = e => (() => {
                        let i = [];
                        for (let n of e) /(^| )dropzone($| )/.test(n.className) ? i.push(t.push(n)) : i.push(void 0);
                        return i
                    })();
                    e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))
                }
                return (() => {
                    let e = [];
                    for (let i of t) !1 !== s.optionsForElement(i) ? e.push(new s(i)) : e.push(void 0);
                    return e
                })()
            }, s.blockedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], s.isBrowserSupported = function() {
                let t = !0;
                if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                    if ("classList" in document.createElement("a")) {
                        void 0 !== s.blacklistedBrowsers && (s.blockedBrowsers = s.blacklistedBrowsers);
                        for (let e of s.blockedBrowsers)
                            if (e.test(navigator.userAgent)) {
                                t = !1;
                                continue
                            }
                    } else t = !1;
                else t = !1;
                return t
            }, s.dataURItoBlob = function(t) {
                let e = atob(t.split(",")[1]),
                    i = t.split(",")[0].split(":")[1].split(";")[0],
                    n = new ArrayBuffer(e.length),
                    r = new Uint8Array(n);
                for (let t = 0, i = e.length, n = 0 <= i; n ? t <= i : t >= i; n ? t++ : t--) r[t] = e.charCodeAt(t);
                return new Blob([n], {
                    type: i
                })
            };
            const l = (t, e) => t.filter((t => t !== e)).map((t => t)),
                c = t => t.replace(/[\-_](\w)/g, (t => t.charAt(1).toUpperCase()));
            s.createElement = function(t) {
                let e = document.createElement("div");
                return e.innerHTML = t, e.childNodes[0]
            }, s.elementInside = function(t, e) {
                if (t === e) return !0;
                for (; t = t.parentNode;)
                    if (t === e) return !0;
                return !1
            }, s.getElement = function(t, e) {
                let i;
                if ("string" == typeof t ? i = document.querySelector(t) : null != t.nodeType && (i = t), null == i) throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector or a plain HTML element.`);
                return i
            }, s.getElements = function(t, e) {
                let i, n;
                if (t instanceof Array) {
                    n = [];
                    try {
                        for (i of t) n.push(this.getElement(i, e))
                    } catch (t) {
                        n = null
                    }
                } else if ("string" == typeof t)
                    for (i of (n = [], document.querySelectorAll(t))) n.push(i);
                else null != t.nodeType && (n = [t]);
                if (null == n || !n.length) throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
                return n
            }, s.confirm = function(t, e, i) {
                return window.confirm(t) ? e() : null != i ? i() : void 0
            }, s.isValidFile = function(t, e) {
                if (!e) return !0;
                e = e.split(",");
                let i = t.type,
                    n = i.replace(/\/.*$/, "");
                for (let r of e)
                    if (r = r.trim(), "." === r.charAt(0)) {
                        if (-1 !== t.name.toLowerCase().indexOf(r.toLowerCase(), t.name.length - r.length)) return !0
                    } else if (/\/\*$/.test(r)) {
                    if (n === r.replace(/\/.*$/, "")) return !0
                } else if (i === r) return !0;
                return !1
            }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(t) {
                return this.each((function() {
                    return new s(this, t)
                }))
            }), s.ADDED = "added", s.QUEUED = "queued", s.ACCEPTED = s.QUEUED, s.UPLOADING = "uploading", s.PROCESSING = s.UPLOADING, s.CANCELED = "canceled", s.ERROR = "error", s.SUCCESS = "success";
            var d = function(t, e, i, n, r, a, o, s, l, c) {
                let d = function(t) {
                    t.naturalWidth;
                    let e = t.naturalHeight,
                        i = document.createElement("canvas");
                    i.width = 1, i.height = e;
                    let n = i.getContext("2d");
                    n.drawImage(t, 0, 0);
                    let {
                        data: r
                    } = n.getImageData(1, 0, 1, e), a = 0, o = e, s = e;
                    for (; s > a;) 0 === r[4 * (s - 1) + 3] ? o = s : a = s, s = o + a >> 1;
                    let l = s / e;
                    return 0 === l ? 1 : l
                }(e);
                return t.drawImage(e, i, n, r, a, o, s, l, c / d)
            };
            class u {
                static initClass() {
                    this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
                static encode64(t) {
                    let e, i, n, r, a, o = "",
                        s = "",
                        l = "",
                        c = 0;
                    for (; e = t[c++], i = t[c++], s = t[c++], n = e >> 2, r = (3 & e) << 4 | i >> 4, a = (15 & i) << 2 | s >> 6, l = 63 & s, isNaN(i) ? a = l = 64 : isNaN(s) && (l = 64), o = o + this.KEY_STR.charAt(n) + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(l), e = i = s = "", n = r = a = l = "", c < t.length;);
                    return o
                }
                static restore(t, e) {
                    if (!t.match("data:image/jpeg;base64,")) return e;
                    let i = this.decode64(t.replace("data:image/jpeg;base64,", "")),
                        n = this.slice2Segments(i),
                        r = this.exifManipulation(e, n);
                    return `data:image/jpeg;base64,${this.encode64(r)}`
                }
                static exifManipulation(t, e) {
                    let i = this.getExifArray(e),
                        n = this.insertExif(t, i);
                    return new Uint8Array(n)
                }
                static getExifArray(t) {
                    let e, i = 0;
                    for (; i < t.length;) {
                        if (e = t[i], 255 === e[0] & 225 === e[1]) return e;
                        i++
                    }
                    return []
                }
                static insertExif(t, e) {
                    let i = t.replace("data:image/jpeg;base64,", ""),
                        n = this.decode64(i),
                        r = n.indexOf(255, 3),
                        a = n.slice(0, r),
                        o = n.slice(r),
                        s = a;
                    return s = s.concat(e), s = s.concat(o), s
                }
                static slice2Segments(t) {
                    let e = 0,
                        i = [];
                    for (;;) {
                        if (255 === t[e] & 218 === t[e + 1]) break;
                        if (255 === t[e] & 216 === t[e + 1]) e += 2;
                        else {
                            let n = e + (256 * t[e + 2] + t[e + 3]) + 2,
                                r = t.slice(e, n);
                            i.push(r), e = n
                        }
                        if (e > t.length) break
                    }
                    return i
                }
                static decode64(t) {
                    let e, i, n, r, a, o = "",
                        s = "",
                        l = 0,
                        c = [];
                    for (/[^A-Za-z0-9\+\/\=]/g.exec(t) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); n = this.KEY_STR.indexOf(t.charAt(l++)), r = this.KEY_STR.indexOf(t.charAt(l++)), a = this.KEY_STR.indexOf(t.charAt(l++)), s = this.KEY_STR.indexOf(t.charAt(l++)), e = n << 2 | r >> 4, i = (15 & r) << 4 | a >> 2, o = (3 & a) << 6 | s, c.push(e), 64 !== a && c.push(i), 64 !== s && c.push(o), e = i = o = "", n = r = a = s = "", l < t.length;);
                    return c
                }
            }
            u.initClass()
        }
    }
]);
//# sourceMappingURL=VoiceUniverse.js.map?v=514e969ded396f81