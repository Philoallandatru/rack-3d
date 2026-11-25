// \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = ":host{color:#2d2a24;width:100%;height:100%;font:500 14px/1.4 system-ui,Microsoft YaHei,sans-serif;display:block}*,:before,:after{box-sizing:border-box}[hidden]{display:none!important}.rack,.stage{width:100%;height:100%;min-height:280px}.stage{isolation:isolate;background:#ede8df;position:relative;overflow:hidden}canvas{touch-action:none;cursor:grab;width:100%;height:100%;display:block}canvas:active,canvas[data-cursor=dragging]{cursor:grabbing}canvas[data-cursor=device]{cursor:move}canvas[data-mode=walk]{cursor:grab}canvas:focus-visible{outline-offset:-3px;outline:2px solid #285d68}button{font:inherit;cursor:pointer}button:focus-visible{outline-offset:3px;outline:2px solid #285d68}button:disabled{cursor:default;opacity:.62}.markers{pointer-events:none;position:absolute;inset:0}.markers button{color:#302d27;white-space:nowrap;pointer-events:auto;background:#fffaf1;border:1px solid #b0a695;border-radius:5px;padding:4px 8px;font-weight:700;position:absolute;transform:translate(-50%,-100%)}.markers button:hover{background:#e6eedf}.view,.walk{background:#f5f0e8e8;border:1px solid #cec5b6;border-radius:8px;gap:5px;padding:4px;display:flex;position:absolute}.view{flex-wrap:wrap;justify-content:end;max-width:calc(100% - 16px);top:8px;right:8px}.walk{bottom:8px;right:8px}.view button,.walk button{color:#302d27;white-space:nowrap;background:0 0;border:1px solid #0000;border-radius:5px;min-width:34px;min-height:34px;padding:4px 7px}.walk button{touch-action:none}.view button:hover:not(:disabled),.walk button:hover{background:#e9e1d5}.view button[aria-pressed=true],.walk button:active{color:#fff9ef;background:#443c33}.status,.fallback{color:#302d27;pointer-events:none;background:#faf6eeed;border:1px solid #c4b9a9;border-radius:6px;max-width:calc(100% - 20px);padding:6px 8px;position:absolute;bottom:10px;left:10px}.stage:has(.walk:not([hidden])) .status{bottom:58px}@media (max-width:430px){.view button{min-width:26px;min-height:32px;padding-inline:5px}.view{gap:3px}}", r = /* @__PURE__ */ t({
	ACESFilmicToneMapping: () => 4,
	AddEquation: () => 100,
	AddOperation: () => 2,
	AdditiveAnimationBlendMode: () => Ke,
	AdditiveBlending: () => 2,
	AgXToneMapping: () => 6,
	AlphaFormat: () => N,
	AlwaysCompare: () => 519,
	AlwaysDepth: () => 1,
	AlwaysStencilFunc: () => 519,
	AmbientLight: () => tp,
	AnimationAction: () => Yp,
	AnimationClip: () => wf,
	AnimationLoader: () => Pf,
	AnimationMixer: () => Zp,
	AnimationObjectGroup: () => Jp,
	AnimationUtils: () => df,
	ArcCurve: () => uu,
	ArrayCamera: () => lc,
	ArrowHelper: () => Wm,
	AttachedBindMode: () => o,
	Audio: () => Op,
	AudioAnalyser: () => Pp,
	AudioContext: () => hp,
	AudioListener: () => Dp,
	AudioLoader: () => gp,
	AxesHelper: () => Gm,
	BackSide: () => 1,
	BasicDepthPacking: () => qe,
	BasicShadowMap: () => 0,
	BatchedMesh: () => Pl,
	Bone: () => rl,
	BooleanKeyframeTrack: () => _f,
	Box2: () => dm,
	Box3: () => On,
	Box3Helper: () => zm,
	BoxGeometry: () => Ni,
	BoxHelper: () => Rm,
	BufferAttribute: () => ri,
	BufferGeometry: () => Z,
	BufferGeometryLoader: () => cp,
	ByteType: () => S,
	Cache: () => Df,
	Camera: () => Hi,
	CameraHelper: () => Fm,
	CanvasTexture: () => su,
	CapsuleGeometry: () => Ru,
	CatmullRomCurve3: () => gu,
	CineonToneMapping: () => 3,
	CircleGeometry: () => zu,
	ClampToEdgeWrapping: () => l,
	Clock: () => xp,
	Color: () => Y,
	ColorKeyframeTrack: () => vf,
	ColorManagement: () => G,
	CompressedArrayTexture: () => au,
	CompressedCubeTexture: () => ou,
	CompressedTexture: () => iu,
	CompressedTextureLoader: () => Ff,
	ConeGeometry: () => Vu,
	ConstantAlphaFactor: () => 213,
	ConstantColorFactor: () => 211,
	Controls: () => qm,
	CubeCamera: () => Yi,
	CubeReflectionMapping: () => 301,
	CubeRefractionMapping: () => 302,
	CubeTexture: () => Xi,
	CubeTextureLoader: () => Lf,
	CubeUVReflectionMapping: () => 306,
	CubicBezierCurve: () => Du,
	CubicBezierCurve3: () => Ou,
	CubicInterpolant: () => pf,
	CullFaceBack: () => 1,
	CullFaceFront: () => 2,
	CullFaceFrontBack: () => 3,
	CullFaceNone: () => 0,
	Curve: () => cu,
	CurvePath: () => Fu,
	CustomBlending: () => 5,
	CustomToneMapping: () => 5,
	CylinderGeometry: () => Bu,
	Cylindrical: () => cm,
	Data3DTexture: () => Cn,
	DataArrayTexture: () => xn,
	DataTexture: () => il,
	DataTextureLoader: () => Rf,
	DataUtils: () => ei,
	DecrementStencilOp: () => it,
	DecrementWrapStencilOp: () => ot,
	DefaultLoadingManager: () => kf,
	DepthFormat: () => te,
	DepthStencilFormat: () => ne,
	DepthTexture: () => Ka,
	DetachedBindMode: () => s,
	DirectionalLight: () => ep,
	DirectionalLightHelper: () => Mm,
	DiscreteInterpolant: () => hf,
	DodecahedronGeometry: () => Uu,
	DoubleSide: () => 2,
	DstAlphaFactor: () => 206,
	DstColorFactor: () => 208,
	DynamicCopyUsage: () => ht,
	DynamicDrawUsage: () => lt,
	DynamicReadUsage: () => ft,
	EdgesGeometry: () => Ju,
	EllipseCurve: () => lu,
	EqualCompare: () => 514,
	EqualDepth: () => 4,
	EqualStencilFunc: () => 514,
	EquirectangularReflectionMapping: () => 303,
	EquirectangularRefractionMapping: () => 304,
	Euler: () => ur,
	EventDispatcher: () => bt,
	ExtrudeGeometry: () => jd,
	FileLoader: () => Nf,
	Float16BufferAttribute: () => di,
	Float32BufferAttribute: () => X,
	FloatType: () => D,
	Fog: () => Cc,
	FogExp2: () => Sc,
	FramebufferTexture: () => ru,
	FrontSide: () => 0,
	Frustum: () => ia,
	GLBufferAttribute: () => nm,
	GLSL1: () => "100",
	GLSL3: () => _t,
	GreaterCompare: () => 516,
	GreaterDepth: () => 6,
	GreaterEqualCompare: () => 518,
	GreaterEqualDepth: () => 5,
	GreaterEqualStencilFunc: () => 518,
	GreaterStencilFunc: () => 516,
	GridHelper: () => Dm,
	Group: () => uc,
	HalfFloatType: () => O,
	HemisphereLight: () => Vf,
	HemisphereLightHelper: () => Em,
	IcosahedronGeometry: () => Pd,
	ImageBitmapLoader: () => pp,
	ImageLoader: () => If,
	ImageUtils: () => pn,
	IncrementStencilOp: () => rt,
	IncrementWrapStencilOp: () => at,
	InstancedBufferAttribute: () => cl,
	InstancedBufferGeometry: () => sp,
	InstancedInterleavedBuffer: () => tm,
	InstancedMesh: () => gl,
	Int16BufferAttribute: () => si,
	Int32BufferAttribute: () => li,
	Int8BufferAttribute: () => ii,
	IntType: () => T,
	InterleavedBuffer: () => Tc,
	InterleavedBufferAttribute: () => Dc,
	Interpolant: () => ff,
	InterpolateDiscrete: () => ze,
	InterpolateLinear: () => Be,
	InterpolateSmooth: () => Ve,
	InvertStencilOp: () => st,
	KeepStencilOp: () => tt,
	KeyframeTrack: () => gf,
	LOD: () => Kc,
	LatheGeometry: () => Lu,
	Layers: () => dr,
	LessCompare: () => 513,
	LessDepth: () => 2,
	LessEqualCompare: () => 515,
	LessEqualDepth: () => 3,
	LessEqualStencilFunc: () => 515,
	LessStencilFunc: () => 513,
	Light: () => Bf,
	LightProbe: () => ip,
	Line: () => Ul,
	Line3: () => mm,
	LineBasicMaterial: () => Fl,
	LineCurve: () => ku,
	LineCurve3: () => Au,
	LineDashedMaterial: () => nf,
	LineLoop: () => Jl,
	LineSegments: () => ql,
	LinearFilter: () => g,
	LinearInterpolant: () => mf,
	LinearMipMapLinearFilter: () => b,
	LinearMipMapNearestFilter: () => v,
	LinearMipmapLinearFilter: () => y,
	LinearMipmapNearestFilter: () => _,
	LinearSRGBColorSpace: () => Qe,
	LinearToneMapping: () => 1,
	LinearTransfer: () => $e,
	Loader: () => Af,
	LoaderUtils: () => op,
	LoadingManager: () => Of,
	LoopOnce: () => Ie,
	LoopPingPong: () => Re,
	LoopRepeat: () => Le,
	LuminanceAlphaFormat: () => ee,
	LuminanceFormat: () => I,
	MOUSE: () => i,
	Material: () => Jr,
	MaterialLoader: () => ap,
	MathUtils: () => Kt,
	Matrix2: () => lm,
	Matrix3: () => W,
	Matrix4: () => J,
	MaxEquation: () => 104,
	Mesh: () => Ai,
	MeshBasicMaterial: () => Yr,
	MeshDepthMaterial: () => Js,
	MeshDistanceMaterial: () => Ys,
	MeshLambertMaterial: () => ef,
	MeshMatcapMaterial: () => tf,
	MeshNormalMaterial: () => $d,
	MeshPhongMaterial: () => Zd,
	MeshPhysicalMaterial: () => Xd,
	MeshStandardMaterial: () => Yd,
	MeshToonMaterial: () => Qd,
	MinEquation: () => 103,
	MirroredRepeatWrapping: () => u,
	MixOperation: () => 1,
	MultiplyBlending: () => 4,
	MultiplyOperation: () => 0,
	NearestFilter: () => d,
	NearestMipMapLinearFilter: () => h,
	NearestMipMapNearestFilter: () => p,
	NearestMipmapLinearFilter: () => m,
	NearestMipmapNearestFilter: () => f,
	NeutralToneMapping: () => 7,
	NeverCompare: () => 512,
	NeverDepth: () => 0,
	NeverStencilFunc: () => 512,
	NoBlending: () => 0,
	NoColorSpace: () => "",
	NoToneMapping: () => 0,
	NormalAnimationBlendMode: () => Ge,
	NormalBlending: () => 1,
	NotEqualCompare: () => 517,
	NotEqualDepth: () => 7,
	NotEqualStencilFunc: () => 517,
	NumberKeyframeTrack: () => yf,
	Object3D: () => Dr,
	ObjectLoader: () => lp,
	ObjectSpaceNormalMap: () => 1,
	OctahedronGeometry: () => Fd,
	OneFactor: () => 201,
	OneMinusConstantAlphaFactor: () => 214,
	OneMinusConstantColorFactor: () => 212,
	OneMinusDstAlphaFactor: () => 207,
	OneMinusDstColorFactor: () => 209,
	OneMinusSrcAlphaFactor: () => 205,
	OneMinusSrcColorFactor: () => 203,
	OrthographicCamera: () => va,
	PCFShadowMap: () => 1,
	PCFSoftShadowMap: () => 2,
	PMREMGenerator: () => ja,
	Path: () => Iu,
	PerspectiveCamera: () => Ki,
	Plane: () => ta,
	PlaneGeometry: () => sa,
	PlaneHelper: () => Bm,
	PointLight: () => Qf,
	PointLightHelper: () => Sm,
	Points: () => eu,
	PointsMaterial: () => Yl,
	PolarGridHelper: () => Om,
	PolyhedronGeometry: () => Hu,
	PositionalAudio: () => Np,
	PropertyBinding: () => qp,
	PropertyMixer: () => Fp,
	QuadraticBezierCurve: () => ju,
	QuadraticBezierCurve3: () => Mu,
	Quaternion: () => Tn,
	QuaternionKeyframeTrack: () => xf,
	QuaternionLinearInterpolant: () => bf,
	RED_GREEN_RGTC2_Format: () => Pe,
	RED_RGTC1_Format: () => Me,
	REVISION: () => "170",
	RGBADepthPacking: () => Je,
	RGBAFormat: () => F,
	RGBAIntegerFormat: () => se,
	RGBA_ASTC_10x10_Format: () => Ee,
	RGBA_ASTC_10x5_Format: () => Ce,
	RGBA_ASTC_10x6_Format: () => we,
	RGBA_ASTC_10x8_Format: () => Te,
	RGBA_ASTC_12x10_Format: () => De,
	RGBA_ASTC_12x12_Format: () => Oe,
	RGBA_ASTC_4x4_Format: () => _e,
	RGBA_ASTC_5x4_Format: () => B,
	RGBA_ASTC_5x5_Format: () => V,
	RGBA_ASTC_6x5_Format: () => ve,
	RGBA_ASTC_6x6_Format: () => ye,
	RGBA_ASTC_8x5_Format: () => be,
	RGBA_ASTC_8x6_Format: () => xe,
	RGBA_ASTC_8x8_Format: () => Se,
	RGBA_BPTC_Format: () => ke,
	RGBA_ETC2_EAC_Format: () => z,
	RGBA_PVRTC_2BPPV1_Format: () => me,
	RGBA_PVRTC_4BPPV1_Format: () => R,
	RGBA_S3TC_DXT1_Format: () => le,
	RGBA_S3TC_DXT3_Format: () => ue,
	RGBA_S3TC_DXT5_Format: () => de,
	RGBDepthPacking: () => Ye,
	RGBFormat: () => P,
	RGBIntegerFormat: () => oe,
	RGB_BPTC_SIGNED_Format: () => Ae,
	RGB_BPTC_UNSIGNED_Format: () => je,
	RGB_ETC1_Format: () => he,
	RGB_ETC2_Format: () => ge,
	RGB_PVRTC_2BPPV1_Format: () => pe,
	RGB_PVRTC_4BPPV1_Format: () => fe,
	RGB_S3TC_DXT1_Format: () => ce,
	RGDepthPacking: () => Xe,
	RGFormat: () => ae,
	RGIntegerFormat: () => L,
	RawShaderMaterial: () => Jd,
	Ray: () => er,
	Raycaster: () => im,
	RectAreaLight: () => np,
	RedFormat: () => re,
	RedIntegerFormat: () => ie,
	ReinhardToneMapping: () => 2,
	RenderTarget: () => yn,
	RepeatWrapping: () => c,
	ReplaceStencilOp: () => nt,
	ReverseSubtractEquation: () => 102,
	RingGeometry: () => Id,
	SIGNED_RED_GREEN_RGTC2_Format: () => Fe,
	SIGNED_RED_RGTC1_Format: () => Ne,
	SRGBColorSpace: () => Ze,
	SRGBTransfer: () => et,
	Scene: () => wc,
	ShaderChunk: () => Q,
	ShaderLib: () => ca,
	ShaderMaterial: () => Vi,
	ShadowMaterial: () => qd,
	Shape: () => Yu,
	ShapeGeometry: () => Ld,
	ShapePath: () => Km,
	ShapeUtils: () => Od,
	ShortType: () => C,
	Skeleton: () => sl,
	SkeletonHelper: () => bm,
	SkinnedMesh: () => nl,
	Source: () => hn,
	Sphere: () => Kn,
	SphereGeometry: () => zd,
	Spherical: () => sm,
	SphericalHarmonics3: () => rp,
	SplineCurve: () => Nu,
	SpotLight: () => qf,
	SpotLightHelper: () => gm,
	Sprite: () => Hc,
	SpriteMaterial: () => Oc,
	SrcAlphaFactor: () => 204,
	SrcAlphaSaturateFactor: () => 210,
	SrcColorFactor: () => 202,
	StaticCopyUsage: () => mt,
	StaticDrawUsage: () => ct,
	StaticReadUsage: () => dt,
	StereoCamera: () => bp,
	StreamCopyUsage: () => gt,
	StreamDrawUsage: () => ut,
	StreamReadUsage: () => pt,
	StringKeyframeTrack: () => Sf,
	SubtractEquation: () => 101,
	SubtractiveBlending: () => 3,
	TOUCH: () => a,
	TangentSpaceNormalMap: () => 0,
	TetrahedronGeometry: () => Bd,
	Texture: () => vn,
	TextureLoader: () => zf,
	TextureUtils: () => oc,
	TorusGeometry: () => Vd,
	TorusKnotGeometry: () => Hd,
	Triangle: () => Vr,
	TriangleFanDrawMode: () => 2,
	TriangleStripDrawMode: () => 1,
	TrianglesDrawMode: () => 0,
	TubeGeometry: () => Ud,
	UVMapping: () => 300,
	Uint16BufferAttribute: () => ci,
	Uint32BufferAttribute: () => ui,
	Uint8BufferAttribute: () => ai,
	Uint8ClampedBufferAttribute: () => oi,
	Uniform: () => Qp,
	UniformsGroup: () => em,
	UniformsLib: () => $,
	UniformsUtils: () => Ri,
	UnsignedByteType: () => x,
	UnsignedInt248Type: () => j,
	UnsignedInt5999Type: () => M,
	UnsignedIntType: () => E,
	UnsignedShort4444Type: () => k,
	UnsignedShort5551Type: () => A,
	UnsignedShortType: () => w,
	VSMShadowMap: () => 3,
	Vector2: () => U,
	Vector3: () => q,
	Vector4: () => K,
	VectorKeyframeTrack: () => Cf,
	VideoTexture: () => nu,
	WebGL3DRenderTarget: () => wn,
	WebGLArrayRenderTarget: () => Sn,
	WebGLCoordinateSystem: () => vt,
	WebGLCubeRenderTarget: () => Zi,
	WebGLMultipleRenderTargets: () => Jm,
	WebGLRenderTarget: () => bn,
	WebGLRenderer: () => xc,
	WebGLUtils: () => cc,
	WebGPUCoordinateSystem: () => yt,
	WireframeGeometry: () => Wd,
	WrapAroundEnding: () => We,
	ZeroCurvatureEnding: () => He,
	ZeroFactor: () => 200,
	ZeroSlopeEnding: () => Ue,
	ZeroStencilOp: () => 0,
	createCanvasElement: () => Qt
}), i = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, a = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, o = "attached", s = "detached", c = 1e3, l = 1001, u = 1002, d = 1003, f = 1004, p = 1004, m = 1005, h = 1005, g = 1006, _ = 1007, v = 1007, y = 1008, b = 1008, x = 1009, S = 1010, C = 1011, w = 1012, T = 1013, E = 1014, D = 1015, O = 1016, k = 1017, A = 1018, j = 1020, M = 35902, N = 1021, P = 1022, F = 1023, I = 1024, ee = 1025, te = 1026, ne = 1027, re = 1028, ie = 1029, ae = 1030, L = 1031, oe = 1032, se = 1033, ce = 33776, le = 33777, ue = 33778, de = 33779, fe = 35840, pe = 35841, R = 35842, me = 35843, he = 36196, ge = 37492, z = 37496, _e = 37808, B = 37809, V = 37810, ve = 37811, ye = 37812, be = 37813, xe = 37814, Se = 37815, Ce = 37816, we = 37817, Te = 37818, Ee = 37819, De = 37820, Oe = 37821, ke = 36492, Ae = 36494, je = 36495, Me = 36283, Ne = 36284, Pe = 36285, Fe = 36286, Ie = 2200, Le = 2201, Re = 2202, ze = 2300, Be = 2301, Ve = 2302, He = 2400, Ue = 2401, We = 2402, Ge = 2500, Ke = 2501, qe = 3200, Je = 3201, Ye = 3202, Xe = 3203, Ze = "srgb", Qe = "srgb-linear", $e = "linear", et = "srgb", tt = 7680, nt = 7681, rt = 7682, it = 7683, at = 34055, ot = 34056, st = 5386, ct = 35044, lt = 35048, ut = 35040, dt = 35045, ft = 35049, pt = 35041, mt = 35046, ht = 35050, gt = 35042, _t = "300 es", vt = 2e3, yt = 2001, bt = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		if (this._listeners === void 0) return !1;
		let n = this._listeners;
		return n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		if (this._listeners === void 0) return;
		let n = this._listeners[e];
		if (n !== void 0) {
			let e = n.indexOf(t);
			e !== -1 && n.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		if (this._listeners === void 0) return;
		let t = this._listeners[e.type];
		if (t !== void 0) {
			e.target = this;
			let n = t.slice(0);
			for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
			e.target = null;
		}
	}
}, xt = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), St = 1234567, Ct = Math.PI / 180, wt = 180 / Math.PI;
function Tt() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (xt[e & 255] + xt[e >> 8 & 255] + xt[e >> 16 & 255] + xt[e >> 24 & 255] + "-" + xt[t & 255] + xt[t >> 8 & 255] + "-" + xt[t >> 16 & 15 | 64] + xt[t >> 24 & 255] + "-" + xt[n & 63 | 128] + xt[n >> 8 & 255] + "-" + xt[n >> 16 & 255] + xt[n >> 24 & 255] + xt[r & 255] + xt[r >> 8 & 255] + xt[r >> 16 & 255] + xt[r >> 24 & 255]).toLowerCase();
}
function Et(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function Dt(e, t) {
	return (e % t + t) % t;
}
function Ot(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function kt(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function At(e, t, n) {
	return (1 - n) * e + n * t;
}
function jt(e, t, n, r) {
	return At(e, t, 1 - Math.exp(-n * r));
}
function Mt(e, t = 1) {
	return t - Math.abs(Dt(e, t * 2) - t);
}
function Nt(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function Pt(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function Ft(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function It(e, t) {
	return e + Math.random() * (t - e);
}
function Lt(e) {
	return e * (.5 - Math.random());
}
function Rt(e) {
	e !== void 0 && (St = e);
	let t = St += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function zt(e) {
	return e * Ct;
}
function Bt(e) {
	return e * wt;
}
function Vt(e) {
	return !(e & e - 1) && e !== 0;
}
function Ht(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function Ut(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function Wt(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function Gt(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("Invalid component type.");
	}
}
function H(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("Invalid component type.");
	}
}
var Kt = {
	DEG2RAD: Ct,
	RAD2DEG: wt,
	generateUUID: Tt,
	clamp: Et,
	euclideanModulo: Dt,
	mapLinear: Ot,
	inverseLerp: kt,
	lerp: At,
	damp: jt,
	pingpong: Mt,
	smoothstep: Nt,
	smootherstep: Pt,
	randInt: Ft,
	randFloat: It,
	randFloatSpread: Lt,
	seededRandom: Rt,
	degToRad: zt,
	radToDeg: Bt,
	isPowerOfTwo: Vt,
	ceilPowerOfTwo: Ht,
	floorPowerOfTwo: Ut,
	setQuaternionFromProperEuler: Wt,
	normalize: H,
	denormalize: Gt
}, U = class e {
	constructor(t = 0, n = 0) {
		e.prototype.isVector2 = !0, this.x = t, this.y = n;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(Et(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, W = class e {
	constructor(t, n, r, i, a, o, s, c, l) {
		e.prototype.isMatrix3 = !0, this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i, a, o, s, c, l);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return this.premultiply(qt.makeScale(e, t)), this;
	}
	rotate(e) {
		return this.premultiply(qt.makeRotation(-e)), this;
	}
	translate(e, t) {
		return this.premultiply(qt.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, qt = /*@__PURE__*/ new W();
function Jt(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
var Yt = {
	Int8Array,
	Uint8Array,
	Uint8ClampedArray,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array
};
function Xt(e, t) {
	return new Yt[e](t);
}
function Zt(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function Qt() {
	let e = Zt("canvas");
	return e.style.display = "block", e;
}
var $t = {};
function en(e) {
	e in $t || ($t[e] = !0, console.warn(e));
}
function tn(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
function nn(e) {
	let t = e.elements;
	t[2] = .5 * t[2] + .5 * t[3], t[6] = .5 * t[6] + .5 * t[7], t[10] = .5 * t[10] + .5 * t[11], t[14] = .5 * t[14] + .5 * t[15];
}
function rn(e) {
	let t = e.elements;
	t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
var G = {
	enabled: !0,
	workingColorSpace: Qe,
	spaces: {},
	convert: function(e, t, n) {
		return this.enabled === !1 || t === n || !t || !n || (this.spaces[t].transfer === "srgb" && (e.r = an(e.r), e.g = an(e.g), e.b = an(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = on(e.r), e.g = on(e.g), e.b = on(e.b))), e;
	},
	fromWorkingColorSpace: function(e, t) {
		return this.convert(e, this.workingColorSpace, t);
	},
	toWorkingColorSpace: function(e, t) {
		return this.convert(e, t, this.workingColorSpace);
	},
	getPrimaries: function(e) {
		return this.spaces[e].primaries;
	},
	getTransfer: function(e) {
		return e === "" ? $e : this.spaces[e].transfer;
	},
	getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
		return e.fromArray(this.spaces[t].luminanceCoefficients);
	},
	define: function(e) {
		Object.assign(this.spaces, e);
	},
	_getMatrix: function(e, t, n) {
		return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
	},
	_getDrawingBufferColorSpace: function(e) {
		return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
	},
	_getUnpackColorSpace: function(e = this.workingColorSpace) {
		return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
	}
};
function an(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function on(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var sn = [
	.64,
	.33,
	.3,
	.6,
	.15,
	.06
], cn = [
	.2126,
	.7152,
	.0722
], ln = [.3127, .329], un = /*@__PURE__*/ new W().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), dn = /*@__PURE__*/ new W().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
G.define({
	[Qe]: {
		primaries: sn,
		whitePoint: ln,
		transfer: $e,
		toXYZ: un,
		fromXYZ: dn,
		luminanceCoefficients: cn,
		workingColorSpaceConfig: { unpackColorSpace: Ze },
		outputColorSpaceConfig: { drawingBufferColorSpace: Ze }
	},
	[Ze]: {
		primaries: sn,
		whitePoint: ln,
		transfer: et,
		toXYZ: un,
		fromXYZ: dn,
		luminanceCoefficients: cn,
		outputColorSpaceConfig: { drawingBufferColorSpace: Ze }
	}
});
var fn, pn = class {
	static getDataURL(e) {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let t;
		if (e instanceof HTMLCanvasElement) t = e;
		else {
			fn === void 0 && (fn = Zt("canvas")), fn.width = e.width, fn.height = e.height;
			let n = fn.getContext("2d");
			e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = fn;
		}
		return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png");
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Zt("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = an(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		}
		if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(an(t[e] / 255) * 255) : t[e] = an(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		}
		return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, mn = 0, hn = class {
	constructor(e = null) {
		this.isSource = !0, Object.defineProperty(this, "id", { value: mn++ }), this.uuid = Tt(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(gn(r[t].image)) : e.push(gn(r[t]));
			} else e = gn(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function gn(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? pn.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
var _n = 0, vn = class e extends bt {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = l, i = l, a = g, o = y, s = F, c = x, u = e.DEFAULT_ANISOTROPY, d = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: _n++ }), this.uuid = Tt(), this.name = "", this.source = new hn(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = u, this.format = s, this.internalFormat = null, this.type = c, this.offset = new U(0, 0), this.repeat = new U(1, 1), this.center = new U(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new W(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
	}
	get image() {
		return this.source.data;
	}
	set image(e = null) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.6,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case c:
				e.x -= Math.floor(e.x);
				break;
			case l:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case u: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case c:
				e.y -= Math.floor(e.y);
				break;
			case l:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case u: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
vn.DEFAULT_IMAGE = null, vn.DEFAULT_MAPPING = 300, vn.DEFAULT_ANISOTROPY = 1;
var K = class e {
	constructor(t = 0, n = 0, r = 0, i = 1) {
		e.prototype.isVector4 = !0, this.x = t, this.y = n, this.z = r, this.w = i;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, yn = class extends bt {
	constructor(e = 1, t = 1, n = {}) {
		super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new K(0, 0, e, t), this.scissorTest = !1, this.viewport = new K(0, 0, e, t);
		let r = {
			width: e,
			height: t,
			depth: 1
		};
		n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: g,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1
		}, n);
		let i = new vn(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
		i.flipY = !1, i.generateMipmaps = n.generateMipmaps, i.internalFormat = n.internalFormat, this.textures = [];
		let a = n.count;
		for (let e = 0; e < a; e++) this.textures[e] = i.clone(), this.textures[e].isRenderTargetTexture = !0;
		this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n;
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0;
		let t = Object.assign({}, e.texture.image);
		return this.texture.source = new hn(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, bn = class extends yn {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, xn = class extends vn {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = d, this.minFilter = d, this.wrapR = l, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, Sn = class extends bn {
	constructor(e = 1, t = 1, n = 1, r = {}) {
		super(e, t, r), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new xn(null, e, t, n), this.texture.isRenderTargetTexture = !0;
	}
}, Cn = class extends vn {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = d, this.minFilter = d, this.wrapR = l, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, wn = class extends bn {
	constructor(e = 1, t = 1, n = 1, r = {}) {
		super(e, t, r), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new Cn(null, e, t, n), this.texture.isRenderTargetTexture = !0;
	}
}, Tn = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (o === 0) e[t + 0] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
		else if (o === 1) e[t + 0] = d, e[t + 1] = f, e[t + 2] = p, e[t + 3] = m;
		else {
			if (u !== m || s !== d || c !== f || l !== p) {
				let e = 1 - o, t = s * d + c * f + l * p + u * m, n = t >= 0 ? 1 : -1, r = 1 - t * t;
				if (r > 2 ** -52) {
					let i = Math.sqrt(r), a = Math.atan2(i, t * n);
					e = Math.sin(e * a) / i, o = Math.sin(o * a) / i;
				}
				let i = o * n;
				if (s = s * e + d * i, c = c * e + f * i, l = l * e + p * i, u = u * e + m * i, e === 1 - o) {
					let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
					s *= e, c *= e, l *= e, u *= e;
				}
			}
			e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
		}
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 2 ** -52 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(Et(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		if (t === 0) return this;
		if (t === 1) return this.copy(e);
		let n = this._x, r = this._y, i = this._z, a = this._w, o = a * e._w + n * e._x + r * e._y + i * e._z;
		if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = i, this;
		let s = 1 - o * o;
		if (s <= 2 ** -52) {
			let e = 1 - t;
			return this._w = e * a + t * this._w, this._x = e * n + t * this._x, this._y = e * r + t * this._y, this._z = e * i + t * this._z, this.normalize(), this;
		}
		let c = Math.sqrt(s), l = Math.atan2(c, o), u = Math.sin((1 - t) * l) / c, d = Math.sin(t * l) / c;
		return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = r * u + this._y * d, this._z = i * u + this._z * d, this._onChangeCallback(), this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, q = class e {
	constructor(t = 0, n = 0, r = 0) {
		e.prototype.isVector3 = !0, this.x = t, this.y = n, this.z = r;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(Dn.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(Dn.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return En.copy(this).projectOnVector(e), this.sub(En);
	}
	reflect(e) {
		return this.sub(En.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(Et(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, En = /*@__PURE__*/ new q(), Dn = /*@__PURE__*/ new Tn(), On = class {
	constructor(e = new q(Infinity, Infinity, Infinity), t = new q(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(An.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(An.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = An.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, An) : An.fromBufferAttribute(r, t), An.applyMatrix4(e.matrixWorld), this.expandByPoint(An);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), jn.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), jn.copy(e.boundingBox)), jn.applyMatrix4(e.matrixWorld), this.union(jn);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, An), An.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(Rn), zn.subVectors(this.max, Rn), Mn.subVectors(e.a, Rn), Nn.subVectors(e.b, Rn), Pn.subVectors(e.c, Rn), Fn.subVectors(Nn, Mn), In.subVectors(Pn, Nn), Ln.subVectors(Mn, Pn);
		let t = [
			0,
			-Fn.z,
			Fn.y,
			0,
			-In.z,
			In.y,
			0,
			-Ln.z,
			Ln.y,
			Fn.z,
			0,
			-Fn.x,
			In.z,
			0,
			-In.x,
			Ln.z,
			0,
			-Ln.x,
			-Fn.y,
			Fn.x,
			0,
			-In.y,
			In.x,
			0,
			-Ln.y,
			Ln.x,
			0
		];
		return !Hn(t, Mn, Nn, Pn, zn) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !Hn(t, Mn, Nn, Pn, zn)) ? !1 : (Bn.crossVectors(Fn, In), t = [
			Bn.x,
			Bn.y,
			Bn.z
		], Hn(t, Mn, Nn, Pn, zn));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, An).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(An).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() || (kn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), kn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), kn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), kn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), kn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), kn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), kn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), kn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(kn)), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
}, kn = [
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q()
], An = /*@__PURE__*/ new q(), jn = /*@__PURE__*/ new On(), Mn = /*@__PURE__*/ new q(), Nn = /*@__PURE__*/ new q(), Pn = /*@__PURE__*/ new q(), Fn = /*@__PURE__*/ new q(), In = /*@__PURE__*/ new q(), Ln = /*@__PURE__*/ new q(), Rn = /*@__PURE__*/ new q(), zn = /*@__PURE__*/ new q(), Bn = /*@__PURE__*/ new q(), Vn = /*@__PURE__*/ new q();
function Hn(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		Vn.fromArray(e, a);
		let o = i.x * Math.abs(Vn.x) + i.y * Math.abs(Vn.y) + i.z * Math.abs(Vn.z), s = t.dot(Vn), c = n.dot(Vn), l = r.dot(Vn);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var Un = /*@__PURE__*/ new On(), Wn = /*@__PURE__*/ new q(), Gn = /*@__PURE__*/ new q(), Kn = class {
	constructor(e = new q(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? Un.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		Wn.subVectors(e, this.center);
		let t = Wn.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(Wn, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Gn.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Wn.copy(e.center).add(Gn)), this.expandByPoint(Wn.copy(e.center).sub(Gn))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, qn = /*@__PURE__*/ new q(), Jn = /*@__PURE__*/ new q(), Yn = /*@__PURE__*/ new q(), Xn = /*@__PURE__*/ new q(), Zn = /*@__PURE__*/ new q(), Qn = /*@__PURE__*/ new q(), $n = /*@__PURE__*/ new q(), er = class {
	constructor(e = new q(), t = new q(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, qn)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = qn.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (qn.copy(this.origin).addScaledVector(this.direction, t), qn.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		Jn.copy(e).add(t).multiplyScalar(.5), Yn.copy(t).sub(e).normalize(), Xn.copy(this.origin).sub(Jn);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(Yn), o = Xn.dot(this.direction), s = -Xn.dot(Yn), c = Xn.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) {
			if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) {
				if (d >= -p) {
					if (d <= p) {
						let e = 1 / l;
						u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
					} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
				} else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
			} else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		} else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(Jn).addScaledVector(Yn, d), f;
	}
	intersectSphere(e, t) {
		qn.subVectors(e.center, this.origin);
		let n = qn.dot(this.direction), r = qn.dot(qn) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, qn) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		Zn.subVectors(t, e), Qn.subVectors(n, e), $n.crossVectors(Zn, Qn);
		let a = this.direction.dot($n), o;
		if (a > 0) {
			if (r) return null;
			o = 1;
		} else if (a < 0) o = -1, a = -a;
		else return null;
		Xn.subVectors(this.origin, e);
		let s = o * this.direction.dot(Qn.crossVectors(Xn, Qn));
		if (s < 0) return null;
		let c = o * this.direction.dot(Zn.cross(Xn));
		if (c < 0 || s + c > a) return null;
		let l = -o * Xn.dot($n);
		return l < 0 ? null : this.at(l / a, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, J = class e {
	constructor(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		e.prototype.isMatrix4 = !0, this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		let t = this.elements, n = e.elements, r = 1 / tr.setFromMatrixColumn(e, 0).length(), i = 1 / tr.setFromMatrixColumn(e, 1).length(), a = 1 / tr.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(rr, e, ir);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return sr.subVectors(e, t), sr.lengthSq() === 0 && (sr.z = 1), sr.normalize(), ar.crossVectors(n, sr), ar.lengthSq() === 0 && (Math.abs(n.z) === 1 ? sr.x += 1e-4 : sr.z += 1e-4, sr.normalize(), ar.crossVectors(n, sr)), ar.normalize(), or.crossVectors(sr, ar), r[0] = ar.x, r[4] = or.x, r[8] = sr.x, r[1] = ar.y, r[5] = or.y, r[9] = sr.y, r[2] = ar.z, r[6] = or.z, r[10] = sr.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], M = r[14], N = r[3], P = r[7], F = r[11], I = r[15];
		return i[0] = a * x + o * T + s * k + c * N, i[4] = a * S + o * E + s * A + c * P, i[8] = a * C + o * D + s * j + c * F, i[12] = a * w + o * O + s * M + c * I, i[1] = l * x + u * T + d * k + f * N, i[5] = l * S + u * E + d * A + f * P, i[9] = l * C + u * D + d * j + f * F, i[13] = l * w + u * O + d * M + f * I, i[2] = p * x + m * T + h * k + g * N, i[6] = p * S + m * E + h * A + g * P, i[10] = p * C + m * D + h * j + g * F, i[14] = p * w + m * O + h * M + g * I, i[3] = _ * x + v * T + y * k + b * N, i[7] = _ * S + v * E + y * A + b * P, i[11] = _ * C + v * D + y * j + b * F, i[15] = _ * w + v * O + y * M + b * I, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15];
		return p * (+i * s * u - r * c * u - i * o * d + n * c * d + r * o * f - n * s * f) + m * (+t * s * f - t * c * d + i * a * d - r * a * f + r * c * l - i * s * l) + h * (+t * c * u - t * o * f - i * a * u + n * a * f + i * o * l - n * c * l) + g * (-r * o * l - t * s * u + t * o * d + r * a * u - n * a * d + n * s * l);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = u * h * c - m * d * c + m * s * f - o * h * f - u * s * g + o * d * g, v = p * d * c - l * h * c - p * s * f + a * h * f + l * s * g - a * d * g, y = l * m * c - p * u * c + p * o * f - a * m * f - l * o * g + a * u * g, b = p * u * s - l * m * s - p * o * d + a * m * d + l * o * h - a * u * h, x = t * _ + n * v + r * y + i * b;
		if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let S = 1 / x;
		return e[0] = _ * S, e[1] = (m * d * i - u * h * i - m * r * f + n * h * f + u * r * g - n * d * g) * S, e[2] = (o * h * i - m * s * i + m * r * c - n * h * c - o * r * g + n * s * g) * S, e[3] = (u * s * i - o * d * i - u * r * c + n * d * c + o * r * f - n * s * f) * S, e[4] = v * S, e[5] = (l * h * i - p * d * i + p * r * f - t * h * f - l * r * g + t * d * g) * S, e[6] = (p * s * i - a * h * i - p * r * c + t * h * c + a * r * g - t * s * g) * S, e[7] = (a * d * i - l * s * i + l * r * c - t * d * c - a * r * f + t * s * f) * S, e[8] = y * S, e[9] = (p * u * i - l * m * i - p * n * f + t * m * f + l * n * g - t * u * g) * S, e[10] = (a * m * i - p * o * i + p * n * c - t * m * c - a * n * g + t * o * g) * S, e[11] = (l * o * i - a * u * i - l * n * c + t * u * c + a * n * f - t * o * f) * S, e[12] = b * S, e[13] = (l * m * r - p * u * r + p * n * d - t * m * d - l * n * h + t * u * h) * S, e[14] = (p * o * r - a * m * r - p * n * s + t * m * s + a * n * h - t * o * h) * S, e[15] = (a * u * r - l * o * r + l * n * s - t * u * s - a * n * d + t * o * d) * S, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements, i = tr.set(r[0], r[1], r[2]).length(), a = tr.set(r[4], r[5], r[6]).length(), o = tr.set(r[8], r[9], r[10]).length();
		this.determinant() < 0 && (i = -i), e.x = r[12], e.y = r[13], e.z = r[14], nr.copy(this);
		let s = 1 / i, c = 1 / a, l = 1 / o;
		return nr.elements[0] *= s, nr.elements[1] *= s, nr.elements[2] *= s, nr.elements[4] *= c, nr.elements[5] *= c, nr.elements[6] *= c, nr.elements[8] *= l, nr.elements[9] *= l, nr.elements[10] *= l, t.setFromRotationMatrix(nr), n.x = i, n.y = a, n.z = o, this;
	}
	makePerspective(e, t, n, r, i, a, o = vt) {
		let s = this.elements, c = 2 * i / (t - e), l = 2 * i / (n - r), u = (t + e) / (t - e), d = (n + r) / (n - r), f, p;
		if (o === 2e3) f = -(a + i) / (a - i), p = -2 * a * i / (a - i);
		else if (o === 2001) f = -a / (a - i), p = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return s[0] = c, s[4] = 0, s[8] = u, s[12] = 0, s[1] = 0, s[5] = l, s[9] = d, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = f, s[14] = p, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = vt) {
		let s = this.elements, c = 1 / (t - e), l = 1 / (n - r), u = 1 / (a - i), d = (t + e) * c, f = (n + r) * l, p, m;
		if (o === 2e3) p = (a + i) * u, m = -2 * u;
		else if (o === 2001) p = i * u, m = -1 * u;
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return s[0] = 2 * c, s[4] = 0, s[8] = 0, s[12] = -d, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -f, s[2] = 0, s[6] = 0, s[10] = m, s[14] = -p, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, tr = /*@__PURE__*/ new q(), nr = /*@__PURE__*/ new J(), rr = /*@__PURE__*/ new q(0, 0, 0), ir = /*@__PURE__*/ new q(1, 1, 1), ar = /*@__PURE__*/ new q(), or = /*@__PURE__*/ new q(), sr = /*@__PURE__*/ new q(), cr = /*@__PURE__*/ new J(), lr = /*@__PURE__*/ new Tn(), ur = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(Et(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-Et(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(Et(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-Et(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(Et(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-Et(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return cr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(cr, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return lr.setFromEuler(this), this.setFromQuaternion(lr, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
ur.DEFAULT_ORDER = "XYZ";
var dr = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = 1 << e >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e;
	}
	disable(e) {
		this.mask &= ~(1 << e);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return !!(this.mask & 1 << e);
	}
}, fr = 0, pr = /*@__PURE__*/ new q(), mr = /*@__PURE__*/ new Tn(), hr = /*@__PURE__*/ new J(), gr = /*@__PURE__*/ new q(), _r = /*@__PURE__*/ new q(), vr = /*@__PURE__*/ new q(), yr = /*@__PURE__*/ new Tn(), br = /*@__PURE__*/ new q(1, 0, 0), xr = /*@__PURE__*/ new q(0, 1, 0), Sr = /*@__PURE__*/ new q(0, 0, 1), Cr = { type: "added" }, wr = { type: "removed" }, Tr = {
	type: "childadded",
	child: null
}, Er = {
	type: "childremoved",
	child: null
}, Dr = class e extends bt {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: fr++ }), this.uuid = Tt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new q(), n = new ur(), r = new Tn(), i = new q(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new J() },
			normalMatrix: { value: new W() }
		}), this.matrix = new J(), this.matrixWorld = new J(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new dr(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return mr.setFromAxisAngle(e, t), this.quaternion.multiply(mr), this;
	}
	rotateOnWorldAxis(e, t) {
		return mr.setFromAxisAngle(e, t), this.quaternion.premultiply(mr), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(br, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(xr, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(Sr, e);
	}
	translateOnAxis(e, t) {
		return pr.copy(e).applyQuaternion(this.quaternion), this.position.add(pr.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(br, e);
	}
	translateY(e) {
		return this.translateOnAxis(xr, e);
	}
	translateZ(e) {
		return this.translateOnAxis(Sr, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(hr.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? gr.copy(e) : gr.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), _r.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? hr.lookAt(_r, gr, this.up) : hr.lookAt(gr, _r, this.up), this.quaternion.setFromRotationMatrix(hr), r && (hr.extractRotation(r.matrixWorld), mr.setFromRotationMatrix(hr), this.quaternion.premultiply(mr.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Cr), Tr.child = e, this.dispatchEvent(Tr), Tr.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(wr), Er.child = e, this.dispatchEvent(Er), Er.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), hr.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), hr.multiply(e.parent.matrixWorld)), e.applyMatrix4(hr), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Cr), Tr.child = e, this.dispatchEvent(Tr), Tr.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_r, e, vr), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_r, yr, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t) {
		let n = this.parent;
		if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
			let e = this.children;
			for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.6,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((e) => ({
			boxInitialized: e.boxInitialized,
			boxMin: e.box.min.toArray(),
			boxMax: e.box.max.toArray(),
			sphereInitialized: e.sphereInitialized,
			sphereRadius: e.sphere.radius,
			sphereCenter: e.sphere.center.toArray()
		})), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = {
			center: r.boundingSphere.center.toArray(),
			radius: r.boundingSphere.radius
		}), this.boundingBox !== null && (r.boundingBox = {
			min: r.boundingBox.min.toArray(),
			max: r.boundingBox.max.toArray()
		}));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) {
			if (Array.isArray(this.material)) {
				let t = [];
				for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
				r.material = t;
			} else r.material = i(e.materials, this.material);
		}
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
};
Dr.DEFAULT_UP = /*@__PURE__*/ new q(0, 1, 0), Dr.DEFAULT_MATRIX_AUTO_UPDATE = !0, Dr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Or = /*@__PURE__*/ new q(), kr = /*@__PURE__*/ new q(), Ar = /*@__PURE__*/ new q(), jr = /*@__PURE__*/ new q(), Mr = /*@__PURE__*/ new q(), Nr = /*@__PURE__*/ new q(), Pr = /*@__PURE__*/ new q(), Fr = /*@__PURE__*/ new q(), Ir = /*@__PURE__*/ new q(), Lr = /*@__PURE__*/ new q(), Rr = /*@__PURE__*/ new K(), zr = /*@__PURE__*/ new K(), Br = /*@__PURE__*/ new K(), Vr = class e {
	constructor(e = new q(), t = new q(), n = new q()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), Or.subVectors(e, t), r.cross(Or);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		Or.subVectors(r, t), kr.subVectors(n, t), Ar.subVectors(e, t);
		let a = Or.dot(Or), o = Or.dot(kr), s = Or.dot(Ar), c = kr.dot(kr), l = kr.dot(Ar), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, jr) !== null && jr.x >= 0 && jr.y >= 0 && jr.x + jr.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, jr) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, jr.x), s.addScaledVector(a, jr.y), s.addScaledVector(o, jr.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return Rr.setScalar(0), zr.setScalar(0), Br.setScalar(0), Rr.fromBufferAttribute(e, t), zr.fromBufferAttribute(e, n), Br.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Rr, i.x), a.addScaledVector(zr, i.y), a.addScaledVector(Br, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return Or.subVectors(n, t), kr.subVectors(e, t), Or.cross(kr).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return Or.subVectors(this.c, this.b), kr.subVectors(this.a, this.b), Or.cross(kr).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		Mr.subVectors(r, n), Nr.subVectors(i, n), Fr.subVectors(e, n);
		let s = Mr.dot(Fr), c = Nr.dot(Fr);
		if (s <= 0 && c <= 0) return t.copy(n);
		Ir.subVectors(e, r);
		let l = Mr.dot(Ir), u = Nr.dot(Ir);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(Mr, a);
		Lr.subVectors(e, i);
		let f = Mr.dot(Lr), p = Nr.dot(Lr);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(Nr, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return Pr.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(Pr, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(Mr, a).addScaledVector(Nr, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, Hr = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, Ur = {
	h: 0,
	s: 0,
	l: 0
}, Wr = {
	h: 0,
	s: 0,
	l: 0
};
function Gr(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Y = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = Ze) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, G.toWorkingColorSpace(this, t), this;
	}
	setRGB(e, t, n, r = G.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, G.toWorkingColorSpace(this, r), this;
	}
	setHSL(e, t, n, r = G.workingColorSpace) {
		if (e = Dt(e, 1), t = Et(t, 0, 1), n = Et(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = Gr(i, r, e + 1 / 3), this.g = Gr(i, r, e), this.b = Gr(i, r, e - 1 / 3);
		}
		return G.toWorkingColorSpace(this, r), this;
	}
	setStyle(e, t = Ze) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: console.warn("THREE.Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			console.warn("THREE.Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = Ze) {
		let n = Hr[e.toLowerCase()];
		return n === void 0 ? console.warn("THREE.Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = an(e.r), this.g = an(e.g), this.b = an(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = on(e.r), this.g = on(e.g), this.b = on(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = Ze) {
		return G.fromWorkingColorSpace(Kr.copy(this), e), Math.round(Et(Kr.r * 255, 0, 255)) * 65536 + Math.round(Et(Kr.g * 255, 0, 255)) * 256 + Math.round(Et(Kr.b * 255, 0, 255));
	}
	getHexString(e = Ze) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = G.workingColorSpace) {
		G.fromWorkingColorSpace(Kr.copy(this), t);
		let n = Kr.r, r = Kr.g, i = Kr.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i: s = (n - r) / e + 4;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = G.workingColorSpace) {
		return G.fromWorkingColorSpace(Kr.copy(this), t), e.r = Kr.r, e.g = Kr.g, e.b = Kr.b, e;
	}
	getStyle(e = Ze) {
		G.fromWorkingColorSpace(Kr.copy(this), e);
		let t = Kr.r, n = Kr.g, r = Kr.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(Ur), this.setHSL(Ur.h + e, Ur.s + t, Ur.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(Ur), e.getHSL(Wr);
		let n = At(Ur.h, Wr.h, t), r = At(Ur.s, Wr.s, t), i = At(Ur.l, Wr.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, Kr = /*@__PURE__*/ new Y();
Y.NAMES = Hr;
var qr = 0, Jr = class extends bt {
	static get type() {
		return "Material";
	}
	get type() {
		return this.constructor.type;
	}
	set type(e) {}
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: qr++ }), this.uuid = Tt(), this.name = "", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Y(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = tt, this.stencilZFail = tt, this.stencilZPass = tt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`) : r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.6,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	onBuild() {
		console.warn("Material: onBuild() has been removed.");
	}
}, Yr = class extends Jr {
	static get type() {
		return "MeshBasicMaterial";
	}
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.color = new Y(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ur(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, Xr = /*@__PURE__*/ Zr();
function Zr() {
	let e = /* @__PURE__ */ new ArrayBuffer(4), t = new Float32Array(e), n = new Uint32Array(e), r = /* @__PURE__ */ new Uint32Array(512), i = /* @__PURE__ */ new Uint32Array(512);
	for (let e = 0; e < 256; ++e) {
		let t = e - 127;
		t < -27 ? (r[e] = 0, r[e | 256] = 32768, i[e] = 24, i[e | 256] = 24) : t < -14 ? (r[e] = 1024 >> -t - 14, r[e | 256] = 1024 >> -t - 14 | 32768, i[e] = -t - 1, i[e | 256] = -t - 1) : t <= 15 ? (r[e] = t + 15 << 10, r[e | 256] = t + 15 << 10 | 32768, i[e] = 13, i[e | 256] = 13) : t < 128 ? (r[e] = 31744, r[e | 256] = 64512, i[e] = 24, i[e | 256] = 24) : (r[e] = 31744, r[e | 256] = 64512, i[e] = 13, i[e | 256] = 13);
	}
	let a = /* @__PURE__ */ new Uint32Array(2048), o = /* @__PURE__ */ new Uint32Array(64), s = /* @__PURE__ */ new Uint32Array(64);
	for (let e = 1; e < 1024; ++e) {
		let t = e << 13, n = 0;
		for (; !(t & 8388608);) t <<= 1, n -= 8388608;
		t &= -8388609, n += 947912704, a[e] = t | n;
	}
	for (let e = 1024; e < 2048; ++e) a[e] = 939524096 + (e - 1024 << 13);
	for (let e = 1; e < 31; ++e) o[e] = e << 23;
	o[31] = 1199570944, o[32] = 2147483648;
	for (let e = 33; e < 63; ++e) o[e] = 2147483648 + (e - 32 << 23);
	o[63] = 3347054592;
	for (let e = 1; e < 64; ++e) e !== 32 && (s[e] = 1024);
	return {
		floatView: t,
		uint32View: n,
		baseTable: r,
		shiftTable: i,
		mantissaTable: a,
		exponentTable: o,
		offsetTable: s
	};
}
function Qr(e) {
	Math.abs(e) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), e = Et(e, -65504, 65504), Xr.floatView[0] = e;
	let t = Xr.uint32View[0], n = t >> 23 & 511;
	return Xr.baseTable[n] + ((t & 8388607) >> Xr.shiftTable[n]);
}
function $r(e) {
	let t = e >> 10;
	return Xr.uint32View[0] = Xr.mantissaTable[Xr.offsetTable[t] + (e & 1023)] + Xr.exponentTable[t], Xr.floatView[0];
}
var ei = {
	toHalfFloat: Qr,
	fromHalfFloat: $r
}, ti = /*@__PURE__*/ new q(), ni = /*@__PURE__*/ new U(), ri = class {
	constructor(e, t, n = !1) {
		if (Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = ct, this.updateRanges = [], this.gpuType = D, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) ni.fromBufferAttribute(this, t), ni.applyMatrix3(e), this.setXY(t, ni.x, ni.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ti.fromBufferAttribute(this, t), ti.applyMatrix3(e), this.setXYZ(t, ti.x, ti.y, ti.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) ti.fromBufferAttribute(this, t), ti.applyMatrix4(e), this.setXYZ(t, ti.x, ti.y, ti.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) ti.fromBufferAttribute(this, t), ti.applyNormalMatrix(e), this.setXYZ(t, ti.x, ti.y, ti.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) ti.fromBufferAttribute(this, t), ti.transformDirection(e), this.setXYZ(t, ti.x, ti.y, ti.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = Gt(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = H(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = H(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = H(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = H(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = H(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = H(t, this.array), n = H(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = H(t, this.array), n = H(n, this.array), r = H(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = H(t, this.array), n = H(n, this.array), r = H(r, this.array), i = H(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
	}
}, ii = class extends ri {
	constructor(e, t, n) {
		super(new Int8Array(e), t, n);
	}
}, ai = class extends ri {
	constructor(e, t, n) {
		super(new Uint8Array(e), t, n);
	}
}, oi = class extends ri {
	constructor(e, t, n) {
		super(new Uint8ClampedArray(e), t, n);
	}
}, si = class extends ri {
	constructor(e, t, n) {
		super(new Int16Array(e), t, n);
	}
}, ci = class extends ri {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, li = class extends ri {
	constructor(e, t, n) {
		super(new Int32Array(e), t, n);
	}
}, ui = class extends ri {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, di = class extends ri {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n), this.isFloat16BufferAttribute = !0;
	}
	getX(e) {
		let t = $r(this.array[e * this.itemSize]);
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = H(t, this.array)), this.array[e * this.itemSize] = Qr(t), this;
	}
	getY(e) {
		let t = $r(this.array[e * this.itemSize + 1]);
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = H(t, this.array)), this.array[e * this.itemSize + 1] = Qr(t), this;
	}
	getZ(e) {
		let t = $r(this.array[e * this.itemSize + 2]);
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = H(t, this.array)), this.array[e * this.itemSize + 2] = Qr(t), this;
	}
	getW(e) {
		let t = $r(this.array[e * this.itemSize + 3]);
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = H(t, this.array)), this.array[e * this.itemSize + 3] = Qr(t), this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = H(t, this.array), n = H(n, this.array)), this.array[e + 0] = Qr(t), this.array[e + 1] = Qr(n), this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = H(t, this.array), n = H(n, this.array), r = H(r, this.array)), this.array[e + 0] = Qr(t), this.array[e + 1] = Qr(n), this.array[e + 2] = Qr(r), this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = H(t, this.array), n = H(n, this.array), r = H(r, this.array), i = H(i, this.array)), this.array[e + 0] = Qr(t), this.array[e + 1] = Qr(n), this.array[e + 2] = Qr(r), this.array[e + 3] = Qr(i), this;
	}
}, X = class extends ri {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, fi = 0, pi = /*@__PURE__*/ new J(), mi = /*@__PURE__*/ new Dr(), hi = /*@__PURE__*/ new q(), gi = /*@__PURE__*/ new On(), _i = /*@__PURE__*/ new On(), vi = /*@__PURE__*/ new q(), Z = class e extends bt {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: fi++ }), this.uuid = Tt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {};
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return this.index = Array.isArray(e) ? new (Jt(e) ? ui : ci)(e, 1) : e, this;
	}
	setIndirect(e) {
		return this.indirect = e, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new W().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
	}
	applyQuaternion(e) {
		return pi.makeRotationFromQuaternion(e), this.applyMatrix4(pi), this;
	}
	rotateX(e) {
		return pi.makeRotationX(e), this.applyMatrix4(pi), this;
	}
	rotateY(e) {
		return pi.makeRotationY(e), this.applyMatrix4(pi), this;
	}
	rotateZ(e) {
		return pi.makeRotationZ(e), this.applyMatrix4(pi), this;
	}
	translate(e, t, n) {
		return pi.makeTranslation(e, t, n), this.applyMatrix4(pi), this;
	}
	scale(e, t, n) {
		return pi.makeScale(e, t, n), this.applyMatrix4(pi), this;
	}
	lookAt(e) {
		return mi.lookAt(e), mi.updateMatrix(), this.applyMatrix4(mi.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(hi).negate(), this.translate(hi.x, hi.y, hi.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new X(t, 3));
		} else {
			for (let n = 0, r = t.count; n < r; n++) {
				let r = e[n];
				t.setXYZ(n, r.x, r.y, r.z || 0);
			}
			e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new On());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new q(-Infinity, -Infinity, -Infinity), new q(Infinity, Infinity, Infinity));
		else {
			if (e !== void 0) {
				if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
					let n = t[e];
					gi.setFromBufferAttribute(n), this.morphTargetsRelative ? (vi.addVectors(this.boundingBox.min, gi.min), this.boundingBox.expandByPoint(vi), vi.addVectors(this.boundingBox.max, gi.max), this.boundingBox.expandByPoint(vi)) : (this.boundingBox.expandByPoint(gi.min), this.boundingBox.expandByPoint(gi.max));
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error("THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Kn());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new q(), Infinity);
		else if (e) {
			let n = this.boundingSphere.center;
			if (gi.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				_i.setFromBufferAttribute(n), this.morphTargetsRelative ? (vi.addVectors(gi.min, _i.min), gi.expandByPoint(vi), vi.addVectors(gi.max, _i.max), gi.expandByPoint(vi)) : (gi.expandByPoint(_i.min), gi.expandByPoint(_i.max));
			}
			gi.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) vi.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(vi));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) vi.fromBufferAttribute(a, t), o && (hi.fromBufferAttribute(e, t), vi.add(hi)), r = Math.max(r, n.distanceToSquared(vi));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv;
		this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ri(new Float32Array(4 * n.count), 4));
		let a = this.getAttribute("tangent"), o = [], s = [];
		for (let e = 0; e < n.count; e++) o[e] = new q(), s[e] = new q();
		let c = new q(), l = new q(), u = new q(), d = new U(), f = new U(), p = new U(), m = new q(), h = new q();
		function g(e, t, r) {
			c.fromBufferAttribute(n, e), l.fromBufferAttribute(n, t), u.fromBufferAttribute(n, r), d.fromBufferAttribute(i, e), f.fromBufferAttribute(i, t), p.fromBufferAttribute(i, r), l.sub(c), u.sub(c), f.sub(d), p.sub(d);
			let a = 1 / (f.x * p.y - p.x * f.y);
			isFinite(a) && (m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a), h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a), o[e].add(m), o[t].add(m), o[r].add(m), s[e].add(h), s[t].add(h), s[r].add(h));
		}
		let _ = this.groups;
		_.length === 0 && (_ = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let v = new q(), y = new q(), b = new q(), x = new q();
		function S(e) {
			b.fromBufferAttribute(r, e), x.copy(b);
			let t = o[e];
			v.copy(t), v.sub(b.multiplyScalar(b.dot(t))).normalize(), y.crossVectors(x, t);
			let n = y.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, v.x, v.y, v.z, n);
		}
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
		}
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0) n = new ri(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new q(), i = new q(), a = new q(), o = new q(), s = new q(), c = new q(), l = new q(), u = new q();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) vi.fromBufferAttribute(e, t), vi.normalize(), e.setXYZ(t, vi.x, vi.y, vi.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new ri(a, r, i);
		}
		if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.6,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = {
			center: o.center.toArray(),
			radius: o.radius
		}), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone(t));
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, yi = /*@__PURE__*/ new J(), bi = /*@__PURE__*/ new er(), xi = /*@__PURE__*/ new Kn(), Si = /*@__PURE__*/ new q(), Ci = /*@__PURE__*/ new q(), wi = /*@__PURE__*/ new q(), Ti = /*@__PURE__*/ new q(), Ei = /*@__PURE__*/ new q(), Di = /*@__PURE__*/ new q(), Oi = /*@__PURE__*/ new q(), ki = /*@__PURE__*/ new q(), Ai = class extends Dr {
	constructor(e = new Z(), t = new Yr()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			Di.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Ei.fromBufferAttribute(s, e), a ? Di.addScaledVector(Ei, r) : Di.addScaledVector(Ei.sub(t), r));
			}
			t.add(Di);
		}
		return t;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), xi.copy(n.boundingSphere), xi.applyMatrix4(i), bi.copy(e.ray).recast(e.near), xi.containsPoint(bi.origin) === !1 && (bi.intersectSphere(xi, Si) === null || bi.origin.distanceToSquared(Si) > (e.far - e.near) ** 2) || (yi.copy(i).invert(), bi.copy(e.ray).applyMatrix4(yi), (n.boundingBox === null || bi.intersectsBox(n.boundingBox) !== !1) && this._computeIntersections(e, t, bi)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) {
			if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
				let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
					r = Mi(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
				for (let d = i, f = s; d < f; d += 3) {
					let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
					r = Mi(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
				}
			}
		} else if (s !== void 0) {
			if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
				let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = i, s = i + 1, d = i + 2;
					r = Mi(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
				for (let s = i, d = o; s < d; s += 3) {
					let i = s, o = s + 1, d = s + 2;
					r = Mi(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
				}
			}
		}
	}
};
function ji(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	ki.copy(s), ki.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(ki);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: ki.clone(),
		object: e
	};
}
function Mi(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, Ci), e.getVertexPosition(c, wi), e.getVertexPosition(l, Ti);
	let u = ji(e, t, n, r, Ci, wi, Ti, Oi);
	if (u) {
		let e = new q();
		Vr.getBarycoord(Oi, Ci, wi, Ti, e), i && (u.uv = Vr.getInterpolatedAttribute(i, s, c, l, e, new U())), a && (u.uv1 = Vr.getInterpolatedAttribute(a, s, c, l, e, new U())), o && (u.normal = Vr.getInterpolatedAttribute(o, s, c, l, e, new q()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new q(),
			materialIndex: 0
		};
		Vr.getNormal(Ci, wi, Ti, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var Ni = class e extends Z {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new X(c, 3)), this.setAttribute("normal", new X(l, 3)), this.setAttribute("uv", new X(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new q();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
};
function Pi(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i;
		}
	}
	return t;
}
function Fi(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = Pi(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function Ii(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function Li(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : G.workingColorSpace;
}
var Ri = {
	clone: Pi,
	merge: Fi
}, zi = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", Bi = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", Vi = class extends Jr {
	static get type() {
		return "ShaderMaterial";
	}
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = zi, this.fragmentShader = Bi, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Pi(e.uniforms), this.uniformsGroups = Ii(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
}, Hi = class extends Dr {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new J(), this.projectionMatrix = new J(), this.projectionMatrixInverse = new J(), this.coordinateSystem = vt;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
	updateWorldMatrix(e, t) {
		super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Ui = /*@__PURE__*/ new q(), Wi = /*@__PURE__*/ new U(), Gi = /*@__PURE__*/ new U(), Ki = class extends Hi {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = wt * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(Ct * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return wt * 2 * Math.atan(Math.tan(Ct * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		Ui.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(Ui.x, Ui.y).multiplyScalar(-e / Ui.z), Ui.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(Ui.x, Ui.y).multiplyScalar(-e / Ui.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, Wi, Gi), t.subVectors(Gi, Wi);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(Ct * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, qi = -90, Ji = 1, Yi = class extends Dr {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new Ki(qi, Ji, e, t);
		r.layers = this.layers, this.add(r);
		let i = new Ki(qi, Ji, e, t);
		i.layers = this.layers, this.add(i);
		let a = new Ki(qi, Ji, e, t);
		a.layers = this.layers, this.add(a);
		let o = new Ki(qi, Ji, e, t);
		o.layers = this.layers, this.add(o);
		let s = new Ki(qi, Ji, e, t);
		s.layers = this.layers, this.add(s);
		let c = new Ki(qi, Ji, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, i), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, s), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5, r), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, Xi = class extends vn {
	constructor(e, t, n, r, i, a, o, s, c, l) {
		e = e === void 0 ? [] : e, t = t === void 0 ? 301 : t, super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, Zi = class extends bn {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new Xi(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 && t.generateMipmaps, this.texture.minFilter = t.minFilter === void 0 ? g : t.minFilter;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new Ni(5, 5, 5), i = new Vi({
			name: "CubemapFromEquirect",
			uniforms: Pi(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new Ai(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = g), new Yi(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t, n, r) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
}, Qi = /*@__PURE__*/ new q(), $i = /*@__PURE__*/ new q(), ea = /*@__PURE__*/ new W(), ta = class {
	constructor(e = new q(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = Qi.subVectors(n, t).cross($i.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t) {
		let n = e.delta(Qi), r = this.normal.dot(n);
		if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let i = -(e.start.dot(this.normal) + this.constant) / r;
		return i < 0 || i > 1 ? null : t.copy(e.start).addScaledVector(n, i);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || ea.getNormalMatrix(e), r = this.coplanarPoint(Qi).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, na = /*@__PURE__*/ new Kn(), ra = /*@__PURE__*/ new q(), ia = class {
	constructor(e = new ta(), t = new ta(), n = new ta(), r = new ta(), i = new ta(), a = new ta()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = vt) {
		let n = this.planes, r = e.elements, i = r[0], a = r[1], o = r[2], s = r[3], c = r[4], l = r[5], u = r[6], d = r[7], f = r[8], p = r[9], m = r[10], h = r[11], g = r[12], _ = r[13], v = r[14], y = r[15];
		if (n[0].setComponents(s - i, d - c, h - f, y - g).normalize(), n[1].setComponents(s + i, d + c, h + f, y + g).normalize(), n[2].setComponents(s + a, d + l, h + p, y + _).normalize(), n[3].setComponents(s - a, d - l, h - p, y - _).normalize(), n[4].setComponents(s - o, d - u, h - m, y - v).normalize(), t === 2e3) n[5].setComponents(s + o, d + u, h + m, y + v).normalize();
		else if (t === 2001) n[5].setComponents(o, u, m, v).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), na.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), na.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(na);
	}
	intersectsSprite(e) {
		return na.center.set(0, 0, 0), na.radius = .7071067811865476, na.applyMatrix4(e.matrixWorld), this.intersectsSphere(na);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (ra.x = r.normal.x > 0 ? e.max.x : e.min.x, ra.y = r.normal.y > 0 ? e.max.y : e.min.y, ra.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(ra) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
function aa() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		n(t, a), r = e.requestAnimationFrame(i);
	}
	return {
		start: function() {
			t !== !0 && n !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function oa(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
var sa = class e extends Z {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new X(p, 3)), this.setAttribute("normal", new X(m, 3)), this.setAttribute("uv", new X(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, Q = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n		\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n		\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		\n		#else\n		\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, $ = {
	common: {
		diffuse: { value: /*@__PURE__*/ new Y(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new W() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new W() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /*@__PURE__*/ new W() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /*@__PURE__*/ new W() },
		flipEnvMap: { value: -1 },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /*@__PURE__*/ new W() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /*@__PURE__*/ new W() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /*@__PURE__*/ new W() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /*@__PURE__*/ new W() },
		normalScale: { value: /*@__PURE__*/ new U(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /*@__PURE__*/ new W() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /*@__PURE__*/ new W() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /*@__PURE__*/ new W() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /*@__PURE__*/ new W() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /*@__PURE__*/ new Y(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMap: { value: [] },
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotShadowMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMap: { value: [] },
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null }
	},
	points: {
		diffuse: { value: /*@__PURE__*/ new Y(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new W() },
		alphaTest: { value: 0 },
		uvTransform: { value: /*@__PURE__*/ new W() }
	},
	sprite: {
		diffuse: { value: /*@__PURE__*/ new Y(16777215) },
		opacity: { value: 1 },
		center: { value: /*@__PURE__*/ new U(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new W() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new W() },
		alphaTest: { value: 0 }
	}
}, ca = {
	basic: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.fog
		]),
		vertexShader: Q.meshbasic_vert,
		fragmentShader: Q.meshbasic_frag
	},
	lambert: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			$.lights,
			{ emissive: { value: /*@__PURE__*/ new Y(0) } }
		]),
		vertexShader: Q.meshlambert_vert,
		fragmentShader: Q.meshlambert_frag
	},
	phong: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /*@__PURE__*/ new Y(0) },
				specular: { value: /*@__PURE__*/ new Y(1118481) },
				shininess: { value: 30 }
			}
		]),
		vertexShader: Q.meshphong_vert,
		fragmentShader: Q.meshphong_frag
	},
	standard: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.roughnessmap,
			$.metalnessmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /*@__PURE__*/ new Y(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Q.meshphysical_vert,
		fragmentShader: Q.meshphysical_frag
	},
	toon: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.gradientmap,
			$.fog,
			$.lights,
			{ emissive: { value: /*@__PURE__*/ new Y(0) } }
		]),
		vertexShader: Q.meshtoon_vert,
		fragmentShader: Q.meshtoon_frag
	},
	matcap: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: Q.meshmatcap_vert,
		fragmentShader: Q.meshmatcap_frag
	},
	points: {
		uniforms: /*@__PURE__*/ Fi([$.points, $.fog]),
		vertexShader: Q.points_vert,
		fragmentShader: Q.points_frag
	},
	dashed: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: Q.linedashed_vert,
		fragmentShader: Q.linedashed_frag
	},
	depth: {
		uniforms: /*@__PURE__*/ Fi([$.common, $.displacementmap]),
		vertexShader: Q.depth_vert,
		fragmentShader: Q.depth_frag
	},
	normal: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: Q.meshnormal_vert,
		fragmentShader: Q.meshnormal_frag
	},
	sprite: {
		uniforms: /*@__PURE__*/ Fi([$.sprite, $.fog]),
		vertexShader: Q.sprite_vert,
		fragmentShader: Q.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /*@__PURE__*/ new W() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: Q.background_vert,
		fragmentShader: Q.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /*@__PURE__*/ new W() }
		},
		vertexShader: Q.backgroundCube_vert,
		fragmentShader: Q.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: Q.cube_vert,
		fragmentShader: Q.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: Q.equirect_vert,
		fragmentShader: Q.equirect_frag
	},
	distanceRGBA: {
		uniforms: /*@__PURE__*/ Fi([
			$.common,
			$.displacementmap,
			{
				referencePosition: { value: /*@__PURE__*/ new q() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: Q.distanceRGBA_vert,
		fragmentShader: Q.distanceRGBA_frag
	},
	shadow: {
		uniforms: /*@__PURE__*/ Fi([
			$.lights,
			$.fog,
			{
				color: { value: /*@__PURE__*/ new Y(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: Q.shadow_vert,
		fragmentShader: Q.shadow_frag
	}
};
ca.physical = {
	uniforms: /*@__PURE__*/ Fi([ca.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /*@__PURE__*/ new W() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /*@__PURE__*/ new W() },
		clearcoatNormalScale: { value: /*@__PURE__*/ new U(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new W() },
		dispersion: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /*@__PURE__*/ new W() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new W() },
		sheen: { value: 0 },
		sheenColor: { value: /*@__PURE__*/ new Y(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /*@__PURE__*/ new W() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /*@__PURE__*/ new W() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /*@__PURE__*/ new W() },
		transmissionSamplerSize: { value: /*@__PURE__*/ new U() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /*@__PURE__*/ new W() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /*@__PURE__*/ new Y(0) },
		specularColor: { value: /*@__PURE__*/ new Y(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /*@__PURE__*/ new W() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /*@__PURE__*/ new W() },
		anisotropyVector: { value: /*@__PURE__*/ new U() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /*@__PURE__*/ new W() }
	}]),
	vertexShader: Q.meshphysical_vert,
	fragmentShader: Q.meshphysical_frag
};
var la = {
	r: 0,
	b: 0,
	g: 0
}, ua = /*@__PURE__*/ new ur(), da = /*@__PURE__*/ new J();
function fa(e, t, n, r, i, a, o) {
	let s = new Y(0), c = a === !0 ? 0 : 1, l, u, d = null, f = 0, p = null;
	function m(e) {
		let r = e.isScene === !0 ? e.background : null;
		return r && r.isTexture && (r = (e.backgroundBlurriness > 0 ? n : t).get(r)), r;
	}
	function h(t) {
		let n = !1, i = m(t);
		i === null ? _(s, c) : i && i.isColor && (_(i, 1), n = !0);
		let a = e.xr.getEnvironmentBlendMode();
		a === "additive" ? r.buffers.color.setClear(0, 0, 0, 1, o) : a === "alpha-blend" && r.buffers.color.setClear(0, 0, 0, 0, o), (e.autoClear || n) && (r.buffers.depth.setTest(!0), r.buffers.depth.setMask(!0), r.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function g(t, n) {
		let r = m(n);
		r && (r.isCubeTexture || r.mapping === 306) ? (u === void 0 && (u = new Ai(new Ni(1, 1, 1), new Vi({
			name: "BackgroundCubeMaterial",
			uniforms: Pi(ca.backgroundCube.uniforms),
			vertexShader: ca.backgroundCube.vertexShader,
			fragmentShader: ca.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1
		})), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(u.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), i.update(u)), ua.copy(n.backgroundRotation), ua.x *= -1, ua.y *= -1, ua.z *= -1, r.isCubeTexture && r.isRenderTargetTexture === !1 && (ua.y *= -1, ua.z *= -1), u.material.uniforms.envMap.value = r, u.material.uniforms.flipEnvMap.value = r.isCubeTexture && r.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(da.makeRotationFromEuler(ua)), u.material.toneMapped = G.getTransfer(r.colorSpace) !== et, (d !== r || f !== r.version || p !== e.toneMapping) && (u.material.needsUpdate = !0, d = r, f = r.version, p = e.toneMapping), u.layers.enableAll(), t.unshift(u, u.geometry, u.material, 0, 0, null)) : r && r.isTexture && (l === void 0 && (l = new Ai(new sa(2, 2), new Vi({
			name: "BackgroundMaterial",
			uniforms: Pi(ca.background.uniforms),
			vertexShader: ca.background.vertexShader,
			fragmentShader: ca.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1
		})), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), i.update(l)), l.material.uniforms.t2D.value = r, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.toneMapped = G.getTransfer(r.colorSpace) !== et, r.matrixAutoUpdate === !0 && r.updateMatrix(), l.material.uniforms.uvTransform.value.copy(r.matrix), (d !== r || f !== r.version || p !== e.toneMapping) && (l.material.needsUpdate = !0, d = r, f = r.version, p = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null));
	}
	function _(t, n) {
		t.getRGB(la, Li(e)), r.buffers.color.setClear(la.r, la.g, la.b, n, o);
	}
	return {
		getClearColor: function() {
			return s;
		},
		setClearColor: function(e, t = 1) {
			s.set(e), c = t, _(s, c);
		},
		getClearAlpha: function() {
			return c;
		},
		setClearAlpha: function(e) {
			c = e, _(s, c);
		},
		render: h,
		addToRenderList: g
	};
}
function pa(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n) {
		let i = n.wireframe === !0, a = r[e.id];
		a === void 0 && (a = {}, r[e.id] = a);
		let o = a[t.id];
		o === void 0 && (o = {}, a[t.id] = o);
		let s = o[i];
		return s === void 0 && (s = f(c()), o[i] = s), s;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.stride, p = s.offset;
						if (t.isInstancedInterleavedBuffer) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		w();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) u(n[e].object), delete n[e];
				delete t[e];
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) u(n[e].object), delete n[e];
			delete t[e];
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			if (n[e.id] === void 0) continue;
			let i = n[e.id];
			for (let e in i) u(i[e].object), delete i[e];
			delete n[e.id];
		}
	}
	function w() {
		T(), o = !0, a !== i && (a = i, l(a.object));
	}
	function T() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: w,
		resetDefaultState: T,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function ma(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	function c(e, i, a, s) {
		if (a === 0) return;
		let c = t.get("WEBGL_multi_draw");
		if (c === null) for (let t = 0; t < e.length; t++) o(e[t], i[t], s[t]);
		else {
			c.multiDrawArraysInstancedWEBGL(r, e, 0, i, 0, s, 0, a);
			let t = 0;
			for (let e = 0; e < a; e++) t += i[e] * s[e];
			n.update(t, r, 1);
		}
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s, this.renderMultiDrawInstances = c;
}
function ha(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== 1015 && !i);
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let l = n.precision === void 0 ? "highp" : n.precision, u = c(l);
	u !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
	let d = n.logarithmicDepthBuffer === !0, f = n.reverseDepthBuffer === !0 && t.has("EXT_clip_control"), p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), _ = e.getParameter(e.MAX_VERTEX_ATTRIBS), v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), x = m > 0, S = e.getParameter(e.MAX_SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: l,
		logarithmicDepthBuffer: d,
		reverseDepthBuffer: f,
		maxTextures: p,
		maxVertexTextures: m,
		maxTextureSize: h,
		maxCubemapSize: g,
		maxAttributes: _,
		maxVertexUniforms: v,
		maxVaryings: y,
		maxFragmentUniforms: b,
		vertexTextures: x,
		maxSamples: S
	};
}
function ga(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new ta(), s = new W(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
function _a(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function r(r) {
		if (r && r.isTexture) {
			let a = r.mapping;
			if (a === 303 || a === 304) {
				if (t.has(r)) {
					let e = t.get(r).texture;
					return n(e, r.mapping);
				}
				{
					let a = r.image;
					if (a && a.height > 0) {
						let o = new Zi(a.height);
						return o.fromEquirectangularTexture(e, r), t.set(r, o), r.addEventListener("dispose", i), n(o.texture, r.mapping);
					}
					return null;
				}
			}
		}
		return r;
	}
	function i(e) {
		let n = e.target;
		n.removeEventListener("dispose", i);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function a() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: r,
		dispose: a
	};
}
var va = class extends Hi {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, ya = 4, ba = [
	.125,
	.215,
	.35,
	.446,
	.526,
	.582
], xa = 20, Sa = /*@__PURE__*/ new va(), Ca = /*@__PURE__*/ new Y(), wa = null, Ta = 0, Ea = 0, Da = !1, Oa = (1 + Math.sqrt(5)) / 2, ka = 1 / Oa, Aa = [
	/*@__PURE__*/ new q(-Oa, ka, 0),
	/*@__PURE__*/ new q(Oa, ka, 0),
	/*@__PURE__*/ new q(-ka, 0, Oa),
	/*@__PURE__*/ new q(ka, 0, Oa),
	/*@__PURE__*/ new q(0, Oa, -ka),
	/*@__PURE__*/ new q(0, Oa, ka),
	/*@__PURE__*/ new q(-1, 1, -1),
	/*@__PURE__*/ new q(1, 1, -1),
	/*@__PURE__*/ new q(-1, 1, 1),
	/*@__PURE__*/ new q(1, 1, 1)
], ja = class {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
	}
	fromScene(e, t = 0, n = .1, r = 100) {
		wa = this._renderer.getRenderTarget(), Ta = this._renderer.getActiveCubeFace(), Ea = this._renderer.getActiveMipmapLevel(), Da = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
		let i = this._allocateTargets();
		return i.depthBuffer = !0, this._sceneToCubeUV(e, n, r, i), t > 0 && this._blur(i, 0, 0, t), this._applyPMREM(i), this._cleanup(i), i;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = La(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = Ia(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
	}
	_setSize(e) {
		this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(wa, Ta, Ea), this._renderer.xr.enabled = Da, e.scissorTest = !1, Pa(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), wa = this._renderer.getRenderTarget(), Ta = this._renderer.getActiveCubeFace(), Ea = this._renderer.getActiveMipmapLevel(), Da = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
		let n = t || this._allocateTargets();
		return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
	}
	_allocateTargets() {
		let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
			magFilter: g,
			minFilter: g,
			generateMipmaps: !1,
			type: O,
			format: F,
			colorSpace: Qe,
			depthBuffer: !1
		}, r = Na(e, t, n);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
			this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Na(e, t, n);
			let { _lodMax: r } = this;
			({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = Ma(r)), this._blurMaterial = Fa(r, e, t);
		}
		return r;
	}
	_compileMaterial(e) {
		let t = new Ai(this._lodPlanes[0], e);
		this._renderer.compile(t, Sa);
	}
	_sceneToCubeUV(e, t, n, r) {
		let i = new Ki(90, 1, t, n), a = [
			1,
			-1,
			1,
			1,
			1,
			1
		], o = [
			1,
			1,
			1,
			-1,
			-1,
			-1
		], s = this._renderer, c = s.autoClear, l = s.toneMapping;
		s.getClearColor(Ca), s.toneMapping = 0, s.autoClear = !1;
		let u = new Yr({
			name: "PMREM.Background",
			side: 1,
			depthWrite: !1,
			depthTest: !1
		}), d = new Ai(new Ni(), u), f = !1, p = e.background;
		p ? p.isColor && (u.color.copy(p), e.background = null, f = !0) : (u.color.copy(Ca), f = !0);
		for (let t = 0; t < 6; t++) {
			let n = t % 3;
			n === 0 ? (i.up.set(0, a[t], 0), i.lookAt(o[t], 0, 0)) : n === 1 ? (i.up.set(0, 0, a[t]), i.lookAt(0, o[t], 0)) : (i.up.set(0, a[t], 0), i.lookAt(0, 0, o[t]));
			let c = this._cubeSize;
			Pa(r, n * c, t > 2 ? c : 0, c, c), s.setRenderTarget(r), f && s.render(d, i), s.render(e, i);
		}
		d.geometry.dispose(), d.material.dispose(), s.toneMapping = l, s.autoClear = c, e.background = p;
	}
	_textureToCubeUV(e, t) {
		let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
		r ? (this._cubemapMaterial === null && (this._cubemapMaterial = La()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ia());
		let i = r ? this._cubemapMaterial : this._equirectMaterial, a = new Ai(this._lodPlanes[0], i), o = i.uniforms;
		o.envMap.value = e;
		let s = this._cubeSize;
		Pa(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, Sa);
	}
	_applyPMREM(e) {
		let t = this._renderer, n = t.autoClear;
		t.autoClear = !1;
		let r = this._lodPlanes.length;
		for (let t = 1; t < r; t++) {
			let n = Math.sqrt(this._sigmas[t] * this._sigmas[t] - this._sigmas[t - 1] * this._sigmas[t - 1]), i = Aa[(r - t - 1) % Aa.length];
			this._blur(e, t - 1, t, n, i);
		}
		t.autoClear = n;
	}
	_blur(e, t, n, r, i) {
		let a = this._pingPongRenderTarget;
		this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i);
	}
	_halfBlur(e, t, n, r, i, a, o) {
		let s = this._renderer, c = this._blurMaterial;
		a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
		let l = new Ai(this._lodPlanes[r], c), u = c.uniforms, d = this._sizeLods[n] - 1, f = isFinite(i) ? Math.PI / (2 * d) : 2 * Math.PI / 39, p = i / f, m = isFinite(i) ? 1 + Math.floor(3 * p) : xa;
		m > xa && console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xa}`);
		let h = [], g = 0;
		for (let e = 0; e < xa; ++e) {
			let t = e / p, n = Math.exp(-t * t / 2);
			h.push(n), e === 0 ? g += n : e < m && (g += 2 * n);
		}
		for (let e = 0; e < h.length; e++) h[e] = h[e] / g;
		u.envMap.value = e.texture, u.samples.value = m, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
		let { _lodMax: _ } = this;
		u.dTheta.value = f, u.mipInt.value = _ - n;
		let v = this._sizeLods[r];
		Pa(t, 3 * v * (r > _ - ya ? r - _ + ya : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), s.setRenderTarget(t), s.render(l, Sa);
	}
};
function Ma(e) {
	let t = [], n = [], r = [], i = e, a = e - ya + 1 + ba.length;
	for (let o = 0; o < a; o++) {
		let a = 2 ** i;
		n.push(a);
		let s = 1 / a;
		o > e - ya ? s = ba[o - e + ya - 1] : o === 0 && (s = 0), r.push(s);
		let c = 1 / (a - 2), l = -c, u = 1 + c, d = [
			l,
			l,
			u,
			l,
			u,
			u,
			l,
			l,
			u,
			u,
			l,
			u
		], f = /* @__PURE__ */ new Float32Array(108), p = /* @__PURE__ */ new Float32Array(72), m = /* @__PURE__ */ new Float32Array(36);
		for (let e = 0; e < 6; e++) {
			let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
				t,
				n,
				0,
				t + 2 / 3,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n + 1,
				0
			];
			f.set(r, 18 * e), p.set(d, 12 * e);
			let i = [
				e,
				e,
				e,
				e,
				e,
				e
			];
			m.set(i, 6 * e);
		}
		let h = new Z();
		h.setAttribute("position", new ri(f, 3)), h.setAttribute("uv", new ri(p, 2)), h.setAttribute("faceIndex", new ri(m, 1)), t.push(h), i > ya && i--;
	}
	return {
		lodPlanes: t,
		sizeLods: n,
		sigmas: r
	};
}
function Na(e, t, n) {
	let r = new bn(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function Pa(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function Fa(e, t, n) {
	let r = new Float32Array(xa), i = new q(0, 1, 0);
	return new Vi({
		name: "SphericalGaussianBlur",
		defines: {
			n: xa,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			samples: { value: 1 },
			weights: { value: r },
			latitudinal: { value: !1 },
			dTheta: { value: 0 },
			mipInt: { value: 0 },
			poleAxis: { value: i }
		},
		vertexShader: Ra(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Ia() {
	return new Vi({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: Ra(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function La() {
	return new Vi({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: Ra(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Ra() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
function za(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = null;
	function r(r) {
		if (r && r.isTexture) {
			let o = r.mapping, s = o === 303 || o === 304, c = o === 301 || o === 302;
			if (s || c) {
				let o = t.get(r), l = o === void 0 ? 0 : o.texture.pmremVersion;
				if (r.isRenderTargetTexture && r.pmremVersion !== l) return n === null && (n = new ja(e)), o = s ? n.fromEquirectangular(r, o) : n.fromCubemap(r, o), o.texture.pmremVersion = r.pmremVersion, t.set(r, o), o.texture;
				if (o !== void 0) return o.texture;
				{
					let l = r.image;
					return s && l && l.height > 0 || c && l && i(l) ? (n === null && (n = new ja(e)), o = s ? n.fromEquirectangular(r) : n.fromCubemap(r), o.texture.pmremVersion = r.pmremVersion, t.set(r, o), r.addEventListener("dispose", a), o.texture) : null;
				}
			}
		}
		return r;
	}
	function i(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function a(e) {
		let n = e.target;
		n.removeEventListener("dispose", a);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function o() {
		t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
	}
	return {
		get: r,
		dispose: o
	};
}
function Ba(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r;
		switch (n) {
			case "WEBGL_depth_texture":
				r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
				break;
			case "EXT_texture_filter_anisotropic":
				r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
				break;
			case "WEBGL_compressed_texture_s3tc":
				r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
				break;
			case "WEBGL_compressed_texture_pvrtc":
				r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
				break;
			default: r = e.getExtension(n);
		}
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && en("THREE.WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function Va(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		for (let e in s.morphAttributes) {
			let n = s.morphAttributes[e];
			for (let e = 0, r = n.length; e < r; e++) t.remove(n[e]);
		}
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e, t) {
		return i[t.id] === !0 || (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++), t;
	}
	function c(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
		let i = n.morphAttributes;
		for (let n in i) {
			let r = i[n];
			for (let n = 0, i = r.length; n < i; n++) t.update(r[n], e.ARRAY_BUFFER);
		}
	}
	function l(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else if (i !== void 0) {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		} else return;
		let s = new (Jt(n) ? ui : ci)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	function u(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && l(e);
		} else l(e);
		return a.get(e);
	}
	return {
		get: s,
		update: c,
		getWireframeAttribute: u
	};
}
function Ha(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	function d(e, i, s, c) {
		if (s === 0) return;
		let u = t.get("WEBGL_multi_draw");
		if (u === null) for (let t = 0; t < e.length; t++) l(e[t] / o, i[t], c[t]);
		else {
			u.multiDrawElementsInstancedWEBGL(r, i, 0, a, e, 0, c, 0, s);
			let t = 0;
			for (let e = 0; e < s; e++) t += i[e] * c[e];
			n.update(t, r, 1);
		}
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function Ua(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default: console.error("THREE.WebGLInfo: Unknown draw mode:", r);
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function Wa(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new K();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new xn(h, p, m, u);
			g.type = D, g.needsUpdate = !0;
			let _ = f * 4;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * _;
					e === !0 && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: g,
				size: new U(p, m)
			}, r.set(o, d);
			function v() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", v);
			}
			o.addEventListener("dispose", v);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	}
	return { update: a };
}
function Ga(e, t, n, r) {
	let i = /* @__PURE__ */ new WeakMap();
	function a(a) {
		let o = r.render.frame, c = a.geometry, l = t.get(a, c);
		if (i.get(l) !== o && (t.update(l), i.set(l, o)), a.isInstancedMesh && (a.hasEventListener("dispose", s) === !1 && a.addEventListener("dispose", s), i.get(a) !== o && (n.update(a.instanceMatrix, e.ARRAY_BUFFER), a.instanceColor !== null && n.update(a.instanceColor, e.ARRAY_BUFFER), i.set(a, o))), a.isSkinnedMesh) {
			let e = a.skeleton;
			i.get(e) !== o && (e.update(), i.set(e, o));
		}
		return l;
	}
	function o() {
		i = /* @__PURE__ */ new WeakMap();
	}
	function s(e) {
		let t = e.target;
		t.removeEventListener("dispose", s), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: a,
		dispose: o
	};
}
var Ka = class extends vn {
	constructor(e, t, n, r, i, a, o, s, c, l = te) {
		if (l !== 1026 && l !== 1027) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		n === void 0 && l === 1026 && (n = E), n === void 0 && l === 1027 && (n = j), super(null, r, i, a, o, s, l, n, c), this.isDepthTexture = !0, this.image = {
			width: e,
			height: t
		}, this.magFilter = o === void 0 ? d : o, this.minFilter = s === void 0 ? d : s, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
	}
}, qa = /*@__PURE__*/ new vn(), Ja = /*@__PURE__*/ new Ka(1, 1), Ya = /*@__PURE__*/ new xn(), Xa = /*@__PURE__*/ new Cn(), Za = /*@__PURE__*/ new Xi(), Qa = [], $a = [], eo = /* @__PURE__ */ new Float32Array(16), to = /* @__PURE__ */ new Float32Array(9), no = /* @__PURE__ */ new Float32Array(4);
function ro(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = Qa[i];
	if (a === void 0 && (a = new Float32Array(i), Qa[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function io(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function ao(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function oo(e, t) {
	let n = $a[t];
	n === void 0 && (n = new Int32Array(t), $a[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function so(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function co(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (io(n, t)) return;
		e.uniform2fv(this.addr, t), ao(n, t);
	}
}
function lo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (io(n, t)) return;
		e.uniform3fv(this.addr, t), ao(n, t);
	}
}
function uo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (io(n, t)) return;
		e.uniform4fv(this.addr, t), ao(n, t);
	}
}
function fo(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (io(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), ao(n, t);
	} else {
		if (io(n, r)) return;
		no.set(r), e.uniformMatrix2fv(this.addr, !1, no), ao(n, r);
	}
}
function po(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (io(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), ao(n, t);
	} else {
		if (io(n, r)) return;
		to.set(r), e.uniformMatrix3fv(this.addr, !1, to), ao(n, r);
	}
}
function mo(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (io(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), ao(n, t);
	} else {
		if (io(n, r)) return;
		eo.set(r), e.uniformMatrix4fv(this.addr, !1, eo), ao(n, r);
	}
}
function ho(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function go(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (io(n, t)) return;
		e.uniform2iv(this.addr, t), ao(n, t);
	}
}
function _o(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (io(n, t)) return;
		e.uniform3iv(this.addr, t), ao(n, t);
	}
}
function vo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (io(n, t)) return;
		e.uniform4iv(this.addr, t), ao(n, t);
	}
}
function yo(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function bo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (io(n, t)) return;
		e.uniform2uiv(this.addr, t), ao(n, t);
	}
}
function xo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (io(n, t)) return;
		e.uniform3uiv(this.addr, t), ao(n, t);
	}
}
function So(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (io(n, t)) return;
		e.uniform4uiv(this.addr, t), ao(n, t);
	}
}
function Co(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	this.type === e.SAMPLER_2D_SHADOW ? (Ja.compareFunction = 515, a = Ja) : a = qa, n.setTexture2D(t || a, i);
}
function wo(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Xa, i);
}
function To(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || Za, i);
}
function Eo(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Ya, i);
}
function Do(e) {
	switch (e) {
		case 5126: return so;
		case 35664: return co;
		case 35665: return lo;
		case 35666: return uo;
		case 35674: return fo;
		case 35675: return po;
		case 35676: return mo;
		case 5124:
		case 35670: return ho;
		case 35667:
		case 35671: return go;
		case 35668:
		case 35672: return _o;
		case 35669:
		case 35673: return vo;
		case 5125: return yo;
		case 36294: return bo;
		case 36295: return xo;
		case 36296: return So;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Co;
		case 35679:
		case 36299:
		case 36307: return wo;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return To;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Eo;
	}
}
function Oo(e, t) {
	e.uniform1fv(this.addr, t);
}
function ko(e, t) {
	let n = ro(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function Ao(e, t) {
	let n = ro(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function jo(e, t) {
	let n = ro(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function Mo(e, t) {
	let n = ro(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function No(e, t) {
	let n = ro(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function Po(e, t) {
	let n = ro(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function Fo(e, t) {
	e.uniform1iv(this.addr, t);
}
function Io(e, t) {
	e.uniform2iv(this.addr, t);
}
function Lo(e, t) {
	e.uniform3iv(this.addr, t);
}
function Ro(e, t) {
	e.uniform4iv(this.addr, t);
}
function zo(e, t) {
	e.uniform1uiv(this.addr, t);
}
function Bo(e, t) {
	e.uniform2uiv(this.addr, t);
}
function Vo(e, t) {
	e.uniform3uiv(this.addr, t);
}
function Ho(e, t) {
	e.uniform4uiv(this.addr, t);
}
function Uo(e, t, n) {
	let r = this.cache, i = t.length, a = oo(n, i);
	io(r, a) || (e.uniform1iv(this.addr, a), ao(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || qa, a[e]);
}
function Wo(e, t, n) {
	let r = this.cache, i = t.length, a = oo(n, i);
	io(r, a) || (e.uniform1iv(this.addr, a), ao(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Xa, a[e]);
}
function Go(e, t, n) {
	let r = this.cache, i = t.length, a = oo(n, i);
	io(r, a) || (e.uniform1iv(this.addr, a), ao(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Za, a[e]);
}
function Ko(e, t, n) {
	let r = this.cache, i = t.length, a = oo(n, i);
	io(r, a) || (e.uniform1iv(this.addr, a), ao(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || Ya, a[e]);
}
function qo(e) {
	switch (e) {
		case 5126: return Oo;
		case 35664: return ko;
		case 35665: return Ao;
		case 35666: return jo;
		case 35674: return Mo;
		case 35675: return No;
		case 35676: return Po;
		case 5124:
		case 35670: return Fo;
		case 35667:
		case 35671: return Io;
		case 35668:
		case 35672: return Lo;
		case 35669:
		case 35673: return Ro;
		case 5125: return zo;
		case 36294: return Bo;
		case 36295: return Vo;
		case 36296: return Ho;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Uo;
		case 35679:
		case 36299:
		case 36307: return Wo;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return Go;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Ko;
	}
}
var Jo = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Do(t.type);
	}
}, Yo = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = qo(t.type);
	}
}, Xo = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, Zo = /(\w+)(\])?(\[|\.)?/g;
function Qo(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function $o(e, t, n) {
	let r = e.name, i = r.length;
	for (Zo.lastIndex = 0;;) {
		let a = Zo.exec(r), o = Zo.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			Qo(n, l === void 0 ? new Jo(s, e, t) : new Yo(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new Xo(s), Qo(n, e)), n = e;
		}
	}
}
var es = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			$o(n, e.getUniformLocation(t, n.name), this);
		}
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function ts(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var ns = 37297, rs = 0;
function is(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var as = /*@__PURE__*/ new W();
function os(e) {
	G._getMatrix(as, G.workingColorSpace, e);
	let t = `mat3( ${as.elements.map((e) => e.toFixed(4))} )`;
	switch (G.getTransfer(e)) {
		case $e: return [t, "LinearTransferOETF"];
		case et: return [t, "sRGBTransferOETF"];
		default: return console.warn("THREE.WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function ss(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = e.getShaderInfoLog(t).trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + is(e.getShaderSource(t), r);
	}
	return i;
}
function cs(e, t) {
	let n = os(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
function ls(e, t) {
	let n;
	switch (t) {
		case 1:
			n = "Linear";
			break;
		case 2:
			n = "Reinhard";
			break;
		case 3:
			n = "Cineon";
			break;
		case 4:
			n = "ACESFilmic";
			break;
		case 6:
			n = "AgX";
			break;
		case 7:
			n = "Neutral";
			break;
		case 5:
			n = "Custom";
			break;
		default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear";
	}
	return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var us = /*@__PURE__*/ new q();
function ds() {
	return G.getLuminanceCoefficients(us), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${us.x.toFixed(4)}, ${us.y.toFixed(4)}, ${us.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function fs(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(hs).join("\n");
}
function ps(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function ms(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function hs(e) {
	return e !== "";
}
function gs(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function _s(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var vs = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ys(e) {
	return e.replace(vs, xs);
}
var bs = /* @__PURE__ */ new Map();
function xs(e, t) {
	let n = Q[t];
	if (n === void 0) {
		let e = bs.get(t);
		if (e !== void 0) n = Q[e], console.warn("THREE.WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
		else throw Error("Can not resolve #include <" + t + ">");
	}
	return ys(n);
}
var Ss = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Cs(e) {
	return e.replace(Ss, ws);
}
function ws(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function Ts(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
function Es(e) {
	let t = "SHADOWMAP_TYPE_BASIC";
	return e.shadowMapType === 1 ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === 2 ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === 3 && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Ds(e) {
	let t = "ENVMAP_TYPE_CUBE";
	if (e.envMap) switch (e.envMapMode) {
		case 301:
		case 302:
			t = "ENVMAP_TYPE_CUBE";
			break;
		case 306: t = "ENVMAP_TYPE_CUBE_UV";
	}
	return t;
}
function Os(e) {
	let t = "ENVMAP_MODE_REFLECTION";
	if (e.envMap) switch (e.envMapMode) {
		case 302: t = "ENVMAP_MODE_REFRACTION";
	}
	return t;
}
function ks(e) {
	let t = "ENVMAP_BLENDING_NONE";
	if (e.envMap) switch (e.combine) {
		case 0:
			t = "ENVMAP_BLENDING_MULTIPLY";
			break;
		case 1:
			t = "ENVMAP_BLENDING_MIX";
			break;
		case 2: t = "ENVMAP_BLENDING_ADD";
	}
	return t;
}
function As(e) {
	let t = e.envMapCubeUVHeight;
	if (t === null) return null;
	let n = Math.log2(t) - 2, r = 1 / t;
	return {
		texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
		texelHeight: r,
		maxMip: n
	};
}
function js(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = Es(n), l = Ds(n), u = Os(n), d = ks(n), f = As(n), p = fs(n), m = ps(a), h = i.createProgram(), g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(hs).join("\n"), g.length > 0 && (g += "\n"), _ = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(hs).join("\n"), _.length > 0 && (_ += "\n")) : (g = [
		Ts(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
		n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(hs).join("\n"), _ = [
		Ts(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
		f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
		f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor || n.batchingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
		n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : Q.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : ls("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		Q.colorspace_pars_fragment,
		cs("linearToOutputTexel", n.outputColorSpace),
		ds(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(hs).join("\n")), o = ys(o), o = gs(o, n), o = _s(o, n), s = ys(s), s = gs(s, n), s = _s(s, n), o = Cs(o), s = Cs(s), n.isRawShaderMaterial !== !0 && (v = "#version 300 es\n", g = [
		p,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + g, _ = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + _);
	let y = v + g + o, b = v + _ + s, x = ts(i, i.VERTEX_SHADER, y), S = ts(i, i.FRAGMENT_SHADER, b);
	i.attachShader(h, x), i.attachShader(h, S), n.index0AttributeName === void 0 ? n.morphTargets === !0 && i.bindAttribLocation(h, 0, "position") : i.bindAttribLocation(h, 0, n.index0AttributeName), i.linkProgram(h);
	function C(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(h).trim(), r = i.getShaderInfoLog(x).trim(), a = i.getShaderInfoLog(S).trim(), o = !0, s = !0;
			if (i.getProgramParameter(h, i.LINK_STATUS) === !1) {
				if (o = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, h, x, S);
				else {
					let e = ss(i, x, "vertex"), r = ss(i, S, "fragment");
					console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + n + "\n" + e + "\n" + r);
				}
			} else n === "" ? (r === "" || a === "") && (s = !1) : console.warn("THREE.WebGLProgram: Program Info Log:", n);
			s && (t.diagnostics = {
				runnable: o,
				programLog: n,
				vertexShader: {
					log: r,
					prefix: g
				},
				fragmentShader: {
					log: a,
					prefix: _
				}
			});
		}
		i.deleteShader(x), i.deleteShader(S), w = new es(i, h), T = ms(i, h);
	}
	let w;
	this.getUniforms = function() {
		return w === void 0 && C(this), w;
	};
	let T;
	this.getAttributes = function() {
		return T === void 0 && C(this), T;
	};
	let E = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return E === !1 && (E = i.getProgramParameter(h, ns)), E;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(h), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = rs++, this.cacheKey = t, this.usedTimes = 1, this.program = h, this.vertexShader = x, this.fragmentShader = S, this;
}
var Ms = 0, Ns = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e) {
		let t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), i = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
		return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(i) === !1 && (a.add(i), i.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderID(e) {
		return this._getShaderStage(e.vertexShader).id;
	}
	getFragmentShaderID(e) {
		return this._getShaderStage(e.fragmentShader).id;
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new Ps(e), t.set(e, n)), n;
	}
}, Ps = class {
	constructor(e) {
		this.id = Ms++, this.code = e, this.usedTimes = 0;
	}
};
function Fs(e, t, n, r, i, a, o) {
	let s = new dr(), c = new Ns(), l = /* @__PURE__ */ new Set(), u = [], d = i.logarithmicDepthBuffer, f = i.vertexTextures, p = i.precision, m = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distanceRGBA",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function h(e) {
		return l.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function g(a, s, u, g, _) {
		let v = g.fog, y = _.geometry, b = a.isMeshStandardMaterial ? g.environment : null, x = (a.isMeshStandardMaterial ? n : t).get(a.envMap || b), S = x && x.mapping === 306 ? x.image.height : null, C = m[a.type];
		a.precision !== null && (p = i.getMaxPrecision(a.precision), p !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", p, "instead."));
		let w = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color, T = w === void 0 ? 0 : w.length, E = 0;
		y.morphAttributes.position !== void 0 && (E = 1), y.morphAttributes.normal !== void 0 && (E = 2), y.morphAttributes.color !== void 0 && (E = 3);
		let D, O, k, A;
		if (C) {
			let e = ca[C];
			D = e.vertexShader, O = e.fragmentShader;
		} else D = a.vertexShader, O = a.fragmentShader, c.update(a), k = c.getVertexShaderID(a), A = c.getFragmentShaderID(a);
		let j = e.getRenderTarget(), M = e.state.buffers.depth.getReversed(), N = _.isInstancedMesh === !0, P = _.isBatchedMesh === !0, F = !!a.map, I = !!a.matcap, ee = !!x, te = !!a.aoMap, ne = !!a.lightMap, re = !!a.bumpMap, ie = !!a.normalMap, ae = !!a.displacementMap, L = !!a.emissiveMap, oe = !!a.metalnessMap, se = !!a.roughnessMap, ce = a.anisotropy > 0, le = a.clearcoat > 0, ue = a.dispersion > 0, de = a.iridescence > 0, fe = a.sheen > 0, pe = a.transmission > 0, R = ce && !!a.anisotropyMap, me = le && !!a.clearcoatMap, he = le && !!a.clearcoatNormalMap, ge = le && !!a.clearcoatRoughnessMap, z = de && !!a.iridescenceMap, _e = de && !!a.iridescenceThicknessMap, B = fe && !!a.sheenColorMap, V = fe && !!a.sheenRoughnessMap, ve = !!a.specularMap, ye = !!a.specularColorMap, be = !!a.specularIntensityMap, xe = pe && !!a.transmissionMap, Se = pe && !!a.thicknessMap, Ce = !!a.gradientMap, we = !!a.alphaMap, Te = a.alphaTest > 0, Ee = !!a.alphaHash, De = !!a.extensions, Oe = 0;
		a.toneMapped && (j === null || j.isXRRenderTarget === !0) && (Oe = e.toneMapping);
		let ke = {
			shaderID: C,
			shaderType: a.type,
			shaderName: a.name,
			vertexShader: D,
			fragmentShader: O,
			defines: a.defines,
			customVertexShaderID: k,
			customFragmentShaderID: A,
			isRawShaderMaterial: a.isRawShaderMaterial === !0,
			glslVersion: a.glslVersion,
			precision: p,
			batching: P,
			batchingColor: P && _._colorsTexture !== null,
			instancing: N,
			instancingColor: N && _.instanceColor !== null,
			instancingMorph: N && _.morphTexture !== null,
			supportsVertexTextures: f,
			outputColorSpace: j === null ? e.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : Qe,
			alphaToCoverage: !!a.alphaToCoverage,
			map: F,
			matcap: I,
			envMap: ee,
			envMapMode: ee && x.mapping,
			envMapCubeUVHeight: S,
			aoMap: te,
			lightMap: ne,
			bumpMap: re,
			normalMap: ie,
			displacementMap: f && ae,
			emissiveMap: L,
			normalMapObjectSpace: ie && a.normalMapType === 1,
			normalMapTangentSpace: ie && a.normalMapType === 0,
			metalnessMap: oe,
			roughnessMap: se,
			anisotropy: ce,
			anisotropyMap: R,
			clearcoat: le,
			clearcoatMap: me,
			clearcoatNormalMap: he,
			clearcoatRoughnessMap: ge,
			dispersion: ue,
			iridescence: de,
			iridescenceMap: z,
			iridescenceThicknessMap: _e,
			sheen: fe,
			sheenColorMap: B,
			sheenRoughnessMap: V,
			specularMap: ve,
			specularColorMap: ye,
			specularIntensityMap: be,
			transmission: pe,
			transmissionMap: xe,
			thicknessMap: Se,
			gradientMap: Ce,
			opaque: a.transparent === !1 && a.blending === 1 && a.alphaToCoverage === !1,
			alphaMap: we,
			alphaTest: Te,
			alphaHash: Ee,
			combine: a.combine,
			mapUv: F && h(a.map.channel),
			aoMapUv: te && h(a.aoMap.channel),
			lightMapUv: ne && h(a.lightMap.channel),
			bumpMapUv: re && h(a.bumpMap.channel),
			normalMapUv: ie && h(a.normalMap.channel),
			displacementMapUv: ae && h(a.displacementMap.channel),
			emissiveMapUv: L && h(a.emissiveMap.channel),
			metalnessMapUv: oe && h(a.metalnessMap.channel),
			roughnessMapUv: se && h(a.roughnessMap.channel),
			anisotropyMapUv: R && h(a.anisotropyMap.channel),
			clearcoatMapUv: me && h(a.clearcoatMap.channel),
			clearcoatNormalMapUv: he && h(a.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: ge && h(a.clearcoatRoughnessMap.channel),
			iridescenceMapUv: z && h(a.iridescenceMap.channel),
			iridescenceThicknessMapUv: _e && h(a.iridescenceThicknessMap.channel),
			sheenColorMapUv: B && h(a.sheenColorMap.channel),
			sheenRoughnessMapUv: V && h(a.sheenRoughnessMap.channel),
			specularMapUv: ve && h(a.specularMap.channel),
			specularColorMapUv: ye && h(a.specularColorMap.channel),
			specularIntensityMapUv: be && h(a.specularIntensityMap.channel),
			transmissionMapUv: xe && h(a.transmissionMap.channel),
			thicknessMapUv: Se && h(a.thicknessMap.channel),
			alphaMapUv: we && h(a.alphaMap.channel),
			vertexTangents: !!y.attributes.tangent && (ie || ce),
			vertexColors: a.vertexColors,
			vertexAlphas: a.vertexColors === !0 && !!y.attributes.color && y.attributes.color.itemSize === 4,
			pointsUvs: _.isPoints === !0 && !!y.attributes.uv && (F || we),
			fog: !!v,
			useFog: a.fog === !0,
			fogExp2: !!v && v.isFogExp2,
			flatShading: a.flatShading === !0,
			sizeAttenuation: a.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			reverseDepthBuffer: M,
			skinning: _.isSkinnedMesh === !0,
			morphTargets: y.morphAttributes.position !== void 0,
			morphNormals: y.morphAttributes.normal !== void 0,
			morphColors: y.morphAttributes.color !== void 0,
			morphTargetsCount: T,
			morphTextureStride: E,
			numDirLights: s.directional.length,
			numPointLights: s.point.length,
			numSpotLights: s.spot.length,
			numSpotLightMaps: s.spotLightMap.length,
			numRectAreaLights: s.rectArea.length,
			numHemiLights: s.hemi.length,
			numDirLightShadows: s.directionalShadowMap.length,
			numPointLightShadows: s.pointShadowMap.length,
			numSpotLightShadows: s.spotShadowMap.length,
			numSpotLightShadowsWithMaps: s.numSpotLightShadowsWithMaps,
			numLightProbes: s.numLightProbes,
			numClippingPlanes: o.numPlanes,
			numClipIntersection: o.numIntersection,
			dithering: a.dithering,
			shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: Oe,
			decodeVideoTexture: F && a.map.isVideoTexture === !0 && G.getTransfer(a.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: L && a.emissiveMap.isVideoTexture === !0 && G.getTransfer(a.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: a.premultipliedAlpha,
			doubleSided: a.side === 2,
			flipSided: a.side === 1,
			useDepthPacking: a.depthPacking >= 0,
			depthPacking: a.depthPacking || 0,
			index0AttributeName: a.index0AttributeName,
			extensionClipCullDistance: De && a.extensions.clipCullDistance === !0 && r.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (De && a.extensions.multiDraw === !0 || P) && r.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: r.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: a.customProgramCacheKey()
		};
		return ke.vertexUv1s = l.has(1), ke.vertexUv2s = l.has(2), ke.vertexUv3s = l.has(3), l.clear(), ke;
	}
	function _(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (v(n, t), y(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function v(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function y(e, t) {
		s.disableAll(), t.supportsVertexTextures && s.enable(0), t.instancing && s.enable(1), t.instancingColor && s.enable(2), t.instancingMorph && s.enable(3), t.matcap && s.enable(4), t.envMap && s.enable(5), t.normalMapObjectSpace && s.enable(6), t.normalMapTangentSpace && s.enable(7), t.clearcoat && s.enable(8), t.iridescence && s.enable(9), t.alphaTest && s.enable(10), t.vertexColors && s.enable(11), t.vertexAlphas && s.enable(12), t.vertexUv1s && s.enable(13), t.vertexUv2s && s.enable(14), t.vertexUv3s && s.enable(15), t.vertexTangents && s.enable(16), t.anisotropy && s.enable(17), t.alphaHash && s.enable(18), t.batching && s.enable(19), t.dispersion && s.enable(20), t.batchingColor && s.enable(21), e.push(s.mask), s.disableAll(), t.fog && s.enable(0), t.useFog && s.enable(1), t.flatShading && s.enable(2), t.logarithmicDepthBuffer && s.enable(3), t.reverseDepthBuffer && s.enable(4), t.skinning && s.enable(5), t.morphTargets && s.enable(6), t.morphNormals && s.enable(7), t.morphColors && s.enable(8), t.premultipliedAlpha && s.enable(9), t.shadowMapEnabled && s.enable(10), t.doubleSided && s.enable(11), t.flipSided && s.enable(12), t.useDepthPacking && s.enable(13), t.dithering && s.enable(14), t.transmission && s.enable(15), t.sheen && s.enable(16), t.opaque && s.enable(17), t.pointsUvs && s.enable(18), t.decodeVideoTexture && s.enable(19), t.decodeVideoTextureEmissive && s.enable(20), t.alphaToCoverage && s.enable(21), e.push(s.mask);
	}
	function b(e) {
		let t = m[e.type], n;
		if (t) {
			let e = ca[t];
			n = Ri.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function x(t, n) {
		let r;
		for (let e = 0, t = u.length; e < t; e++) {
			let t = u[e];
			if (t.cacheKey === n) {
				r = t, ++r.usedTimes;
				break;
			}
		}
		return r === void 0 && (r = new js(e, n, t, a), u.push(r)), r;
	}
	function S(e) {
		if (--e.usedTimes === 0) {
			let t = u.indexOf(e);
			u[t] = u[u.length - 1], u.pop(), e.destroy();
		}
	}
	function C(e) {
		c.remove(e);
	}
	function w() {
		c.dispose();
	}
	return {
		getParameters: g,
		getProgramCacheKey: _,
		getUniforms: b,
		acquireProgram: x,
		releaseProgram: S,
		releaseShaderCache: C,
		programs: u,
		dispose: w
	};
}
function Is() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function Ls(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.z === t.z ? e.id - t.id : e.z - t.z : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Rs(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function zs() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(n, r, i, a, o, s) {
		let c = e[t];
		return c === void 0 ? (c = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: o,
			group: s
		}, e[t] = c) : (c.id = n.id, c.object = n, c.geometry = r, c.material = i, c.groupOrder = a, c.renderOrder = n.renderOrder, c.z = o, c.group = s), t++, c;
	}
	function s(e, t, a, s, c, l) {
		let u = o(e, t, a, s, c, l);
		a.transmission > 0 ? r.push(u) : a.transparent === !0 ? i.push(u) : n.push(u);
	}
	function c(e, t, a, s, c, l) {
		let u = o(e, t, a, s, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function l(e, t) {
		n.length > 1 && n.sort(e || Ls), r.length > 1 && r.sort(t || Rs), i.length > 1 && i.sort(t || Rs);
	}
	function u() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: s,
		unshift: c,
		finish: u,
		sort: l
	};
}
function Bs() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new zs(), e.set(t, [i])) : n >= r.length ? (i = new zs(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function Vs() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					direction: new q(),
					color: new Y()
				};
				break;
			case "SpotLight":
				n = {
					position: new q(),
					direction: new q(),
					color: new Y(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new q(),
					color: new Y(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new q(),
					skyColor: new Y(),
					groundColor: new Y()
				};
				break;
			case "RectAreaLight": n = {
				color: new Y(),
				position: new q(),
				halfWidth: new q(),
				halfHeight: new q()
			};
		}
		return e[t.id] = n, n;
	} };
}
function Hs() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new U()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new U()
				};
				break;
			case "PointLight": n = {
				shadowIntensity: 1,
				shadowBias: 0,
				shadowNormalBias: 0,
				shadowRadius: 1,
				shadowMapSize: new U(),
				shadowCameraNear: 1,
				shadowCameraFar: 1e3
			};
		}
		return e[t.id] = n, n;
	} };
}
var Us = 0;
function Ws(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Gs(e) {
	let t = new Vs(), n = Hs(), r = {
		version: 0,
		hash: {
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new q());
	let i = new q(), a = new J(), o = new J();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0;
		i.sort(Ws);
		for (let e = 0, y = i.length; e < y; e++) {
			let y = i[e], b = y.color, x = y.intensity, S = y.distance, C = y.shadow && y.shadow.map ? y.shadow.map.texture : null;
			if (y.isAmbientLight) a += b.r * x, o += b.g * x, s += b.b * x;
			else if (y.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(y.sh.coefficients[e], x);
				v++;
			} else if (y.isDirectionalLight) {
				let e = t.get(y);
				if (e.color.copy(y.color).multiplyScalar(y.intensity), y.castShadow) {
					let e = y.shadow, t = n.get(y);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[c] = t, r.directionalShadowMap[c] = C, r.directionalShadowMatrix[c] = y.shadow.matrix, p++;
				}
				r.directional[c] = e, c++;
			} else if (y.isSpotLight) {
				let e = t.get(y);
				e.position.setFromMatrixPosition(y.matrixWorld), e.color.copy(b).multiplyScalar(x), e.distance = S, e.coneCos = Math.cos(y.angle), e.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), e.decay = y.decay, r.spot[u] = e;
				let i = y.shadow;
				if (y.map && (r.spotLightMap[g] = y.map, g++, i.updateMatrices(y), y.castShadow && _++), r.spotLightMatrix[u] = i.matrix, y.castShadow) {
					let e = n.get(y);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[u] = e, r.spotShadowMap[u] = C, h++;
				}
				u++;
			} else if (y.isRectAreaLight) {
				let e = t.get(y);
				e.color.copy(b).multiplyScalar(x), e.halfWidth.set(y.width * .5, 0, 0), e.halfHeight.set(0, y.height * .5, 0), r.rectArea[d] = e, d++;
			} else if (y.isPointLight) {
				let e = t.get(y);
				if (e.color.copy(y.color).multiplyScalar(y.intensity), e.distance = y.distance, e.decay = y.decay, y.castShadow) {
					let e = y.shadow, t = n.get(y);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[l] = t, r.pointShadowMap[l] = C, r.pointShadowMatrix[l] = y.shadow.matrix, m++;
				}
				r.point[l] = e, l++;
			} else if (y.isHemisphereLight) {
				let e = t.get(y);
				e.skyColor.copy(y.color).multiplyScalar(x), e.groundColor.copy(y.groundColor).multiplyScalar(x), r.hemi[f] = e, f++;
			}
		}
		d > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = $.LTC_FLOAT_1, r.rectAreaLTC2 = $.LTC_FLOAT_2) : (r.rectAreaLTC1 = $.LTC_HALF_1, r.rectAreaLTC2 = $.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let y = r.hash;
		(y.directionalLength !== c || y.pointLength !== l || y.spotLength !== u || y.rectAreaLength !== d || y.hemiLength !== f || y.numDirectionalShadows !== p || y.numPointShadows !== m || y.numSpotShadows !== h || y.numSpotMaps !== g || y.numLightProbes !== v) && (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = l, r.hemi.length = f, r.directionalShadow.length = p, r.directionalShadowMap.length = p, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = h, r.spotShadowMap.length = h, r.directionalShadowMatrix.length = p, r.pointShadowMatrix.length = m, r.spotLightMatrix.length = h + g - _, r.spotLightMap.length = g, r.numSpotLightShadowsWithMaps = _, r.numLightProbes = v, y.directionalLength = c, y.pointLength = l, y.spotLength = u, y.rectAreaLength = d, y.hemiLength = f, y.numDirectionalShadows = p, y.numPointShadows = m, y.numSpotShadows = h, y.numSpotMaps = g, y.numLightProbes = v, r.version = Us++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = t.matrixWorldInverse;
		for (let t = 0, f = e.length; t < f; t++) {
			let f = e[t];
			if (f.isDirectionalLight) {
				let e = r.directional[n];
				e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), n++;
			} else if (f.isSpotLight) {
				let e = r.spot[c];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), c++;
			} else if (f.isRectAreaLight) {
				let e = r.rectArea[l];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), o.identity(), a.copy(f.matrixWorld), a.premultiply(d), o.extractRotation(a), e.halfWidth.set(f.width * .5, 0, 0), e.halfHeight.set(0, f.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), l++;
			} else if (f.isPointLight) {
				let e = r.point[s];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), s++;
			} else if (f.isHemisphereLight) {
				let e = r.hemi[u];
				e.direction.setFromMatrixPosition(f.matrixWorld), e.direction.transformDirection(d), u++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function Ks(e) {
	let t = new Gs(e), n = [], r = [];
	function i(e) {
		l.camera = e, n.length = 0, r.length = 0;
	}
	function a(e) {
		n.push(e);
	}
	function o(e) {
		r.push(e);
	}
	function s() {
		t.setup(n);
	}
	function c(e) {
		t.setupView(n, e);
	}
	let l = {
		lightsArray: n,
		shadowsArray: r,
		camera: null,
		lights: t,
		transmissionRenderTarget: {}
	};
	return {
		init: i,
		state: l,
		setupLights: s,
		setupLightsView: c,
		pushLight: a,
		pushShadow: o
	};
}
function qs(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new Ks(e), t.set(n, [a])) : r >= i.length ? (a = new Ks(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var Js = class extends Jr {
	static get type() {
		return "MeshDepthMaterial";
	}
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.depthPacking = qe, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, Ys = class extends Jr {
	static get type() {
		return "MeshDistanceMaterial";
	}
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
}, Xs = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", Zs = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";
function Qs(e, t, n) {
	let r = new ia(), i = new U(), a = new U(), o = new K(), s = new Js({ depthPacking: Je }), c = new Ys(), l = {}, u = n.maxTextureSize, f = {
		0: 1,
		1: 0,
		2: 2
	}, p = new Vi({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new U() },
			radius: { value: 4 }
		},
		vertexShader: Xs,
		fragmentShader: Zs
	}), m = p.clone();
	m.defines.HORIZONTAL_PASS = 1;
	let h = new Z();
	h.setAttribute("position", new ri(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let g = new Ai(h, p), _ = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let v = this.type;
	this.render = function(t, n, s) {
		if (_.enabled === !1 || _.autoUpdate === !1 && _.needsUpdate === !1 || t.length === 0) return;
		let c = e.getRenderTarget(), l = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.state;
		p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
		let m = v !== 3 && this.type === 3, h = v === 3 && this.type !== 3;
		for (let c = 0, l = t.length; c < l; c++) {
			let l = t[c], f = l.shadow;
			if (f === void 0) {
				console.warn("THREE.WebGLShadowMap:", l, "has no shadow.");
				continue;
			}
			if (f.autoUpdate === !1 && f.needsUpdate === !1) continue;
			i.copy(f.mapSize);
			let g = f.getFrameExtents();
			if (i.multiply(g), a.copy(f.mapSize), (i.x > u || i.y > u) && (i.x > u && (a.x = Math.floor(u / g.x), i.x = a.x * g.x, f.mapSize.x = a.x), i.y > u && (a.y = Math.floor(u / g.y), i.y = a.y * g.y, f.mapSize.y = a.y)), f.map === null || m === !0 || h === !0) {
				let e = this.type === 3 ? {} : {
					minFilter: d,
					magFilter: d
				};
				f.map !== null && f.map.dispose(), f.map = new bn(i.x, i.y, e), f.map.texture.name = l.name + ".shadowMap", f.camera.updateProjectionMatrix();
			}
			e.setRenderTarget(f.map), e.clear();
			let _ = f.getViewportCount();
			for (let e = 0; e < _; e++) {
				let t = f.getViewport(e);
				o.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w), p.viewport(o), f.updateMatrices(l, e), r = f.getFrustum(), x(n, s, f.camera, l, this.type);
			}
			f.isPointLightShadow !== !0 && this.type === 3 && y(f, s), f.needsUpdate = !1;
		}
		v = this.type, _.needsUpdate = !1, e.setRenderTarget(c, l, f);
	};
	function y(n, r) {
		let a = t.update(g);
		p.defines.VSM_SAMPLES !== n.blurSamples && (p.defines.VSM_SAMPLES = n.blurSamples, m.defines.VSM_SAMPLES = n.blurSamples, p.needsUpdate = !0, m.needsUpdate = !0), n.mapPass === null && (n.mapPass = new bn(i.x, i.y)), p.uniforms.shadow_pass.value = n.map.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, p, g, null), m.uniforms.shadow_pass.value = n.mapPass.texture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, m, g, null);
	}
	function b(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? c : s, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
			let e = a.uuid, t = n.uuid, r = l[e];
			r === void 0 && (r = {}, l[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", S)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? f[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function x(n, i, a, o, s) {
		if (n.visible === !1) return;
		if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || r.intersectsObject(n))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), c = n.material;
			if (Array.isArray(c)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = c[u.materialIndex];
					if (d && d.visible) {
						let t = b(n, d, o, s);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (c.visible) {
				let t = b(n, c, o, s);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let c = n.children;
		for (let e = 0, t = c.length; e < t; e++) x(c[e], i, a, o, s);
	}
	function S(e) {
		e.target.removeEventListener("dispose", S);
		for (let t in l) {
			let n = l[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
var $s = {
	0: 1,
	2: 6,
	4: 7,
	3: 5,
	1: 0,
	6: 2,
	7: 4,
	5: 3
};
function ec(e, t) {
	function n() {
		let t = !1, n = new K(), r = null, i = new K(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let e = t.get("EXT_clip_control");
					r ? e.clipControlEXT(e.LOWER_LEFT_EXT, e.ZERO_TO_ONE_EXT) : e.clipControlEXT(e.LOWER_LEFT_EXT, e.NEGATIVE_ONE_TO_ONE_EXT);
					let n = o;
					o = null, this.setClear(n);
				}
				r = e;
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? L(e.DEPTH_TEST) : oe(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = $s[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (r && (t = 1 - t), e.clearDepth(t), o = t);
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? L(e.STENCIL_TEST) : oe(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], m = null, h = !1, g = null, _ = null, v = null, y = null, b = null, x = null, S = null, C = new Y(0, 0, 0), w = 0, T = !1, E = null, D = null, O = null, k = null, A = null, j = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), M = !1, N = 0, P = e.getParameter(e.VERSION);
	P.indexOf("WebGL") === -1 ? P.indexOf("OpenGL ES") !== -1 && (N = parseFloat(/^OpenGL ES (\d)/.exec(P)[1]), M = N >= 2) : (N = parseFloat(/^WebGL (\d)/.exec(P)[1]), M = N >= 1);
	let F = null, I = {}, ee = e.getParameter(e.SCISSOR_BOX), te = e.getParameter(e.VIEWPORT), ne = new K().fromArray(ee), re = new K().fromArray(te);
	function ie(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let ae = {};
	ae[e.TEXTURE_2D] = ie(e.TEXTURE_2D, e.TEXTURE_2D, 1), ae[e.TEXTURE_CUBE_MAP] = ie(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ae[e.TEXTURE_2D_ARRAY] = ie(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), ae[e.TEXTURE_3D] = ie(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), L(e.DEPTH_TEST), o.setFunc(3), R(!1), me(1), L(e.CULL_FACE), fe(0);
	function L(t) {
		u[t] !== !0 && (e.enable(t), u[t] = !0);
	}
	function oe(t) {
		u[t] !== !1 && (e.disable(t), u[t] = !1);
	}
	function se(t, n) {
		return d[t] !== n && (e.bindFramebuffer(t, n), d[t] = n, t === e.DRAW_FRAMEBUFFER && (d[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (d[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function ce(t, n) {
		let r = p, i = !1;
		if (t) {
			r = f.get(n), r === void 0 && (r = [], f.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function le(t) {
		return m !== t && (e.useProgram(t), m = t, !0);
	}
	let ue = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	ue[103] = e.MIN, ue[104] = e.MAX;
	let de = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function fe(t, n, r, i, a, o, s, c, l, u) {
		if (t === 0) h === !0 && (oe(e.BLEND), h = !1);
		else if (h === !1 && (L(e.BLEND), h = !0), t !== 5) {
			if (t !== g || u !== T) {
				if ((_ !== 100 || b !== 100) && (e.blendEquation(e.FUNC_ADD), _ = 100, b = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA);
						break;
					default: console.error("THREE.WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.SRC_ALPHA, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFunc(e.ZERO, e.SRC_COLOR);
						break;
					default: console.error("THREE.WebGLState: Invalid blending: ", t);
				}
				v = null, y = null, x = null, S = null, C.set(0, 0, 0), w = 0, g = t, T = u;
			}
		} else a ||= n, o ||= r, s ||= i, (n !== _ || a !== b) && (e.blendEquationSeparate(ue[n], ue[a]), _ = n, b = a), (r !== v || i !== y || o !== x || s !== S) && (e.blendFuncSeparate(de[r], de[i], de[o], de[s]), v = r, y = i, x = o, S = s), (c.equals(C) === !1 || l !== w) && (e.blendColor(c.r, c.g, c.b, l), C.copy(c), w = l), g = t, T = !1;
	}
	function pe(t, n) {
		t.side === 2 ? oe(e.CULL_FACE) : L(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), R(r), t.blending === 1 && t.transparent === !1 ? fe(0) : fe(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), ge(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? L(e.SAMPLE_ALPHA_TO_COVERAGE) : oe(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function R(t) {
		E !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), E = t);
	}
	function me(t) {
		t === 0 ? oe(e.CULL_FACE) : (L(e.CULL_FACE), t !== D && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), D = t;
	}
	function he(t) {
		t !== O && (M && e.lineWidth(t), O = t);
	}
	function ge(t, n, r) {
		t ? (L(e.POLYGON_OFFSET_FILL), (k !== n || A !== r) && (e.polygonOffset(n, r), k = n, A = r)) : oe(e.POLYGON_OFFSET_FILL);
	}
	function z(t) {
		t ? L(e.SCISSOR_TEST) : oe(e.SCISSOR_TEST);
	}
	function _e(t) {
		t === void 0 && (t = e.TEXTURE0 + j - 1), F !== t && (e.activeTexture(t), F = t);
	}
	function B(t, n, r) {
		r === void 0 && (r = F === null ? e.TEXTURE0 + j - 1 : F);
		let i = I[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, I[r] = i), (i.type !== t || i.texture !== n) && (F !== r && (e.activeTexture(r), F = r), e.bindTexture(t, n || ae[t]), i.type = t, i.texture = n);
	}
	function V() {
		let t = I[F];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function ve() {
		try {
			e.compressedTexImage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function ye() {
		try {
			e.compressedTexImage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function be() {
		try {
			e.texSubImage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function xe() {
		try {
			e.texSubImage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Se() {
		try {
			e.compressedTexSubImage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Ce() {
		try {
			e.compressedTexSubImage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function we() {
		try {
			e.texStorage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Te() {
		try {
			e.texStorage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Ee() {
		try {
			e.texImage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function De() {
		try {
			e.texImage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Oe(t) {
		ne.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), ne.copy(t));
	}
	function ke(t) {
		re.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), re.copy(t));
	}
	function Ae(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
	}
	function je(t, n) {
		let r = l.get(n).get(t);
		c.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), c.set(n, r));
	}
	function Me() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), u = {}, F = null, I = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], m = null, h = !1, g = null, _ = null, v = null, y = null, b = null, x = null, S = null, C = new Y(0, 0, 0), w = 0, T = !1, E = null, D = null, O = null, k = null, A = null, ne.set(0, 0, e.canvas.width, e.canvas.height), re.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: L,
		disable: oe,
		bindFramebuffer: se,
		drawBuffers: ce,
		useProgram: le,
		setBlending: fe,
		setMaterial: pe,
		setFlipSided: R,
		setCullFace: me,
		setLineWidth: he,
		setPolygonOffset: ge,
		setScissorTest: z,
		activeTexture: _e,
		bindTexture: B,
		unbindTexture: V,
		compressedTexImage2D: ve,
		compressedTexImage3D: ye,
		texImage2D: Ee,
		texImage3D: De,
		updateUBOMapping: Ae,
		uniformBlockBinding: je,
		texStorage2D: we,
		texStorage3D: Te,
		texSubImage2D: be,
		texSubImage3D: xe,
		compressedTexSubImage2D: Se,
		compressedTexSubImage3D: Ce,
		scissor: Oe,
		viewport: ke,
		reset: Me
	};
}
function tc(e, t) {
	let n = e.image && e.image.width ? e.image.width / e.image.height : 1;
	return n > t ? (e.repeat.x = 1, e.repeat.y = n / t, e.offset.x = 0, e.offset.y = (1 - e.repeat.y) / 2) : (e.repeat.x = t / n, e.repeat.y = 1, e.offset.x = (1 - e.repeat.x) / 2, e.offset.y = 0), e;
}
function nc(e, t) {
	let n = e.image && e.image.width ? e.image.width / e.image.height : 1;
	return n > t ? (e.repeat.x = t / n, e.repeat.y = 1, e.offset.x = (1 - e.repeat.x) / 2, e.offset.y = 0) : (e.repeat.x = 1, e.repeat.y = n / t, e.offset.x = 0, e.offset.y = (1 - e.repeat.y) / 2), e;
}
function rc(e) {
	return e.repeat.x = 1, e.repeat.y = 1, e.offset.x = 0, e.offset.y = 0, e;
}
function ic(e, t, n, r) {
	let i = ac(r);
	switch (n) {
		case N: return e * t;
		case I: return e * t;
		case ee: return e * t * 2;
		case re: return e * t / i.components * i.byteLength;
		case ie: return e * t / i.components * i.byteLength;
		case ae: return e * t * 2 / i.components * i.byteLength;
		case L: return e * t * 2 / i.components * i.byteLength;
		case P: return e * t * 3 / i.components * i.byteLength;
		case F: return e * t * 4 / i.components * i.byteLength;
		case se: return e * t * 4 / i.components * i.byteLength;
		case ce:
		case le: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case ue:
		case de: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case pe:
		case me: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case fe:
		case R: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case he:
		case ge: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case z: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case _e: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case B: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case V: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case ve: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case ye: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case be: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case xe: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case Se: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case Ce: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case we: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case Te: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case Ee: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case De: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case Oe: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case ke:
		case Ae:
		case je: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case Me:
		case Ne: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case Pe:
		case Fe: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function ac(e) {
	switch (e) {
		case x:
		case S: return {
			byteLength: 1,
			components: 1
		};
		case w:
		case C:
		case O: return {
			byteLength: 2,
			components: 1
		};
		case k:
		case A: return {
			byteLength: 2,
			components: 4
		};
		case E:
		case T:
		case D: return {
			byteLength: 4,
			components: 1
		};
		case M: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`Unknown texture type ${e}.`);
}
var oc = {
	contain: tc,
	cover: nc,
	fill: rc,
	getByteLength: ic
};
function sc(e, t, n, r, i, a, o) {
	let s = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, p = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = new U(), v = /* @__PURE__ */ new WeakMap(), b, x = /* @__PURE__ */ new WeakMap(), S = !1;
	try {
		S = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function C(e, t) {
		return S ? new OffscreenCanvas(e, t) : Zt("canvas");
	}
	function w(e, t, n) {
		let r = 1, i = we(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				b === void 0 && (b = C(n, a));
				let o = t ? C(n, a) : b;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function T(e) {
		return e.generateMipmaps;
	}
	function E(t) {
		e.generateMipmap(t);
	}
	function D(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function O(n, r, i, a, o = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let s = r;
		if (r === e.RED && (i === e.FLOAT && (s = e.R32F), i === e.HALF_FLOAT && (s = e.R16F), i === e.UNSIGNED_BYTE && (s = e.R8)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.R8UI), i === e.UNSIGNED_SHORT && (s = e.R16UI), i === e.UNSIGNED_INT && (s = e.R32UI), i === e.BYTE && (s = e.R8I), i === e.SHORT && (s = e.R16I), i === e.INT && (s = e.R32I)), r === e.RG && (i === e.FLOAT && (s = e.RG32F), i === e.HALF_FLOAT && (s = e.RG16F), i === e.UNSIGNED_BYTE && (s = e.RG8)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RG8UI), i === e.UNSIGNED_SHORT && (s = e.RG16UI), i === e.UNSIGNED_INT && (s = e.RG32UI), i === e.BYTE && (s = e.RG8I), i === e.SHORT && (s = e.RG16I), i === e.INT && (s = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RGB8UI), i === e.UNSIGNED_SHORT && (s = e.RGB16UI), i === e.UNSIGNED_INT && (s = e.RGB32UI), i === e.BYTE && (s = e.RGB8I), i === e.SHORT && (s = e.RGB16I), i === e.INT && (s = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RGBA8UI), i === e.UNSIGNED_SHORT && (s = e.RGBA16UI), i === e.UNSIGNED_INT && (s = e.RGBA32UI), i === e.BYTE && (s = e.RGBA8I), i === e.SHORT && (s = e.RGBA16I), i === e.INT && (s = e.RGBA32I)), r === e.RGB && i === e.UNSIGNED_INT_5_9_9_9_REV && (s = e.RGB9_E5), r === e.RGBA) {
			let t = o ? $e : G.getTransfer(a);
			i === e.FLOAT && (s = e.RGBA32F), i === e.HALF_FLOAT && (s = e.RGBA16F), i === e.UNSIGNED_BYTE && (s = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT_4_4_4_4 && (s = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (s = e.RGB5_A1);
		}
		return (s === e.R16F || s === e.R32F || s === e.RG16F || s === e.RG32F || s === e.RGBA16F || s === e.RGBA32F) && t.get("EXT_color_buffer_float"), s;
	}
	function k(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function A(e, t) {
		return T(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function j(e) {
		let t = e.target;
		t.removeEventListener("dispose", j), N(t), t.isVideoTexture && v.delete(t);
	}
	function M(e) {
		let t = e.target;
		t.removeEventListener("dispose", M), F(t);
	}
	function N(e) {
		let t = r.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, i = x.get(n);
		if (i) {
			let r = i[t.__cacheKey];
			r.usedTimes--, r.usedTimes === 0 && P(e), Object.keys(i).length === 0 && x.delete(n);
		}
		r.remove(e);
	}
	function P(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source, a = x.get(i);
		delete a[n.__cacheKey], o.memory.textures--;
	}
	function F(t) {
		let n = r.get(t);
		if (t.depthTexture && (t.depthTexture.dispose(), r.remove(t.depthTexture)), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let i = t.textures;
		for (let t = 0, n = i.length; t < n; t++) {
			let n = r.get(i[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), o.memory.textures--), r.remove(i[t]);
		}
		r.remove(t);
	}
	let I = 0;
	function ee() {
		I = 0;
	}
	function te() {
		let e = I;
		return e >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + i.maxTextures), I += 1, e;
	}
	function re(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function ie(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && Se(t), t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				fe(a, t, i);
				return;
			}
		}
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function ae(t, i) {
		let a = r.get(t);
		t.version > 0 && a.__version !== t.version ? fe(a, t, i) : n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i);
	}
	function L(t, i) {
		let a = r.get(t);
		t.version > 0 && a.__version !== t.version ? fe(a, t, i) : n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function oe(t, i) {
		let a = r.get(t);
		t.version > 0 && a.__version !== t.version ? pe(a, t, i) : n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
	}
	let se = {
		[c]: e.REPEAT,
		[l]: e.CLAMP_TO_EDGE,
		[u]: e.MIRRORED_REPEAT
	}, ce = {
		[d]: e.NEAREST,
		[f]: e.NEAREST_MIPMAP_NEAREST,
		[m]: e.NEAREST_MIPMAP_LINEAR,
		[g]: e.LINEAR,
		[_]: e.LINEAR_MIPMAP_NEAREST,
		[y]: e.LINEAR_MIPMAP_LINEAR
	}, le = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function ue(n, a) {
		if (a.type === 1015 && t.has("OES_texture_float_linear") === !1 && (a.magFilter === 1006 || a.magFilter === 1007 || a.magFilter === 1005 || a.magFilter === 1008 || a.minFilter === 1006 || a.minFilter === 1007 || a.minFilter === 1005 || a.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, se[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, se[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, se[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, ce[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, ce[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, le[a.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
				let o = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy;
			}
		}
	}
	function de(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", j));
		let i = n.source, a = x.get(i);
		a === void 0 && (a = {}, x.set(i, a));
		let s = re(n);
		if (s !== t.__cacheKey) {
			a[s] === void 0 && (a[s] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, o.memory.textures++, r = !0), a[s].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && P(n)), t.__cacheKey = s, t.__webglTexture = a[s].texture;
		}
		return r;
	}
	function fe(t, o, s) {
		let c = e.TEXTURE_2D;
		(o.isDataArrayTexture || o.isCompressedArrayTexture) && (c = e.TEXTURE_2D_ARRAY), o.isData3DTexture && (c = e.TEXTURE_3D);
		let l = de(t, o), u = o.source;
		n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + s);
		let d = r.get(u);
		if (u.version !== d.__version || l === !0) {
			n.activeTexture(e.TEXTURE0 + s);
			let t = G.getPrimaries(G.workingColorSpace), r = o.colorSpace === "" ? null : G.getPrimaries(o.colorSpace), f = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, f);
			let p = w(o.image, !1, i.maxTextureSize);
			p = Ce(o, p);
			let m = a.convert(o.format, o.colorSpace), h = a.convert(o.type), g = O(o.internalFormat, m, h, o.colorSpace, o.isVideoTexture);
			ue(c, o);
			let _, v = o.mipmaps, y = o.isVideoTexture !== !0, b = d.__version === void 0 || l === !0, x = u.dataReady, S = A(o, p);
			if (o.isDepthTexture) g = k(o.format === ne, o.type), b && (y ? n.texStorage2D(e.TEXTURE_2D, 1, g, p.width, p.height) : n.texImage2D(e.TEXTURE_2D, 0, g, p.width, p.height, 0, m, h, null));
			else if (o.isDataTexture) {
				if (v.length > 0) {
					y && b && n.texStorage2D(e.TEXTURE_2D, S, g, v[0].width, v[0].height);
					for (let t = 0, r = v.length; t < r; t++) _ = v[t], y ? x && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, m, h, _.data) : n.texImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, m, h, _.data);
					o.generateMipmaps = !1;
				} else y ? (b && n.texStorage2D(e.TEXTURE_2D, S, g, p.width, p.height), x && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, p.width, p.height, m, h, p.data)) : n.texImage2D(e.TEXTURE_2D, 0, g, p.width, p.height, 0, m, h, p.data);
			} else if (o.isCompressedTexture) {
				if (o.isCompressedArrayTexture) {
					y && b && n.texStorage3D(e.TEXTURE_2D_ARRAY, S, g, v[0].width, v[0].height, p.depth);
					for (let t = 0, r = v.length; t < r; t++) if (_ = v[t], o.format !== 1023) {
						if (m !== null) {
							if (y) {
								if (x) {
									if (o.layerUpdates.size > 0) {
										let r = ic(_.width, _.height, o.format, o.type);
										for (let i of o.layerUpdates) {
											let a = _.data.subarray(i * r / _.data.BYTES_PER_ELEMENT, (i + 1) * r / _.data.BYTES_PER_ELEMENT);
											n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, i, _.width, _.height, 1, m, a);
										}
										o.clearLayerUpdates();
									} else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, _.width, _.height, p.depth, m, _.data);
								}
							} else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, t, g, _.width, _.height, p.depth, 0, _.data, 0, 0);
						} else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else y ? x && n.texSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, _.width, _.height, p.depth, m, h, _.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, t, g, _.width, _.height, p.depth, 0, m, h, _.data);
				} else {
					y && b && n.texStorage2D(e.TEXTURE_2D, S, g, v[0].width, v[0].height);
					for (let t = 0, r = v.length; t < r; t++) _ = v[t], o.format === 1023 ? y ? x && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, m, h, _.data) : n.texImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, m, h, _.data) : m === null ? console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : y ? x && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, m, _.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, _.data);
				}
			} else if (o.isDataArrayTexture) {
				if (y) {
					if (b && n.texStorage3D(e.TEXTURE_2D_ARRAY, S, g, p.width, p.height, p.depth), x) {
						if (o.layerUpdates.size > 0) {
							let t = ic(p.width, p.height, o.format, o.type);
							for (let r of o.layerUpdates) {
								let i = p.data.subarray(r * t / p.data.BYTES_PER_ELEMENT, (r + 1) * t / p.data.BYTES_PER_ELEMENT);
								n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, r, p.width, p.height, 1, m, h, i);
							}
							o.clearLayerUpdates();
						} else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, p.width, p.height, p.depth, m, h, p.data);
					}
				} else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, g, p.width, p.height, p.depth, 0, m, h, p.data);
			} else if (o.isData3DTexture) y ? (b && n.texStorage3D(e.TEXTURE_3D, S, g, p.width, p.height, p.depth), x && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, p.width, p.height, p.depth, m, h, p.data)) : n.texImage3D(e.TEXTURE_3D, 0, g, p.width, p.height, p.depth, 0, m, h, p.data);
			else if (o.isFramebufferTexture) {
				if (b) {
					if (y) n.texStorage2D(e.TEXTURE_2D, S, g, p.width, p.height);
					else {
						let t = p.width, r = p.height;
						for (let i = 0; i < S; i++) n.texImage2D(e.TEXTURE_2D, i, g, t, r, 0, m, h, null), t >>= 1, r >>= 1;
					}
				}
			} else if (v.length > 0) {
				if (y && b) {
					let t = we(v[0]);
					n.texStorage2D(e.TEXTURE_2D, S, g, t.width, t.height);
				}
				for (let t = 0, r = v.length; t < r; t++) _ = v[t], y ? x && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, m, h, _) : n.texImage2D(e.TEXTURE_2D, t, g, m, h, _);
				o.generateMipmaps = !1;
			} else if (y) {
				if (b) {
					let t = we(p);
					n.texStorage2D(e.TEXTURE_2D, S, g, t.width, t.height);
				}
				x && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, m, h, p);
			} else n.texImage2D(e.TEXTURE_2D, 0, g, m, h, p);
			T(o) && E(c), d.__version = u.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function pe(t, o, s) {
		if (o.image.length !== 6) return;
		let c = de(t, o), l = o.source;
		n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
		let u = r.get(l);
		if (l.version !== u.__version || c === !0) {
			n.activeTexture(e.TEXTURE0 + s);
			let t = G.getPrimaries(G.workingColorSpace), r = o.colorSpace === "" ? null : G.getPrimaries(o.colorSpace), d = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
			let f = o.isCompressedTexture || o.image[0].isCompressedTexture, p = o.image[0] && o.image[0].isDataTexture, m = [];
			for (let e = 0; e < 6; e++) !f && !p ? m[e] = w(o.image[e], !0, i.maxCubemapSize) : m[e] = p ? o.image[e].image : o.image[e], m[e] = Ce(o, m[e]);
			let h = m[0], g = a.convert(o.format, o.colorSpace), _ = a.convert(o.type), v = O(o.internalFormat, g, _, o.colorSpace), y = o.isVideoTexture !== !0, b = u.__version === void 0 || c === !0, x = l.dataReady, S = A(o, h);
			ue(e.TEXTURE_CUBE_MAP, o);
			let C;
			if (f) {
				y && b && n.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, h.width, h.height);
				for (let t = 0; t < 6; t++) {
					C = m[t].mipmaps;
					for (let r = 0; r < C.length; r++) {
						let i = C[r];
						o.format === 1023 ? y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, _, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, v, i.width, i.height, 0, g, _, i.data) : g === null ? console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : y ? x && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, i.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, v, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (C = o.mipmaps, y && b) {
					C.length > 0 && S++;
					let t = we(m[0]);
					n.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (p) {
					y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, m[t].width, m[t].height, g, _, m[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, m[t].width, m[t].height, 0, g, _, m[t].data);
					for (let r = 0; r < C.length; r++) {
						let i = C[r].image[t].image;
						y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, g, _, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, v, i.width, i.height, 0, g, _, i.data);
					}
				} else {
					y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, m[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, g, _, m[t]);
					for (let r = 0; r < C.length; r++) {
						let i = C[r];
						y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, g, _, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, v, g, _, i.image[t]);
					}
				}
			}
			T(o) && E(e.TEXTURE_CUBE_MAP), u.__version = l.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function R(t, i, o, c, l, u) {
		let d = a.convert(o.format, o.colorSpace), f = a.convert(o.type), p = O(o.internalFormat, d, f, o.colorSpace), m = r.get(i), h = r.get(o);
		if (h.__renderTarget = i, !m.__hasExternalTextures) {
			let t = Math.max(1, i.width >> u), r = Math.max(1, i.height >> u);
			l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY ? n.texImage3D(l, u, p, t, r, i.depth, 0, d, f, null) : n.texImage2D(l, u, p, t, r, 0, d, f, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), xe(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, c, l, h.__webglTexture, 0, be(i)) : (l === e.TEXTURE_2D || l >= e.TEXTURE_CUBE_MAP_POSITIVE_X && l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, c, l, h.__webglTexture, u), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function me(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = k(n.stencilBuffer, a), c = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, l = be(n);
			xe(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, l, o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, l, o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, c, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let o = t[i], c = a.convert(o.format, o.colorSpace), l = a.convert(o.type), u = O(o.internalFormat, c, l, o.colorSpace), d = be(n);
				r && xe(n) === !1 ? e.renderbufferStorageMultisample(e.RENDERBUFFER, d, u, n.width, n.height) : xe(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, d, u, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function he(t, i) {
		if (i && i.isWebGLCubeRenderTarget) throw Error("Depth Texture with cube render targets is not supported");
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture && i.depthTexture.isDepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
		let a = r.get(i.depthTexture);
		a.__renderTarget = i, a.__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), ie(i.depthTexture, 0);
		let o = a.__webglTexture, c = be(i);
		if (i.depthTexture.format === 1026) xe(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, o, 0, c) : e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, o, 0);
		else if (i.depthTexture.format === 1027) xe(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, o, 0, c) : e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, o, 0);
		else throw Error("Unknown depthTexture format");
	}
	function ge(t) {
		let i = r.get(t), a = t.isWebGLCubeRenderTarget === !0;
		if (i.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (i.__depthDisposeCallback && i.__depthDisposeCallback(), e) {
				let t = () => {
					delete i.__boundDepthTexture, delete i.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), i.__depthDisposeCallback = t;
			}
			i.__boundDepthTexture = e;
		}
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
			if (a) throw Error("target.depthTexture not supported in Cube render targets");
			he(i.__webglFramebuffer, t);
		} else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] === void 0) i.__webglDepthbuffer[r] = e.createRenderbuffer(), me(i.__webglDepthbuffer[r], t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = i.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
			}
		} else if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer === void 0) i.__webglDepthbuffer = e.createRenderbuffer(), me(i.__webglDepthbuffer, t, !1);
		else {
			let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, r = i.__webglDepthbuffer;
			e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function z(t, n, i) {
		let a = r.get(t);
		n !== void 0 && R(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && ge(t);
	}
	function _e(t) {
		let i = t.texture, s = r.get(t), c = r.get(i);
		t.addEventListener("dispose", M);
		let l = t.textures, u = t.isWebGLCubeRenderTarget === !0, d = l.length > 1;
		if (d || (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()), c.__version = i.version, o.memory.textures++), u) {
			s.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (i.mipmaps && i.mipmaps.length > 0) {
				s.__webglFramebuffer[t] = [];
				for (let n = 0; n < i.mipmaps.length; n++) s.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else s.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (i.mipmaps && i.mipmaps.length > 0) {
				s.__webglFramebuffer = [];
				for (let t = 0; t < i.mipmaps.length; t++) s.__webglFramebuffer[t] = e.createFramebuffer();
			} else s.__webglFramebuffer = e.createFramebuffer();
			if (d) for (let t = 0, n = l.length; t < n; t++) {
				let n = r.get(l[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), o.memory.textures++);
			}
			if (t.samples > 0 && xe(t) === !1) {
				s.__webglMultisampledFramebuffer = e.createFramebuffer(), s.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer);
				for (let n = 0; n < l.length; n++) {
					let r = l[n];
					s.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
					let i = a.convert(r.format, r.colorSpace), o = a.convert(r.type), c = O(r.internalFormat, i, o, r.colorSpace, t.isXRRenderTarget === !0), u = be(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (s.__webglDepthRenderbuffer = e.createRenderbuffer(), me(s.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (u) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), ue(e.TEXTURE_CUBE_MAP, i);
			for (let n = 0; n < 6; n++) if (i.mipmaps && i.mipmaps.length > 0) for (let r = 0; r < i.mipmaps.length; r++) R(s.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else R(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			T(i) && E(e.TEXTURE_CUBE_MAP), n.unbindTexture();
		} else if (d) {
			for (let i = 0, a = l.length; i < a; i++) {
				let a = l[i], o = r.get(a);
				n.bindTexture(e.TEXTURE_2D, o.__webglTexture), ue(e.TEXTURE_2D, a), R(s.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, e.TEXTURE_2D, 0), T(a) && E(e.TEXTURE_2D);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(r, c.__webglTexture), ue(r, i), i.mipmaps && i.mipmaps.length > 0) for (let n = 0; n < i.mipmaps.length; n++) R(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
			else R(s.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
			T(i) && E(r), n.unbindTexture();
		}
		t.depthBuffer && ge(t);
	}
	function B(e) {
		let t = e.textures;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i];
			if (T(a)) {
				let t = D(e), i = r.get(a).__webglTexture;
				n.bindTexture(t, i), E(t), n.unbindTexture();
			}
		}
	}
	let V = [], ve = [];
	function ye(t) {
		if (t.samples > 0) {
			if (xe(t) === !1) {
				let i = t.textures, a = t.width, o = t.height, s = e.COLOR_BUFFER_BIT, c = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, l = r.get(t), u = i.length > 1;
				if (u) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, l.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				n.bindFramebuffer(e.READ_FRAMEBUFFER, l.__webglMultisampledFramebuffer), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglFramebuffer);
				for (let n = 0; n < i.length; n++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (s |= e.STENCIL_BUFFER_BIT)), u) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, l.__webglColorRenderbuffer[n]);
						let t = r.get(i[n]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST), p === !0 && (V.length = 0, ve.length = 0, V.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && t.resolveDepthBuffer === !1 && (V.push(c), ve.push(c), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, ve)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, V));
				}
				if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), u) for (let t = 0; t < i.length; t++) {
					n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, l.__webglColorRenderbuffer[t]);
					let a = r.get(i[t]).__webglTexture;
					n.bindFramebuffer(e.FRAMEBUFFER, l.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
				}
				n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.resolveDepthBuffer === !1 && p) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function be(e) {
		return Math.min(i.maxSamples, e.samples);
	}
	function xe(e) {
		let n = r.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function Se(e) {
		let t = o.render.frame;
		v.get(e) !== t && (v.set(e, t), e.update());
	}
	function Ce(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (G.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function we(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (h.width = e.naturalWidth || e.width, h.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (h.width = e.displayWidth, h.height = e.displayHeight) : (h.width = e.width, h.height = e.height), h;
	}
	this.allocateTextureUnit = te, this.resetTextureUnits = ee, this.setTexture2D = ie, this.setTexture2DArray = ae, this.setTexture3D = L, this.setTextureCube = oe, this.rebindTextures = z, this.setupRenderTarget = _e, this.updateRenderTargetMipmap = B, this.updateMultisampleRenderTarget = ye, this.setupDepthRenderbuffer = ge, this.setupFrameBufferTexture = R, this.useMultisampledRTT = xe;
}
function cc(e, t) {
	function n(n, r = "") {
		let i, a = G.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1024) return e.LUMINANCE;
		if (n === 1025) return e.LUMINANCE_ALPHA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
					if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
				} else return null;
			} else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			} else return null;
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
				if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			} else return null;
		}
		if (n === 36196 || n === 37492 || n === 37496) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
				if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
				if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
			} else return null;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
				if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
			} else return null;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
				if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
				if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
				if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
			} else return null;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
				if (n === 36492) return i.COMPRESSED_RED_RGTC1_EXT;
				if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
				if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
				if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
			} else return null;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var lc = class extends Ki {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.cameras = e;
	}
}, uc = class extends Dr {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, dc = { type: "move" }, fc = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new uc(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new uc(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new q(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new q()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new uc(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new q(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new q()), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
				c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(dc)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new uc();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, pc = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", mc = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", hc = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t, n) {
		if (this.texture === null) {
			let r = new vn(), i = e.properties.get(r);
			i.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new Vi({
				vertexShader: pc,
				fragmentShader: mc,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new Ai(new sa(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, gc = class extends bt {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, d = null, f = null, p = null, m = new hc(), h = t.getContextAttributes(), g = null, _ = null, v = [], y = [], b = new U(), S = null, C = new Ki();
		C.viewport = new K();
		let w = new Ki();
		w.viewport = new K();
		let T = [C, w], D = new lc(), O = null, k = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = v[e];
			return t === void 0 && (t = new fc(), v[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = v[e];
			return t === void 0 && (t = new fc(), v[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = v[e];
			return t === void 0 && (t = new fc(), v[e] = t), t.getHandSpace();
		};
		function A(e) {
			let t = y.indexOf(e.inputSource);
			if (t === -1) return;
			let n = v[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function M() {
			r.removeEventListener("select", A), r.removeEventListener("selectstart", A), r.removeEventListener("selectend", A), r.removeEventListener("squeeze", A), r.removeEventListener("squeezestart", A), r.removeEventListener("squeezeend", A), r.removeEventListener("end", M), r.removeEventListener("inputsourceschange", N);
			for (let e = 0; e < v.length; e++) {
				let t = y[e];
				t !== null && (y[e] = null, v[e].disconnect(t));
			}
			O = null, k = null, m.reset(), e.setRenderTarget(g), f = null, d = null, u = null, r = null, _ = null, oe.stop(), n.isPresenting = !1, e.setPixelRatio(S), e.setSize(b.width, b.height, !1), n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return d === null ? f : d;
		}, this.getBinding = function() {
			return u;
		}, this.getFrame = function() {
			return p;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (g = e.getRenderTarget(), r.addEventListener("select", A), r.addEventListener("selectstart", A), r.addEventListener("selectend", A), r.addEventListener("squeeze", A), r.addEventListener("squeezestart", A), r.addEventListener("squeezeend", A), r.addEventListener("end", M), r.addEventListener("inputsourceschange", N), h.xrCompatible !== !0 && await t.makeXRCompatible(), S = e.getPixelRatio(), e.getSize(b), r.renderState.layers === void 0) {
					let n = {
						antialias: h.antialias,
						alpha: !0,
						depth: h.depth,
						stencil: h.stencil,
						framebufferScaleFactor: i
					};
					f = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), _ = new bn(f.framebufferWidth, f.framebufferHeight, {
						format: F,
						type: x,
						colorSpace: e.outputColorSpace,
						stencilBuffer: h.stencil
					});
				} else {
					let n = null, a = null, o = null;
					h.depth && (o = h.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = h.stencil ? ne : te, a = h.stencil ? j : E);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = new XRWebGLBinding(r, t), d = u.createProjectionLayer(s), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), _ = new bn(d.textureWidth, d.textureHeight, {
						format: F,
						type: x,
						depthTexture: new Ka(d.textureWidth, d.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: h.stencil,
						colorSpace: e.outputColorSpace,
						samples: h.antialias ? 4 : 0,
						resolveDepthBuffer: d.ignoreDepthValues === !1
					});
				}
				_.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), oe.setContext(r), oe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return m.getDepthTexture();
		};
		function N(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = y.indexOf(n);
				r >= 0 && (y[r] = null, v[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = y.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < v.length; e++) if (e >= y.length) {
						y.push(n), r = e;
						break;
					} else if (y[e] === null) {
						y[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = v[r];
				i && i.connect(n);
			}
		}
		let P = new q(), I = new q();
		function ee(e, t, n) {
			P.setFromMatrixPosition(t.matrixWorld), I.setFromMatrixPosition(n.matrixWorld);
			let r = P.distanceTo(I), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), c = (i[9] + 1) / i[5], l = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], d = (a[8] + 1) / a[0], f = o * u, p = o * d, m = r / (-u + d), h = m * -u;
			if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(h), e.translateZ(m), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), i[10] === -1) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
			else {
				let t = o + m, n = s + m, i = f - h, a = p + (r - h), u = c * s / n * t, d = l * s / n * t;
				e.projectionMatrix.makePerspective(i, a, u, d, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
			}
		}
		function re(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			m.texture !== null && (m.depthNear > 0 && (t = m.depthNear), m.depthFar > 0 && (n = m.depthFar)), D.near = w.near = C.near = t, D.far = w.far = C.far = n, (O !== D.near || k !== D.far) && (r.updateRenderState({
				depthNear: D.near,
				depthFar: D.far
			}), O = D.near, k = D.far), C.layers.mask = e.layers.mask | 2, w.layers.mask = e.layers.mask | 4, D.layers.mask = C.layers.mask | w.layers.mask;
			let i = e.parent, a = D.cameras;
			re(D, i);
			for (let e = 0; e < a.length; e++) re(a[e], i);
			a.length === 2 ? ee(D, C, w) : D.projectionMatrix.copy(C.projectionMatrix), ie(e, D, i);
		};
		function ie(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = wt * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return D;
		}, this.getFoveation = function() {
			if (d !== null || f !== null) return s;
		}, this.setFoveation = function(e) {
			s = e, d !== null && (d.fixedFoveation = e), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return m.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return m.getMesh(D);
		};
		let ae = null;
		function L(t, i) {
			if (l = i.getViewerPose(c || a), p = i, l !== null) {
				let t = l.views;
				f !== null && (e.setRenderTargetFramebuffer(_, f.framebuffer), e.setRenderTarget(_));
				let n = !1;
				t.length !== D.cameras.length && (D.cameras.length = 0, n = !0);
				for (let r = 0; r < t.length; r++) {
					let i = t[r], a = null;
					if (f !== null) a = f.getViewport(i);
					else {
						let t = u.getViewSubImage(d, i);
						a = t.viewport, r === 0 && (e.setRenderTargetTextures(_, t.colorTexture, d.ignoreDepthValues ? void 0 : t.depthStencilTexture), e.setRenderTarget(_));
					}
					let o = T[r];
					o === void 0 && (o = new Ki(), o.layers.enable(r), o.viewport = new K(), T[r] = o), o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(i.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), r === 0 && (D.matrix.copy(o.matrix), D.matrix.decompose(D.position, D.quaternion, D.scale)), n === !0 && D.cameras.push(o);
				}
				let i = r.enabledFeatures;
				if (i && i.includes("depth-sensing")) {
					let n = u.getDepthInformation(t[0]);
					n && n.isValid && n.texture && m.init(e, n, r.renderState);
				}
			}
			for (let e = 0; e < v.length; e++) {
				let t = y[e], n = v[e];
				t !== null && n !== void 0 && n.update(t, i, c || a);
			}
			ae && ae(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), p = null;
		}
		let oe = new aa();
		oe.setAnimationLoop(L), this.setAnimationLoop = function(e) {
			ae = e;
		}, this.dispose = function() {};
	}
}, _c = /*@__PURE__*/ new ur(), vc = /*@__PURE__*/ new J();
function yc(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, Li(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isMeshBasicMaterial || t.isMeshLambertMaterial ? a(e, t) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, _c.copy(o), _c.x *= -1, _c.y *= -1, _c.z *= -1, a.isCubeTexture && a.isRenderTargetTexture === !1 && (_c.y *= -1, _c.z *= -1), e.envMapRotation.value.setFromMatrix4(vc.makeRotationFromEuler(_c)), e.flipEnvMap.value = a.isCubeTexture && a.isRenderTargetTexture === !1 ? -1 : 1, e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function bc(e, t, n, r) {
	let i = {}, a = {}, o = [], s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
	function c(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n);
	}
	function l(e, n) {
		let o = i[e.id];
		o === void 0 && (m(e), o = u(e), i[e.id] = o, e.addEventListener("dispose", g));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let c = t.render.frame;
		a[e.id] !== c && (f(e), a[e.id] = c);
	}
	function u(t) {
		let n = d();
		t.__bindingPointIndex = n;
		let r = e.createBuffer(), i = t.__size, a = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
	}
	function d() {
		for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return o.push(e), e;
		return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
	}
	function f(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let t = 0, n = r.length; t < n; t++) {
			let n = Array.isArray(r[t]) ? r[t] : [r[t]];
			for (let r = 0, i = n.length; r < i; r++) {
				let i = n[r];
				if (p(i, t, r, a) === !0) {
					let t = i.__offset, n = Array.isArray(i.value) ? i.value : [i.value], r = 0;
					for (let a = 0; a < n.length; a++) {
						let o = n[a], s = h(o);
						typeof o == "number" || typeof o == "boolean" ? (i.__data[0] = o, e.bufferSubData(e.UNIFORM_BUFFER, t + r, i.__data)) : o.isMatrix3 ? (i.__data[0] = o.elements[0], i.__data[1] = o.elements[1], i.__data[2] = o.elements[2], i.__data[3] = 0, i.__data[4] = o.elements[3], i.__data[5] = o.elements[4], i.__data[6] = o.elements[5], i.__data[7] = 0, i.__data[8] = o.elements[6], i.__data[9] = o.elements[7], i.__data[10] = o.elements[8], i.__data[11] = 0) : (o.toArray(i.__data, r), r += s.storage / Float32Array.BYTES_PER_ELEMENT);
					}
					e.bufferSubData(e.UNIFORM_BUFFER, t, i.__data);
				}
			}
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function p(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (r[a] === void 0) return r[a] = typeof i == "number" || typeof i == "boolean" ? i : i.clone(), !0;
		{
			let e = r[a];
			if (typeof i == "number" || typeof i == "boolean") {
				if (e !== i) return r[a] = i, !0;
			} else if (e.equals(i) === !1) return e.copy(i), !0;
		}
		return !1;
	}
	function m(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0, t = r.length; e < t; e++) {
				let t = r[e], i = Array.isArray(t.value) ? t.value : [t.value];
				for (let e = 0, r = i.length; e < r; e++) {
					let r = i[e], a = h(r), o = n % 16, s = o % a.boundary, c = o + s;
					n += s, c !== 0 && 16 - c < a.storage && (n += 16 - c), t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += a.storage;
				}
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function h(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function g(t) {
		let n = t.target;
		n.removeEventListener("dispose", g);
		let r = o.indexOf(n.__bindingPointIndex);
		o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function _() {
		for (let t in i) e.deleteBuffer(i[t]);
		o = [], i = {}, a = {};
	}
	return {
		bind: c,
		update: l,
		dispose: _
	};
}
var xc = class {
	constructor(e = {}) {
		let { canvas: t = Qt(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: u = !1, reverseDepthBuffer: d = !1 } = e;
		this.isWebGLRenderer = !0;
		let f;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			f = n.getContextAttributes().alpha;
		} else f = a;
		let p = /* @__PURE__ */ new Uint32Array(4), m = /* @__PURE__ */ new Int32Array(4), h = null, g = null, _ = [], v = [];
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Ze, this.toneMapping = 0, this.toneMappingExposure = 1;
		let b = this, S = !1, C = 0, w = 0, T = null, E = -1, D = null, k = new K(), A = new K(), j = null, M = new Y(0), N = 0, P = t.width, F = t.height, I = 1, ee = null, te = null, ne = new K(0, 0, P, F), re = new K(0, 0, P, F), ie = !1, ae = new ia(), L = !1, oe = !1, se = new J(), ce = new J(), le = new q(), ue = new K(), de = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, fe = !1;
		function pe() {
			return T === null ? I : 1;
		}
		let R = n;
		function me(e, n) {
			return t.getContext(e, n);
		}
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: u
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r170"), t.addEventListener("webglcontextlost", Re, !1), t.addEventListener("webglcontextrestored", ze, !1), t.addEventListener("webglcontextcreationerror", Be, !1), R === null) {
				let t = "webgl2";
				if (R = me(t, e), R === null) throw me(t) ? Error("Error creating WebGL context with your selected attributes.") : Error("Error creating WebGL context.");
			}
		} catch (e) {
			throw console.error("THREE.WebGLRenderer: " + e.message), e;
		}
		let he, ge, z, _e, B, V, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe;
		function Ie() {
			he = new Ba(R), he.init(), Ne = new cc(R, he), ge = new ha(R, he, e, Ne), z = new ec(R, he), ge.reverseDepthBuffer && d && z.buffers.depth.setReversed(!0), _e = new Ua(R), B = new Is(), V = new sc(R, he, z, B, ge, Ne, _e), ve = new _a(b), ye = new za(b), be = new oa(R), Pe = new pa(R, be), xe = new Va(R, be, _e, Pe), Se = new Ga(R, xe, be, _e), Ae = new Wa(R, ge, V), De = new ga(B), Ce = new Fs(b, ve, ye, he, ge, Pe, De), we = new yc(b, B), Te = new Bs(), Ee = new qs(he), ke = new fa(b, ve, ye, z, Se, f, s), Oe = new Qs(b, Se, ge), Fe = new bc(R, _e, ge, z), je = new ma(R, he, _e), Me = new Ha(R, he, _e), _e.programs = Ce.programs, b.capabilities = ge, b.extensions = he, b.properties = B, b.renderLists = Te, b.shadowMap = Oe, b.state = z, b.info = _e;
		}
		Ie();
		let Le = new gc(b, R);
		this.xr = Le, this.getContext = function() {
			return R;
		}, this.getContextAttributes = function() {
			return R.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = he.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = he.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return I;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (I = e, this.setSize(P, F, !1));
		}, this.getSize = function(e) {
			return e.set(P, F);
		}, this.setSize = function(e, n, r = !0) {
			Le.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (P = e, F = n, t.width = Math.floor(e * I), t.height = Math.floor(n * I), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n));
		}, this.getDrawingBufferSize = function(e) {
			return e.set(P * I, F * I).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			P = e, F = n, I = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.getCurrentViewport = function(e) {
			return e.copy(k);
		}, this.getViewport = function(e) {
			return e.copy(ne);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? ne.set(e.x, e.y, e.z, e.w) : ne.set(e, t, n, r), z.viewport(k.copy(ne).multiplyScalar(I).round());
		}, this.getScissor = function(e) {
			return e.copy(re);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? re.set(e.x, e.y, e.z, e.w) : re.set(e, t, n, r), z.scissor(A.copy(re).multiplyScalar(I).round());
		}, this.getScissorTest = function() {
			return ie;
		}, this.setScissorTest = function(e) {
			z.setScissorTest(ie = e);
		}, this.setOpaqueSort = function(e) {
			ee = e;
		}, this.setTransparentSort = function(e) {
			te = e;
		}, this.getClearColor = function(e) {
			return e.copy(ke.getClearColor());
		}, this.setClearColor = function() {
			ke.setClearColor.apply(ke, arguments);
		}, this.getClearAlpha = function() {
			return ke.getClearAlpha();
		}, this.setClearAlpha = function() {
			ke.setClearAlpha.apply(ke, arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (T !== null) {
					let t = T.texture.format;
					e = t === 1033 || t === 1031 || t === 1029;
				}
				if (e) {
					let e = T.texture.type, t = e === 1009 || e === 1014 || e === 1012 || e === 1020 || e === 1017 || e === 1018, n = ke.getClearColor(), r = ke.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (p[0] = i, p[1] = a, p[2] = o, p[3] = r, R.clearBufferuiv(R.COLOR, 0, p)) : (m[0] = i, m[1] = a, m[2] = o, m[3] = r, R.clearBufferiv(R.COLOR, 0, m));
				} else r |= R.COLOR_BUFFER_BIT;
			}
			t && (r |= R.DEPTH_BUFFER_BIT), n && (r |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", Re, !1), t.removeEventListener("webglcontextrestored", ze, !1), t.removeEventListener("webglcontextcreationerror", Be, !1), Te.dispose(), Ee.dispose(), B.dispose(), ve.dispose(), ye.dispose(), Se.dispose(), Pe.dispose(), Fe.dispose(), Ce.dispose(), Le.dispose(), Le.removeEventListener("sessionstart", qe), Le.removeEventListener("sessionend", Je), Ye.stop();
		};
		function Re(e) {
			e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), S = !0;
		}
		function ze() {
			console.log("THREE.WebGLRenderer: Context Restored."), S = !1;
			let e = _e.autoReset, t = Oe.enabled, n = Oe.autoUpdate, r = Oe.needsUpdate, i = Oe.type;
			Ie(), _e.autoReset = e, Oe.enabled = t, Oe.autoUpdate = n, Oe.needsUpdate = r, Oe.type = i;
		}
		function Be(e) {
			console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function Ve(e) {
			let t = e.target;
			t.removeEventListener("dispose", Ve), He(t);
		}
		function He(e) {
			Ue(e), B.remove(e);
		}
		function Ue(e) {
			let t = B.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				Ce.releaseProgram(e);
			}), e.isShaderMaterial && Ce.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = de);
			let o = i.isMesh && i.matrixWorld.determinant() < 0, s = ot(e, t, n, r, i);
			z.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = xe.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			Pe.setup(i, r, s, n, c);
			let h, g = je;
			if (c !== null && (h = be.get(c), g = Me, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (z.setLineWidth(r.wireframeLinewidth * pe()), g.setMode(R.LINES)) : g.setMode(R.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), z.setLineWidth(e * pe()), i.isLineSegments ? g.setMode(R.LINES) : i.isLineLoop ? g.setMode(R.LINE_LOOP) : g.setMode(R.LINE_STRIP);
			} else i.isPoints ? g.setMode(R.POINTS) : i.isSprite && g.setMode(R.TRIANGLES);
			if (i.isBatchedMesh) {
				if (i._multiDrawInstances !== null) g.renderMultiDrawInstances(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount, i._multiDrawInstances);
				else if (he.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
				else {
					let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? be.get(c).bytesPerElement : 1, o = B.get(r).currentProgram.getUniforms();
					for (let r = 0; r < n; r++) o.setValue(R, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
				}
			} else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		};
		function We(e, t, n) {
			e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, rt(e, t, n), e.side = 0, e.needsUpdate = !0, rt(e, t, n), e.side = 2) : rt(e, t, n);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), g = Ee.get(n), g.init(t), v.push(g), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (g.pushLight(e), e.castShadow && g.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (g.pushLight(e), e.castShadow && g.pushShadow(e));
			}), g.setupLights();
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let t = e.material;
				if (t) {
					if (Array.isArray(t)) for (let i = 0; i < t.length; i++) {
						let a = t[i];
						We(a, n, e), r.add(a);
					}
					else We(t, n, e), r.add(t);
				}
			}), v.pop(), g = null, r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					r.forEach(function(e) {
						B.get(e).currentProgram.isReady() && r.delete(e);
					}), r.size === 0 ? t(e) : setTimeout(n, 10);
				}
				he.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let Ge = null;
		function Ke(e) {
			Ge && Ge(e);
		}
		function qe() {
			Ye.stop();
		}
		function Je() {
			Ye.start();
		}
		let Ye = new aa();
		Ye.setAnimationLoop(Ke), typeof self < "u" && Ye.setContext(self), this.setAnimationLoop = function(e) {
			Ge = e, Le.setAnimationLoop(e), e === null ? Ye.stop() : Ye.start();
		}, Le.addEventListener("sessionstart", qe), Le.addEventListener("sessionend", Je), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (S === !0) return;
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), Le.enabled === !0 && Le.isPresenting === !0 && (Le.cameraAutoUpdate === !0 && Le.updateCamera(t), t = Le.getCamera()), e.isScene === !0 && e.onBeforeRender(b, e, t, T), g = Ee.get(e, v.length), g.init(t), v.push(g), ce.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ae.setFromProjectionMatrix(ce), oe = this.localClippingEnabled, L = De.init(this.clippingPlanes, oe), h = Te.get(e, _.length), h.init(), _.push(h), Le.enabled === !0 && Le.isPresenting === !0) {
				let e = b.xr.getDepthSensingMesh();
				e !== null && Xe(e, t, -Infinity, b.sortObjects);
			}
			Xe(e, t, 0, b.sortObjects), h.finish(), b.sortObjects === !0 && h.sort(ee, te), fe = Le.enabled === !1 || Le.isPresenting === !1 || Le.hasDepthSensing() === !1, fe && ke.addToRenderList(h, e), this.info.render.frame++, L === !0 && De.beginShadows();
			let n = g.state.shadowsArray;
			Oe.render(n, e, t), L === !0 && De.endShadows(), this.info.autoReset === !0 && this.info.reset();
			let r = h.opaque, i = h.transmissive;
			if (g.setupLights(), t.isArrayCamera) {
				let n = t.cameras;
				if (i.length > 0) for (let t = 0, a = n.length; t < a; t++) {
					let a = n[t];
					et(r, i, e, a);
				}
				fe && ke.render(e);
				for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					$e(h, e, r, r.viewport);
				}
			} else i.length > 0 && et(r, i, e, t), fe && ke.render(e), $e(h, e, t);
			T !== null && (V.updateMultisampleRenderTarget(T), V.updateRenderTargetMipmap(T)), e.isScene === !0 && e.onAfterRender(b, e, t), Pe.resetDefaultState(), E = -1, D = null, v.pop(), v.length > 0 ? (g = v[v.length - 1], L === !0 && De.setGlobalState(b.clippingPlanes, g.state.camera)) : g = null, _.pop(), h = _.length > 0 ? _[_.length - 1] : null;
		};
		function Xe(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLight) g.pushLight(e), e.castShadow && g.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || ae.intersectsSprite(e)) {
						r && ue.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ce);
						let t = Se.update(e), i = e.material;
						i.visible && h.push(e, t, i, n, ue.z, null);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || ae.intersectsObject(e))) {
					let t = Se.update(e), i = e.material;
					if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(), ue.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), ue.copy(e.boundingSphere.center)), ue.applyMatrix4(e.matrixWorld).applyMatrix4(ce)), Array.isArray(i)) {
						let r = t.groups;
						for (let a = 0, o = r.length; a < o; a++) {
							let o = r[a], s = i[o.materialIndex];
							s && s.visible && h.push(e, t, s, n, ue.z, o);
						}
					} else i.visible && h.push(e, t, i, n, ue.z, null);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) Xe(i[e], t, n, r);
		}
		function $e(e, t, n, r) {
			let i = e.opaque, a = e.transmissive, o = e.transparent;
			g.setupLightsView(n), L === !0 && De.setGlobalState(b.clippingPlanes, n), r && z.viewport(k.copy(r)), i.length > 0 && tt(i, t, n), a.length > 0 && tt(a, t, n), o.length > 0 && tt(o, t, n), z.buffers.depth.setTest(!0), z.buffers.depth.setMask(!0), z.buffers.color.setMask(!0), z.setPolygonOffset(!1);
		}
		function et(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			g.state.transmissionRenderTarget[r.id] === void 0 && (g.state.transmissionRenderTarget[r.id] = new bn(1, 1, {
				generateMipmaps: !0,
				type: he.has("EXT_color_buffer_half_float") || he.has("EXT_color_buffer_float") ? O : x,
				minFilter: y,
				samples: 4,
				stencilBuffer: i,
				resolveDepthBuffer: !1,
				resolveStencilBuffer: !1,
				colorSpace: G.workingColorSpace
			}));
			let a = g.state.transmissionRenderTarget[r.id], o = r.viewport || k;
			a.setSize(o.z, o.w);
			let s = b.getRenderTarget();
			b.setRenderTarget(a), b.getClearColor(M), N = b.getClearAlpha(), N < 1 && b.setClearColor(16777215, .5), b.clear(), fe && ke.render(n);
			let c = b.toneMapping;
			b.toneMapping = 0;
			let l = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), g.setupLightsView(r), L === !0 && De.setGlobalState(b.clippingPlanes, r), tt(e, n, r), V.updateMultisampleRenderTarget(a), V.updateRenderTargetMipmap(a), he.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let a = t[i], o = a.object, s = a.geometry, c = a.material, l = a.group;
					if (c.side === 2 && o.layers.test(r.layers)) {
						let t = c.side;
						c.side = 1, c.needsUpdate = !0, nt(o, n, r, s, c, l), c.side = t, c.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && (V.updateMultisampleRenderTarget(a), V.updateRenderTargetMipmap(a));
			}
			b.setRenderTarget(s), b.setClearColor(M, N), l !== void 0 && (r.viewport = l), b.toneMapping = c;
		}
		function tt(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], o = a.object, s = a.geometry, c = r === null ? a.material : r, l = a.group;
				o.layers.test(n.layers) && nt(o, t, n, s, c, l);
			}
		}
		function nt(e, t, n, r, i, a) {
			e.onBeforeRender(b, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(b, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, b.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, b.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : b.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(b, t, n, r, i, a);
		}
		function rt(e, t, n) {
			t.isScene !== !0 && (t = de);
			let r = B.get(e), i = g.state.lights, a = g.state.shadowsArray, o = i.state.version, s = Ce.getParameters(e, i.state, a, t, n), c = Ce.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial ? t.environment : null, r.fog = t.fog, r.envMap = (e.isMeshStandardMaterial ? ye : ve).get(e.envMap || r.environment), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", Ve), l = /* @__PURE__ */ new Map(), r.programs = l);
			let u = l.get(c);
			if (u !== void 0) {
				if (r.currentProgram === u && r.lightsStateVersion === o) return at(e, s), u;
			} else s.uniforms = Ce.getUniforms(e), e.onBeforeCompile(s, b), u = Ce.acquireProgram(s, c), l.set(c, u), r.uniforms = s.uniforms;
			let d = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (d.clippingPlanes = De.uniform), at(e, s), r.needsLights = ct(e), r.lightsStateVersion = o, r.needsLights && (d.ambientLightColor.value = i.state.ambient, d.lightProbe.value = i.state.probe, d.directionalLights.value = i.state.directional, d.directionalLightShadows.value = i.state.directionalShadow, d.spotLights.value = i.state.spot, d.spotLightShadows.value = i.state.spotShadow, d.rectAreaLights.value = i.state.rectArea, d.ltc_1.value = i.state.rectAreaLTC1, d.ltc_2.value = i.state.rectAreaLTC2, d.pointLights.value = i.state.point, d.pointLightShadows.value = i.state.pointShadow, d.hemisphereLights.value = i.state.hemi, d.directionalShadowMap.value = i.state.directionalShadowMap, d.directionalShadowMatrix.value = i.state.directionalShadowMatrix, d.spotShadowMap.value = i.state.spotShadowMap, d.spotLightMatrix.value = i.state.spotLightMatrix, d.spotLightMap.value = i.state.spotLightMap, d.pointShadowMap.value = i.state.pointShadowMap, d.pointShadowMatrix.value = i.state.pointShadowMatrix), r.currentProgram = u, r.uniformsList = null, u;
		}
		function it(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = es.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function at(e, t) {
			let n = B.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function ot(e, t, n, r, i) {
			t.isScene !== !0 && (t = de), V.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial ? t.environment : null, s = T === null ? b.outputColorSpace : T.isXRRenderTarget === !0 ? T.texture.colorSpace : Qe, c = (r.isMeshStandardMaterial ? ye : ve).get(r.envMap || o), l = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, u = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), d = !!n.morphAttributes.position, f = !!n.morphAttributes.normal, p = !!n.morphAttributes.color, m = 0;
			r.toneMapped && (T === null || T.isXRRenderTarget === !0) && (m = b.toneMapping);
			let h = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = h === void 0 ? 0 : h.length, v = B.get(r), y = g.state.lights;
			if (L === !0 && (oe === !0 || e !== D)) {
				let t = e === D && r.id === E;
				De.setState(r, e, t);
			}
			let x = !1;
			r.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version ? x = !0 : v.outputColorSpace === s ? i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i.colorTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i.colorTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? x = !0 : v.envMap === c ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== De.numPlanes || v.numIntersection !== De.numIntersection) ? x = !0 : v.vertexAlphas === l && v.vertexTangents === u && v.morphTargets === d && v.morphNormals === f && v.morphColors === p && v.toneMapping === m ? v.morphTargetsCount !== _ && (x = !0) : x = !0 : x = !0 : x = !0 : (x = !0, v.__version = r.version);
			let S = v.currentProgram;
			x === !0 && (S = rt(r, t, i));
			let C = !1, w = !1, O = !1, k = S.getUniforms(), A = v.uniforms;
			if (z.useProgram(S.program) && (C = !0, w = !0, O = !0), r.id !== E && (E = r.id, w = !0), C || D !== e) {
				z.buffers.depth.getReversed() ? (se.copy(e.projectionMatrix), nn(se), rn(se), k.setValue(R, "projectionMatrix", se)) : k.setValue(R, "projectionMatrix", e.projectionMatrix), k.setValue(R, "viewMatrix", e.matrixWorldInverse);
				let t = k.map.cameraPosition;
				t !== void 0 && t.setValue(R, le.setFromMatrixPosition(e.matrixWorld)), ge.logarithmicDepthBuffer && k.setValue(R, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && k.setValue(R, "isOrthographic", e.isOrthographicCamera === !0), D !== e && (D = e, w = !0, O = !0);
			}
			if (i.isSkinnedMesh) {
				k.setOptional(R, i, "bindMatrix"), k.setOptional(R, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), k.setValue(R, "boneTexture", e.boneTexture, V));
			}
			i.isBatchedMesh && (k.setOptional(R, i, "batchingTexture"), k.setValue(R, "batchingTexture", i._matricesTexture, V), k.setOptional(R, i, "batchingIdTexture"), k.setValue(R, "batchingIdTexture", i._indirectTexture, V), k.setOptional(R, i, "batchingColorTexture"), i._colorsTexture !== null && k.setValue(R, "batchingColorTexture", i._colorsTexture, V));
			let j = n.morphAttributes;
			if ((j.position !== void 0 || j.normal !== void 0 || j.color !== void 0) && Ae.update(i, n, S), (w || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, k.setValue(R, "receiveShadow", i.receiveShadow)), r.isMeshGouraudMaterial && r.envMap !== null && (A.envMap.value = c, A.flipEnvMap.value = c.isCubeTexture && c.isRenderTargetTexture === !1 ? -1 : 1), r.isMeshStandardMaterial && r.envMap === null && t.environment !== null && (A.envMapIntensity.value = t.environmentIntensity), w && (k.setValue(R, "toneMappingExposure", b.toneMappingExposure), v.needsLights && st(A, O), a && r.fog === !0 && we.refreshFogUniforms(A, a), we.refreshMaterialUniforms(A, r, I, F, g.state.transmissionRenderTarget[e.id]), es.upload(R, it(v), A, V)), r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (es.upload(R, it(v), A, V), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && k.setValue(R, "center", i.center), k.setValue(R, "modelViewMatrix", i.modelViewMatrix), k.setValue(R, "normalMatrix", i.normalMatrix), k.setValue(R, "modelMatrix", i.matrixWorld), r.isShaderMaterial || r.isRawShaderMaterial) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					Fe.update(n, S), Fe.bind(n, S);
				}
			}
			return S;
		}
		function st(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function ct(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return C;
		}, this.getActiveMipmapLevel = function() {
			return w;
		}, this.getRenderTarget = function() {
			return T;
		}, this.setRenderTargetTextures = function(e, t, n) {
			B.get(e.texture).__webglTexture = t, B.get(e.depthTexture).__webglTexture = n;
			let r = B.get(e);
			r.__hasExternalTextures = !0, r.__autoAllocateDepthBuffer = n === void 0, r.__autoAllocateDepthBuffer || he.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), r.__useRenderToTexture = !1);
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = B.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			T = e, C = t, w = n;
			let r = !0, i = null, a = !1, o = !1;
			if (e) {
				let s = B.get(e);
				if (s.__useDefaultFramebuffer !== void 0) z.bindFramebuffer(R.FRAMEBUFFER, null), r = !1;
				else if (s.__webglFramebuffer === void 0) V.setupRenderTarget(e);
				else if (s.__hasExternalTextures) V.rebindTextures(e, B.get(e.texture).__webglTexture, B.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (s.__boundDepthTexture !== t) {
						if (t !== null && B.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
						V.setupDepthRenderbuffer(e);
					}
				}
				let c = e.texture;
				(c.isData3DTexture || c.isDataArrayTexture || c.isCompressedArrayTexture) && (o = !0);
				let l = B.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (i = Array.isArray(l[t]) ? l[t][n] : l[t], a = !0) : i = e.samples > 0 && V.useMultisampledRTT(e) === !1 ? B.get(e).__webglMultisampledFramebuffer : Array.isArray(l) ? l[n] : l, k.copy(e.viewport), A.copy(e.scissor), j = e.scissorTest;
			} else k.copy(ne).multiplyScalar(I).floor(), A.copy(re).multiplyScalar(I).floor(), j = ie;
			if (z.bindFramebuffer(R.FRAMEBUFFER, i) && r && z.drawBuffers(e, i), z.viewport(k), z.scissor(A), z.setScissorTest(j), a) {
				let r = B.get(e.texture);
				R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (o) {
				let r = B.get(e.texture), i = t || 0;
				R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, r.__webglTexture, n || 0, i);
			}
			E = -1;
		}, this.readRenderTargetPixels = function(e, t, n, r, i, a, o) {
			if (!(e && e.isWebGLRenderTarget)) {
				console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let s = B.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (s = s[o]), s) {
				z.bindFramebuffer(R.FRAMEBUFFER, s);
				try {
					let o = e.texture, s = o.format, c = o.type;
					if (!ge.textureFormatReadable(s)) {
						console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (!ge.textureTypeReadable(c)) {
						console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && R.readPixels(t, n, r, i, Ne.convert(s), Ne.convert(c), a);
				} finally {
					let e = T === null ? null : B.get(T).__webglFramebuffer;
					z.bindFramebuffer(R.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let s = B.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (s = s[o]), s) {
				let o = e.texture, c = o.format, l = o.type;
				if (!ge.textureFormatReadable(c)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
				if (!ge.textureTypeReadable(l)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
				if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
					z.bindFramebuffer(R.FRAMEBUFFER, s);
					let e = R.createBuffer();
					R.bindBuffer(R.PIXEL_PACK_BUFFER, e), R.bufferData(R.PIXEL_PACK_BUFFER, a.byteLength, R.STREAM_READ), R.readPixels(t, n, r, i, Ne.convert(c), Ne.convert(l), 0);
					let o = T === null ? null : B.get(T).__webglFramebuffer;
					z.bindFramebuffer(R.FRAMEBUFFER, o);
					let u = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
					return R.flush(), await tn(R, u, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, e), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, a), R.deleteBuffer(e), R.deleteSync(u), a;
				}
				throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
			}
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			e.isTexture !== !0 && (en("WebGLRenderer: copyFramebufferToTexture function signature has changed."), t = arguments[0] || null, e = arguments[1]);
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			V.setTexture2D(e, 0), R.copyTexSubImage2D(R.TEXTURE_2D, n, 0, 0, o, s, i, a), z.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0) {
			e.isTexture !== !0 && (en("WebGLRenderer: copyTextureToTexture function signature has changed."), r = arguments[0] || null, e = arguments[1], t = arguments[2], i = arguments[3] || 0, n = null);
			let a, o, s, c, l, u, d, f, p, m = e.isCompressedTexture ? e.mipmaps[i] : e.image;
			n === null ? (a = m.width, o = m.height, s = m.depth || 1, c = 0, l = 0, u = 0) : (a = n.max.x - n.min.x, o = n.max.y - n.min.y, s = n.isBox3 ? n.max.z - n.min.z : 1, c = n.min.x, l = n.min.y, u = n.isBox3 ? n.min.z : 0), r === null ? (d = 0, f = 0, p = 0) : (d = r.x, f = r.y, p = r.z);
			let h = Ne.convert(t.format), g = Ne.convert(t.type), _;
			t.isData3DTexture ? (V.setTexture3D(t, 0), _ = R.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (V.setTexture2DArray(t, 0), _ = R.TEXTURE_2D_ARRAY) : (V.setTexture2D(t, 0), _ = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, t.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, t.unpackAlignment);
			let v = R.getParameter(R.UNPACK_ROW_LENGTH), y = R.getParameter(R.UNPACK_IMAGE_HEIGHT), b = R.getParameter(R.UNPACK_SKIP_PIXELS), x = R.getParameter(R.UNPACK_SKIP_ROWS), S = R.getParameter(R.UNPACK_SKIP_IMAGES);
			R.pixelStorei(R.UNPACK_ROW_LENGTH, m.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, m.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, c), R.pixelStorei(R.UNPACK_SKIP_ROWS, l), R.pixelStorei(R.UNPACK_SKIP_IMAGES, u);
			let C = e.isDataArrayTexture || e.isData3DTexture, w = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isRenderTargetTexture || e.isDepthTexture) {
				let n = B.get(e), r = B.get(t), m = B.get(n.__renderTarget), h = B.get(r.__renderTarget);
				z.bindFramebuffer(R.READ_FRAMEBUFFER, m.__webglFramebuffer), z.bindFramebuffer(R.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
				for (let n = 0; n < s; n++) C && R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, B.get(e).__webglTexture, i, u + n), e.isDepthTexture ? (w && R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, B.get(t).__webglTexture, i, p + n), R.blitFramebuffer(c, l, a, o, d, f, a, o, R.DEPTH_BUFFER_BIT, R.NEAREST)) : w ? R.copyTexSubImage3D(_, i, d, f, p + n, c, l, a, o) : R.copyTexSubImage2D(_, i, d, f, p + n, c, l, a, o);
				z.bindFramebuffer(R.READ_FRAMEBUFFER, null), z.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
			} else w ? e.isDataTexture || e.isData3DTexture ? R.texSubImage3D(_, i, d, f, p, a, o, s, h, g, m.data) : t.isCompressedArrayTexture ? R.compressedTexSubImage3D(_, i, d, f, p, a, o, s, h, m.data) : R.texSubImage3D(_, i, d, f, p, a, o, s, h, g, m) : e.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, i, d, f, a, o, h, g, m.data) : e.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, i, d, f, m.width, m.height, h, m.data) : R.texSubImage2D(R.TEXTURE_2D, i, d, f, a, o, h, g, m);
			R.pixelStorei(R.UNPACK_ROW_LENGTH, v), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, y), R.pixelStorei(R.UNPACK_SKIP_PIXELS, b), R.pixelStorei(R.UNPACK_SKIP_ROWS, x), R.pixelStorei(R.UNPACK_SKIP_IMAGES, S), i === 0 && t.generateMipmaps && R.generateMipmap(_), z.unbindTexture();
		}, this.copyTextureToTexture3D = function(e, t, n = null, r = null, i = 0) {
			return e.isTexture !== !0 && (en("WebGLRenderer: copyTextureToTexture3D function signature has changed."), n = arguments[0] || null, r = arguments[1] || null, e = arguments[2], t = arguments[3], i = arguments[4] || 0), en("WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use \"copyTextureToTexture\" instead."), this.copyTextureToTexture(e, t, n, r, i);
		}, this.initRenderTarget = function(e) {
			B.get(e).__webglFramebuffer === void 0 && V.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? V.setTextureCube(e, 0) : e.isData3DTexture ? V.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? V.setTexture2DArray(e, 0) : V.setTexture2D(e, 0), z.unbindTexture();
		}, this.resetState = function() {
			C = 0, w = 0, T = null, z.reset(), Pe.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return vt;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorspace = G._getDrawingBufferColorSpace(e), t.unpackColorSpace = G._getUnpackColorSpace();
	}
}, Sc = class e {
	constructor(e, t = 25e-5) {
		this.isFogExp2 = !0, this.name = "", this.color = new Y(e), this.density = t;
	}
	clone() {
		return new e(this.color, this.density);
	}
	toJSON() {
		return {
			type: "FogExp2",
			name: this.name,
			color: this.color.getHex(),
			density: this.density
		};
	}
}, Cc = class e {
	constructor(e, t = 1, n = 1e3) {
		this.isFog = !0, this.name = "", this.color = new Y(e), this.near = t, this.far = n;
	}
	clone() {
		return new e(this.color, this.near, this.far);
	}
	toJSON() {
		return {
			type: "Fog",
			name: this.name,
			color: this.color.getHex(),
			near: this.near,
			far: this.far
		};
	}
}, wc = class extends Dr {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ur(), this.environmentIntensity = 1, this.environmentRotation = new ur(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, Tc = class {
	constructor(e, t) {
		this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e === void 0 ? 0 : e.length / t, this.usage = ct, this.updateRanges = [], this.version = 0, this.uuid = Tt();
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
	}
	copyAt(e, t, n) {
		e *= this.stride, n *= t.stride;
		for (let r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	clone(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Tt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
		let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
		return n.setUsage(this.usage), n;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	toJSON(e) {
		return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Tt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
			uuid: this.uuid,
			buffer: this.array.buffer._uuid,
			type: this.array.constructor.name,
			stride: this.stride
		};
	}
}, Ec = /*@__PURE__*/ new q(), Dc = class e {
	constructor(e, t, n, r = !1) {
		this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
	}
	get count() {
		return this.data.count;
	}
	get array() {
		return this.data.array;
	}
	set needsUpdate(e) {
		this.data.needsUpdate = e;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.data.count; t < n; t++) Ec.fromBufferAttribute(this, t), Ec.applyMatrix4(e), this.setXYZ(t, Ec.x, Ec.y, Ec.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) Ec.fromBufferAttribute(this, t), Ec.applyNormalMatrix(e), this.setXYZ(t, Ec.x, Ec.y, Ec.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) Ec.fromBufferAttribute(this, t), Ec.transformDirection(e), this.setXYZ(t, Ec.x, Ec.y, Ec.z);
		return this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.data.stride + this.offset + t];
		return this.normalized && (n = Gt(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = H(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
	}
	setX(e, t) {
		return this.normalized && (t = H(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
	}
	setY(e, t) {
		return this.normalized && (t = H(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
	}
	setZ(e, t) {
		return this.normalized && (t = H(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
	}
	setW(e, t) {
		return this.normalized && (t = H(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
	}
	getX(e) {
		let t = this.data.array[e * this.data.stride + this.offset];
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	getY(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 1];
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	getZ(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 2];
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	getW(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 3];
		return this.normalized && (t = Gt(t, this.array)), t;
	}
	setXY(e, t, n) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = H(t, this.array), n = H(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = H(t, this.array), n = H(n, this.array), r = H(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = H(t, this.array), n = H(n, this.array), r = H(r, this.array), i = H(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
	}
	clone(t) {
		if (t === void 0) {
			console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return new ri(new this.array.constructor(e), this.itemSize, this.normalized);
		}
		return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
	}
	toJSON(e) {
		if (e === void 0) {
			console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: e,
				normalized: this.normalized
			};
		}
		return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
			isInterleavedBufferAttribute: !0,
			itemSize: this.itemSize,
			data: this.data.uuid,
			offset: this.offset,
			normalized: this.normalized
		};
	}
}, Oc = class extends Jr {
	static get type() {
		return "SpriteMaterial";
	}
	constructor(e) {
		super(), this.isSpriteMaterial = !0, this.color = new Y(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, kc, Ac = /*@__PURE__*/ new q(), jc = /*@__PURE__*/ new q(), Mc = /*@__PURE__*/ new q(), Nc = /*@__PURE__*/ new U(), Pc = /*@__PURE__*/ new U(), Fc = /*@__PURE__*/ new J(), Ic = /*@__PURE__*/ new q(), Lc = /*@__PURE__*/ new q(), Rc = /*@__PURE__*/ new q(), zc = /*@__PURE__*/ new U(), Bc = /*@__PURE__*/ new U(), Vc = /*@__PURE__*/ new U(), Hc = class extends Dr {
	constructor(e = new Oc()) {
		if (super(), this.isSprite = !0, this.type = "Sprite", kc === void 0) {
			kc = new Z();
			let e = new Tc(new Float32Array([
				-.5,
				-.5,
				0,
				0,
				0,
				.5,
				-.5,
				0,
				1,
				0,
				.5,
				.5,
				0,
				1,
				1,
				-.5,
				.5,
				0,
				0,
				1
			]), 5);
			kc.setIndex([
				0,
				1,
				2,
				0,
				2,
				3
			]), kc.setAttribute("position", new Dc(e, 3, 0, !1)), kc.setAttribute("uv", new Dc(e, 2, 3, !1));
		}
		this.geometry = kc, this.material = e, this.center = new U(.5, .5);
	}
	raycast(e, t) {
		e.camera === null && console.error("THREE.Sprite: \"Raycaster.camera\" needs to be set in order to raycast against sprites."), jc.setFromMatrixScale(this.matrixWorld), Fc.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Mc.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && jc.multiplyScalar(-Mc.z);
		let n = this.material.rotation, r, i;
		n !== 0 && (i = Math.cos(n), r = Math.sin(n));
		let a = this.center;
		Uc(Ic.set(-.5, -.5, 0), Mc, a, jc, r, i), Uc(Lc.set(.5, -.5, 0), Mc, a, jc, r, i), Uc(Rc.set(.5, .5, 0), Mc, a, jc, r, i), zc.set(0, 0), Bc.set(1, 0), Vc.set(1, 1);
		let o = e.ray.intersectTriangle(Ic, Lc, Rc, !1, Ac);
		if (o === null && (Uc(Lc.set(-.5, .5, 0), Mc, a, jc, r, i), Bc.set(0, 1), o = e.ray.intersectTriangle(Ic, Rc, Lc, !1, Ac), o === null)) return;
		let s = e.ray.origin.distanceTo(Ac);
		s < e.near || s > e.far || t.push({
			distance: s,
			point: Ac.clone(),
			uv: Vr.getInterpolation(Ac, Ic, Lc, Rc, zc, Bc, Vc, new U()),
			face: null,
			object: this
		});
	}
	copy(e, t) {
		return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
	}
};
function Uc(e, t, n, r, i, a) {
	Nc.subVectors(e, n).addScalar(.5).multiply(r), i === void 0 ? Pc.copy(Nc) : (Pc.x = a * Nc.x - i * Nc.y, Pc.y = i * Nc.x + a * Nc.y), e.copy(t), e.x += Pc.x, e.y += Pc.y, e.applyMatrix4(Fc);
}
var Wc = /*@__PURE__*/ new q(), Gc = /*@__PURE__*/ new q(), Kc = class extends Dr {
	constructor() {
		super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
			levels: {
				enumerable: !0,
				value: []
			},
			isLOD: { value: !0 }
		}), this.autoUpdate = !0;
	}
	copy(e) {
		super.copy(e, !1);
		let t = e.levels;
		for (let e = 0, n = t.length; e < n; e++) {
			let n = t[e];
			this.addLevel(n.object.clone(), n.distance, n.hysteresis);
		}
		return this.autoUpdate = e.autoUpdate, this;
	}
	addLevel(e, t = 0, n = 0) {
		t = Math.abs(t);
		let r = this.levels, i = 0;
		for (; i < r.length && !(t < r[i].distance); i++);
		return r.splice(i, 0, {
			distance: t,
			hysteresis: n,
			object: e
		}), this.add(e), this;
	}
	removeLevel(e) {
		let t = this.levels;
		for (let n = 0; n < t.length; n++) if (t[n].distance === e) {
			let e = t.splice(n, 1);
			return this.remove(e[0].object), !0;
		}
		return !1;
	}
	getCurrentLevel() {
		return this._currentLevel;
	}
	getObjectForDistance(e) {
		let t = this.levels;
		if (t.length > 0) {
			let n, r;
			for (n = 1, r = t.length; n < r; n++) {
				let r = t[n].distance;
				if (t[n].object.visible && (r -= r * t[n].hysteresis), e < r) break;
			}
			return t[n - 1].object;
		}
		return null;
	}
	raycast(e, t) {
		if (this.levels.length > 0) {
			Wc.setFromMatrixPosition(this.matrixWorld);
			let n = e.ray.origin.distanceTo(Wc);
			this.getObjectForDistance(n).raycast(e, t);
		}
	}
	update(e) {
		let t = this.levels;
		if (t.length > 1) {
			Wc.setFromMatrixPosition(e.matrixWorld), Gc.setFromMatrixPosition(this.matrixWorld);
			let n = Wc.distanceTo(Gc) / e.zoom;
			t[0].object.visible = !0;
			let r, i;
			for (r = 1, i = t.length; r < i; r++) {
				let e = t[r].distance;
				if (t[r].object.visible && (e -= e * t[r].hysteresis), n >= e) t[r - 1].object.visible = !1, t[r].object.visible = !0;
				else break;
			}
			for (this._currentLevel = r - 1; r < i; r++) t[r].object.visible = !1;
		}
	}
	toJSON(e) {
		let t = super.toJSON(e);
		this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
		let n = this.levels;
		for (let e = 0, r = n.length; e < r; e++) {
			let r = n[e];
			t.object.levels.push({
				object: r.object.uuid,
				distance: r.distance,
				hysteresis: r.hysteresis
			});
		}
		return t;
	}
}, qc = /*@__PURE__*/ new q(), Jc = /*@__PURE__*/ new K(), Yc = /*@__PURE__*/ new K(), Xc = /*@__PURE__*/ new q(), Zc = /*@__PURE__*/ new J(), Qc = /*@__PURE__*/ new q(), $c = /*@__PURE__*/ new Kn(), el = /*@__PURE__*/ new J(), tl = /*@__PURE__*/ new er(), nl = class extends Ai {
	constructor(e, t) {
		super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = o, this.bindMatrix = new J(), this.bindMatrixInverse = new J(), this.boundingBox = null, this.boundingSphere = null;
	}
	computeBoundingBox() {
		let e = this.geometry;
		this.boundingBox === null && (this.boundingBox = new On()), this.boundingBox.makeEmpty();
		let t = e.getAttribute("position");
		for (let e = 0; e < t.count; e++) this.getVertexPosition(e, Qc), this.boundingBox.expandByPoint(Qc);
	}
	computeBoundingSphere() {
		let e = this.geometry;
		this.boundingSphere === null && (this.boundingSphere = new Kn()), this.boundingSphere.makeEmpty();
		let t = e.getAttribute("position");
		for (let e = 0; e < t.count; e++) this.getVertexPosition(e, Qc), this.boundingSphere.expandByPoint(Qc);
	}
	copy(e, t) {
		return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
	}
	raycast(e, t) {
		let n = this.material, r = this.matrixWorld;
		n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), $c.copy(this.boundingSphere), $c.applyMatrix4(r), e.ray.intersectsSphere($c) !== !1 && (el.copy(r).invert(), tl.copy(e.ray).applyMatrix4(el), (this.boundingBox === null || tl.intersectsBox(this.boundingBox) !== !1) && this._computeIntersections(e, t, tl)));
	}
	getVertexPosition(e, t) {
		return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
	}
	bind(e, t) {
		this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
	}
	pose() {
		this.skeleton.pose();
	}
	normalizeSkinWeights() {
		let e = new K(), t = this.geometry.attributes.skinWeight;
		for (let n = 0, r = t.count; n < r; n++) {
			e.fromBufferAttribute(t, n);
			let r = 1 / e.manhattanLength();
			r === Infinity ? e.set(1, 0, 0, 0) : e.multiplyScalar(r), t.setXYZW(n, e.x, e.y, e.z, e.w);
		}
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
	}
	applyBoneTransform(e, t) {
		let n = this.skeleton, r = this.geometry;
		Jc.fromBufferAttribute(r.attributes.skinIndex, e), Yc.fromBufferAttribute(r.attributes.skinWeight, e), qc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
		for (let e = 0; e < 4; e++) {
			let r = Yc.getComponent(e);
			if (r !== 0) {
				let i = Jc.getComponent(e);
				Zc.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]), t.addScaledVector(Xc.copy(qc).applyMatrix4(Zc), r);
			}
		}
		return t.applyMatrix4(this.bindMatrixInverse);
	}
}, rl = class extends Dr {
	constructor() {
		super(), this.isBone = !0, this.type = "Bone";
	}
}, il = class extends vn {
	constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = d, l = d, u, f) {
		super(null, a, o, s, c, l, r, i, u, f), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, al = /*@__PURE__*/ new J(), ol = /*@__PURE__*/ new J(), sl = class e {
	constructor(e = [], t = []) {
		this.uuid = Tt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
	}
	init() {
		let e = this.bones, t = this.boneInverses;
		if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
		else if (e.length !== t.length) {
			console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
			for (let e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new J());
		}
	}
	calculateInverses() {
		this.boneInverses.length = 0;
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = new J();
			this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(t);
		}
	}
	pose() {
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = this.bones[e];
			t && t.matrixWorld.copy(this.boneInverses[e]).invert();
		}
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = this.bones[e];
			t && (t.parent && t.parent.isBone ? (t.matrix.copy(t.parent.matrixWorld).invert(), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale));
		}
	}
	update() {
		let e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture;
		for (let r = 0, i = e.length; r < i; r++) {
			let i = e[r] ? e[r].matrixWorld : ol;
			al.multiplyMatrices(i, t[r]), al.toArray(n, r * 16);
		}
		r !== null && (r.needsUpdate = !0);
	}
	clone() {
		return new e(this.bones, this.boneInverses);
	}
	computeBoneTexture() {
		let e = Math.sqrt(this.bones.length * 4);
		e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
		let t = new Float32Array(e * e * 4);
		t.set(this.boneMatrices);
		let n = new il(t, e, e, F, D);
		return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
	}
	getBoneByName(e) {
		for (let t = 0, n = this.bones.length; t < n; t++) {
			let n = this.bones[t];
			if (n.name === e) return n;
		}
	}
	dispose() {
		this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
	}
	fromJSON(e, t) {
		this.uuid = e.uuid;
		for (let n = 0, r = e.bones.length; n < r; n++) {
			let r = e.bones[n], i = t[r];
			i === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), i = new rl()), this.bones.push(i), this.boneInverses.push(new J().fromArray(e.boneInverses[n]));
		}
		return this.init(), this;
	}
	toJSON() {
		let e = {
			metadata: {
				version: 4.6,
				type: "Skeleton",
				generator: "Skeleton.toJSON"
			},
			bones: [],
			boneInverses: []
		};
		e.uuid = this.uuid;
		let t = this.bones, n = this.boneInverses;
		for (let r = 0, i = t.length; r < i; r++) {
			let i = t[r];
			e.bones.push(i.uuid);
			let a = n[r];
			e.boneInverses.push(a.toArray());
		}
		return e;
	}
}, cl = class extends ri {
	constructor(e, t, n, r = 1) {
		super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
	}
}, ll = /*@__PURE__*/ new J(), ul = /*@__PURE__*/ new J(), dl = [], fl = /*@__PURE__*/ new On(), pl = /*@__PURE__*/ new J(), ml = /*@__PURE__*/ new Ai(), hl = /*@__PURE__*/ new Kn(), gl = class extends Ai {
	constructor(e, t, n) {
		super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new cl(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
		for (let e = 0; e < n; e++) this.setMatrixAt(e, pl);
	}
	computeBoundingBox() {
		let e = this.geometry, t = this.count;
		this.boundingBox === null && (this.boundingBox = new On()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
		for (let n = 0; n < t; n++) this.getMatrixAt(n, ll), fl.copy(e.boundingBox).applyMatrix4(ll), this.boundingBox.union(fl);
	}
	computeBoundingSphere() {
		let e = this.geometry, t = this.count;
		this.boundingSphere === null && (this.boundingSphere = new Kn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
		for (let n = 0; n < t; n++) this.getMatrixAt(n, ll), hl.copy(e.boundingSphere).applyMatrix4(ll), this.boundingSphere.union(hl);
	}
	copy(e, t) {
		return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
	}
	getColorAt(e, t) {
		t.fromArray(this.instanceColor.array, e * 3);
	}
	getMatrixAt(e, t) {
		t.fromArray(this.instanceMatrix.array, e * 16);
	}
	getMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, i = e * (n.length + 1) + 1;
		for (let e = 0; e < n.length; e++) n[e] = r[i + e];
	}
	raycast(e, t) {
		let n = this.matrixWorld, r = this.count;
		if (ml.geometry = this.geometry, ml.material = this.material, ml.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), hl.copy(this.boundingSphere), hl.applyMatrix4(n), e.ray.intersectsSphere(hl) !== !1)) for (let i = 0; i < r; i++) {
			this.getMatrixAt(i, ll), ul.multiplyMatrices(n, ll), ml.matrixWorld = ul, ml.raycast(e, dl);
			for (let e = 0, n = dl.length; e < n; e++) {
				let n = dl[e];
				n.instanceId = i, n.object = this, t.push(n);
			}
			dl.length = 0;
		}
	}
	setColorAt(e, t) {
		this.instanceColor === null && (this.instanceColor = new cl(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
	}
	setMatrixAt(e, t) {
		t.toArray(this.instanceMatrix.array, e * 16);
	}
	setMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = n.length + 1;
		this.morphTexture === null && (this.morphTexture = new il(new Float32Array(r * this.count), r, this.count, re, D));
		let i = this.morphTexture.source.data.data, a = 0;
		for (let e = 0; e < n.length; e++) a += n[e];
		let o = this.geometry.morphTargetsRelative ? 1 : 1 - a, s = r * e;
		i[s] = o, i.set(n, s + 1);
	}
	updateMorphTargets() {}
	dispose() {
		return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
	}
};
function _l(e, t) {
	return e - t;
}
function vl(e, t) {
	return e.z - t.z;
}
function yl(e, t) {
	return t.z - e.z;
}
var bl = class {
	constructor() {
		this.index = 0, this.pool = [], this.list = [];
	}
	push(e, t, n, r) {
		let i = this.pool, a = this.list;
		this.index >= i.length && i.push({
			start: -1,
			count: -1,
			z: -1,
			index: -1
		});
		let o = i[this.index];
		a.push(o), this.index++, o.start = e, o.count = t, o.z = n, o.index = r;
	}
	reset() {
		this.list.length = 0, this.index = 0;
	}
}, xl = /*@__PURE__*/ new J(), Sl = /*@__PURE__*/ new Y(1, 1, 1), Cl = /*@__PURE__*/ new ia(), wl = /*@__PURE__*/ new On(), Tl = /*@__PURE__*/ new Kn(), El = /*@__PURE__*/ new q(), Dl = /*@__PURE__*/ new q(), Ol = /*@__PURE__*/ new q(), kl = /*@__PURE__*/ new bl(), Al = /*@__PURE__*/ new Ai(), jl = [];
function Ml(e, t, n = 0) {
	let r = t.itemSize;
	if (e.isInterleavedBufferAttribute || e.array.constructor !== t.array.constructor) {
		let i = e.count;
		for (let a = 0; a < i; a++) for (let i = 0; i < r; i++) t.setComponent(a + n, i, e.getComponent(a, i));
	} else t.array.set(e.array, n * r);
	t.needsUpdate = !0;
}
function Nl(e, t) {
	if (e.constructor !== t.constructor) {
		let n = Math.min(e.length, t.length);
		for (let r = 0; r < n; r++) t[r] = e[r];
	} else {
		let n = Math.min(e.length, t.length);
		t.set(new e.constructor(e.buffer, 0, n));
	}
}
var Pl = class extends Ai {
	get maxInstanceCount() {
		return this._maxInstanceCount;
	}
	get instanceCount() {
		return this._instanceInfo.length - this._availableInstanceIds.length;
	}
	get unusedVertexCount() {
		return this._maxVertexCount - this._nextVertexStart;
	}
	get unusedIndexCount() {
		return this._maxIndexCount - this._nextIndexStart;
	}
	constructor(e, t, n = t * 2, r) {
		super(new Z(), r), this.isBatchedMesh = !0, this.perObjectFrustumCulled = !0, this.sortObjects = !0, this.boundingBox = null, this.boundingSphere = null, this.customSort = null, this._instanceInfo = [], this._geometryInfo = [], this._availableInstanceIds = [], this._availableGeometryIds = [], this._nextIndexStart = 0, this._nextVertexStart = 0, this._geometryCount = 0, this._visibilityChanged = !0, this._geometryInitialized = !1, this._maxInstanceCount = e, this._maxVertexCount = t, this._maxIndexCount = n, this._multiDrawCounts = new Int32Array(e), this._multiDrawStarts = new Int32Array(e), this._multiDrawCount = 0, this._multiDrawInstances = null, this._matricesTexture = null, this._indirectTexture = null, this._colorsTexture = null, this._initMatricesTexture(), this._initIndirectTexture();
	}
	_initMatricesTexture() {
		let e = Math.sqrt(this._maxInstanceCount * 4);
		e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
		let t = new il(new Float32Array(e * e * 4), e, e, F, D);
		this._matricesTexture = t;
	}
	_initIndirectTexture() {
		let e = Math.sqrt(this._maxInstanceCount);
		e = Math.ceil(e);
		let t = new il(new Uint32Array(e * e), e, e, ie, E);
		this._indirectTexture = t;
	}
	_initColorsTexture() {
		let e = Math.sqrt(this._maxInstanceCount);
		e = Math.ceil(e);
		let t = new il(new Float32Array(e * e * 4).fill(1), e, e, F, D);
		t.colorSpace = G.workingColorSpace, this._colorsTexture = t;
	}
	_initializeGeometry(e) {
		let t = this.geometry, n = this._maxVertexCount, r = this._maxIndexCount;
		if (this._geometryInitialized === !1) {
			for (let r in e.attributes) {
				let { array: i, itemSize: a, normalized: o } = e.getAttribute(r), s = new ri(new i.constructor(n * a), a, o);
				t.setAttribute(r, s);
			}
			if (e.getIndex() !== null) {
				let e = n > 65535 ? new Uint32Array(r) : new Uint16Array(r);
				t.setIndex(new ri(e, 1));
			}
			this._geometryInitialized = !0;
		}
	}
	_validateGeometry(e) {
		let t = this.geometry;
		if (!!e.getIndex() != !!t.getIndex()) throw Error("BatchedMesh: All geometries must consistently have \"index\".");
		for (let n in t.attributes) {
			if (!e.hasAttribute(n)) throw Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);
			let r = e.getAttribute(n), i = t.getAttribute(n);
			if (r.itemSize !== i.itemSize || r.normalized !== i.normalized) throw Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.");
		}
	}
	setCustomSort(e) {
		return this.customSort = e, this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new On());
		let e = this.boundingBox, t = this._instanceInfo;
		e.makeEmpty();
		for (let n = 0, r = t.length; n < r; n++) {
			if (t[n].active === !1) continue;
			let r = t[n].geometryIndex;
			this.getMatrixAt(n, xl), this.getBoundingBoxAt(r, wl).applyMatrix4(xl), e.union(wl);
		}
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Kn());
		let e = this.boundingSphere, t = this._instanceInfo;
		e.makeEmpty();
		for (let n = 0, r = t.length; n < r; n++) {
			if (t[n].active === !1) continue;
			let r = t[n].geometryIndex;
			this.getMatrixAt(n, xl), this.getBoundingSphereAt(r, Tl).applyMatrix4(xl), e.union(Tl);
		}
	}
	addInstance(e) {
		if (this._instanceInfo.length >= this.maxInstanceCount && this._availableInstanceIds.length === 0) throw Error("BatchedMesh: Maximum item count reached.");
		let t = {
			visible: !0,
			active: !0,
			geometryIndex: e
		}, n = null;
		this._availableInstanceIds.length > 0 ? (this._availableInstanceIds.sort(_l), n = this._availableInstanceIds.shift(), this._instanceInfo[n] = t) : (n = this._instanceInfo.length, this._instanceInfo.push(t));
		let r = this._matricesTexture;
		xl.identity().toArray(r.image.data, n * 16), r.needsUpdate = !0;
		let i = this._colorsTexture;
		return i && (Sl.toArray(i.image.data, n * 4), i.needsUpdate = !0), this._visibilityChanged = !0, n;
	}
	addGeometry(e, t = -1, n = -1) {
		this._initializeGeometry(e), this._validateGeometry(e);
		let r = {
			vertexStart: -1,
			vertexCount: -1,
			reservedVertexCount: -1,
			indexStart: -1,
			indexCount: -1,
			reservedIndexCount: -1,
			start: -1,
			count: -1,
			boundingBox: null,
			boundingSphere: null,
			active: !0
		}, i = this._geometryInfo;
		r.vertexStart = this._nextVertexStart, r.reservedVertexCount = t === -1 ? e.getAttribute("position").count : t;
		let a = e.getIndex();
		if (a !== null && (r.indexStart = this._nextIndexStart, r.reservedIndexCount = n === -1 ? a.count : n), r.indexStart !== -1 && r.indexStart + r.reservedIndexCount > this._maxIndexCount || r.vertexStart + r.reservedVertexCount > this._maxVertexCount) throw Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");
		let o;
		return this._availableGeometryIds.length > 0 ? (this._availableGeometryIds.sort(_l), o = this._availableGeometryIds.shift(), i[o] = r) : (o = this._geometryCount, this._geometryCount++, i.push(r)), this.setGeometryAt(o, e), this._nextIndexStart = r.indexStart + r.reservedIndexCount, this._nextVertexStart = r.vertexStart + r.reservedVertexCount, o;
	}
	setGeometryAt(e, t) {
		if (e >= this._geometryCount) throw Error("BatchedMesh: Maximum geometry count reached.");
		this._validateGeometry(t);
		let n = this.geometry, r = n.getIndex() !== null, i = n.getIndex(), a = t.getIndex(), o = this._geometryInfo[e];
		if (r && a.count > o.reservedIndexCount || t.attributes.position.count > o.reservedVertexCount) throw Error("BatchedMesh: Reserved space not large enough for provided geometry.");
		let s = o.vertexStart, c = o.reservedVertexCount;
		o.vertexCount = t.getAttribute("position").count;
		for (let e in n.attributes) {
			let r = t.getAttribute(e), i = n.getAttribute(e);
			Ml(r, i, s);
			let a = r.itemSize;
			for (let e = r.count, t = c; e < t; e++) {
				let t = s + e;
				for (let e = 0; e < a; e++) i.setComponent(t, e, 0);
			}
			i.needsUpdate = !0, i.addUpdateRange(s * a, c * a);
		}
		if (r) {
			let e = o.indexStart, n = o.reservedIndexCount;
			o.indexCount = t.getIndex().count;
			for (let t = 0; t < a.count; t++) i.setX(e + t, s + a.getX(t));
			for (let t = a.count, r = n; t < r; t++) i.setX(e + t, s);
			i.needsUpdate = !0, i.addUpdateRange(e, o.reservedIndexCount);
		}
		return o.start = r ? o.indexStart : o.vertexStart, o.count = r ? o.indexCount : o.vertexCount, o.boundingBox = null, t.boundingBox !== null && (o.boundingBox = t.boundingBox.clone()), o.boundingSphere = null, t.boundingSphere !== null && (o.boundingSphere = t.boundingSphere.clone()), this._visibilityChanged = !0, e;
	}
	deleteGeometry(e) {
		let t = this._geometryInfo;
		if (e >= t.length || t[e].active === !1) return this;
		let n = this._instanceInfo;
		for (let t = 0, r = n.length; t < r; t++) n[t].geometryIndex === e && this.deleteInstance(t);
		return t[e].active = !1, this._availableGeometryIds.push(e), this._visibilityChanged = !0, this;
	}
	deleteInstance(e) {
		let t = this._instanceInfo;
		return e >= t.length || t[e].active === !1 || (t[e].active = !1, this._availableInstanceIds.push(e), this._visibilityChanged = !0), this;
	}
	optimize() {
		let e = 0, t = 0, n = this._geometryInfo, r = n.map((e, t) => t).sort((e, t) => n[e].vertexStart - n[t].vertexStart), i = this.geometry;
		for (let a = 0, o = n.length; a < o; a++) {
			let o = n[r[a]];
			if (o.active !== !1) {
				if (i.index !== null) {
					if (o.indexStart !== t) {
						let { indexStart: n, vertexStart: r, reservedIndexCount: a } = o, s = i.index, c = s.array, l = e - r;
						for (let e = n; e < n + a; e++) c[e] = c[e] + l;
						s.array.copyWithin(t, n, n + a), s.addUpdateRange(t, a), o.indexStart = t;
					}
					t += o.reservedIndexCount;
				}
				if (o.vertexStart !== e) {
					let { vertexStart: t, reservedVertexCount: n } = o, r = i.attributes;
					for (let i in r) {
						let a = r[i], { array: o, itemSize: s } = a;
						o.copyWithin(e * s, t * s, (t + n) * s), a.addUpdateRange(e * s, n * s);
					}
					o.vertexStart = e;
				}
				e += o.reservedVertexCount, o.start = i.index ? o.indexStart : o.vertexStart, this._nextIndexStart = i.index ? o.indexStart + o.reservedIndexCount : 0, this._nextVertexStart = o.vertexStart + o.reservedVertexCount;
			}
		}
		return this;
	}
	getBoundingBoxAt(e, t) {
		if (e >= this._geometryCount) return null;
		let n = this.geometry, r = this._geometryInfo[e];
		if (r.boundingBox === null) {
			let e = new On(), t = n.index, i = n.attributes.position;
			for (let n = r.start, a = r.start + r.count; n < a; n++) {
				let r = n;
				t && (r = t.getX(r)), e.expandByPoint(El.fromBufferAttribute(i, r));
			}
			r.boundingBox = e;
		}
		return t.copy(r.boundingBox), t;
	}
	getBoundingSphereAt(e, t) {
		if (e >= this._geometryCount) return null;
		let n = this.geometry, r = this._geometryInfo[e];
		if (r.boundingSphere === null) {
			let t = new Kn();
			this.getBoundingBoxAt(e, wl), wl.getCenter(t.center);
			let i = n.index, a = n.attributes.position, o = 0;
			for (let e = r.start, n = r.start + r.count; e < n; e++) {
				let n = e;
				i && (n = i.getX(n)), El.fromBufferAttribute(a, n), o = Math.max(o, t.center.distanceToSquared(El));
			}
			t.radius = Math.sqrt(o), r.boundingSphere = t;
		}
		return t.copy(r.boundingSphere), t;
	}
	setMatrixAt(e, t) {
		let n = this._instanceInfo, r = this._matricesTexture, i = this._matricesTexture.image.data;
		return e >= n.length || n[e].active === !1 || (t.toArray(i, e * 16), r.needsUpdate = !0), this;
	}
	getMatrixAt(e, t) {
		let n = this._instanceInfo, r = this._matricesTexture.image.data;
		return e >= n.length || n[e].active === !1 ? null : t.fromArray(r, e * 16);
	}
	setColorAt(e, t) {
		this._colorsTexture === null && this._initColorsTexture();
		let n = this._colorsTexture, r = this._colorsTexture.image.data, i = this._instanceInfo;
		return e >= i.length || i[e].active === !1 || (t.toArray(r, e * 4), n.needsUpdate = !0), this;
	}
	getColorAt(e, t) {
		let n = this._colorsTexture.image.data, r = this._instanceInfo;
		return e >= r.length || r[e].active === !1 ? null : t.fromArray(n, e * 4);
	}
	setVisibleAt(e, t) {
		let n = this._instanceInfo;
		return e >= n.length || n[e].active === !1 || n[e].visible === t || (n[e].visible = t, this._visibilityChanged = !0), this;
	}
	getVisibleAt(e) {
		let t = this._instanceInfo;
		return e >= t.length || t[e].active === !1 ? !1 : t[e].visible;
	}
	setGeometryIdAt(e, t) {
		let n = this._instanceInfo, r = this._geometryInfo;
		return e >= n.length || n[e].active === !1 || t >= r.length || r[t].active === !1 ? null : (n[e].geometryIndex = t, this);
	}
	getGeometryIdAt(e) {
		let t = this._instanceInfo;
		return e >= t.length || t[e].active === !1 ? -1 : t[e].geometryIndex;
	}
	getGeometryRangeAt(e, t = {}) {
		if (e < 0 || e >= this._geometryCount) return null;
		let n = this._geometryInfo[e];
		return t.vertexStart = n.vertexStart, t.vertexCount = n.vertexCount, t.reservedVertexCount = n.reservedVertexCount, t.indexStart = n.indexStart, t.indexCount = n.indexCount, t.reservedIndexCount = n.reservedIndexCount, t.start = n.start, t.count = n.count, t;
	}
	setInstanceCount(e) {
		let t = this._availableInstanceIds, n = this._instanceInfo;
		for (t.sort(_l); t[t.length - 1] === n.length;) n.pop(), t.pop();
		if (e < n.length) throw Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);
		let r = new Int32Array(e), i = new Int32Array(e);
		Nl(this._multiDrawCounts, r), Nl(this._multiDrawStarts, i), this._multiDrawCounts = r, this._multiDrawStarts = i, this._maxInstanceCount = e;
		let a = this._indirectTexture, o = this._matricesTexture, s = this._colorsTexture;
		a.dispose(), this._initIndirectTexture(), Nl(a.image.data, this._indirectTexture.image.data), o.dispose(), this._initMatricesTexture(), Nl(o.image.data, this._matricesTexture.image.data), s && (s.dispose(), this._initColorsTexture(), Nl(s.image.data, this._colorsTexture.image.data));
	}
	setGeometrySize(e, t) {
		let n = [...this._geometryInfo].filter((e) => e.active);
		if (Math.max(...n.map((e) => e.vertexStart + e.reservedVertexCount)) > e) throw Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);
		if (this.geometry.index && Math.max(...n.map((e) => e.indexStart + e.reservedIndexCount)) > t) throw Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);
		let r = this.geometry;
		r.dispose(), this._maxVertexCount = e, this._maxIndexCount = t, this._geometryInitialized && (this._geometryInitialized = !1, this.geometry = new Z(), this._initializeGeometry(r));
		let i = this.geometry;
		r.index && Nl(r.index.array, i.index.array);
		for (let e in r.attributes) Nl(r.attributes[e].array, i.attributes[e].array);
	}
	raycast(e, t) {
		let n = this._instanceInfo, r = this._geometryInfo, i = this.matrixWorld, a = this.geometry;
		Al.material = this.material, Al.geometry.index = a.index, Al.geometry.attributes = a.attributes, Al.geometry.boundingBox === null && (Al.geometry.boundingBox = new On()), Al.geometry.boundingSphere === null && (Al.geometry.boundingSphere = new Kn());
		for (let a = 0, o = n.length; a < o; a++) {
			if (!n[a].visible || !n[a].active) continue;
			let o = n[a].geometryIndex, s = r[o];
			Al.geometry.setDrawRange(s.start, s.count), this.getMatrixAt(a, Al.matrixWorld).premultiply(i), this.getBoundingBoxAt(o, Al.geometry.boundingBox), this.getBoundingSphereAt(o, Al.geometry.boundingSphere), Al.raycast(e, jl);
			for (let e = 0, n = jl.length; e < n; e++) {
				let n = jl[e];
				n.object = this, n.batchId = a, t.push(n);
			}
			jl.length = 0;
		}
		Al.material = null, Al.geometry.index = null, Al.geometry.attributes = {}, Al.geometry.setDrawRange(0, Infinity);
	}
	copy(e) {
		return super.copy(e), this.geometry = e.geometry.clone(), this.perObjectFrustumCulled = e.perObjectFrustumCulled, this.sortObjects = e.sortObjects, this.boundingBox = e.boundingBox === null ? null : e.boundingBox.clone(), this.boundingSphere = e.boundingSphere === null ? null : e.boundingSphere.clone(), this._geometryInfo = e._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox === null ? null : e.boundingBox.clone(),
			boundingSphere: e.boundingSphere === null ? null : e.boundingSphere.clone()
		})), this._instanceInfo = e._instanceInfo.map((e) => ({ ...e })), this._maxInstanceCount = e._maxInstanceCount, this._maxVertexCount = e._maxVertexCount, this._maxIndexCount = e._maxIndexCount, this._geometryInitialized = e._geometryInitialized, this._geometryCount = e._geometryCount, this._multiDrawCounts = e._multiDrawCounts.slice(), this._multiDrawStarts = e._multiDrawStarts.slice(), this._matricesTexture = e._matricesTexture.clone(), this._matricesTexture.image.data = this._matricesTexture.image.data.slice(), this._colorsTexture !== null && (this._colorsTexture = e._colorsTexture.clone(), this._colorsTexture.image.data = this._colorsTexture.image.data.slice()), this;
	}
	dispose() {
		return this.geometry.dispose(), this._matricesTexture.dispose(), this._matricesTexture = null, this._indirectTexture.dispose(), this._indirectTexture = null, this._colorsTexture !== null && (this._colorsTexture.dispose(), this._colorsTexture = null), this;
	}
	onBeforeRender(e, t, n, r, i) {
		if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects) return;
		let a = r.getIndex(), o = a === null ? 1 : a.array.BYTES_PER_ELEMENT, s = this._instanceInfo, c = this._multiDrawStarts, l = this._multiDrawCounts, u = this._geometryInfo, d = this.perObjectFrustumCulled, f = this._indirectTexture, p = f.image.data;
		d && (xl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse).multiply(this.matrixWorld), Cl.setFromProjectionMatrix(xl, e.coordinateSystem));
		let m = 0;
		if (this.sortObjects) {
			xl.copy(this.matrixWorld).invert(), El.setFromMatrixPosition(n.matrixWorld).applyMatrix4(xl), Dl.set(0, 0, -1).transformDirection(n.matrixWorld).transformDirection(xl);
			for (let e = 0, t = s.length; e < t; e++) if (s[e].visible && s[e].active) {
				let t = s[e].geometryIndex;
				this.getMatrixAt(e, xl), this.getBoundingSphereAt(t, Tl).applyMatrix4(xl);
				let n = !1;
				if (d && (n = !Cl.intersectsSphere(Tl)), !n) {
					let n = u[t], r = Ol.subVectors(Tl.center, El).dot(Dl);
					kl.push(n.start, n.count, r, e);
				}
			}
			let e = kl.list, t = this.customSort;
			t === null ? e.sort(i.transparent ? yl : vl) : t.call(this, e, n);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				c[m] = n.start * o, l[m] = n.count, p[m] = n.index, m++;
			}
			kl.reset();
		} else for (let e = 0, t = s.length; e < t; e++) if (s[e].visible && s[e].active) {
			let t = s[e].geometryIndex, n = !1;
			if (d && (this.getMatrixAt(e, xl), this.getBoundingSphereAt(t, Tl).applyMatrix4(xl), n = !Cl.intersectsSphere(Tl)), !n) {
				let n = u[t];
				c[m] = n.start * o, l[m] = n.count, p[m] = e, m++;
			}
		}
		f.needsUpdate = !0, this._multiDrawCount = m, this._visibilityChanged = !1;
	}
	onBeforeShadow(e, t, n, r, i, a) {
		this.onBeforeRender(e, null, r, i, a);
	}
}, Fl = class extends Jr {
	static get type() {
		return "LineBasicMaterial";
	}
	constructor(e) {
		super(), this.isLineBasicMaterial = !0, this.color = new Y(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
	}
}, Il = /*@__PURE__*/ new q(), Ll = /*@__PURE__*/ new q(), Rl = /*@__PURE__*/ new J(), zl = /*@__PURE__*/ new er(), Bl = /*@__PURE__*/ new Kn(), Vl = /*@__PURE__*/ new q(), Hl = /*@__PURE__*/ new q(), Ul = class extends Dr {
	constructor(e = new Z(), t = new Fl()) {
		super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [0];
			for (let e = 1, r = t.count; e < r; e++) Il.fromBufferAttribute(t, e - 1), Ll.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += Il.distanceTo(Ll);
			e.setAttribute("lineDistance", new X(n, 1));
		} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), Bl.copy(n.boundingSphere), Bl.applyMatrix4(r), Bl.radius += i, e.ray.intersectsSphere(Bl) === !1) return;
		Rl.copy(r).invert(), zl.copy(e.ray).applyMatrix4(Rl);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = this.isLineSegments ? 2 : 1, l = n.index, u = n.attributes.position;
		if (l !== null) {
			let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = l.getX(i), r = l.getX(i + 1), a = Wl(this, e, zl, s, n, r);
				a && t.push(a);
			}
			if (this.isLineLoop) {
				let i = l.getX(r - 1), a = l.getX(n), o = Wl(this, e, zl, s, i, a);
				o && t.push(o);
			}
		} else {
			let n = Math.max(0, a.start), r = Math.min(u.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = Wl(this, e, zl, s, i, i + 1);
				n && t.push(n);
			}
			if (this.isLineLoop) {
				let i = Wl(this, e, zl, s, r - 1, n);
				i && t.push(i);
			}
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function Wl(e, t, n, r, i, a) {
	let o = e.geometry.attributes.position;
	if (Il.fromBufferAttribute(o, i), Ll.fromBufferAttribute(o, a), n.distanceSqToSegment(Il, Ll, Vl, Hl) > r) return;
	Vl.applyMatrix4(e.matrixWorld);
	let s = t.ray.origin.distanceTo(Vl);
	if (!(s < t.near || s > t.far)) return {
		distance: s,
		point: Hl.clone().applyMatrix4(e.matrixWorld),
		index: i,
		face: null,
		faceIndex: null,
		barycoord: null,
		object: e
	};
}
var Gl = /*@__PURE__*/ new q(), Kl = /*@__PURE__*/ new q(), ql = class extends Ul {
	constructor(e, t) {
		super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [];
			for (let e = 0, r = t.count; e < r; e += 2) Gl.fromBufferAttribute(t, e), Kl.fromBufferAttribute(t, e + 1), n[e] = e === 0 ? 0 : n[e - 1], n[e + 1] = n[e] + Gl.distanceTo(Kl);
			e.setAttribute("lineDistance", new X(n, 1));
		} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
}, Jl = class extends Ul {
	constructor(e, t) {
		super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
	}
}, Yl = class extends Jr {
	static get type() {
		return "PointsMaterial";
	}
	constructor(e) {
		super(), this.isPointsMaterial = !0, this.color = new Y(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, Xl = /*@__PURE__*/ new J(), Zl = /*@__PURE__*/ new er(), Ql = /*@__PURE__*/ new Kn(), $l = /*@__PURE__*/ new q(), eu = class extends Dr {
	constructor(e = new Z(), t = new Yl()) {
		super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), Ql.copy(n.boundingSphere), Ql.applyMatrix4(r), Ql.radius += i, e.ray.intersectsSphere(Ql) === !1) return;
		Xl.copy(r).invert(), Zl.copy(e.ray).applyMatrix4(Xl);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = n.index, l = n.attributes.position;
		if (c !== null) {
			let n = Math.max(0, a.start), i = Math.min(c.count, a.start + a.count);
			for (let a = n, o = i; a < o; a++) {
				let n = c.getX(a);
				$l.fromBufferAttribute(l, n), tu($l, n, s, r, e, t, this);
			}
		} else {
			let n = Math.max(0, a.start), i = Math.min(l.count, a.start + a.count);
			for (let a = n, o = i; a < o; a++) $l.fromBufferAttribute(l, a), tu($l, a, s, r, e, t, this);
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function tu(e, t, n, r, i, a, o) {
	let s = Zl.distanceSqToPoint(e);
	if (s < n) {
		let n = new q();
		Zl.closestPointToPoint(e, n), n.applyMatrix4(r);
		let c = i.ray.origin.distanceTo(n);
		if (c < i.near || c > i.far) return;
		a.push({
			distance: c,
			distanceToRay: Math.sqrt(s),
			point: n,
			index: t,
			face: null,
			faceIndex: null,
			barycoord: null,
			object: o
		});
	}
}
var nu = class extends vn {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isVideoTexture = !0, this.minFilter = a === void 0 ? g : a, this.magFilter = i === void 0 ? g : i, this.generateMipmaps = !1;
		let l = this;
		function u() {
			l.needsUpdate = !0, e.requestVideoFrameCallback(u);
		}
		"requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u);
	}
	clone() {
		return new this.constructor(this.image).copy(this);
	}
	update() {
		let e = this.image;
		!("requestVideoFrameCallback" in e) && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
	}
}, ru = class extends vn {
	constructor(e, t) {
		super({
			width: e,
			height: t
		}), this.isFramebufferTexture = !0, this.magFilter = d, this.minFilter = d, this.generateMipmaps = !1, this.needsUpdate = !0;
	}
}, iu = class extends vn {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d) {
		super(null, a, o, s, c, l, r, i, u, d), this.isCompressedTexture = !0, this.image = {
			width: t,
			height: n
		}, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
	}
}, au = class extends iu {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, i, a), this.isCompressedArrayTexture = !0, this.image.depth = r, this.wrapR = l, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, ou = class extends iu {
	constructor(e, t, n) {
		super(void 0, e[0].width, e[0].height, t, n, 301), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e;
	}
}, su = class extends vn {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
	}
}, cu = class {
	constructor() {
		this.type = "Curve", this.arcLengthDivisions = 200;
	}
	getPoint() {
		return console.warn("THREE.Curve: .getPoint() not implemented."), null;
	}
	getPointAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getPoint(n, t);
	}
	getPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return t;
	}
	getSpacedPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
		return t;
	}
	getLength() {
		let e = this.getLengths();
		return e[e.length - 1];
	}
	getLengths(e = this.arcLengthDivisions) {
		if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
		this.needsUpdate = !1;
		let t = [], n, r = this.getPoint(0), i = 0;
		t.push(0);
		for (let a = 1; a <= e; a++) n = this.getPoint(a / e), i += n.distanceTo(r), t.push(i), r = n;
		return this.cacheArcLengths = t, t;
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.getLengths();
	}
	getUtoTmapping(e, t) {
		let n = this.getLengths(), r = 0, i = n.length, a;
		a = t || e * n[i - 1];
		let o = 0, s = i - 1, c;
		for (; o <= s;) if (r = Math.floor(o + (s - o) / 2), c = n[r] - a, c < 0) o = r + 1;
		else if (c > 0) s = r - 1;
		else {
			s = r;
			break;
		}
		if (r = s, n[r] === a) return r / (i - 1);
		let l = n[r], u = n[r + 1] - l, d = (a - l) / u;
		return (r + d) / (i - 1);
	}
	getTangent(e, t) {
		let n = 1e-4, r = e - n, i = e + n;
		r < 0 && (r = 0), i > 1 && (i = 1);
		let a = this.getPoint(r), o = this.getPoint(i), s = t || (a.isVector2 ? new U() : new q());
		return s.copy(o).sub(a).normalize(), s;
	}
	getTangentAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getTangent(n, t);
	}
	computeFrenetFrames(e, t) {
		let n = new q(), r = [], i = [], a = [], o = new q(), s = new J();
		for (let t = 0; t <= e; t++) {
			let n = t / e;
			r[t] = this.getTangentAt(n, new q());
		}
		i[0] = new q(), a[0] = new q();
		let c = Number.MAX_VALUE, l = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
		l <= c && (c = l, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]);
		for (let t = 1; t <= e; t++) {
			if (i[t] = i[t - 1].clone(), a[t] = a[t - 1].clone(), o.crossVectors(r[t - 1], r[t]), o.length() > 2 ** -52) {
				o.normalize();
				let e = Math.acos(Et(r[t - 1].dot(r[t]), -1, 1));
				i[t].applyMatrix4(s.makeRotationAxis(o, e));
			}
			a[t].crossVectors(r[t], i[t]);
		}
		if (t === !0) {
			let t = Math.acos(Et(i[0].dot(i[e]), -1, 1));
			t /= e, r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t);
			for (let n = 1; n <= e; n++) i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n)), a[n].crossVectors(r[n], i[n]);
		}
		return {
			tangents: r,
			normals: i,
			binormals: a
		};
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.6,
			type: "Curve",
			generator: "Curve.toJSON"
		} };
		return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
	}
	fromJSON(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
}, lu = class extends cu {
	constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = Math.PI * 2, o = !1, s = 0) {
		super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = i, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s;
	}
	getPoint(e, t = new U()) {
		let n = t, r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < 2 ** -52;
		for (; i < 0;) i += r;
		for (; i > r;) i -= r;
		i < 2 ** -52 && (i = a ? 0 : r), this.aClockwise === !0 && !a && (i === r ? i = -r : i -= r);
		let o = this.aStartAngle + e * i, s = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
		if (this.aRotation !== 0) {
			let e = Math.cos(this.aRotation), t = Math.sin(this.aRotation), n = s - this.aX, r = c - this.aY;
			s = n * e - r * t + this.aX, c = n * t + r * e + this.aY;
		}
		return n.set(s, c);
	}
	copy(e) {
		return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
}, uu = class extends lu {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, n, r, i, a), this.isArcCurve = !0, this.type = "ArcCurve";
	}
};
function du() {
	let e = 0, t = 0, n = 0, r = 0;
	function i(i, a, o, s) {
		e = i, t = o, n = -3 * i + 3 * a - 2 * o - s, r = 2 * i - 2 * a + o + s;
	}
	return {
		initCatmullRom: function(e, t, n, r, a) {
			i(t, n, a * (n - e), a * (r - t));
		},
		initNonuniformCatmullRom: function(e, t, n, r, a, o, s) {
			let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o, l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
			c *= o, l *= o, i(t, n, c, l);
		},
		calc: function(i) {
			let a = i * i, o = a * i;
			return e + t * i + n * a + r * o;
		}
	};
}
var fu = /*@__PURE__*/ new q(), pu = /*@__PURE__*/ new du(), mu = /*@__PURE__*/ new du(), hu = /*@__PURE__*/ new du(), gu = class extends cu {
	constructor(e = [], t = !1, n = "centripetal", r = .5) {
		super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
	}
	getPoint(e, t = new q()) {
		let n = t, r = this.points, i = r.length, a = (i - +!this.closed) * e, o = Math.floor(a), s = a - o;
		this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : s === 0 && o === i - 1 && (o = i - 2, s = 1);
		let c, l;
		this.closed || o > 0 ? c = r[(o - 1) % i] : (fu.subVectors(r[0], r[1]).add(r[0]), c = fu);
		let u = r[o % i], d = r[(o + 1) % i];
		if (this.closed || o + 2 < i ? l = r[(o + 2) % i] : (fu.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), l = fu), this.curveType === "centripetal" || this.curveType === "chordal") {
			let e = this.curveType === "chordal" ? .5 : .25, t = c.distanceToSquared(u) ** +e, n = u.distanceToSquared(d) ** +e, r = d.distanceToSquared(l) ** +e;
			n < 1e-4 && (n = 1), t < 1e-4 && (t = n), r < 1e-4 && (r = n), pu.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r), mu.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r), hu.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r);
		} else this.curveType === "catmullrom" && (pu.initCatmullRom(c.x, u.x, d.x, l.x, this.tension), mu.initCatmullRom(c.y, u.y, d.y, l.y, this.tension), hu.initCatmullRom(c.z, u.z, d.z, l.z, this.tension));
		return n.set(pu.calc(s), mu.calc(s), hu.calc(s)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new q().fromArray(n));
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
};
function _u(e, t, n, r, i) {
	let a = (r - t) * .5, o = (i - n) * .5, s = e * e, c = e * s;
	return (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n;
}
function vu(e, t) {
	let n = 1 - e;
	return n * n * t;
}
function yu(e, t) {
	return 2 * (1 - e) * e * t;
}
function bu(e, t) {
	return e * e * t;
}
function xu(e, t, n, r) {
	return vu(e, t) + yu(e, n) + bu(e, r);
}
function Su(e, t) {
	let n = 1 - e;
	return n * n * n * t;
}
function Cu(e, t) {
	let n = 1 - e;
	return 3 * n * n * e * t;
}
function wu(e, t) {
	return 3 * (1 - e) * e * e * t;
}
function Tu(e, t) {
	return e * e * e * t;
}
function Eu(e, t, n, r, i) {
	return Su(e, t) + Cu(e, n) + wu(e, r) + Tu(e, i);
}
var Du = class extends cu {
	constructor(e = new U(), t = new U(), n = new U(), r = new U()) {
		super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new U()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(Eu(e, r.x, i.x, a.x, o.x), Eu(e, r.y, i.y, a.y, o.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, Ou = class extends cu {
	constructor(e = new q(), t = new q(), n = new q(), r = new q()) {
		super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new q()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(Eu(e, r.x, i.x, a.x, o.x), Eu(e, r.y, i.y, a.y, o.y), Eu(e, r.z, i.z, a.z, o.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, ku = class extends cu {
	constructor(e = new U(), t = new U()) {
		super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new U()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new U()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Au = class extends cu {
	constructor(e = new q(), t = new q()) {
		super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new q()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new q()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, ju = class extends cu {
	constructor(e = new U(), t = new U(), n = new U()) {
		super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new U()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(xu(e, r.x, i.x, a.x), xu(e, r.y, i.y, a.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Mu = class extends cu {
	constructor(e = new q(), t = new q(), n = new q()) {
		super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new q()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(xu(e, r.x, i.x, a.x), xu(e, r.y, i.y, a.y), xu(e, r.z, i.z, a.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Nu = class extends cu {
	constructor(e = []) {
		super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
	}
	getPoint(e, t = new U()) {
		let n = t, r = this.points, i = (r.length - 1) * e, a = Math.floor(i), o = i - a, s = r[a === 0 ? a : a - 1], c = r[a], l = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2];
		return n.set(_u(o, s.x, c.x, l.x, u.x), _u(o, s.y, c.y, l.y, u.y)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new U().fromArray(n));
		}
		return this;
	}
}, Pu = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ArcCurve: uu,
	CatmullRomCurve3: gu,
	CubicBezierCurve: Du,
	CubicBezierCurve3: Ou,
	EllipseCurve: lu,
	LineCurve: ku,
	LineCurve3: Au,
	QuadraticBezierCurve: ju,
	QuadraticBezierCurve3: Mu,
	SplineCurve: Nu
}), Fu = class extends cu {
	constructor() {
		super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
	}
	add(e) {
		this.curves.push(e);
	}
	closePath() {
		let e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
		if (!e.equals(t)) {
			let n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
			this.curves.push(new Pu[n](t, e));
		}
		return this;
	}
	getPoint(e, t) {
		let n = e * this.getLength(), r = this.getCurveLengths(), i = 0;
		for (; i < r.length;) {
			if (r[i] >= n) {
				let e = r[i] - n, a = this.curves[i], o = a.getLength(), s = o === 0 ? 0 : 1 - e / o;
				return a.getPointAt(s, t);
			}
			i++;
		}
		return null;
	}
	getLength() {
		let e = this.getCurveLengths();
		return e[e.length - 1];
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
	}
	getCurveLengths() {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
		let e = [], t = 0;
		for (let n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(), e.push(t);
		return this.cacheLengths = e, e;
	}
	getSpacedPoints(e = 40) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return this.autoClose && t.push(t[0]), t;
	}
	getPoints(e = 12) {
		let t = [], n;
		for (let r = 0, i = this.curves; r < i.length; r++) {
			let a = i[r], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o);
			for (let e = 0; e < s.length; e++) {
				let r = s[e];
				n && n.equals(r) || (t.push(r), n = r);
			}
		}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
	}
	copy(e) {
		super.copy(e), this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(n.clone());
		}
		return this.autoClose = e.autoClose, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.autoClose = this.autoClose, e.curves = [];
		for (let t = 0, n = this.curves.length; t < n; t++) {
			let n = this.curves[t];
			e.curves.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(new Pu[n.type]().fromJSON(n));
		}
		return this;
	}
}, Iu = class extends Fu {
	constructor(e) {
		super(), this.type = "Path", this.currentPoint = new U(), e && this.setFromPoints(e);
	}
	setFromPoints(e) {
		this.moveTo(e[0].x, e[0].y);
		for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
		return this;
	}
	moveTo(e, t) {
		return this.currentPoint.set(e, t), this;
	}
	lineTo(e, t) {
		let n = new ku(this.currentPoint.clone(), new U(e, t));
		return this.curves.push(n), this.currentPoint.set(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		let i = new ju(this.currentPoint.clone(), new U(e, t), new U(n, r));
		return this.curves.push(i), this.currentPoint.set(n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		let o = new Du(this.currentPoint.clone(), new U(e, t), new U(n, r), new U(i, a));
		return this.curves.push(o), this.currentPoint.set(i, a), this;
	}
	splineThru(e) {
		let t = new Nu([this.currentPoint.clone()].concat(e));
		return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
	}
	arc(e, t, n, r, i, a) {
		let o = this.currentPoint.x, s = this.currentPoint.y;
		return this.absarc(e + o, t + s, n, r, i, a), this;
	}
	absarc(e, t, n, r, i, a) {
		return this.absellipse(e, t, n, n, r, i, a), this;
	}
	ellipse(e, t, n, r, i, a, o, s) {
		let c = this.currentPoint.x, l = this.currentPoint.y;
		return this.absellipse(e + c, t + l, n, r, i, a, o, s), this;
	}
	absellipse(e, t, n, r, i, a, o, s) {
		let c = new lu(e, t, n, r, i, a, o, s);
		if (this.curves.length > 0) {
			let e = c.getPoint(0);
			e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
		}
		this.curves.push(c);
		let l = c.getPoint(1);
		return this.currentPoint.copy(l), this;
	}
	copy(e) {
		return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.currentPoint = this.currentPoint.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
	}
}, Lu = class e extends Z {
	constructor(e = [
		new U(0, -.5),
		new U(.5, 0),
		new U(0, .5)
	], t = 12, n = 0, r = Math.PI * 2) {
		super(), this.type = "LatheGeometry", this.parameters = {
			points: e,
			segments: t,
			phiStart: n,
			phiLength: r
		}, t = Math.floor(t), r = Et(r, 0, Math.PI * 2);
		let i = [], a = [], o = [], s = [], c = [], l = 1 / t, u = new q(), d = new U(), f = new q(), p = new q(), m = new q(), h = 0, g = 0;
		for (let t = 0; t <= e.length - 1; t++) switch (t) {
			case 0:
				h = e[t + 1].x - e[t].x, g = e[t + 1].y - e[t].y, f.x = g * 1, f.y = -h, f.z = g * 0, m.copy(f), f.normalize(), s.push(f.x, f.y, f.z);
				break;
			case e.length - 1:
				s.push(m.x, m.y, m.z);
				break;
			default: h = e[t + 1].x - e[t].x, g = e[t + 1].y - e[t].y, f.x = g * 1, f.y = -h, f.z = g * 0, p.copy(f), f.x += m.x, f.y += m.y, f.z += m.z, f.normalize(), s.push(f.x, f.y, f.z), m.copy(p);
		}
		for (let i = 0; i <= t; i++) {
			let f = n + i * l * r, p = Math.sin(f), m = Math.cos(f);
			for (let n = 0; n <= e.length - 1; n++) {
				u.x = e[n].x * p, u.y = e[n].y, u.z = e[n].x * m, a.push(u.x, u.y, u.z), d.x = i / t, d.y = n / (e.length - 1), o.push(d.x, d.y);
				let r = s[3 * n + 0] * p, l = s[3 * n + 1], f = s[3 * n + 0] * m;
				c.push(r, l, f);
			}
		}
		for (let n = 0; n < t; n++) for (let t = 0; t < e.length - 1; t++) {
			let r = t + n * e.length, a = r, o = r + e.length, s = r + e.length + 1, c = r + 1;
			i.push(a, o, c), i.push(s, c, o);
		}
		this.setIndex(i), this.setAttribute("position", new X(a, 3)), this.setAttribute("uv", new X(o, 2)), this.setAttribute("normal", new X(c, 3));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.points, t.segments, t.phiStart, t.phiLength);
	}
}, Ru = class e extends Lu {
	constructor(e = 1, t = 1, n = 4, r = 8) {
		let i = new Iu();
		i.absarc(0, -t / 2, e, Math.PI * 1.5, 0), i.absarc(0, t / 2, e, 0, Math.PI * .5), super(i.getPoints(n), r), this.type = "CapsuleGeometry", this.parameters = {
			radius: e,
			length: t,
			capSegments: n,
			radialSegments: r
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.length, t.capSegments, t.radialSegments);
	}
}, zu = class e extends Z {
	constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
		super(), this.type = "CircleGeometry", this.parameters = {
			radius: e,
			segments: t,
			thetaStart: n,
			thetaLength: r
		}, t = Math.max(3, t);
		let i = [], a = [], o = [], s = [], c = new q(), l = new U();
		a.push(0, 0, 0), o.push(0, 0, 1), s.push(.5, .5);
		for (let i = 0, u = 3; i <= t; i++, u += 3) {
			let d = n + i / t * r;
			c.x = e * Math.cos(d), c.y = e * Math.sin(d), a.push(c.x, c.y, c.z), o.push(0, 0, 1), l.x = (a[u] / e + 1) / 2, l.y = (a[u + 1] / e + 1) / 2, s.push(l.x, l.y);
		}
		for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
		this.setIndex(i), this.setAttribute("position", new X(a, 3)), this.setAttribute("normal", new X(o, 3)), this.setAttribute("uv", new X(s, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
	}
}, Bu = class e extends Z {
	constructor(e = 1, t = 1, n = 1, r = 32, i = 1, a = !1, o = 0, s = Math.PI * 2) {
		super(), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		let c = this;
		r = Math.floor(r), i = Math.floor(i);
		let l = [], u = [], d = [], f = [], p = 0, m = [], h = n / 2, g = 0;
		_(), a === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(l), this.setAttribute("position", new X(u, 3)), this.setAttribute("normal", new X(d, 3)), this.setAttribute("uv", new X(f, 2));
		function _() {
			let a = new q(), _ = new q(), v = 0, y = (t - e) / n;
			for (let c = 0; c <= i; c++) {
				let l = [], g = c / i, v = g * (t - e) + e;
				for (let e = 0; e <= r; e++) {
					let t = e / r, i = t * s + o, c = Math.sin(i), m = Math.cos(i);
					_.x = v * c, _.y = -g * n + h, _.z = v * m, u.push(_.x, _.y, _.z), a.set(c, y, m).normalize(), d.push(a.x, a.y, a.z), f.push(t, 1 - g), l.push(p++);
				}
				m.push(l);
			}
			for (let n = 0; n < r; n++) for (let r = 0; r < i; r++) {
				let a = m[r][n], o = m[r + 1][n], s = m[r + 1][n + 1], c = m[r][n + 1];
				(e > 0 || r !== 0) && (l.push(a, o, c), v += 3), (t > 0 || r !== i - 1) && (l.push(o, s, c), v += 3);
			}
			c.addGroup(g, v, 0), g += v;
		}
		function v(n) {
			let i = p, a = new U(), m = new q(), _ = 0, v = n === !0 ? e : t, y = n === !0 ? 1 : -1;
			for (let e = 1; e <= r; e++) u.push(0, h * y, 0), d.push(0, y, 0), f.push(.5, .5), p++;
			let b = p;
			for (let e = 0; e <= r; e++) {
				let t = e / r * s + o, n = Math.cos(t), i = Math.sin(t);
				m.x = v * i, m.y = h * y, m.z = v * n, u.push(m.x, m.y, m.z), d.push(0, y, 0), a.x = n * .5 + .5, a.y = i * .5 * y + .5, f.push(a.x, a.y), p++;
			}
			for (let e = 0; e < r; e++) {
				let t = i + e, r = b + e;
				n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), _ += 3;
			}
			c.addGroup(g, _, n === !0 ? 1 : 2), g += _;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Vu = class e extends Bu {
	constructor(e = 1, t = 1, n = 32, r = 1, i = !1, a = 0, o = Math.PI * 2) {
		super(0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: o
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Hu = class e extends Z {
	constructor(e = [], t = [], n = 1, r = 0) {
		super(), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: e,
			indices: t,
			radius: n,
			detail: r
		};
		let i = [], a = [];
		o(r), c(n), l(), this.setAttribute("position", new X(i, 3)), this.setAttribute("normal", new X(i.slice(), 3)), this.setAttribute("uv", new X(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
		function o(e) {
			let n = new q(), r = new q(), i = new q();
			for (let a = 0; a < t.length; a += 3) f(t[a + 0], n), f(t[a + 1], r), f(t[a + 2], i), s(n, r, i, e);
		}
		function s(e, t, n, r) {
			let i = r + 1, a = [];
			for (let r = 0; r <= i; r++) {
				a[r] = [];
				let o = e.clone().lerp(n, r / i), s = t.clone().lerp(n, r / i), c = i - r;
				for (let e = 0; e <= c; e++) e === 0 && r === i ? a[r][e] = o : a[r][e] = o.clone().lerp(s, e / c);
			}
			for (let e = 0; e < i; e++) for (let t = 0; t < 2 * (i - e) - 1; t++) {
				let n = Math.floor(t / 2);
				t % 2 == 0 ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n])) : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]));
			}
		}
		function c(e) {
			let t = new q();
			for (let n = 0; n < i.length; n += 3) t.x = i[n + 0], t.y = i[n + 1], t.z = i[n + 2], t.normalize().multiplyScalar(e), i[n + 0] = t.x, i[n + 1] = t.y, i[n + 2] = t.z;
		}
		function l() {
			let e = new q();
			for (let t = 0; t < i.length; t += 3) {
				e.x = i[t + 0], e.y = i[t + 1], e.z = i[t + 2];
				let n = h(e) / 2 / Math.PI + .5, r = g(e) / Math.PI + .5;
				a.push(n, 1 - r);
			}
			p(), u();
		}
		function u() {
			for (let e = 0; e < a.length; e += 6) {
				let t = a[e + 0], n = a[e + 2], r = a[e + 4];
				Math.max(t, n, r) > .9 && Math.min(t, n, r) < .1 && (t < .2 && (a[e + 0] += 1), n < .2 && (a[e + 2] += 1), r < .2 && (a[e + 4] += 1));
			}
		}
		function d(e) {
			i.push(e.x, e.y, e.z);
		}
		function f(t, n) {
			let r = t * 3;
			n.x = e[r + 0], n.y = e[r + 1], n.z = e[r + 2];
		}
		function p() {
			let e = new q(), t = new q(), n = new q(), r = new q(), o = new U(), s = new U(), c = new U();
			for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
				e.set(i[l + 0], i[l + 1], i[l + 2]), t.set(i[l + 3], i[l + 4], i[l + 5]), n.set(i[l + 6], i[l + 7], i[l + 8]), o.set(a[u + 0], a[u + 1]), s.set(a[u + 2], a[u + 3]), c.set(a[u + 4], a[u + 5]), r.copy(e).add(t).add(n).divideScalar(3);
				let d = h(r);
				m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d);
			}
		}
		function m(e, t, n, r) {
			r < 0 && e.x === 1 && (a[t] = e.x - 1), n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + .5);
		}
		function h(e) {
			return Math.atan2(e.z, -e.x);
		}
		function g(e) {
			return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.vertices, t.indices, t.radius, t.details);
	}
}, Uu = class e extends Hu {
	constructor(e = 1, t = 0) {
		let n = (1 + Math.sqrt(5)) / 2, r = 1 / n, i = [
			-1,
			-1,
			-1,
			-1,
			-1,
			1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			1,
			1,
			1,
			-1,
			1,
			1,
			1,
			0,
			-r,
			-n,
			0,
			-r,
			n,
			0,
			r,
			-n,
			0,
			r,
			n,
			-r,
			-n,
			0,
			-r,
			n,
			0,
			r,
			-n,
			0,
			r,
			n,
			0,
			-n,
			0,
			-r,
			n,
			0,
			-r,
			-n,
			0,
			r,
			n,
			0,
			r
		];
		super(i, [
			3,
			11,
			7,
			3,
			7,
			15,
			3,
			15,
			13,
			7,
			19,
			17,
			7,
			17,
			6,
			7,
			6,
			15,
			17,
			4,
			8,
			17,
			8,
			10,
			17,
			10,
			6,
			8,
			0,
			16,
			8,
			16,
			2,
			8,
			2,
			10,
			0,
			12,
			1,
			0,
			1,
			18,
			0,
			18,
			16,
			6,
			10,
			2,
			6,
			2,
			13,
			6,
			13,
			15,
			2,
			16,
			18,
			2,
			18,
			3,
			2,
			3,
			13,
			18,
			1,
			9,
			18,
			9,
			11,
			18,
			11,
			3,
			4,
			14,
			12,
			4,
			12,
			0,
			4,
			0,
			8,
			11,
			9,
			5,
			11,
			5,
			19,
			11,
			19,
			7,
			19,
			5,
			14,
			19,
			14,
			4,
			19,
			4,
			17,
			1,
			12,
			14,
			1,
			14,
			5,
			1,
			5,
			9
		], e, t), this.type = "DodecahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, Wu = /*@__PURE__*/ new q(), Gu = /*@__PURE__*/ new q(), Ku = /*@__PURE__*/ new q(), qu = /*@__PURE__*/ new Vr(), Ju = class extends Z {
	constructor(e = null, t = 1) {
		if (super(), this.type = "EdgesGeometry", this.parameters = {
			geometry: e,
			thresholdAngle: t
		}, e !== null) {
			let n = 1e4, r = Math.cos(Ct * t), i = e.getIndex(), a = e.getAttribute("position"), o = i ? i.count : a.count, s = [
				0,
				0,
				0
			], c = [
				"a",
				"b",
				"c"
			], l = [
				,
				,
				,
			], u = {}, d = [];
			for (let e = 0; e < o; e += 3) {
				i ? (s[0] = i.getX(e), s[1] = i.getX(e + 1), s[2] = i.getX(e + 2)) : (s[0] = e, s[1] = e + 1, s[2] = e + 2);
				let { a: t, b: o, c: f } = qu;
				if (t.fromBufferAttribute(a, s[0]), o.fromBufferAttribute(a, s[1]), f.fromBufferAttribute(a, s[2]), qu.getNormal(Ku), l[0] = `${Math.round(t.x * n)},${Math.round(t.y * n)},${Math.round(t.z * n)}`, l[1] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`, l[2] = `${Math.round(f.x * n)},${Math.round(f.y * n)},${Math.round(f.z * n)}`, l[0] !== l[1] && l[1] !== l[2] && l[2] !== l[0]) for (let e = 0; e < 3; e++) {
					let t = (e + 1) % 3, n = l[e], i = l[t], a = qu[c[e]], o = qu[c[t]], f = `${n}_${i}`, p = `${i}_${n}`;
					p in u && u[p] ? (Ku.dot(u[p].normal) <= r && (d.push(a.x, a.y, a.z), d.push(o.x, o.y, o.z)), u[p] = null) : f in u || (u[f] = {
						index0: s[e],
						index1: s[t],
						normal: Ku.clone()
					});
				}
			}
			for (let e in u) if (u[e]) {
				let { index0: t, index1: n } = u[e];
				Wu.fromBufferAttribute(a, t), Gu.fromBufferAttribute(a, n), d.push(Wu.x, Wu.y, Wu.z), d.push(Gu.x, Gu.y, Gu.z);
			}
			this.setAttribute("position", new X(d, 3));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
}, Yu = class extends Iu {
	constructor(e) {
		super(e), this.uuid = Tt(), this.type = "Shape", this.holes = [];
	}
	getPointsHoles(e) {
		let t = [];
		for (let n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
		return t;
	}
	extractPoints(e) {
		return {
			shape: this.getPoints(e),
			holes: this.getPointsHoles(e)
		};
	}
	copy(e) {
		super.copy(e), this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.uuid = this.uuid, e.holes = [];
		for (let t = 0, n = this.holes.length; t < n; t++) {
			let n = this.holes[t];
			e.holes.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(new Iu().fromJSON(n));
		}
		return this;
	}
}, Xu = { triangulate: function(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length, a = Zu(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s, c, l, u, d, f, p;
	if (r && (a = id(e, t, a, n)), e.length > 80 * n) {
		s = l = e[0], c = u = e[1];
		for (let t = n; t < i; t += n) d = e[t], f = e[t + 1], d < s && (s = d), f < c && (c = f), d > l && (l = d), f > u && (u = f);
		p = Math.max(l - s, u - c), p = p === 0 ? 0 : 32767 / p;
	}
	return $u(a, o, n, s, c, p, 0), o;
} };
function Zu(e, t, n, r, i) {
	let a, o;
	if (i === Dd(e, t, n, r) > 0) for (a = t; a < n; a += r) o = wd(a, e[a], e[a + 1], o);
	else for (a = n - r; a >= t; a -= r) o = wd(a, e[a], e[a + 1], o);
	return o && gd(o, o.next) && (Td(o), o = o.next), o;
}
function Qu(e, t) {
	if (!e) return e;
	t ||= e;
	let n = e, r;
	do
		if (r = !1, !n.steiner && (gd(n, n.next) || hd(n.prev, n, n.next) === 0)) {
			if (Td(n), n = t = n.prev, n === n.next) break;
			r = !0;
		} else n = n.next;
	while (r || n !== t);
	return t;
}
function $u(e, t, n, r, i, a, o) {
	if (!e) return;
	!o && a && ld(e, r, i, a);
	let s = e, c, l;
	for (; e.prev !== e.next;) if (c = e.prev, l = e.next, a ? td(e, r, i, a) : ed(e)) t.push(c.i / n | 0), t.push(e.i / n | 0), t.push(l.i / n | 0), Td(e), e = l.next, s = l.next;
	else if (e = l, e === s) {
		o ? o === 1 ? (e = nd(Qu(e), t, n), $u(e, t, n, r, i, a, 2)) : o === 2 && rd(e, t, n, r, i, a) : $u(Qu(e), t, n, r, i, a, 1);
		break;
	}
}
function ed(e) {
	let t = e.prev, n = e, r = e.next;
	if (hd(t, n, r) >= 0) return !1;
	let i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = i < a ? i < o ? i : o : a < o ? a : o, d = s < c ? s < l ? s : l : c < l ? c : l, f = i > a ? i > o ? i : o : a > o ? a : o, p = s > c ? s > l ? s : l : c > l ? c : l, m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && pd(i, s, a, c, o, l, m.x, m.y) && hd(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function td(e, t, n, r) {
	let i = e.prev, a = e, o = e.next;
	if (hd(i, a, o) >= 0) return !1;
	let s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = s < c ? s < l ? s : l : c < l ? c : l, m = u < d ? u < f ? u : f : d < f ? d : f, h = s > c ? s > l ? s : l : c > l ? c : l, g = u > d ? u > f ? u : f : d > f ? d : f, _ = dd(p, m, t, n, r), v = dd(h, g, t, n, r), y = e.prevZ, b = e.nextZ;
	for (; y && y.z >= _ && b && b.z <= v;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && pd(s, u, c, d, l, f, y.x, y.y) && hd(y.prev, y, y.next) >= 0 || (y = y.prevZ, b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && pd(s, u, c, d, l, f, b.x, b.y) && hd(b.prev, b, b.next) >= 0)) return !1;
		b = b.nextZ;
	}
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && pd(s, u, c, d, l, f, y.x, y.y) && hd(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && pd(s, u, c, d, l, f, b.x, b.y) && hd(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function nd(e, t, n) {
	let r = e;
	do {
		let i = r.prev, a = r.next.next;
		!gd(i, a) && _d(i, r, r.next, a) && xd(i, a) && xd(a, i) && (t.push(i.i / n | 0), t.push(r.i / n | 0), t.push(a.i / n | 0), Td(r), Td(r.next), r = e = a), r = r.next;
	} while (r !== e);
	return Qu(r);
}
function rd(e, t, n, r, i, a) {
	let o = e;
	do {
		let e = o.next.next;
		for (; e !== o.prev;) {
			if (o.i !== e.i && md(o, e)) {
				let s = Cd(o, e);
				o = Qu(o, o.next), s = Qu(s, s.next), $u(o, t, n, r, i, a, 0), $u(s, t, n, r, i, a, 0);
				return;
			}
			e = e.next;
		}
		o = o.next;
	} while (o !== e);
}
function id(e, t, n, r) {
	let i = [], a, o, s, c, l;
	for (a = 0, o = t.length; a < o; a++) s = t[a] * r, c = a < o - 1 ? t[a + 1] * r : e.length, l = Zu(e, s, c, r, !1), l === l.next && (l.steiner = !0), i.push(fd(l));
	for (i.sort(ad), a = 0; a < i.length; a++) n = od(i[a], n);
	return n;
}
function ad(e, t) {
	return e.x - t.x;
}
function od(e, t) {
	let n = sd(e, t);
	if (!n) return t;
	let r = Cd(n, e);
	return Qu(r, r.next), Qu(n, n.next);
}
function sd(e, t) {
	let n = t, r = -Infinity, i, a = e.x, o = e.y;
	do {
		if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
			let e = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
			if (e <= a && e > r && (r = e, i = n.x < n.next.x ? n : n.next, e === a)) return i;
		}
		n = n.next;
	} while (n !== t);
	if (!i) return null;
	let s = i, c = i.x, l = i.y, u = Infinity, d;
	n = i;
	do
		a >= n.x && n.x >= c && a !== n.x && pd(o < l ? a : r, o, c, l, o < l ? r : a, o, n.x, n.y) && (d = Math.abs(o - n.y) / (a - n.x), xd(n, e) && (d < u || d === u && (n.x > i.x || n.x === i.x && cd(i, n))) && (i = n, u = d)), n = n.next;
	while (n !== s);
	return i;
}
function cd(e, t) {
	return hd(e.prev, e, t.prev) < 0 && hd(t.next, e, e.next) < 0;
}
function ld(e, t, n, r) {
	let i = e;
	do
		i.z === 0 && (i.z = dd(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
	while (i !== e);
	i.prevZ.nextZ = null, i.prevZ = null, ud(i);
}
function ud(e) {
	let t, n, r, i, a, o, s, c, l = 1;
	do {
		for (n = e, e = null, a = null, o = 0; n;) {
			for (o++, r = n, s = 0, t = 0; t < l && (s++, r = r.nextZ, r); t++);
			for (c = l; s > 0 || c > 0 && r;) s !== 0 && (c === 0 || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, c--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
			n = r;
		}
		a.nextZ = null, l *= 2;
	} while (o > 1);
	return e;
}
function dd(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function fd(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function pd(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function md(e, t) {
	return e.next.i !== t.i && e.prev.i !== t.i && !bd(e, t) && (xd(e, t) && xd(t, e) && Sd(e, t) && (hd(e.prev, e, t.prev) || hd(e, t.prev, t)) || gd(e, t) && hd(e.prev, e, e.next) > 0 && hd(t.prev, t, t.next) > 0);
}
function hd(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function gd(e, t) {
	return e.x === t.x && e.y === t.y;
}
function _d(e, t, n, r) {
	let i = yd(hd(e, t, n)), a = yd(hd(e, t, r)), o = yd(hd(n, r, e)), s = yd(hd(n, r, t));
	return !!(i !== a && o !== s || i === 0 && vd(e, n, t) || a === 0 && vd(e, r, t) || o === 0 && vd(n, e, r) || s === 0 && vd(n, t, r));
}
function vd(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function yd(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function bd(e, t) {
	let n = e;
	do {
		if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && _d(n, n.next, e, t)) return !0;
		n = n.next;
	} while (n !== e);
	return !1;
}
function xd(e, t) {
	return hd(e.prev, e, e.next) < 0 ? hd(e, t, e.next) >= 0 && hd(e, e.prev, t) >= 0 : hd(e, t, e.prev) < 0 || hd(e, e.next, t) < 0;
}
function Sd(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do
		n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
	while (n !== e);
	return r;
}
function Cd(e, t) {
	let n = new Ed(e.i, e.x, e.y), r = new Ed(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function wd(e, t, n, r) {
	let i = new Ed(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function Td(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Ed(e, t, n) {
	this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Dd(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
var Od = class e {
	static area(e) {
		let t = e.length, n = 0;
		for (let r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
		return n * .5;
	}
	static isClockWise(t) {
		return e.area(t) < 0;
	}
	static triangulateShape(e, t) {
		let n = [], r = [], i = [];
		kd(e), Ad(n, e);
		let a = e.length;
		t.forEach(kd);
		for (let e = 0; e < t.length; e++) r.push(a), a += t[e].length, Ad(n, t[e]);
		let o = Xu.triangulate(n, r);
		for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3));
		return i;
	}
};
function kd(e) {
	let t = e.length;
	t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function Ad(e, t) {
	for (let n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
}
var jd = class e extends Z {
	constructor(e = new Yu([
		new U(.5, .5),
		new U(-.5, .5),
		new U(-.5, -.5),
		new U(.5, -.5)
	]), t = {}) {
		super(), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: e,
			options: t
		}, e = Array.isArray(e) ? e : [e];
		let n = this, r = [], i = [];
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t];
			a(n);
		}
		this.setAttribute("position", new X(r, 3)), this.setAttribute("uv", new X(i, 2)), this.computeVertexNormals();
		function a(e) {
			let a = [], o = t.curveSegments === void 0 ? 12 : t.curveSegments, s = t.steps === void 0 ? 1 : t.steps, c = t.depth === void 0 ? 1 : t.depth, l = t.bevelEnabled === void 0 || t.bevelEnabled, u = t.bevelThickness === void 0 ? .2 : t.bevelThickness, d = t.bevelSize === void 0 ? u - .1 : t.bevelSize, f = t.bevelOffset === void 0 ? 0 : t.bevelOffset, p = t.bevelSegments === void 0 ? 3 : t.bevelSegments, m = t.extrudePath, h = t.UVGenerator === void 0 ? Md : t.UVGenerator, g, _ = !1, v, y, b, x;
			m && (g = m.getSpacedPoints(s), _ = !0, l = !1, v = m.computeFrenetFrames(s, !1), y = new q(), b = new q(), x = new q()), l || (p = 0, u = 0, d = 0, f = 0);
			let S = e.extractPoints(o), C = S.shape, w = S.holes;
			if (!Od.isClockWise(C)) {
				C = C.reverse();
				for (let e = 0, t = w.length; e < t; e++) {
					let t = w[e];
					Od.isClockWise(t) && (w[e] = t.reverse());
				}
			}
			let T = Od.triangulateShape(C, w), E = C;
			for (let e = 0, t = w.length; e < t; e++) {
				let t = w[e];
				C = C.concat(t);
			}
			function D(e, t, n) {
				return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().addScaledVector(t, n);
			}
			let O = C.length, k = T.length;
			function A(e, t, n) {
				let r, i, a, o = e.x - t.x, s = e.y - t.y, c = n.x - e.x, l = n.y - e.y, u = o * o + s * s, d = o * l - s * c;
				if (Math.abs(d) > 2 ** -52) {
					let d = Math.sqrt(u), f = Math.sqrt(c * c + l * l), p = t.x - s / d, m = t.y + o / d, h = n.x - l / f, g = n.y + c / f, _ = ((h - p) * l - (g - m) * c) / (o * l - s * c);
					r = p + o * _ - e.x, i = m + s * _ - e.y;
					let v = r * r + i * i;
					if (v <= 2) return new U(r, i);
					a = Math.sqrt(v / 2);
				} else {
					let e = !1;
					o > 2 ** -52 ? c > 2 ** -52 && (e = !0) : o < -(2 ** -52) ? c < -(2 ** -52) && (e = !0) : Math.sign(s) === Math.sign(l) && (e = !0), e ? (r = -s, i = o, a = Math.sqrt(u)) : (r = o, i = s, a = Math.sqrt(u / 2));
				}
				return new U(r / a, i / a);
			}
			let j = [];
			for (let e = 0, t = E.length, n = t - 1, r = e + 1; e < t; e++, n++, r++) n === t && (n = 0), r === t && (r = 0), j[e] = A(E[e], E[n], E[r]);
			let M = [], N, P = j.concat();
			for (let e = 0, t = w.length; e < t; e++) {
				let t = w[e];
				N = [];
				for (let e = 0, n = t.length, r = n - 1, i = e + 1; e < n; e++, r++, i++) r === n && (r = 0), i === n && (i = 0), N[e] = A(t[e], t[r], t[i]);
				M.push(N), P = P.concat(N);
			}
			for (let e = 0; e < p; e++) {
				let t = e / p, n = u * Math.cos(t * Math.PI / 2), r = d * Math.sin(t * Math.PI / 2) + f;
				for (let e = 0, t = E.length; e < t; e++) {
					let t = D(E[e], j[e], r);
					ne(t.x, t.y, -n);
				}
				for (let e = 0, t = w.length; e < t; e++) {
					let t = w[e];
					N = M[e];
					for (let e = 0, i = t.length; e < i; e++) {
						let i = D(t[e], N[e], r);
						ne(i.x, i.y, -n);
					}
				}
			}
			let F = d + f;
			for (let e = 0; e < O; e++) {
				let t = l ? D(C[e], P[e], F) : C[e];
				_ ? (b.copy(v.normals[0]).multiplyScalar(t.x), y.copy(v.binormals[0]).multiplyScalar(t.y), x.copy(g[0]).add(b).add(y), ne(x.x, x.y, x.z)) : ne(t.x, t.y, 0);
			}
			for (let e = 1; e <= s; e++) for (let t = 0; t < O; t++) {
				let n = l ? D(C[t], P[t], F) : C[t];
				_ ? (b.copy(v.normals[e]).multiplyScalar(n.x), y.copy(v.binormals[e]).multiplyScalar(n.y), x.copy(g[e]).add(b).add(y), ne(x.x, x.y, x.z)) : ne(n.x, n.y, c / s * e);
			}
			for (let e = p - 1; e >= 0; e--) {
				let t = e / p, n = u * Math.cos(t * Math.PI / 2), r = d * Math.sin(t * Math.PI / 2) + f;
				for (let e = 0, t = E.length; e < t; e++) {
					let t = D(E[e], j[e], r);
					ne(t.x, t.y, c + n);
				}
				for (let e = 0, t = w.length; e < t; e++) {
					let t = w[e];
					N = M[e];
					for (let e = 0, i = t.length; e < i; e++) {
						let i = D(t[e], N[e], r);
						_ ? ne(i.x, i.y + g[s - 1].y, g[s - 1].x + n) : ne(i.x, i.y, c + n);
					}
				}
			}
			I(), ee();
			function I() {
				let e = r.length / 3;
				if (l) {
					let e = 0, t = O * e;
					for (let e = 0; e < k; e++) {
						let n = T[e];
						re(n[2] + t, n[1] + t, n[0] + t);
					}
					e = s + p * 2, t = O * e;
					for (let e = 0; e < k; e++) {
						let n = T[e];
						re(n[0] + t, n[1] + t, n[2] + t);
					}
				} else {
					for (let e = 0; e < k; e++) {
						let t = T[e];
						re(t[2], t[1], t[0]);
					}
					for (let e = 0; e < k; e++) {
						let t = T[e];
						re(t[0] + O * s, t[1] + O * s, t[2] + O * s);
					}
				}
				n.addGroup(e, r.length / 3 - e, 0);
			}
			function ee() {
				let e = r.length / 3, t = 0;
				te(E, t), t += E.length;
				for (let e = 0, n = w.length; e < n; e++) {
					let n = w[e];
					te(n, t), t += n.length;
				}
				n.addGroup(e, r.length / 3 - e, 1);
			}
			function te(e, t) {
				let n = e.length;
				for (; --n >= 0;) {
					let r = n, i = n - 1;
					i < 0 && (i = e.length - 1);
					for (let e = 0, n = s + p * 2; e < n; e++) {
						let n = O * e, a = O * (e + 1);
						ie(t + r + n, t + i + n, t + i + a, t + r + a);
					}
				}
			}
			function ne(e, t, n) {
				a.push(e), a.push(t), a.push(n);
			}
			function re(e, t, i) {
				ae(e), ae(t), ae(i);
				let a = r.length / 3, o = h.generateTopUV(n, r, a - 3, a - 2, a - 1);
				L(o[0]), L(o[1]), L(o[2]);
			}
			function ie(e, t, i, a) {
				ae(e), ae(t), ae(a), ae(t), ae(i), ae(a);
				let o = r.length / 3, s = h.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
				L(s[0]), L(s[1]), L(s[3]), L(s[1]), L(s[2]), L(s[3]);
			}
			function ae(e) {
				r.push(a[e * 3 + 0]), r.push(a[e * 3 + 1]), r.push(a[e * 3 + 2]);
			}
			function L(e) {
				i.push(e.x), i.push(e.y);
			}
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
		return Nd(t, n, e);
	}
	static fromJSON(t, n) {
		let r = [];
		for (let e = 0, i = t.shapes.length; e < i; e++) {
			let i = n[t.shapes[e]];
			r.push(i);
		}
		let i = t.options.extrudePath;
		return i !== void 0 && (t.options.extrudePath = new Pu[i.type]().fromJSON(i)), new e(r, t.options);
	}
}, Md = {
	generateTopUV: function(e, t, n, r, i) {
		let a = t[n * 3], o = t[n * 3 + 1], s = t[r * 3], c = t[r * 3 + 1], l = t[i * 3], u = t[i * 3 + 1];
		return [
			new U(a, o),
			new U(s, c),
			new U(l, u)
		];
	},
	generateSideWallUV: function(e, t, n, r, i, a) {
		let o = t[n * 3], s = t[n * 3 + 1], c = t[n * 3 + 2], l = t[r * 3], u = t[r * 3 + 1], d = t[r * 3 + 2], f = t[i * 3], p = t[i * 3 + 1], m = t[i * 3 + 2], h = t[a * 3], g = t[a * 3 + 1], _ = t[a * 3 + 2];
		return Math.abs(s - u) < Math.abs(o - l) ? [
			new U(o, 1 - c),
			new U(l, 1 - d),
			new U(f, 1 - m),
			new U(h, 1 - _)
		] : [
			new U(s, 1 - c),
			new U(u, 1 - d),
			new U(p, 1 - m),
			new U(g, 1 - _)
		];
	}
};
function Nd(e, t, n) {
	if (n.shapes = [], Array.isArray(e)) for (let t = 0, r = e.length; t < r; t++) {
		let r = e[t];
		n.shapes.push(r.uuid);
	}
	else n.shapes.push(e.uuid);
	return n.options = Object.assign({}, t), t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
var Pd = class e extends Hu {
	constructor(e = 1, t = 0) {
		let n = (1 + Math.sqrt(5)) / 2, r = [
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			0,
			0,
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			n,
			0,
			-1,
			n,
			0,
			1,
			-n,
			0,
			-1,
			-n,
			0,
			1
		];
		super(r, [
			0,
			11,
			5,
			0,
			5,
			1,
			0,
			1,
			7,
			0,
			7,
			10,
			0,
			10,
			11,
			1,
			5,
			9,
			5,
			11,
			4,
			11,
			10,
			2,
			10,
			7,
			6,
			7,
			1,
			8,
			3,
			9,
			4,
			3,
			4,
			2,
			3,
			2,
			6,
			3,
			6,
			8,
			3,
			8,
			9,
			4,
			9,
			5,
			2,
			4,
			11,
			6,
			2,
			10,
			8,
			6,
			7,
			9,
			8,
			1
		], e, t), this.type = "IcosahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, Fd = class e extends Hu {
	constructor(e = 1, t = 0) {
		super([
			1,
			0,
			0,
			-1,
			0,
			0,
			0,
			1,
			0,
			0,
			-1,
			0,
			0,
			0,
			1,
			0,
			0,
			-1
		], [
			0,
			2,
			4,
			0,
			4,
			3,
			0,
			3,
			5,
			0,
			5,
			2,
			1,
			2,
			5,
			1,
			5,
			3,
			1,
			3,
			4,
			1,
			4,
			2
		], e, t), this.type = "OctahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, Id = class e extends Z {
	constructor(e = .5, t = 1, n = 32, r = 1, i = 0, a = Math.PI * 2) {
		super(), this.type = "RingGeometry", this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: i,
			thetaLength: a
		}, n = Math.max(3, n), r = Math.max(1, r);
		let o = [], s = [], c = [], l = [], u = e, d = (t - e) / r, f = new q(), p = new U();
		for (let e = 0; e <= r; e++) {
			for (let e = 0; e <= n; e++) {
				let r = i + e / n * a;
				f.x = u * Math.cos(r), f.y = u * Math.sin(r), s.push(f.x, f.y, f.z), c.push(0, 0, 1), p.x = (f.x / t + 1) / 2, p.y = (f.y / t + 1) / 2, l.push(p.x, p.y);
			}
			u += d;
		}
		for (let e = 0; e < r; e++) {
			let t = e * (n + 1);
			for (let e = 0; e < n; e++) {
				let r = e + t, i = r, a = r + n + 1, s = r + n + 2, c = r + 1;
				o.push(i, a, c), o.push(a, s, c);
			}
		}
		this.setIndex(o), this.setAttribute("position", new X(s, 3)), this.setAttribute("normal", new X(c, 3)), this.setAttribute("uv", new X(l, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
	}
}, Ld = class e extends Z {
	constructor(e = new Yu([
		new U(0, .5),
		new U(-.5, -.5),
		new U(.5, -.5)
	]), t = 12) {
		super(), this.type = "ShapeGeometry", this.parameters = {
			shapes: e,
			curveSegments: t
		};
		let n = [], r = [], i = [], a = [], o = 0, s = 0;
		if (Array.isArray(e) === !1) c(e);
		else for (let t = 0; t < e.length; t++) c(e[t]), this.addGroup(o, s, t), o += s, s = 0;
		this.setIndex(n), this.setAttribute("position", new X(r, 3)), this.setAttribute("normal", new X(i, 3)), this.setAttribute("uv", new X(a, 2));
		function c(e) {
			let o = r.length / 3, c = e.extractPoints(t), l = c.shape, u = c.holes;
			Od.isClockWise(l) === !1 && (l = l.reverse());
			for (let e = 0, t = u.length; e < t; e++) {
				let t = u[e];
				Od.isClockWise(t) === !0 && (u[e] = t.reverse());
			}
			let d = Od.triangulateShape(l, u);
			for (let e = 0, t = u.length; e < t; e++) {
				let t = u[e];
				l = l.concat(t);
			}
			for (let e = 0, t = l.length; e < t; e++) {
				let t = l[e];
				r.push(t.x, t.y, 0), i.push(0, 0, 1), a.push(t.x, t.y);
			}
			for (let e = 0, t = d.length; e < t; e++) {
				let t = d[e], r = t[0] + o, i = t[1] + o, a = t[2] + o;
				n.push(r, i, a), s += 3;
			}
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON(), t = this.parameters.shapes;
		return Rd(t, e);
	}
	static fromJSON(t, n) {
		let r = [];
		for (let e = 0, i = t.shapes.length; e < i; e++) {
			let i = n[t.shapes[e]];
			r.push(i);
		}
		return new e(r, t.curveSegments);
	}
};
function Rd(e, t) {
	if (t.shapes = [], Array.isArray(e)) for (let n = 0, r = e.length; n < r; n++) {
		let r = e[n];
		t.shapes.push(r.uuid);
	}
	else t.shapes.push(e.uuid);
	return t;
}
var zd = class e extends Z {
	constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
		super(), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
		let s = Math.min(a + o, Math.PI), c = 0, l = [], u = new q(), d = new q(), f = [], p = [], m = [], h = [];
		for (let f = 0; f <= n; f++) {
			let g = [], _ = f / n, v = 0;
			f === 0 && a === 0 ? v = .5 / t : f === n && s === Math.PI && (v = -.5 / t);
			for (let n = 0; n <= t; n++) {
				let s = n / t;
				u.x = -e * Math.cos(r + s * i) * Math.sin(a + _ * o), u.y = e * Math.cos(a + _ * o), u.z = e * Math.sin(r + s * i) * Math.sin(a + _ * o), p.push(u.x, u.y, u.z), d.copy(u).normalize(), m.push(d.x, d.y, d.z), h.push(s + v, 1 - _), g.push(c++);
			}
			l.push(g);
		}
		for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
			let t = l[e][r + 1], i = l[e][r], o = l[e + 1][r], c = l[e + 1][r + 1];
			(e !== 0 || a > 0) && f.push(t, i, c), (e !== n - 1 || s < Math.PI) && f.push(i, o, c);
		}
		this.setIndex(f), this.setAttribute("position", new X(p, 3)), this.setAttribute("normal", new X(m, 3)), this.setAttribute("uv", new X(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
	}
}, Bd = class e extends Hu {
	constructor(e = 1, t = 0) {
		super([
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			1,
			-1,
			1,
			-1,
			-1
		], [
			2,
			1,
			0,
			0,
			3,
			2,
			1,
			3,
			0,
			2,
			3,
			1
		], e, t), this.type = "TetrahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, Vd = class e extends Z {
	constructor(e = 1, t = .4, n = 12, r = 48, i = Math.PI * 2) {
		super(), this.type = "TorusGeometry", this.parameters = {
			radius: e,
			tube: t,
			radialSegments: n,
			tubularSegments: r,
			arc: i
		}, n = Math.floor(n), r = Math.floor(r);
		let a = [], o = [], s = [], c = [], l = new q(), u = new q(), d = new q();
		for (let a = 0; a <= n; a++) for (let f = 0; f <= r; f++) {
			let p = f / r * i, m = a / n * Math.PI * 2;
			u.x = (e + t * Math.cos(m)) * Math.cos(p), u.y = (e + t * Math.cos(m)) * Math.sin(p), u.z = t * Math.sin(m), o.push(u.x, u.y, u.z), l.x = e * Math.cos(p), l.y = e * Math.sin(p), d.subVectors(u, l).normalize(), s.push(d.x, d.y, d.z), c.push(f / r), c.push(a / n);
		}
		for (let e = 1; e <= n; e++) for (let t = 1; t <= r; t++) {
			let n = (r + 1) * e + t - 1, i = (r + 1) * (e - 1) + t - 1, o = (r + 1) * (e - 1) + t, s = (r + 1) * e + t;
			a.push(n, i, s), a.push(i, o, s);
		}
		this.setIndex(a), this.setAttribute("position", new X(o, 3)), this.setAttribute("normal", new X(s, 3)), this.setAttribute("uv", new X(c, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
	}
}, Hd = class e extends Z {
	constructor(e = 1, t = .4, n = 64, r = 8, i = 2, a = 3) {
		super(), this.type = "TorusKnotGeometry", this.parameters = {
			radius: e,
			tube: t,
			tubularSegments: n,
			radialSegments: r,
			p: i,
			q: a
		}, n = Math.floor(n), r = Math.floor(r);
		let o = [], s = [], c = [], l = [], u = new q(), d = new q(), f = new q(), p = new q(), m = new q(), h = new q(), g = new q();
		for (let o = 0; o <= n; ++o) {
			let v = o / n * i * Math.PI * 2;
			_(v, i, a, e, f), _(v + .01, i, a, e, p), h.subVectors(p, f), g.addVectors(p, f), m.crossVectors(h, g), g.crossVectors(m, h), m.normalize(), g.normalize();
			for (let e = 0; e <= r; ++e) {
				let i = e / r * Math.PI * 2, a = -t * Math.cos(i), p = t * Math.sin(i);
				u.x = f.x + (a * g.x + p * m.x), u.y = f.y + (a * g.y + p * m.y), u.z = f.z + (a * g.z + p * m.z), s.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), c.push(d.x, d.y, d.z), l.push(o / n), l.push(e / r);
			}
		}
		for (let e = 1; e <= n; e++) for (let t = 1; t <= r; t++) {
			let n = (r + 1) * (e - 1) + (t - 1), i = (r + 1) * e + (t - 1), a = (r + 1) * e + t, s = (r + 1) * (e - 1) + t;
			o.push(n, i, s), o.push(i, a, s);
		}
		this.setIndex(o), this.setAttribute("position", new X(s, 3)), this.setAttribute("normal", new X(c, 3)), this.setAttribute("uv", new X(l, 2));
		function _(e, t, n, r, i) {
			let a = Math.cos(e), o = Math.sin(e), s = n / t * e, c = Math.cos(s);
			i.x = r * (2 + c) * .5 * a, i.y = r * (2 + c) * o * .5, i.z = r * Math.sin(s) * .5;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
	}
}, Ud = class e extends Z {
	constructor(e = new Mu(new q(-1, -1, 0), new q(-1, 1, 0), new q(1, 1, 0)), t = 64, n = 1, r = 8, i = !1) {
		super(), this.type = "TubeGeometry", this.parameters = {
			path: e,
			tubularSegments: t,
			radius: n,
			radialSegments: r,
			closed: i
		};
		let a = e.computeFrenetFrames(t, i);
		this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
		let o = new q(), s = new q(), c = new U(), l = new q(), u = [], d = [], f = [], p = [];
		m(), this.setIndex(p), this.setAttribute("position", new X(u, 3)), this.setAttribute("normal", new X(d, 3)), this.setAttribute("uv", new X(f, 2));
		function m() {
			for (let e = 0; e < t; e++) h(e);
			h(i === !1 ? t : 0), _(), g();
		}
		function h(i) {
			l = e.getPointAt(i / t, l);
			let c = a.normals[i], f = a.binormals[i];
			for (let e = 0; e <= r; e++) {
				let t = e / r * Math.PI * 2, i = Math.sin(t), a = -Math.cos(t);
				s.x = a * c.x + i * f.x, s.y = a * c.y + i * f.y, s.z = a * c.z + i * f.z, s.normalize(), d.push(s.x, s.y, s.z), o.x = l.x + n * s.x, o.y = l.y + n * s.y, o.z = l.z + n * s.z, u.push(o.x, o.y, o.z);
			}
		}
		function g() {
			for (let e = 1; e <= t; e++) for (let t = 1; t <= r; t++) {
				let n = (r + 1) * (e - 1) + (t - 1), i = (r + 1) * e + (t - 1), a = (r + 1) * e + t, o = (r + 1) * (e - 1) + t;
				p.push(n, i, o), p.push(i, a, o);
			}
		}
		function _() {
			for (let e = 0; e <= t; e++) for (let n = 0; n <= r; n++) c.x = e / t, c.y = n / r, f.push(c.x, c.y);
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.path = this.parameters.path.toJSON(), e;
	}
	static fromJSON(t) {
		return new e(new Pu[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
	}
}, Wd = class extends Z {
	constructor(e = null) {
		if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) {
			let t = [], n = /* @__PURE__ */ new Set(), r = new q(), i = new q();
			if (e.index !== null) {
				let a = e.attributes.position, o = e.index, s = e.groups;
				s.length === 0 && (s = [{
					start: 0,
					count: o.count,
					materialIndex: 0
				}]);
				for (let e = 0, c = s.length; e < c; ++e) {
					let c = s[e], l = c.start, u = c.count;
					for (let e = l, s = l + u; e < s; e += 3) for (let s = 0; s < 3; s++) {
						let c = o.getX(e + s), l = o.getX(e + (s + 1) % 3);
						r.fromBufferAttribute(a, c), i.fromBufferAttribute(a, l), Gd(r, i, n) === !0 && (t.push(r.x, r.y, r.z), t.push(i.x, i.y, i.z));
					}
				}
			} else {
				let a = e.attributes.position;
				for (let e = 0, o = a.count / 3; e < o; e++) for (let o = 0; o < 3; o++) {
					let s = 3 * e + o, c = 3 * e + (o + 1) % 3;
					r.fromBufferAttribute(a, s), i.fromBufferAttribute(a, c), Gd(r, i, n) === !0 && (t.push(r.x, r.y, r.z), t.push(i.x, i.y, i.z));
				}
			}
			this.setAttribute("position", new X(t, 3));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
};
function Gd(e, t, n) {
	let r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`, i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;
	return n.has(r) === !0 || n.has(i) === !0 ? !1 : (n.add(r), n.add(i), !0);
}
var Kd = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	BoxGeometry: Ni,
	CapsuleGeometry: Ru,
	CircleGeometry: zu,
	ConeGeometry: Vu,
	CylinderGeometry: Bu,
	DodecahedronGeometry: Uu,
	EdgesGeometry: Ju,
	ExtrudeGeometry: jd,
	IcosahedronGeometry: Pd,
	LatheGeometry: Lu,
	OctahedronGeometry: Fd,
	PlaneGeometry: sa,
	PolyhedronGeometry: Hu,
	RingGeometry: Id,
	ShapeGeometry: Ld,
	SphereGeometry: zd,
	TetrahedronGeometry: Bd,
	TorusGeometry: Vd,
	TorusKnotGeometry: Hd,
	TubeGeometry: Ud,
	WireframeGeometry: Wd
}), qd = class extends Jr {
	static get type() {
		return "ShadowMaterial";
	}
	constructor(e) {
		super(), this.isShadowMaterial = !0, this.color = new Y(0), this.transparent = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
	}
}, Jd = class extends Vi {
	static get type() {
		return "RawShaderMaterial";
	}
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0;
	}
}, Yd = class extends Jr {
	static get type() {
		return "MeshStandardMaterial";
	}
	constructor(e) {
		super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.color = new Y(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ur(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, Xd = class extends Yd {
	static get type() {
		return "MeshPhysicalMaterial";
	}
	constructor(e) {
		super(), this.isMeshPhysicalMaterial = !0, this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new U(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
			get: function() {
				return Et(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
			},
			set: function(e) {
				this.ior = (1 + .4 * e) / (1 - .4 * e);
			}
		}), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Y(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = Infinity, this.attenuationColor = new Y(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Y(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
	}
	get anisotropy() {
		return this._anisotropy;
	}
	set anisotropy(e) {
		this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
	}
	get clearcoat() {
		return this._clearcoat;
	}
	set clearcoat(e) {
		this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
	}
	get iridescence() {
		return this._iridescence;
	}
	set iridescence(e) {
		this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
	}
	get dispersion() {
		return this._dispersion;
	}
	set dispersion(e) {
		this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
	}
	get sheen() {
		return this._sheen;
	}
	set sheen(e) {
		this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
	}
	get transmission() {
		return this._transmission;
	}
	set transmission(e) {
		this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
	}
	copy(e) {
		return super.copy(e), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
	}
}, Zd = class extends Jr {
	static get type() {
		return "MeshPhongMaterial";
	}
	constructor(e) {
		super(), this.isMeshPhongMaterial = !0, this.color = new Y(16777215), this.specular = new Y(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ur(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, Qd = class extends Jr {
	static get type() {
		return "MeshToonMaterial";
	}
	constructor(e) {
		super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.color = new Y(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, $d = class extends Jr {
	static get type() {
		return "MeshNormalMaterial";
	}
	constructor(e) {
		super(), this.isMeshNormalMaterial = !0, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
	}
}, ef = class extends Jr {
	static get type() {
		return "MeshLambertMaterial";
	}
	constructor(e) {
		super(), this.isMeshLambertMaterial = !0, this.color = new Y(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ur(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, tf = class extends Jr {
	static get type() {
		return "MeshMatcapMaterial";
	}
	constructor(e) {
		super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.color = new Y(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, nf = class extends Fl {
	static get type() {
		return "LineDashedMaterial";
	}
	constructor(e) {
		super(), this.isLineDashedMaterial = !0, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
	}
};
function rf(e, t, n) {
	return !e || !n && e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function af(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function of(e) {
	function t(t, n) {
		return e[t] - e[n];
	}
	let n = e.length, r = Array(n);
	for (let e = 0; e !== n; ++e) r[e] = e;
	return r.sort(t), r;
}
function sf(e, t, n) {
	let r = e.length, i = new e.constructor(r);
	for (let a = 0, o = 0; o !== r; ++a) {
		let r = n[a] * t;
		for (let n = 0; n !== t; ++n) i[o++] = e[r + n];
	}
	return i;
}
function cf(e, t, n, r) {
	let i = 1, a = e[0];
	for (; a !== void 0 && a[r] === void 0;) a = e[i++];
	if (a === void 0) return;
	let o = a[r];
	if (o !== void 0) {
		if (Array.isArray(o)) do
			o = a[r], o !== void 0 && (t.push(a.time), n.push.apply(n, o)), a = e[i++];
		while (a !== void 0);
		else if (o.toArray !== void 0) do
			o = a[r], o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), a = e[i++];
		while (a !== void 0);
		else do
			o = a[r], o !== void 0 && (t.push(a.time), n.push(o)), a = e[i++];
		while (a !== void 0);
	}
}
function lf(e, t, n, r, i = 30) {
	let a = e.clone();
	a.name = t;
	let o = [];
	for (let e = 0; e < a.tracks.length; ++e) {
		let t = a.tracks[e], s = t.getValueSize(), c = [], l = [];
		for (let e = 0; e < t.times.length; ++e) {
			let a = t.times[e] * i;
			if (!(a < n || a >= r)) {
				c.push(t.times[e]);
				for (let n = 0; n < s; ++n) l.push(t.values[e * s + n]);
			}
		}
		c.length !== 0 && (t.times = rf(c, t.times.constructor), t.values = rf(l, t.values.constructor), o.push(t));
	}
	a.tracks = o;
	let s = Infinity;
	for (let e = 0; e < a.tracks.length; ++e) s > a.tracks[e].times[0] && (s = a.tracks[e].times[0]);
	for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * s);
	return a.resetDuration(), a;
}
function uf(e, t = 0, n = e, r = 30) {
	r <= 0 && (r = 30);
	let i = n.tracks.length, a = t / r;
	for (let t = 0; t < i; ++t) {
		let r = n.tracks[t], i = r.ValueTypeName;
		if (i === "bool" || i === "string") continue;
		let o = e.tracks.find(function(e) {
			return e.name === r.name && e.ValueTypeName === i;
		});
		if (o === void 0) continue;
		let s = 0, c = r.getValueSize();
		r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (s = c / 3);
		let l = 0, u = o.getValueSize();
		o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (l = u / 3);
		let d = r.times.length - 1, f;
		if (a <= r.times[0]) {
			let e = s, t = c - s;
			f = r.values.slice(e, t);
		} else if (a >= r.times[d]) {
			let e = d * c + s, t = e + c - s;
			f = r.values.slice(e, t);
		} else {
			let e = r.createInterpolant(), t = s, n = c - s;
			e.evaluate(a), f = e.resultBuffer.slice(t, n);
		}
		i === "quaternion" && new Tn().fromArray(f).normalize().conjugate().toArray(f);
		let p = o.times.length;
		for (let e = 0; e < p; ++e) {
			let t = e * u + l;
			if (i === "quaternion") Tn.multiplyQuaternionsFlat(o.values, t, f, 0, o.values, t);
			else {
				let e = u - l * 2;
				for (let n = 0; n < e; ++n) o.values[t + n] -= f[n];
			}
		}
	}
	return e.blendMode = Ke, e;
}
var df = {
	convertArray: rf,
	isTypedArray: af,
	getKeyframeOrder: of,
	sortedArray: sf,
	flattenJSON: cf,
	subclip: lf,
	makeClipAdditive: uf
}, ff = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("call to abstract method");
	}
	intervalChanged_() {}
}, pf = class extends ff {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: He,
			endingEnd: He
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case Ue:
				i = e, o = 2 * t - n;
				break;
			case We:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case Ue:
				a = e, s = 2 * n - t;
				break;
			case We:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, mf = class extends ff {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, hf = class extends ff {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, gf = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = rf(t, this.TimeBufferType), this.values = rf(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: rf(e.times, Array),
				values: rf(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t);
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new hf(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new mf(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new pf(this.times, this.values, this.getValueSize(), e);
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case ze:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case Be:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case Ve: t = this.InterpolantFactoryMethodSmooth;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) {
				if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
				else throw Error(t);
			}
			return console.warn("THREE.KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return ze;
			case this.InterpolantFactoryMethodLinear: return Be;
			case this.InterpolantFactoryMethodSmooth: return Ve;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				console.error("THREE.KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				console.error("THREE.KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && af(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				console.error("THREE.KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === Ve, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
				if (r) i = !0;
				else {
					let e = o * n, r = e - n, a = e + n;
					for (let o = 0; o !== n; ++o) {
						let n = t[e + o];
						if (n !== t[r + o] || n !== t[a + o]) {
							i = !0;
							break;
						}
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, r;
	}
};
gf.prototype.TimeBufferType = Float32Array, gf.prototype.ValueBufferType = Float32Array, gf.prototype.DefaultInterpolation = Be;
var _f = class extends gf {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
_f.prototype.ValueTypeName = "bool", _f.prototype.ValueBufferType = Array, _f.prototype.DefaultInterpolation = ze, _f.prototype.InterpolantFactoryMethodLinear = void 0, _f.prototype.InterpolantFactoryMethodSmooth = void 0;
var vf = class extends gf {};
vf.prototype.ValueTypeName = "color";
var yf = class extends gf {};
yf.prototype.ValueTypeName = "number";
var bf = class extends ff {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) Tn.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, xf = class extends gf {
	InterpolantFactoryMethodLinear(e) {
		return new bf(this.times, this.values, this.getValueSize(), e);
	}
};
xf.prototype.ValueTypeName = "quaternion", xf.prototype.InterpolantFactoryMethodSmooth = void 0;
var Sf = class extends gf {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Sf.prototype.ValueTypeName = "string", Sf.prototype.ValueBufferType = Array, Sf.prototype.DefaultInterpolation = ze, Sf.prototype.InterpolantFactoryMethodLinear = void 0, Sf.prototype.InterpolantFactoryMethodSmooth = void 0;
var Cf = class extends gf {};
Cf.prototype.ValueTypeName = "vector";
var wf = class {
	constructor(e = "", t = -1, n = [], r = Ge) {
		this.name = e, this.tracks = n, this.duration = t, this.blendMode = r, this.uuid = Tt(), this.duration < 0 && this.resetDuration();
	}
	static parse(e) {
		let t = [], n = e.tracks, r = 1 / (e.fps || 1);
		for (let e = 0, i = n.length; e !== i; ++e) t.push(Ef(n[e]).scale(r));
		let i = new this(e.name, e.duration, t, e.blendMode);
		return i.uuid = e.uuid, i;
	}
	static toJSON(e) {
		let t = [], n = e.tracks, r = {
			name: e.name,
			duration: e.duration,
			tracks: t,
			uuid: e.uuid,
			blendMode: e.blendMode
		};
		for (let e = 0, r = n.length; e !== r; ++e) t.push(gf.toJSON(n[e]));
		return r;
	}
	static CreateFromMorphTargetSequence(e, t, n, r) {
		let i = t.length, a = [];
		for (let e = 0; e < i; e++) {
			let o = [], s = [];
			o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0);
			let c = of(o);
			o = sf(o, 1, c), s = sf(s, 1, c), !r && o[0] === 0 && (o.push(i), s.push(s[0])), a.push(new yf(".morphTargetInfluences[" + t[e].name + "]", o, s).scale(1 / n));
		}
		return new this(e, -1, a);
	}
	static findByName(e, t) {
		let n = e;
		if (!Array.isArray(e)) {
			let t = e;
			n = t.geometry && t.geometry.animations || t.animations;
		}
		for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
		return null;
	}
	static CreateClipsFromMorphTargetSequences(e, t, n) {
		let r = {}, i = /^([\w-]*?)([\d]+)$/;
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t], a = n.name.match(i);
			if (a && a.length > 1) {
				let e = a[1], t = r[e];
				t || (r[e] = t = []), t.push(n);
			}
		}
		let a = [];
		for (let e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n));
		return a;
	}
	static parseAnimation(e, t) {
		if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
		let n = function(e, t, n, r, i) {
			if (n.length !== 0) {
				let a = [], o = [];
				cf(n, a, o, r), a.length !== 0 && i.push(new e(t, a, o));
			}
		}, r = [], i = e.name || "default", a = e.fps || 30, o = e.blendMode, s = e.length || -1, c = e.hierarchy || [];
		for (let e = 0; e < c.length; e++) {
			let i = c[e].keys;
			if (i && i.length !== 0) {
				if (i[0].morphTargets) {
					let e = {}, t = 0;
					for (; t < i.length; t++) if (i[t].morphTargets) for (let n = 0; n < i[t].morphTargets.length; n++) e[i[t].morphTargets[n]] = -1;
					for (let n in e) {
						let e = [], a = [];
						for (let r = 0; r !== i[t].morphTargets.length; ++r) {
							let r = i[t];
							e.push(r.time), a.push(+(r.morphTarget === n));
						}
						r.push(new yf(".morphTargetInfluence[" + n + "]", e, a));
					}
					s = e.length * a;
				} else {
					let a = ".bones[" + t[e].name + "]";
					n(Cf, a + ".position", i, "pos", r), n(xf, a + ".quaternion", i, "rot", r), n(Cf, a + ".scale", i, "scl", r);
				}
			}
		}
		return r.length === 0 ? null : new this(i, s, r, o);
	}
	resetDuration() {
		let e = this.tracks, t = 0;
		for (let n = 0, r = e.length; n !== r; ++n) {
			let e = this.tracks[n];
			t = Math.max(t, e.times[e.times.length - 1]);
		}
		return this.duration = t, this;
	}
	trim() {
		for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
		return this;
	}
	validate() {
		let e = !0;
		for (let t = 0; t < this.tracks.length; t++) e &&= this.tracks[t].validate();
		return e;
	}
	optimize() {
		for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
		return this;
	}
	clone() {
		let e = [];
		for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
		return new this.constructor(this.name, this.duration, e, this.blendMode);
	}
	toJSON() {
		return this.constructor.toJSON(this);
	}
};
function Tf(e) {
	switch (e.toLowerCase()) {
		case "scalar":
		case "double":
		case "float":
		case "number":
		case "integer": return yf;
		case "vector":
		case "vector2":
		case "vector3":
		case "vector4": return Cf;
		case "color": return vf;
		case "quaternion": return xf;
		case "bool":
		case "boolean": return _f;
		case "string": return Sf;
	}
	throw Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function Ef(e) {
	if (e.type === void 0) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
	let t = Tf(e.type);
	if (e.times === void 0) {
		let t = [], n = [];
		cf(e.keys, t, n, "value"), e.times = t, e.values = n;
	}
	return t.parse === void 0 ? new t(e.name, e.times, e.values, e.interpolation) : t.parse(e);
}
var Df = {
	enabled: !1,
	files: {},
	add: function(e, t) {
		this.enabled !== !1 && (this.files[e] = t);
	},
	get: function(e) {
		if (this.enabled !== !1) return this.files[e];
	},
	remove: function(e) {
		delete this.files[e];
	},
	clear: function() {
		this.files = {};
	}
}, Of = class {
	constructor(e, t, n) {
		let r = this, i = !1, a = 0, o = 0, s, c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(e) {
			o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), i = !0;
		}, this.itemEnd = function(e) {
			a++, r.onProgress !== void 0 && r.onProgress(e, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return s ? s(e) : e;
		}, this.setURLModifier = function(e) {
			return s = e, this;
		}, this.addHandler = function(e, t) {
			return c.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = c.indexOf(e);
			return t !== -1 && c.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = c.length; t < n; t += 2) {
				let n = c[t], r = c[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		};
	}
}, kf = /*@__PURE__*/ new Of(), Af = class {
	constructor(e) {
		this.manager = e === void 0 ? kf : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
	setCrossOrigin(e) {
		return this.crossOrigin = e, this;
	}
	setWithCredentials(e) {
		return this.withCredentials = e, this;
	}
	setPath(e) {
		return this.path = e, this;
	}
	setResourcePath(e) {
		return this.resourcePath = e, this;
	}
	setRequestHeader(e) {
		return this.requestHeader = e, this;
	}
};
Af.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var jf = {}, Mf = class extends Error {
	constructor(e, t) {
		super(e), this.response = t;
	}
}, Nf = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = Df.get(e);
		if (i !== void 0) return this.manager.itemStart(e), setTimeout(() => {
			t && t(i), this.manager.itemEnd(e);
		}, 0), i;
		if (jf[e] !== void 0) {
			jf[e].push({
				onLoad: t,
				onProgress: n,
				onError: r
			});
			return;
		}
		jf[e] = [], jf[e].push({
			onLoad: t,
			onProgress: n,
			onError: r
		});
		let a = new Request(e, {
			headers: new Headers(this.requestHeader),
			credentials: this.withCredentials ? "include" : "same-origin"
		}), o = this.mimeType, s = this.responseType;
		fetch(a).then((t) => {
			if (t.status === 200 || t.status === 0) {
				if (t.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || t.body === void 0 || t.body.getReader === void 0) return t;
				let n = jf[e], r = t.body.getReader(), i = t.headers.get("X-File-Size") || t.headers.get("Content-Length"), a = i ? parseInt(i) : 0, o = a !== 0, s = 0, c = new ReadableStream({ start(e) {
					t();
					function t() {
						r.read().then(({ done: r, value: i }) => {
							if (r) e.close();
							else {
								s += i.byteLength;
								let r = new ProgressEvent("progress", {
									lengthComputable: o,
									loaded: s,
									total: a
								});
								for (let e = 0, t = n.length; e < t; e++) {
									let t = n[e];
									t.onProgress && t.onProgress(r);
								}
								e.enqueue(i), t();
							}
						}, (t) => {
							e.error(t);
						});
					}
				} });
				return new Response(c);
			}
			throw new Mf(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`, t);
		}).then((e) => {
			switch (s) {
				case "arraybuffer": return e.arrayBuffer();
				case "blob": return e.blob();
				case "document": return e.text().then((e) => new DOMParser().parseFromString(e, o));
				case "json": return e.json();
				default:
					if (o === void 0) return e.text();
					{
						let t = /charset="?([^;"\s]*)"?/i.exec(o), n = t && t[1] ? t[1].toLowerCase() : void 0, r = new TextDecoder(n);
						return e.arrayBuffer().then((e) => r.decode(e));
					}
			}
		}).then((t) => {
			Df.add(e, t);
			let n = jf[e];
			delete jf[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onLoad && r.onLoad(t);
			}
		}).catch((t) => {
			let n = jf[e];
			if (n === void 0) throw this.manager.itemError(e), t;
			delete jf[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onError && r.onError(t);
			}
			this.manager.itemError(e);
		}).finally(() => {
			this.manager.itemEnd(e);
		}), this.manager.itemStart(e);
	}
	setResponseType(e) {
		return this.responseType = e, this;
	}
	setMimeType(e) {
		return this.mimeType = e, this;
	}
}, Pf = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new Nf(this.manager);
		a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(JSON.parse(n)));
			} catch (t) {
				r ? r(t) : console.error(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e) {
		let t = [];
		for (let n = 0; n < e.length; n++) {
			let r = wf.parse(e[n]);
			t.push(r);
		}
		return t;
	}
}, Ff = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = [], o = new iu(), s = new Nf(this.manager);
		s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(i.withCredentials);
		let c = 0;
		function l(l) {
			s.load(e[l], function(e) {
				let n = i.parse(e, !0);
				a[l] = {
					width: n.width,
					height: n.height,
					format: n.format,
					mipmaps: n.mipmaps
				}, c += 1, c === 6 && (n.mipmapCount === 1 && (o.minFilter = g), o.image = a, o.format = n.format, o.needsUpdate = !0, t && t(o));
			}, n, r);
		}
		if (Array.isArray(e)) for (let t = 0, n = e.length; t < n; ++t) l(t);
		else s.load(e, function(e) {
			let n = i.parse(e, !0);
			if (n.isCubemap) {
				let e = n.mipmaps.length / n.mipmapCount;
				for (let t = 0; t < e; t++) {
					a[t] = { mipmaps: [] };
					for (let e = 0; e < n.mipmapCount; e++) a[t].mipmaps.push(n.mipmaps[t * n.mipmapCount + e]), a[t].format = n.format, a[t].width = n.width, a[t].height = n.height;
				}
				o.image = a;
			} else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
			n.mipmapCount === 1 && (o.minFilter = g), o.format = n.format, o.needsUpdate = !0, t && t(o);
		}, n, r);
		return o;
	}
}, If = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = this, a = Df.get(e);
		if (a !== void 0) return i.manager.itemStart(e), setTimeout(function() {
			t && t(a), i.manager.itemEnd(e);
		}, 0), a;
		let o = Zt("img");
		function s() {
			l(), Df.add(e, this), t && t(this), i.manager.itemEnd(e);
		}
		function c(t) {
			l(), r && r(t), i.manager.itemError(e), i.manager.itemEnd(e);
		}
		function l() {
			o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1);
		}
		return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(e), o.src = e, o;
	}
}, Lf = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = new Xi();
		i.colorSpace = Ze;
		let a = new If(this.manager);
		a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
		let o = 0;
		function s(n) {
			a.load(e[n], function(e) {
				i.images[n] = e, o++, o === 6 && (i.needsUpdate = !0, t && t(i));
			}, void 0, r);
		}
		for (let t = 0; t < e.length; ++t) s(t);
		return i;
	}
}, Rf = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new il(), o = new Nf(this.manager);
		return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(i.withCredentials), o.load(e, function(e) {
			let n;
			try {
				n = i.parse(e);
			} catch (e) {
				if (r !== void 0) r(e);
				else {
					console.error(e);
					return;
				}
			}
			n.image === void 0 ? n.data !== void 0 && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data) : a.image = n.image, a.wrapS = n.wrapS === void 0 ? l : n.wrapS, a.wrapT = n.wrapT === void 0 ? l : n.wrapT, a.magFilter = n.magFilter === void 0 ? g : n.magFilter, a.minFilter = n.minFilter === void 0 ? g : n.minFilter, a.anisotropy = n.anisotropy === void 0 ? 1 : n.anisotropy, n.colorSpace !== void 0 && (a.colorSpace = n.colorSpace), n.flipY !== void 0 && (a.flipY = n.flipY), n.format !== void 0 && (a.format = n.format), n.type !== void 0 && (a.type = n.type), n.mipmaps !== void 0 && (a.mipmaps = n.mipmaps, a.minFilter = y), n.mipmapCount === 1 && (a.minFilter = g), n.generateMipmaps !== void 0 && (a.generateMipmaps = n.generateMipmaps), a.needsUpdate = !0, t && t(a, n);
		}, n, r), a;
	}
}, zf = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = new vn(), a = new If(this.manager);
		return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(e) {
			i.image = e, i.needsUpdate = !0, t !== void 0 && t(i);
		}, n, r), i;
	}
}, Bf = class extends Dr {
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new Y(e), this.intensity = t;
	}
	dispose() {}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
	}
}, Vf = class extends Bf {
	constructor(e, t, n) {
		super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Dr.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Y(t);
	}
	copy(e, t) {
		return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
	}
}, Hf = /*@__PURE__*/ new J(), Uf = /*@__PURE__*/ new q(), Wf = /*@__PURE__*/ new q(), Gf = class {
	constructor(e) {
		this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new U(512, 512), this.map = null, this.mapPass = null, this.matrix = new J(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ia(), this._frameExtents = new U(1, 1), this._viewportCount = 1, this._viewports = [new K(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera, n = this.matrix;
		Uf.setFromMatrixPosition(e.matrixWorld), t.position.copy(Uf), Wf.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Wf), t.updateMatrixWorld(), Hf.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Hf), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(Hf);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, Kf = class extends Gf {
	constructor() {
		super(new Ki(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
	}
	updateMatrices(e) {
		let t = this.camera, n = wt * 2 * e.angle * this.focus, r = this.mapSize.width / this.mapSize.height, i = e.distance || t.far;
		(n !== t.fov || r !== t.aspect || i !== t.far) && (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()), super.updateMatrices(e);
	}
	copy(e) {
		return super.copy(e), this.focus = e.focus, this;
	}
}, qf = class extends Bf {
	constructor(e, t, n = 0, r = Math.PI / 3, i = 0, a = 2) {
		super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Dr.DEFAULT_UP), this.updateMatrix(), this.target = new Dr(), this.distance = n, this.angle = r, this.penumbra = i, this.decay = a, this.map = null, this.shadow = new Kf();
	}
	get power() {
		return this.intensity * Math.PI;
	}
	set power(e) {
		this.intensity = e / Math.PI;
	}
	dispose() {
		this.shadow.dispose();
	}
	copy(e, t) {
		return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
	}
}, Jf = /*@__PURE__*/ new J(), Yf = /*@__PURE__*/ new q(), Xf = /*@__PURE__*/ new q(), Zf = class extends Gf {
	constructor() {
		super(new Ki(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new U(4, 2), this._viewportCount = 6, this._viewports = [
			new K(2, 1, 1, 1),
			new K(0, 1, 1, 1),
			new K(3, 1, 1, 1),
			new K(1, 1, 1, 1),
			new K(3, 0, 1, 1),
			new K(1, 0, 1, 1)
		], this._cubeDirections = [
			new q(1, 0, 0),
			new q(-1, 0, 0),
			new q(0, 0, 1),
			new q(0, 0, -1),
			new q(0, 1, 0),
			new q(0, -1, 0)
		], this._cubeUps = [
			new q(0, 1, 0),
			new q(0, 1, 0),
			new q(0, 1, 0),
			new q(0, 1, 0),
			new q(0, 0, 1),
			new q(0, 0, -1)
		];
	}
	updateMatrices(e, t = 0) {
		let n = this.camera, r = this.matrix, i = e.distance || n.far;
		i !== n.far && (n.far = i, n.updateProjectionMatrix()), Yf.setFromMatrixPosition(e.matrixWorld), n.position.copy(Yf), Xf.copy(n.position), Xf.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Xf), n.updateMatrixWorld(), r.makeTranslation(-Yf.x, -Yf.y, -Yf.z), Jf.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Jf);
	}
}, Qf = class extends Bf {
	constructor(e, t, n = 0, r = 2) {
		super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Zf();
	}
	get power() {
		return this.intensity * 4 * Math.PI;
	}
	set power(e) {
		this.intensity = e / (4 * Math.PI);
	}
	dispose() {
		this.shadow.dispose();
	}
	copy(e, t) {
		return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
	}
}, $f = class extends Gf {
	constructor() {
		super(new va(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
	}
}, ep = class extends Bf {
	constructor(e, t) {
		super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Dr.DEFAULT_UP), this.updateMatrix(), this.target = new Dr(), this.shadow = new $f();
	}
	dispose() {
		this.shadow.dispose();
	}
	copy(e) {
		return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
	}
}, tp = class extends Bf {
	constructor(e, t) {
		super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
	}
}, np = class extends Bf {
	constructor(e, t, n = 10, r = 10) {
		super(e, t), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = r;
	}
	get power() {
		return this.intensity * this.width * this.height * Math.PI;
	}
	set power(e) {
		this.intensity = e / (this.width * this.height * Math.PI);
	}
	copy(e) {
		return super.copy(e), this.width = e.width, this.height = e.height, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.width = this.width, t.object.height = this.height, t;
	}
}, rp = class {
	constructor() {
		this.isSphericalHarmonics3 = !0, this.coefficients = [];
		for (let e = 0; e < 9; e++) this.coefficients.push(new q());
	}
	set(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
		return this;
	}
	zero() {
		for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
		return this;
	}
	getAt(e, t) {
		let n = e.x, r = e.y, i = e.z, a = this.coefficients;
		return t.copy(a[0]).multiplyScalar(.282095), t.addScaledVector(a[1], .488603 * r), t.addScaledVector(a[2], .488603 * i), t.addScaledVector(a[3], .488603 * n), t.addScaledVector(a[4], n * r * 1.092548), t.addScaledVector(a[5], r * i * 1.092548), t.addScaledVector(a[6], .315392 * (3 * i * i - 1)), t.addScaledVector(a[7], n * i * 1.092548), t.addScaledVector(a[8], .546274 * (n * n - r * r)), t;
	}
	getIrradianceAt(e, t) {
		let n = e.x, r = e.y, i = e.z, a = this.coefficients;
		return t.copy(a[0]).multiplyScalar(.886227), t.addScaledVector(a[1], 1.023328 * r), t.addScaledVector(a[2], 1.023328 * i), t.addScaledVector(a[3], 1.023328 * n), t.addScaledVector(a[4], .858086 * n * r), t.addScaledVector(a[5], .858086 * r * i), t.addScaledVector(a[6], .743125 * i * i - .247708), t.addScaledVector(a[7], .858086 * n * i), t.addScaledVector(a[8], .429043 * (n * n - r * r)), t;
	}
	add(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
		return this;
	}
	addScaledSH(e, t) {
		for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
		return this;
	}
	scale(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
		return this;
	}
	lerp(e, t) {
		for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
		return this;
	}
	equals(e) {
		for (let t = 0; t < 9; t++) if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
		return !0;
	}
	copy(e) {
		return this.set(e.coefficients);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	fromArray(e, t = 0) {
		let n = this.coefficients;
		for (let r = 0; r < 9; r++) n[r].fromArray(e, t + r * 3);
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.coefficients;
		for (let r = 0; r < 9; r++) n[r].toArray(e, t + r * 3);
		return e;
	}
	static getBasisAt(e, t) {
		let n = e.x, r = e.y, i = e.z;
		t[0] = .282095, t[1] = .488603 * r, t[2] = .488603 * i, t[3] = .488603 * n, t[4] = 1.092548 * n * r, t[5] = 1.092548 * r * i, t[6] = .315392 * (3 * i * i - 1), t[7] = 1.092548 * n * i, t[8] = .546274 * (n * n - r * r);
	}
}, ip = class extends Bf {
	constructor(e = new rp(), t = 1) {
		super(void 0, t), this.isLightProbe = !0, this.sh = e;
	}
	copy(e) {
		return super.copy(e), this.sh.copy(e.sh), this;
	}
	fromJSON(e) {
		return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.sh = this.sh.toArray(), t;
	}
}, ap = class e extends Af {
	constructor(e) {
		super(e), this.textures = {};
	}
	load(e, t, n, r) {
		let i = this, a = new Nf(i.manager);
		a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(JSON.parse(n)));
			} catch (t) {
				r ? r(t) : console.error(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e) {
		let t = this.textures;
		function n(e) {
			return t[e] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e];
		}
		let r = this.createMaterialFromType(e.type);
		if (e.uuid !== void 0 && (r.uuid = e.uuid), e.name !== void 0 && (r.name = e.name), e.color !== void 0 && r.color !== void 0 && r.color.setHex(e.color), e.roughness !== void 0 && (r.roughness = e.roughness), e.metalness !== void 0 && (r.metalness = e.metalness), e.sheen !== void 0 && (r.sheen = e.sheen), e.sheenColor !== void 0 && (r.sheenColor = new Y().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (r.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && r.emissive !== void 0 && r.emissive.setHex(e.emissive), e.specular !== void 0 && r.specular !== void 0 && r.specular.setHex(e.specular), e.specularIntensity !== void 0 && (r.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && r.specularColor !== void 0 && r.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (r.shininess = e.shininess), e.clearcoat !== void 0 && (r.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (r.dispersion = e.dispersion), e.iridescence !== void 0 && (r.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (r.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (r.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (r.transmission = e.transmission), e.thickness !== void 0 && (r.thickness = e.thickness), e.attenuationDistance !== void 0 && (r.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && r.attenuationColor !== void 0 && r.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (r.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (r.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (r.fog = e.fog), e.flatShading !== void 0 && (r.flatShading = e.flatShading), e.blending !== void 0 && (r.blending = e.blending), e.combine !== void 0 && (r.combine = e.combine), e.side !== void 0 && (r.side = e.side), e.shadowSide !== void 0 && (r.shadowSide = e.shadowSide), e.opacity !== void 0 && (r.opacity = e.opacity), e.transparent !== void 0 && (r.transparent = e.transparent), e.alphaTest !== void 0 && (r.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (r.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (r.depthFunc = e.depthFunc), e.depthTest !== void 0 && (r.depthTest = e.depthTest), e.depthWrite !== void 0 && (r.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (r.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (r.blendSrc = e.blendSrc), e.blendDst !== void 0 && (r.blendDst = e.blendDst), e.blendEquation !== void 0 && (r.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (r.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (r.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (r.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && r.blendColor !== void 0 && r.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (r.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (r.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (r.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (r.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (r.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (r.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (r.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (r.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (r.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (r.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (r.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (r.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (r.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (r.rotation = e.rotation), e.linewidth !== void 0 && (r.linewidth = e.linewidth), e.dashSize !== void 0 && (r.dashSize = e.dashSize), e.gapSize !== void 0 && (r.gapSize = e.gapSize), e.scale !== void 0 && (r.scale = e.scale), e.polygonOffset !== void 0 && (r.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (r.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (r.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (r.dithering = e.dithering), e.alphaToCoverage !== void 0 && (r.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (r.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (r.forceSinglePass = e.forceSinglePass), e.visible !== void 0 && (r.visible = e.visible), e.toneMapped !== void 0 && (r.toneMapped = e.toneMapped), e.userData !== void 0 && (r.userData = e.userData), e.vertexColors !== void 0 && (r.vertexColors = typeof e.vertexColors == "number" ? e.vertexColors > 0 : e.vertexColors), e.uniforms !== void 0) for (let t in e.uniforms) {
			let i = e.uniforms[t];
			switch (r.uniforms[t] = {}, i.type) {
				case "t":
					r.uniforms[t].value = n(i.value);
					break;
				case "c":
					r.uniforms[t].value = new Y().setHex(i.value);
					break;
				case "v2":
					r.uniforms[t].value = new U().fromArray(i.value);
					break;
				case "v3":
					r.uniforms[t].value = new q().fromArray(i.value);
					break;
				case "v4":
					r.uniforms[t].value = new K().fromArray(i.value);
					break;
				case "m3":
					r.uniforms[t].value = new W().fromArray(i.value);
					break;
				case "m4":
					r.uniforms[t].value = new J().fromArray(i.value);
					break;
				default: r.uniforms[t].value = i.value;
			}
		}
		if (e.defines !== void 0 && (r.defines = e.defines), e.vertexShader !== void 0 && (r.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (r.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (r.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) r.extensions[t] = e.extensions[t];
		if (e.lights !== void 0 && (r.lights = e.lights), e.clipping !== void 0 && (r.clipping = e.clipping), e.size !== void 0 && (r.size = e.size), e.sizeAttenuation !== void 0 && (r.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (r.map = n(e.map)), e.matcap !== void 0 && (r.matcap = n(e.matcap)), e.alphaMap !== void 0 && (r.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (r.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (r.bumpScale = e.bumpScale), e.normalMap !== void 0 && (r.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (r.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			Array.isArray(t) === !1 && (t = [t, t]), r.normalScale = new U().fromArray(t);
		}
		return e.displacementMap !== void 0 && (r.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (r.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (r.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (r.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (r.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (r.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (r.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (r.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (r.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (r.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (r.envMap = n(e.envMap)), e.envMapRotation !== void 0 && r.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (r.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (r.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (r.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (r.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (r.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (r.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (r.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (r.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (r.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (r.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (r.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (r.clearcoatNormalScale = new U().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (r.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (r.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (r.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (r.thicknessMap = n(e.thicknessMap)), e.anisotropyMap !== void 0 && (r.anisotropyMap = n(e.anisotropyMap)), e.sheenColorMap !== void 0 && (r.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (r.sheenRoughnessMap = n(e.sheenRoughnessMap)), r;
	}
	setTextures(e) {
		return this.textures = e, this;
	}
	createMaterialFromType(t) {
		return e.createMaterialFromType(t);
	}
	static createMaterialFromType(e) {
		return new {
			ShadowMaterial: qd,
			SpriteMaterial: Oc,
			RawShaderMaterial: Jd,
			ShaderMaterial: Vi,
			PointsMaterial: Yl,
			MeshPhysicalMaterial: Xd,
			MeshStandardMaterial: Yd,
			MeshPhongMaterial: Zd,
			MeshToonMaterial: Qd,
			MeshNormalMaterial: $d,
			MeshLambertMaterial: ef,
			MeshDepthMaterial: Js,
			MeshDistanceMaterial: Ys,
			MeshBasicMaterial: Yr,
			MeshMatcapMaterial: tf,
			LineDashedMaterial: nf,
			LineBasicMaterial: Fl,
			Material: Jr
		}[e]();
	}
}, op = class {
	static decodeText(e) {
		if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(e);
		let t = "";
		for (let n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n]);
		try {
			return decodeURIComponent(escape(t));
		} catch {
			return t;
		}
	}
	static extractUrlBase(e) {
		let t = e.lastIndexOf("/");
		return t === -1 ? "./" : e.slice(0, t + 1);
	}
	static resolveURL(e, t) {
		return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
	}
}, sp = class extends Z {
	constructor() {
		super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = Infinity;
	}
	copy(e) {
		return super.copy(e), this.instanceCount = e.instanceCount, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
	}
}, cp = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new Nf(i.manager);
		a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(JSON.parse(n)));
			} catch (t) {
				r ? r(t) : console.error(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e) {
		let t = {}, n = {};
		function r(e, n) {
			if (t[n] !== void 0) return t[n];
			let r = e.interleavedBuffers[n], a = i(e, r.buffer), o = new Tc(Xt(r.type, a), r.stride);
			return o.uuid = r.uuid, t[n] = o, o;
		}
		function i(e, t) {
			if (n[t] !== void 0) return n[t];
			let r = e.arrayBuffers[t], i = new Uint32Array(r).buffer;
			return n[t] = i, i;
		}
		let a = e.isInstancedBufferGeometry ? new sp() : new Z(), o = e.data.index;
		if (o !== void 0) {
			let e = Xt(o.type, o.array);
			a.setIndex(new ri(e, 1));
		}
		let s = e.data.attributes;
		for (let t in s) {
			let n = s[t], i;
			if (n.isInterleavedBufferAttribute) i = new Dc(r(e.data, n.data), n.itemSize, n.offset, n.normalized);
			else {
				let e = Xt(n.type, n.array);
				i = new (n.isInstancedBufferAttribute ? cl : ri)(e, n.itemSize, n.normalized);
			}
			n.name !== void 0 && (i.name = n.name), n.usage !== void 0 && i.setUsage(n.usage), a.setAttribute(t, i);
		}
		let c = e.data.morphAttributes;
		if (c) for (let t in c) {
			let n = c[t], i = [];
			for (let t = 0, a = n.length; t < a; t++) {
				let a = n[t], o;
				o = a.isInterleavedBufferAttribute ? new Dc(r(e.data, a.data), a.itemSize, a.offset, a.normalized) : new ri(Xt(a.type, a.array), a.itemSize, a.normalized), a.name !== void 0 && (o.name = a.name), i.push(o);
			}
			a.morphAttributes[t] = i;
		}
		e.data.morphTargetsRelative && (a.morphTargetsRelative = !0);
		let l = e.data.groups || e.data.drawcalls || e.data.offsets;
		if (l !== void 0) for (let e = 0, t = l.length; e !== t; ++e) {
			let t = l[e];
			a.addGroup(t.start, t.count, t.materialIndex);
		}
		let u = e.data.boundingSphere;
		if (u !== void 0) {
			let e = new q();
			u.center !== void 0 && e.fromArray(u.center), a.boundingSphere = new Kn(e, u.radius);
		}
		return e.name && (a.name = e.name), e.userData && (a.userData = e.userData), a;
	}
}, lp = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = this.path === "" ? op.extractUrlBase(e) : this.path;
		this.resourcePath = this.resourcePath || a;
		let o = new Nf(this.manager);
		o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(n) {
			let a = null;
			try {
				a = JSON.parse(n);
			} catch (t) {
				r !== void 0 && r(t), console.error("THREE:ObjectLoader: Can't parse " + e + ".", t.message);
				return;
			}
			let o = a.metadata;
			o === void 0 || o.type === void 0 || o.type.toLowerCase() === "geometry" ? (r !== void 0 && r(/* @__PURE__ */ Error("THREE.ObjectLoader: Can't load " + e)), console.error("THREE.ObjectLoader: Can't load " + e)) : i.parse(a, t);
		}, n, r);
	}
	async loadAsync(e, t) {
		let n = this, r = this.path === "" ? op.extractUrlBase(e) : this.path;
		this.resourcePath = this.resourcePath || r;
		let i = new Nf(this.manager);
		i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials);
		let a = await i.loadAsync(e, t), o = JSON.parse(a), s = o.metadata;
		if (s === void 0 || s.type === void 0 || s.type.toLowerCase() === "geometry") throw Error("THREE.ObjectLoader: Can't load " + e);
		return await n.parseAsync(o);
	}
	parse(e, t) {
		let n = this.parseAnimations(e.animations), r = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, r), a = this.parseImages(e.images, function() {
			t !== void 0 && t(c);
		}), o = this.parseTextures(e.textures, a), s = this.parseMaterials(e.materials, o), c = this.parseObject(e.object, i, s, o, n), l = this.parseSkeletons(e.skeletons, c);
		if (this.bindSkeletons(c, l), this.bindLightTargets(c), t !== void 0) {
			let e = !1;
			for (let t in a) if (a[t].data instanceof HTMLImageElement) {
				e = !0;
				break;
			}
			e === !1 && t(c);
		}
		return c;
	}
	async parseAsync(e) {
		let t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), r = this.parseGeometries(e.geometries, n), i = await this.parseImagesAsync(e.images), a = this.parseTextures(e.textures, i), o = this.parseMaterials(e.materials, a), s = this.parseObject(e.object, r, o, a, t), c = this.parseSkeletons(e.skeletons, s);
		return this.bindSkeletons(s, c), this.bindLightTargets(s), s;
	}
	parseShapes(e) {
		let t = {};
		if (e !== void 0) for (let n = 0, r = e.length; n < r; n++) {
			let r = new Yu().fromJSON(e[n]);
			t[r.uuid] = r;
		}
		return t;
	}
	parseSkeletons(e, t) {
		let n = {}, r = {};
		if (t.traverse(function(e) {
			e.isBone && (r[e.uuid] = e);
		}), e !== void 0) for (let t = 0, i = e.length; t < i; t++) {
			let i = new sl().fromJSON(e[t], r);
			n[i.uuid] = i;
		}
		return n;
	}
	parseGeometries(e, t) {
		let n = {};
		if (e !== void 0) {
			let r = new cp();
			for (let i = 0, a = e.length; i < a; i++) {
				let a, o = e[i];
				switch (o.type) {
					case "BufferGeometry":
					case "InstancedBufferGeometry":
						a = r.parse(o);
						break;
					default: o.type in Kd ? a = Kd[o.type].fromJSON(o, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`);
				}
				a.uuid = o.uuid, o.name !== void 0 && (a.name = o.name), o.userData !== void 0 && (a.userData = o.userData), n[o.uuid] = a;
			}
		}
		return n;
	}
	parseMaterials(e, t) {
		let n = {}, r = {};
		if (e !== void 0) {
			let i = new ap();
			i.setTextures(t);
			for (let t = 0, a = e.length; t < a; t++) {
				let a = e[t];
				n[a.uuid] === void 0 && (n[a.uuid] = i.parse(a)), r[a.uuid] = n[a.uuid];
			}
		}
		return r;
	}
	parseAnimations(e) {
		let t = {};
		if (e !== void 0) for (let n = 0; n < e.length; n++) {
			let r = e[n], i = wf.parse(r);
			t[i.uuid] = i;
		}
		return t;
	}
	parseImages(e, t) {
		let n = this, r = {}, i;
		function a(e) {
			return n.manager.itemStart(e), i.load(e, function() {
				n.manager.itemEnd(e);
			}, void 0, function() {
				n.manager.itemError(e), n.manager.itemEnd(e);
			});
		}
		function o(e) {
			if (typeof e == "string") {
				let t = e;
				return a(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(t) ? t : n.resourcePath + t);
			}
			return e.data ? {
				data: Xt(e.type, e.data),
				width: e.width,
				height: e.height
			} : null;
		}
		if (e !== void 0 && e.length > 0) {
			i = new If(new Of(t)), i.setCrossOrigin(this.crossOrigin);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t], i = n.url;
				if (Array.isArray(i)) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t], r = o(n);
						r !== null && (r instanceof HTMLImageElement ? e.push(r) : e.push(new il(r.data, r.width, r.height)));
					}
					r[n.uuid] = new hn(e);
				} else {
					let e = o(n.url);
					r[n.uuid] = new hn(e);
				}
			}
		}
		return r;
	}
	async parseImagesAsync(e) {
		let t = this, n = {}, r;
		async function i(e) {
			if (typeof e == "string") {
				let n = e, i = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : t.resourcePath + n;
				return await r.loadAsync(i);
			}
			return e.data ? {
				data: Xt(e.type, e.data),
				width: e.width,
				height: e.height
			} : null;
		}
		if (e !== void 0 && e.length > 0) {
			r = new If(this.manager), r.setCrossOrigin(this.crossOrigin);
			for (let t = 0, r = e.length; t < r; t++) {
				let r = e[t], a = r.url;
				if (Array.isArray(a)) {
					let e = [];
					for (let t = 0, n = a.length; t < n; t++) {
						let n = a[t], r = await i(n);
						r !== null && (r instanceof HTMLImageElement ? e.push(r) : e.push(new il(r.data, r.width, r.height)));
					}
					n[r.uuid] = new hn(e);
				} else {
					let e = await i(r.url);
					n[r.uuid] = new hn(e);
				}
			}
		}
		return n;
	}
	parseTextures(e, t) {
		function n(e, t) {
			return typeof e == "number" ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), t[e]);
		}
		let r = {};
		if (e !== void 0) for (let i = 0, a = e.length; i < a; i++) {
			let a = e[i];
			a.image === void 0 && console.warn("THREE.ObjectLoader: No \"image\" specified for", a.uuid), t[a.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", a.image);
			let o = t[a.image], s = o.data, c;
			Array.isArray(s) ? (c = new Xi(), s.length === 6 && (c.needsUpdate = !0)) : (c = s && s.data ? new il() : new vn(), s && (c.needsUpdate = !0)), c.source = o, c.uuid = a.uuid, a.name !== void 0 && (c.name = a.name), a.mapping !== void 0 && (c.mapping = n(a.mapping, up)), a.channel !== void 0 && (c.channel = a.channel), a.offset !== void 0 && c.offset.fromArray(a.offset), a.repeat !== void 0 && c.repeat.fromArray(a.repeat), a.center !== void 0 && c.center.fromArray(a.center), a.rotation !== void 0 && (c.rotation = a.rotation), a.wrap !== void 0 && (c.wrapS = n(a.wrap[0], dp), c.wrapT = n(a.wrap[1], dp)), a.format !== void 0 && (c.format = a.format), a.internalFormat !== void 0 && (c.internalFormat = a.internalFormat), a.type !== void 0 && (c.type = a.type), a.colorSpace !== void 0 && (c.colorSpace = a.colorSpace), a.minFilter !== void 0 && (c.minFilter = n(a.minFilter, fp)), a.magFilter !== void 0 && (c.magFilter = n(a.magFilter, fp)), a.anisotropy !== void 0 && (c.anisotropy = a.anisotropy), a.flipY !== void 0 && (c.flipY = a.flipY), a.generateMipmaps !== void 0 && (c.generateMipmaps = a.generateMipmaps), a.premultiplyAlpha !== void 0 && (c.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (c.unpackAlignment = a.unpackAlignment), a.compareFunction !== void 0 && (c.compareFunction = a.compareFunction), a.userData !== void 0 && (c.userData = a.userData), r[a.uuid] = c;
		}
		return r;
	}
	parseObject(e, t, n, r, i) {
		let a;
		function o(e) {
			return t[e] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", e), t[e];
		}
		function s(e) {
			if (e !== void 0) {
				if (Array.isArray(e)) {
					let t = [];
					for (let r = 0, i = e.length; r < i; r++) {
						let i = e[r];
						n[i] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", i), t.push(n[i]);
					}
					return t;
				}
				return n[e] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", e), n[e];
			}
		}
		function c(e) {
			return r[e] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", e), r[e];
		}
		let l, u;
		switch (e.type) {
			case "Scene":
				a = new wc(), e.background !== void 0 && (Number.isInteger(e.background) ? a.background = new Y(e.background) : a.background = c(e.background)), e.environment !== void 0 && (a.environment = c(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? a.fog = new Cc(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (a.fog = new Sc(e.fog.color, e.fog.density)), e.fog.name !== "" && (a.fog.name = e.fog.name)), e.backgroundBlurriness !== void 0 && (a.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (a.backgroundIntensity = e.backgroundIntensity), e.backgroundRotation !== void 0 && a.backgroundRotation.fromArray(e.backgroundRotation), e.environmentIntensity !== void 0 && (a.environmentIntensity = e.environmentIntensity), e.environmentRotation !== void 0 && a.environmentRotation.fromArray(e.environmentRotation);
				break;
			case "PerspectiveCamera":
				a = new Ki(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (a.focus = e.focus), e.zoom !== void 0 && (a.zoom = e.zoom), e.filmGauge !== void 0 && (a.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (a.filmOffset = e.filmOffset), e.view !== void 0 && (a.view = Object.assign({}, e.view));
				break;
			case "OrthographicCamera":
				a = new va(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (a.zoom = e.zoom), e.view !== void 0 && (a.view = Object.assign({}, e.view));
				break;
			case "AmbientLight":
				a = new tp(e.color, e.intensity);
				break;
			case "DirectionalLight":
				a = new ep(e.color, e.intensity), a.target = e.target || "";
				break;
			case "PointLight":
				a = new Qf(e.color, e.intensity, e.distance, e.decay);
				break;
			case "RectAreaLight":
				a = new np(e.color, e.intensity, e.width, e.height);
				break;
			case "SpotLight":
				a = new qf(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay), a.target = e.target || "";
				break;
			case "HemisphereLight":
				a = new Vf(e.color, e.groundColor, e.intensity);
				break;
			case "LightProbe":
				a = new ip().fromJSON(e);
				break;
			case "SkinnedMesh":
				l = o(e.geometry), u = s(e.material), a = new nl(l, u), e.bindMode !== void 0 && (a.bindMode = e.bindMode), e.bindMatrix !== void 0 && a.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (a.skeleton = e.skeleton);
				break;
			case "Mesh":
				l = o(e.geometry), u = s(e.material), a = new Ai(l, u);
				break;
			case "InstancedMesh":
				l = o(e.geometry), u = s(e.material);
				let t = e.count, n = e.instanceMatrix, r = e.instanceColor;
				a = new gl(l, u, t), a.instanceMatrix = new cl(new Float32Array(n.array), 16), r !== void 0 && (a.instanceColor = new cl(new Float32Array(r.array), r.itemSize));
				break;
			case "BatchedMesh":
				l = o(e.geometry), u = s(e.material), a = new Pl(e.maxInstanceCount, e.maxVertexCount, e.maxIndexCount, u), a.geometry = l, a.perObjectFrustumCulled = e.perObjectFrustumCulled, a.sortObjects = e.sortObjects, a._drawRanges = e.drawRanges, a._reservedRanges = e.reservedRanges, a._visibility = e.visibility, a._active = e.active, a._bounds = e.bounds.map((e) => {
					let t = new On();
					t.min.fromArray(e.boxMin), t.max.fromArray(e.boxMax);
					let n = new Kn();
					return n.radius = e.sphereRadius, n.center.fromArray(e.sphereCenter), {
						boxInitialized: e.boxInitialized,
						box: t,
						sphereInitialized: e.sphereInitialized,
						sphere: n
					};
				}), a._maxInstanceCount = e.maxInstanceCount, a._maxVertexCount = e.maxVertexCount, a._maxIndexCount = e.maxIndexCount, a._geometryInitialized = e.geometryInitialized, a._geometryCount = e.geometryCount, a._matricesTexture = c(e.matricesTexture.uuid), e.colorsTexture !== void 0 && (a._colorsTexture = c(e.colorsTexture.uuid));
				break;
			case "LOD":
				a = new Kc();
				break;
			case "Line":
				a = new Ul(o(e.geometry), s(e.material));
				break;
			case "LineLoop":
				a = new Jl(o(e.geometry), s(e.material));
				break;
			case "LineSegments":
				a = new ql(o(e.geometry), s(e.material));
				break;
			case "PointCloud":
			case "Points":
				a = new eu(o(e.geometry), s(e.material));
				break;
			case "Sprite":
				a = new Hc(s(e.material));
				break;
			case "Group":
				a = new uc();
				break;
			case "Bone":
				a = new rl();
				break;
			default: a = new Dr();
		}
		if (a.uuid = e.uuid, e.name !== void 0 && (a.name = e.name), e.matrix === void 0 ? (e.position !== void 0 && a.position.fromArray(e.position), e.rotation !== void 0 && a.rotation.fromArray(e.rotation), e.quaternion !== void 0 && a.quaternion.fromArray(e.quaternion), e.scale !== void 0 && a.scale.fromArray(e.scale)) : (a.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (a.matrixAutoUpdate = e.matrixAutoUpdate), a.matrixAutoUpdate && a.matrix.decompose(a.position, a.quaternion, a.scale)), e.up !== void 0 && a.up.fromArray(e.up), e.castShadow !== void 0 && (a.castShadow = e.castShadow), e.receiveShadow !== void 0 && (a.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.intensity !== void 0 && (a.shadow.intensity = e.shadow.intensity), e.shadow.bias !== void 0 && (a.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (a.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (a.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && a.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (a.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (a.visible = e.visible), e.frustumCulled !== void 0 && (a.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (a.renderOrder = e.renderOrder), e.userData !== void 0 && (a.userData = e.userData), e.layers !== void 0 && (a.layers.mask = e.layers), e.children !== void 0) {
			let o = e.children;
			for (let e = 0; e < o.length; e++) a.add(this.parseObject(o[e], t, n, r, i));
		}
		if (e.animations !== void 0) {
			let t = e.animations;
			for (let e = 0; e < t.length; e++) {
				let n = t[e];
				a.animations.push(i[n]);
			}
		}
		if (e.type === "LOD") {
			e.autoUpdate !== void 0 && (a.autoUpdate = e.autoUpdate);
			let t = e.levels;
			for (let e = 0; e < t.length; e++) {
				let n = t[e], r = a.getObjectByProperty("uuid", n.object);
				r !== void 0 && a.addLevel(r, n.distance, n.hysteresis);
			}
		}
		return a;
	}
	bindSkeletons(e, t) {
		Object.keys(t).length !== 0 && e.traverse(function(e) {
			if (e.isSkinnedMesh === !0 && e.skeleton !== void 0) {
				let n = t[e.skeleton];
				n === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", e.skeleton) : e.bind(n, e.bindMatrix);
			}
		});
	}
	bindLightTargets(e) {
		e.traverse(function(t) {
			if (t.isDirectionalLight || t.isSpotLight) {
				let n = t.target, r = e.getObjectByProperty("uuid", n);
				t.target = r === void 0 ? new Dr() : r;
			}
		});
	}
}, up = {
	UVMapping: 300,
	CubeReflectionMapping: 301,
	CubeRefractionMapping: 302,
	EquirectangularReflectionMapping: 303,
	EquirectangularRefractionMapping: 304,
	CubeUVReflectionMapping: 306
}, dp = {
	RepeatWrapping: c,
	ClampToEdgeWrapping: l,
	MirroredRepeatWrapping: u
}, fp = {
	NearestFilter: d,
	NearestMipmapNearestFilter: f,
	NearestMipmapLinearFilter: m,
	LinearFilter: g,
	LinearMipmapNearestFilter: _,
	LinearMipmapLinearFilter: y
}, pp = class extends Af {
	constructor(e) {
		super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
	}
	setOptions(e) {
		return this.options = e, this;
	}
	load(e, t, n, r) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = this, a = Df.get(e);
		if (a !== void 0) {
			if (i.manager.itemStart(e), a.then) {
				a.then((n) => {
					t && t(n), i.manager.itemEnd(e);
				}).catch((e) => {
					r && r(e);
				});
				return;
			}
			return setTimeout(function() {
				t && t(a), i.manager.itemEnd(e);
			}, 0), a;
		}
		let o = {};
		o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
		let s = fetch(e, o).then(function(e) {
			return e.blob();
		}).then(function(e) {
			return createImageBitmap(e, Object.assign(i.options, { colorSpaceConversion: "none" }));
		}).then(function(n) {
			return Df.add(e, n), t && t(n), i.manager.itemEnd(e), n;
		}).catch(function(t) {
			r && r(t), Df.remove(e), i.manager.itemError(e), i.manager.itemEnd(e);
		});
		Df.add(e, s), i.manager.itemStart(e);
	}
}, mp, hp = class {
	static getContext() {
		return mp === void 0 && (mp = new (window.AudioContext || window.webkitAudioContext)()), mp;
	}
	static setContext(e) {
		mp = e;
	}
}, gp = class extends Af {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new Nf(this.manager);
		a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(e) {
			try {
				let n = e.slice(0);
				hp.getContext().decodeAudioData(n, function(e) {
					t(e);
				}).catch(o);
			} catch (e) {
				o(e);
			}
		}, n, r);
		function o(t) {
			r ? r(t) : console.error(t), i.manager.itemError(e);
		}
	}
}, _p = /*@__PURE__*/ new J(), vp = /*@__PURE__*/ new J(), yp = /*@__PURE__*/ new J(), bp = class {
	constructor() {
		this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Ki(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Ki(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
			focus: null,
			fov: null,
			aspect: null,
			near: null,
			far: null,
			zoom: null,
			eyeSep: null
		};
	}
	update(e) {
		let t = this._cache;
		if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
			t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, yp.copy(e.projectionMatrix);
			let n = t.eyeSep / 2, r = n * t.near / t.focus, i = t.near * Math.tan(Ct * t.fov * .5) / t.zoom, a, o;
			vp.elements[12] = -n, _p.elements[12] = n, a = -i * t.aspect + r, o = i * t.aspect + r, yp.elements[0] = 2 * t.near / (o - a), yp.elements[8] = (o + a) / (o - a), this.cameraL.projectionMatrix.copy(yp), a = -i * t.aspect - r, o = i * t.aspect - r, yp.elements[0] = 2 * t.near / (o - a), yp.elements[8] = (o + a) / (o - a), this.cameraR.projectionMatrix.copy(yp);
		}
		this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(vp), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(_p);
	}
}, xp = class {
	constructor(e = !0) {
		this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
	}
	start() {
		this.startTime = Sp(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
	}
	stop() {
		this.getElapsedTime(), this.running = !1, this.autoStart = !1;
	}
	getElapsedTime() {
		return this.getDelta(), this.elapsedTime;
	}
	getDelta() {
		let e = 0;
		if (this.autoStart && !this.running) return this.start(), 0;
		if (this.running) {
			let t = Sp();
			e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
		}
		return e;
	}
};
function Sp() {
	return performance.now();
}
var Cp = /*@__PURE__*/ new q(), wp = /*@__PURE__*/ new Tn(), Tp = /*@__PURE__*/ new q(), Ep = /*@__PURE__*/ new q(), Dp = class extends Dr {
	constructor() {
		super(), this.type = "AudioListener", this.context = hp.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new xp();
	}
	getInput() {
		return this.gain;
	}
	removeFilter() {
		return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
	}
	getFilter() {
		return this.filter;
	}
	setFilter(e) {
		return this.filter === null ? this.gain.disconnect(this.context.destination) : (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
	}
	getMasterVolume() {
		return this.gain.gain.value;
	}
	setMasterVolume(e) {
		return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this;
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e);
		let t = this.context.listener, n = this.up;
		if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Cp, wp, Tp), Ep.set(0, 0, -1).applyQuaternion(wp), t.positionX) {
			let e = this.context.currentTime + this.timeDelta;
			t.positionX.linearRampToValueAtTime(Cp.x, e), t.positionY.linearRampToValueAtTime(Cp.y, e), t.positionZ.linearRampToValueAtTime(Cp.z, e), t.forwardX.linearRampToValueAtTime(Ep.x, e), t.forwardY.linearRampToValueAtTime(Ep.y, e), t.forwardZ.linearRampToValueAtTime(Ep.z, e), t.upX.linearRampToValueAtTime(n.x, e), t.upY.linearRampToValueAtTime(n.y, e), t.upZ.linearRampToValueAtTime(n.z, e);
		} else t.setPosition(Cp.x, Cp.y, Cp.z), t.setOrientation(Ep.x, Ep.y, Ep.z, n.x, n.y, n.z);
	}
}, Op = class extends Dr {
	constructor(e) {
		super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
	}
	getOutput() {
		return this.gain;
	}
	setNodeSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
	}
	setMediaElementSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
	}
	setMediaStreamSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
	}
	setBuffer(e) {
		return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
	}
	play(e = 0) {
		if (this.isPlaying === !0) {
			console.warn("THREE.Audio: Audio is already playing.");
			return;
		}
		if (this.hasPlaybackControl === !1) {
			console.warn("THREE.Audio: this Audio has no playback control.");
			return;
		}
		this._startedAt = this.context.currentTime + e;
		let t = this.context.createBufferSource();
		return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
	}
	pause() {
		if (this.hasPlaybackControl === !1) console.warn("THREE.Audio: this Audio has no playback control.");
		else return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress %= this.duration || this.buffer.duration), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
	}
	stop(e = 0) {
		if (this.hasPlaybackControl === !1) console.warn("THREE.Audio: this Audio has no playback control.");
		else return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + e), this.source.onended = null), this.isPlaying = !1, this;
	}
	connect() {
		if (this.filters.length > 0) {
			this.source.connect(this.filters[0]);
			for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
			this.filters[this.filters.length - 1].connect(this.getOutput());
		} else this.source.connect(this.getOutput());
		return this._connected = !0, this;
	}
	disconnect() {
		if (this._connected !== !1) {
			if (this.filters.length > 0) {
				this.source.disconnect(this.filters[0]);
				for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
				this.filters[this.filters.length - 1].disconnect(this.getOutput());
			} else this.source.disconnect(this.getOutput());
			return this._connected = !1, this;
		}
	}
	getFilters() {
		return this.filters;
	}
	setFilters(e) {
		return e ||= [], this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
	}
	setDetune(e) {
		return this.detune = e, this.isPlaying === !0 && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
	}
	getDetune() {
		return this.detune;
	}
	getFilter() {
		return this.getFilters()[0];
	}
	setFilter(e) {
		return this.setFilters(e ? [e] : []);
	}
	setPlaybackRate(e) {
		if (this.hasPlaybackControl === !1) console.warn("THREE.Audio: this Audio has no playback control.");
		else return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
	}
	getPlaybackRate() {
		return this.playbackRate;
	}
	onEnded() {
		this.isPlaying = !1;
	}
	getLoop() {
		return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
	}
	setLoop(e) {
		if (this.hasPlaybackControl === !1) console.warn("THREE.Audio: this Audio has no playback control.");
		else return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
	}
	setLoopStart(e) {
		return this.loopStart = e, this;
	}
	setLoopEnd(e) {
		return this.loopEnd = e, this;
	}
	getVolume() {
		return this.gain.gain.value;
	}
	setVolume(e) {
		return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this;
	}
}, kp = /*@__PURE__*/ new q(), Ap = /*@__PURE__*/ new Tn(), jp = /*@__PURE__*/ new q(), Mp = /*@__PURE__*/ new q(), Np = class extends Op {
	constructor(e) {
		super(e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
	}
	connect() {
		super.connect(), this.panner.connect(this.gain);
	}
	disconnect() {
		super.disconnect(), this.panner.disconnect(this.gain);
	}
	getOutput() {
		return this.panner;
	}
	getRefDistance() {
		return this.panner.refDistance;
	}
	setRefDistance(e) {
		return this.panner.refDistance = e, this;
	}
	getRolloffFactor() {
		return this.panner.rolloffFactor;
	}
	setRolloffFactor(e) {
		return this.panner.rolloffFactor = e, this;
	}
	getDistanceModel() {
		return this.panner.distanceModel;
	}
	setDistanceModel(e) {
		return this.panner.distanceModel = e, this;
	}
	getMaxDistance() {
		return this.panner.maxDistance;
	}
	setMaxDistance(e) {
		return this.panner.maxDistance = e, this;
	}
	setDirectionalCone(e, t, n) {
		return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
	}
	updateMatrixWorld(e) {
		if (super.updateMatrixWorld(e), this.hasPlaybackControl === !0 && this.isPlaying === !1) return;
		this.matrixWorld.decompose(kp, Ap, jp), Mp.set(0, 0, 1).applyQuaternion(Ap);
		let t = this.panner;
		if (t.positionX) {
			let e = this.context.currentTime + this.listener.timeDelta;
			t.positionX.linearRampToValueAtTime(kp.x, e), t.positionY.linearRampToValueAtTime(kp.y, e), t.positionZ.linearRampToValueAtTime(kp.z, e), t.orientationX.linearRampToValueAtTime(Mp.x, e), t.orientationY.linearRampToValueAtTime(Mp.y, e), t.orientationZ.linearRampToValueAtTime(Mp.z, e);
		} else t.setPosition(kp.x, kp.y, kp.z), t.setOrientation(Mp.x, Mp.y, Mp.z);
	}
}, Pp = class {
	constructor(e, t = 2048) {
		this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
	}
	getFrequencyData() {
		return this.analyser.getByteFrequencyData(this.data), this.data;
	}
	getAverageFrequency() {
		let e = 0, t = this.getFrequencyData();
		for (let n = 0; n < t.length; n++) e += t[n];
		return e / t.length;
	}
}, Fp = class {
	constructor(e, t, n) {
		this.binding = e, this.valueSize = n;
		let r, i, a;
		switch (t) {
			case "quaternion":
				r = this._slerp, i = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
				break;
			case "string":
			case "bool":
				r = this._select, i = this._select, a = this._setAdditiveIdentityOther, this.buffer = Array(n * 5);
				break;
			default: r = this._lerp, i = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
		}
		this._mixBufferRegion = r, this._mixBufferRegionAdditive = i, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
	}
	accumulate(e, t) {
		let n = this.buffer, r = this.valueSize, i = e * r + r, a = this.cumulativeWeight;
		if (a === 0) {
			for (let e = 0; e !== r; ++e) n[i + e] = n[e];
			a = t;
		} else {
			a += t;
			let e = t / a;
			this._mixBufferRegion(n, i, 0, e, r);
		}
		this.cumulativeWeight = a;
	}
	accumulateAdditive(e) {
		let t = this.buffer, n = this.valueSize, r = n * this._addIndex;
		this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, r, 0, e, n), this.cumulativeWeightAdditive += e;
	}
	apply(e) {
		let t = this.valueSize, n = this.buffer, r = e * t + t, i = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
		if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, i < 1) {
			let e = t * this._origIndex;
			this._mixBufferRegion(n, r, e, 1 - i, t);
		}
		a > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * t, 1, t);
		for (let e = t, i = t + t; e !== i; ++e) if (n[e] !== n[e + t]) {
			o.setValue(n, r);
			break;
		}
	}
	saveOriginalState() {
		let e = this.binding, t = this.buffer, n = this.valueSize, r = n * this._origIndex;
		e.getValue(t, r);
		for (let e = n, i = r; e !== i; ++e) t[e] = t[r + e % n];
		this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
	}
	restoreOriginalState() {
		let e = this.valueSize * 3;
		this.binding.setValue(this.buffer, e);
	}
	_setAdditiveIdentityNumeric() {
		let e = this._addIndex * this.valueSize, t = e + this.valueSize;
		for (let n = e; n < t; n++) this.buffer[n] = 0;
	}
	_setAdditiveIdentityQuaternion() {
		this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
	}
	_setAdditiveIdentityOther() {
		let e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
		for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n];
	}
	_select(e, t, n, r, i) {
		if (r >= .5) for (let r = 0; r !== i; ++r) e[t + r] = e[n + r];
	}
	_slerp(e, t, n, r) {
		Tn.slerpFlat(e, t, e, t, e, n, r);
	}
	_slerpAdditive(e, t, n, r, i) {
		let a = this._workIndex * i;
		Tn.multiplyQuaternionsFlat(e, a, e, t, e, n), Tn.slerpFlat(e, t, e, t, e, a, r);
	}
	_lerp(e, t, n, r, i) {
		let a = 1 - r;
		for (let o = 0; o !== i; ++o) {
			let i = t + o;
			e[i] = e[i] * a + e[n + o] * r;
		}
	}
	_lerpAdditive(e, t, n, r, i) {
		for (let a = 0; a !== i; ++a) {
			let i = t + a;
			e[i] = e[i] + e[n + a] * r;
		}
	}
}, Ip = "\\[\\]\\.:\\/", Lp = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), Rp = "[^\\[\\]\\.:\\/]", zp = "[^" + Ip.replace("\\.", "") + "]", Bp = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", Rp), Vp = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", zp), Hp = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", Rp), Up = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", Rp), Wp = RegExp("^" + Bp + Vp + Hp + Up + "$"), Gp = [
	"material",
	"materials",
	"bones",
	"map"
], Kp = class {
	constructor(e, t, n) {
		let r = n || qp.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, qp = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(Lp, "");
	}
	static parseTrackName(e) {
		let t = Wp.exec(e);
		if (t === null) throw Error("PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			Gp.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			console.error("THREE.PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.needsUpdate === void 0 ? t.matrixWorldNeedsUpdate !== void 0 && (s = this.Versioning.MatrixWorldNeedsUpdate) : s = this.Versioning.NeedsUpdate;
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
qp.Composite = Kp, qp.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, qp.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, qp.prototype.GetterByBindingType = [
	qp.prototype._getValue_direct,
	qp.prototype._getValue_array,
	qp.prototype._getValue_arrayElement,
	qp.prototype._getValue_toArray
], qp.prototype.SetterByBindingTypeAndVersioning = [
	[
		qp.prototype._setValue_direct,
		qp.prototype._setValue_direct_setNeedsUpdate,
		qp.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		qp.prototype._setValue_array,
		qp.prototype._setValue_array_setNeedsUpdate,
		qp.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		qp.prototype._setValue_arrayElement,
		qp.prototype._setValue_arrayElement_setNeedsUpdate,
		qp.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		qp.prototype._setValue_fromArray,
		qp.prototype._setValue_fromArray_setNeedsUpdate,
		qp.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var Jp = class {
	constructor() {
		this.isAnimationObjectGroup = !0, this.uuid = Tt(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
		let e = {};
		this._indicesByUUID = e;
		for (let t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t;
		this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
		let t = this;
		this.stats = {
			objects: {
				get total() {
					return t._objects.length;
				},
				get inUse() {
					return this.total - t.nCachedObjects_;
				}
			},
			get bindingsPerObject() {
				return t._bindings.length;
			}
		};
	}
	add() {
		let e = this._objects, t = this._indicesByUUID, n = this._paths, r = this._parsedPaths, i = this._bindings, a = i.length, o, s = e.length, c = this.nCachedObjects_;
		for (let l = 0, u = arguments.length; l !== u; ++l) {
			let u = arguments[l], d = u.uuid, f = t[d];
			if (f === void 0) {
				f = s++, t[d] = f, e.push(u);
				for (let e = 0, t = a; e !== t; ++e) i[e].push(new qp(u, n[e], r[e]));
			} else if (f < c) {
				o = e[f];
				let s = --c, l = e[s];
				t[l.uuid] = f, e[f] = l, t[d] = s, e[s] = u;
				for (let e = 0, t = a; e !== t; ++e) {
					let t = i[e], a = t[s], o = t[f];
					t[f] = a, o === void 0 && (o = new qp(u, n[e], r[e])), t[s] = o;
				}
			} else e[f] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
		}
		this.nCachedObjects_ = c;
	}
	remove() {
		let e = this._objects, t = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_;
		for (let a = 0, o = arguments.length; a !== o; ++a) {
			let o = arguments[a], s = o.uuid, c = t[s];
			if (c !== void 0 && c >= i) {
				let a = i++, l = e[a];
				t[l.uuid] = c, e[c] = l, t[s] = a, e[a] = o;
				for (let e = 0, t = r; e !== t; ++e) {
					let t = n[e], r = t[a], i = t[c];
					t[c] = r, t[a] = i;
				}
			}
		}
		this.nCachedObjects_ = i;
	}
	uncache() {
		let e = this._objects, t = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_, a = e.length;
		for (let o = 0, s = arguments.length; o !== s; ++o) {
			let s = arguments[o].uuid, c = t[s];
			if (c !== void 0) {
				if (delete t[s], c < i) {
					let o = --i, s = e[o], l = --a, u = e[l];
					t[s.uuid] = c, e[c] = s, t[u.uuid] = o, e[o] = u, e.pop();
					for (let e = 0, t = r; e !== t; ++e) {
						let t = n[e], r = t[o], i = t[l];
						t[c] = r, t[o] = i, t.pop();
					}
				} else {
					let i = --a, o = e[i];
					i > 0 && (t[o.uuid] = c), e[c] = o, e.pop();
					for (let e = 0, t = r; e !== t; ++e) {
						let t = n[e];
						t[c] = t[i], t.pop();
					}
				}
			}
		}
		this.nCachedObjects_ = i;
	}
	subscribe_(e, t) {
		let n = this._bindingsIndicesByPath, r = n[e], i = this._bindings;
		if (r !== void 0) return i[r];
		let a = this._paths, o = this._parsedPaths, s = this._objects, c = s.length, l = this.nCachedObjects_, u = Array(c);
		r = i.length, n[e] = r, a.push(e), o.push(t), i.push(u);
		for (let n = l, r = s.length; n !== r; ++n) {
			let r = s[n];
			u[n] = new qp(r, e, t);
		}
		return u;
	}
	unsubscribe_(e) {
		let t = this._bindingsIndicesByPath, n = t[e];
		if (n !== void 0) {
			let r = this._paths, i = this._parsedPaths, a = this._bindings, o = a.length - 1, s = a[o], c = e[o];
			t[c] = n, a[n] = s, a.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop();
		}
	}
}, Yp = class {
	constructor(e, t, n = null, r = t.blendMode) {
		this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = r;
		let i = t.tracks, a = i.length, o = Array(a), s = {
			endingStart: He,
			endingEnd: He
		};
		for (let e = 0; e !== a; ++e) {
			let t = i[e].createInterpolant(null);
			o[e] = t, t.settings = s;
		}
		this._interpolantSettings = s, this._interpolants = o, this._propertyBindings = Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Le, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = Infinity, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
	}
	play() {
		return this._mixer._activateAction(this), this;
	}
	stop() {
		return this._mixer._deactivateAction(this), this.reset();
	}
	reset() {
		return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
	}
	isRunning() {
		return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
	}
	isScheduled() {
		return this._mixer._isActiveAction(this);
	}
	startAt(e) {
		return this._startTime = e, this;
	}
	setLoop(e, t) {
		return this.loop = e, this.repetitions = t, this;
	}
	setEffectiveWeight(e) {
		return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
	}
	getEffectiveWeight() {
		return this._effectiveWeight;
	}
	fadeIn(e) {
		return this._scheduleFading(e, 0, 1);
	}
	fadeOut(e) {
		return this._scheduleFading(e, 1, 0);
	}
	crossFadeFrom(e, t, n) {
		if (e.fadeOut(t), this.fadeIn(t), n) {
			let n = this._clip.duration, r = e._clip.duration, i = r / n, a = n / r;
			e.warp(1, i, t), this.warp(a, 1, t);
		}
		return this;
	}
	crossFadeTo(e, t, n) {
		return e.crossFadeFrom(this, t, n);
	}
	stopFading() {
		let e = this._weightInterpolant;
		return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
	}
	setEffectiveTimeScale(e) {
		return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
	}
	getEffectiveTimeScale() {
		return this._effectiveTimeScale;
	}
	setDuration(e) {
		return this.timeScale = this._clip.duration / e, this.stopWarping();
	}
	syncWith(e) {
		return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
	}
	halt(e) {
		return this.warp(this._effectiveTimeScale, 0, e);
	}
	warp(e, t, n) {
		let r = this._mixer, i = r.time, a = this.timeScale, o = this._timeScaleInterpolant;
		o === null && (o = r._lendControlInterpolant(), this._timeScaleInterpolant = o);
		let s = o.parameterPositions, c = o.sampleValues;
		return s[0] = i, s[1] = i + n, c[0] = e / a, c[1] = t / a, this;
	}
	stopWarping() {
		let e = this._timeScaleInterpolant;
		return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
	}
	getMixer() {
		return this._mixer;
	}
	getClip() {
		return this._clip;
	}
	getRoot() {
		return this._localRoot || this._mixer._root;
	}
	_update(e, t, n, r) {
		if (!this.enabled) {
			this._updateWeight(e);
			return;
		}
		let i = this._startTime;
		if (i !== null) {
			let r = (e - i) * n;
			r < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * r);
		}
		t *= this._updateTimeScale(e);
		let a = this._updateTime(t), o = this._updateWeight(e);
		if (o > 0) {
			let e = this._interpolants, t = this._propertyBindings;
			switch (this.blendMode) {
				case Ke:
					for (let n = 0, r = e.length; n !== r; ++n) e[n].evaluate(a), t[n].accumulateAdditive(o);
					break;
				case Ge:
				default: for (let n = 0, i = e.length; n !== i; ++n) e[n].evaluate(a), t[n].accumulate(r, o);
			}
		}
	}
	_updateWeight(e) {
		let t = 0;
		if (this.enabled) {
			t = this.weight;
			let n = this._weightInterpolant;
			if (n !== null) {
				let r = n.evaluate(e)[0];
				t *= r, e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1));
			}
		}
		return this._effectiveWeight = t, t;
	}
	_updateTimeScale(e) {
		let t = 0;
		if (!this.paused) {
			t = this.timeScale;
			let n = this._timeScaleInterpolant;
			if (n !== null) {
				let r = n.evaluate(e)[0];
				t *= r, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
			}
		}
		return this._effectiveTimeScale = t, t;
	}
	_updateTime(e) {
		let t = this._clip.duration, n = this.loop, r = this.time + e, i = this._loopCount, a = n === Re;
		if (e === 0) return i === -1 ? r : a && (i & 1) == 1 ? t - r : r;
		if (n === 2200) {
			i === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
			handle_stop: {
				if (r >= t) r = t;
				else if (r < 0) r = 0;
				else {
					this.time = r;
					break handle_stop;
				}
				this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = r, this._mixer.dispatchEvent({
					type: "finished",
					action: this,
					direction: e < 0 ? -1 : 1
				});
			}
		} else {
			if (i === -1 && (e >= 0 ? (i = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), r >= t || r < 0) {
				let n = Math.floor(r / t);
				r -= t * n, i += Math.abs(n);
				let o = this.repetitions - i;
				if (o <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, r = e > 0 ? t : 0, this.time = r, this._mixer.dispatchEvent({
					type: "finished",
					action: this,
					direction: e > 0 ? 1 : -1
				});
				else {
					if (o === 1) {
						let t = e < 0;
						this._setEndings(t, !t, a);
					} else this._setEndings(!1, !1, a);
					this._loopCount = i, this.time = r, this._mixer.dispatchEvent({
						type: "loop",
						action: this,
						loopDelta: n
					});
				}
			} else this.time = r;
			if (a && (i & 1) == 1) return t - r;
		}
		return r;
	}
	_setEndings(e, t, n) {
		let r = this._interpolantSettings;
		n ? (r.endingStart = Ue, r.endingEnd = Ue) : (r.endingStart = e ? this.zeroSlopeAtStart ? Ue : He : We, r.endingEnd = t ? this.zeroSlopeAtEnd ? Ue : He : We);
	}
	_scheduleFading(e, t, n) {
		let r = this._mixer, i = r.time, a = this._weightInterpolant;
		a === null && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
		let o = a.parameterPositions, s = a.sampleValues;
		return o[0] = i, s[0] = t, o[1] = i + e, s[1] = n, this;
	}
}, Xp = /* @__PURE__ */ new Float32Array(1), Zp = class extends bt {
	constructor(e) {
		super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
	}
	_bindAction(e, t) {
		let n = e._localRoot || this._root, r = e._clip.tracks, i = r.length, a = e._propertyBindings, o = e._interpolants, s = n.uuid, c = this._bindingsByRootAndName, l = c[s];
		l === void 0 && (l = {}, c[s] = l);
		for (let e = 0; e !== i; ++e) {
			let i = r[e], c = i.name, u = l[c];
			if (u !== void 0) ++u.referenceCount, a[e] = u;
			else {
				if (u = a[e], u !== void 0) {
					u._cacheIndex === null && (++u.referenceCount, this._addInactiveBinding(u, s, c));
					continue;
				}
				let r = t && t._propertyBindings[e].binding.parsedPath;
				u = new Fp(qp.create(n, c, r), i.ValueTypeName, i.getValueSize()), ++u.referenceCount, this._addInactiveBinding(u, s, c), a[e] = u;
			}
			o[e].resultBuffer = u.buffer;
		}
	}
	_activateAction(e) {
		if (!this._isActiveAction(e)) {
			if (e._cacheIndex === null) {
				let t = (e._localRoot || this._root).uuid, n = e._clip.uuid, r = this._actionsByClip[n];
				this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, n, t);
			}
			let t = e._propertyBindings;
			for (let e = 0, n = t.length; e !== n; ++e) {
				let n = t[e];
				n.useCount++ === 0 && (this._lendBinding(n), n.saveOriginalState());
			}
			this._lendAction(e);
		}
	}
	_deactivateAction(e) {
		if (this._isActiveAction(e)) {
			let t = e._propertyBindings;
			for (let e = 0, n = t.length; e !== n; ++e) {
				let n = t[e];
				--n.useCount === 0 && (n.restoreOriginalState(), this._takeBackBinding(n));
			}
			this._takeBackAction(e);
		}
	}
	_initMemoryManager() {
		this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
		let e = this;
		this.stats = {
			actions: {
				get total() {
					return e._actions.length;
				},
				get inUse() {
					return e._nActiveActions;
				}
			},
			bindings: {
				get total() {
					return e._bindings.length;
				},
				get inUse() {
					return e._nActiveBindings;
				}
			},
			controlInterpolants: {
				get total() {
					return e._controlInterpolants.length;
				},
				get inUse() {
					return e._nActiveControlInterpolants;
				}
			}
		};
	}
	_isActiveAction(e) {
		let t = e._cacheIndex;
		return t !== null && t < this._nActiveActions;
	}
	_addInactiveAction(e, t, n) {
		let r = this._actions, i = this._actionsByClip, a = i[t];
		if (a === void 0) a = {
			knownActions: [e],
			actionByRoot: {}
		}, e._byClipCacheIndex = 0, i[t] = a;
		else {
			let t = a.knownActions;
			e._byClipCacheIndex = t.length, t.push(e);
		}
		e._cacheIndex = r.length, r.push(e), a.actionByRoot[n] = e;
	}
	_removeInactiveAction(e) {
		let t = this._actions, n = t[t.length - 1], r = e._cacheIndex;
		n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null;
		let i = e._clip.uuid, a = this._actionsByClip, o = a[i], s = o.knownActions, c = s[s.length - 1], l = e._byClipCacheIndex;
		c._byClipCacheIndex = l, s[l] = c, s.pop(), e._byClipCacheIndex = null;
		let u = o.actionByRoot, d = (e._localRoot || this._root).uuid;
		delete u[d], s.length === 0 && delete a[i], this._removeInactiveBindingsForAction(e);
	}
	_removeInactiveBindingsForAction(e) {
		let t = e._propertyBindings;
		for (let e = 0, n = t.length; e !== n; ++e) {
			let n = t[e];
			--n.referenceCount === 0 && this._removeInactiveBinding(n);
		}
	}
	_lendAction(e) {
		let t = this._actions, n = e._cacheIndex, r = this._nActiveActions++, i = t[r];
		e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
	}
	_takeBackAction(e) {
		let t = this._actions, n = e._cacheIndex, r = --this._nActiveActions, i = t[r];
		e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
	}
	_addInactiveBinding(e, t, n) {
		let r = this._bindingsByRootAndName, i = this._bindings, a = r[t];
		a === void 0 && (a = {}, r[t] = a), a[n] = e, e._cacheIndex = i.length, i.push(e);
	}
	_removeInactiveBinding(e) {
		let t = this._bindings, n = e.binding, r = n.rootNode.uuid, i = n.path, a = this._bindingsByRootAndName, o = a[r], s = t[t.length - 1], c = e._cacheIndex;
		s._cacheIndex = c, t[c] = s, t.pop(), delete o[i], Object.keys(o).length === 0 && delete a[r];
	}
	_lendBinding(e) {
		let t = this._bindings, n = e._cacheIndex, r = this._nActiveBindings++, i = t[r];
		e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
	}
	_takeBackBinding(e) {
		let t = this._bindings, n = e._cacheIndex, r = --this._nActiveBindings, i = t[r];
		e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
	}
	_lendControlInterpolant() {
		let e = this._controlInterpolants, t = this._nActiveControlInterpolants++, n = e[t];
		return n === void 0 && (n = new mf(/* @__PURE__ */ new Float32Array(2), /* @__PURE__ */ new Float32Array(2), 1, Xp), n.__cacheIndex = t, e[t] = n), n;
	}
	_takeBackControlInterpolant(e) {
		let t = this._controlInterpolants, n = e.__cacheIndex, r = --this._nActiveControlInterpolants, i = t[r];
		e.__cacheIndex = r, t[r] = e, i.__cacheIndex = n, t[n] = i;
	}
	clipAction(e, t, n) {
		let r = t || this._root, i = r.uuid, a = typeof e == "string" ? wf.findByName(r, e) : e, o = a === null ? e : a.uuid, s = this._actionsByClip[o], c = null;
		if (n === void 0 && (n = a === null ? Ge : a.blendMode), s !== void 0) {
			let e = s.actionByRoot[i];
			if (e !== void 0 && e.blendMode === n) return e;
			c = s.knownActions[0], a === null && (a = c._clip);
		}
		if (a === null) return null;
		let l = new Yp(this, a, t, n);
		return this._bindAction(l, c), this._addInactiveAction(l, o, i), l;
	}
	existingAction(e, t) {
		let n = t || this._root, r = n.uuid, i = typeof e == "string" ? wf.findByName(n, e) : e, a = i ? i.uuid : e, o = this._actionsByClip[a];
		return o === void 0 ? null : o.actionByRoot[r] || null;
	}
	stopAllAction() {
		let e = this._actions, t = this._nActiveActions;
		for (let n = t - 1; n >= 0; --n) e[n].stop();
		return this;
	}
	update(e) {
		e *= this.timeScale;
		let t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1;
		for (let o = 0; o !== n; ++o) t[o]._update(r, e, i, a);
		let o = this._bindings, s = this._nActiveBindings;
		for (let e = 0; e !== s; ++e) o[e].apply(a);
		return this;
	}
	setTime(e) {
		this.time = 0;
		for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
		return this.update(e);
	}
	getRoot() {
		return this._root;
	}
	uncacheClip(e) {
		let t = this._actions, n = e.uuid, r = this._actionsByClip, i = r[n];
		if (i !== void 0) {
			let e = i.knownActions;
			for (let n = 0, r = e.length; n !== r; ++n) {
				let r = e[n];
				this._deactivateAction(r);
				let i = r._cacheIndex, a = t[t.length - 1];
				r._cacheIndex = null, r._byClipCacheIndex = null, a._cacheIndex = i, t[i] = a, t.pop(), this._removeInactiveBindingsForAction(r);
			}
			delete r[n];
		}
	}
	uncacheRoot(e) {
		let t = e.uuid, n = this._actionsByClip;
		for (let e in n) {
			let r = n[e].actionByRoot[t];
			r !== void 0 && (this._deactivateAction(r), this._removeInactiveAction(r));
		}
		let r = this._bindingsByRootAndName[t];
		if (r !== void 0) for (let e in r) {
			let t = r[e];
			t.restoreOriginalState(), this._removeInactiveBinding(t);
		}
	}
	uncacheAction(e, t) {
		let n = this.existingAction(e, t);
		n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
	}
}, Qp = class e {
	constructor(e) {
		this.value = e;
	}
	clone() {
		return new e(this.value.clone === void 0 ? this.value : this.value.clone());
	}
}, $p = 0, em = class extends bt {
	constructor() {
		super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: $p++ }), this.name = "", this.usage = ct, this.uniforms = [];
	}
	add(e) {
		return this.uniforms.push(e), this;
	}
	remove(e) {
		let t = this.uniforms.indexOf(e);
		return t !== -1 && this.uniforms.splice(t, 1), this;
	}
	setName(e) {
		return this.name = e, this;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	dispose() {
		return this.dispatchEvent({ type: "dispose" }), this;
	}
	copy(e) {
		this.name = e.name, this.usage = e.usage;
		let t = e.uniforms;
		this.uniforms.length = 0;
		for (let e = 0, n = t.length; e < n; e++) {
			let n = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0; e < n.length; e++) this.uniforms.push(n[e].clone());
		}
		return this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, tm = class extends Tc {
	constructor(e, t, n = 1) {
		super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
	}
	clone(e) {
		let t = super.clone(e);
		return t.meshPerAttribute = this.meshPerAttribute, t;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
	}
}, nm = class {
	constructor(e, t, n, r, i) {
		this.isGLBufferAttribute = !0, this.name = "", this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = r, this.count = i, this.version = 0;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setBuffer(e) {
		return this.buffer = e, this;
	}
	setType(e, t) {
		return this.type = e, this.elementSize = t, this;
	}
	setItemSize(e) {
		return this.itemSize = e, this;
	}
	setCount(e) {
		return this.count = e, this;
	}
}, rm = /*@__PURE__*/ new J(), im = class {
	constructor(e, t, n = 0, r = Infinity) {
		this.ray = new er(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new dr(), this.params = {
			Mesh: {},
			Line: { threshold: 1 },
			LOD: {},
			Points: { threshold: 1 },
			Sprite: {}
		};
	}
	set(e, t) {
		this.ray.set(e, t);
	}
	setFromCamera(e, t) {
		t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
	}
	setFromXRController(e) {
		return rm.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(rm), this;
	}
	intersectObject(e, t = !0, n = []) {
		return om(e, this, n, t), n.sort(am), n;
	}
	intersectObjects(e, t = !0, n = []) {
		for (let r = 0, i = e.length; r < i; r++) om(e[r], this, n, t);
		return n.sort(am), n;
	}
};
function am(e, t) {
	return e.distance - t.distance;
}
function om(e, t, n, r) {
	let i = !0;
	if (e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1), i === !0 && r === !0) {
		let r = e.children;
		for (let e = 0, i = r.length; e < i; e++) om(r[e], t, n, !0);
	}
}
var sm = class {
	constructor(e = 1, t = 0, n = 0) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Et(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, cm = class {
	constructor(e = 1, t = 0, n = 0) {
		return this.radius = e, this.theta = t, this.y = n, this;
	}
	set(e, t, n) {
		return this.radius = e, this.theta = t, this.y = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, lm = class e {
	constructor(t, n, r, i) {
		e.prototype.isMatrix2 = !0, this.elements = [
			1,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
}, um = /*@__PURE__*/ new U(), dm = class {
	constructor(e = new U(Infinity, Infinity), t = new U(-Infinity, -Infinity)) {
		this.isBox2 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = um.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = Infinity, this.max.x = this.max.y = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y;
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, um).distanceTo(e);
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
}, fm = /*@__PURE__*/ new q(), pm = /*@__PURE__*/ new q(), mm = class {
	constructor(e = new q(), t = new q()) {
		this.start = e, this.end = t;
	}
	set(e, t) {
		return this.start.copy(e), this.end.copy(t), this;
	}
	copy(e) {
		return this.start.copy(e.start), this.end.copy(e.end), this;
	}
	getCenter(e) {
		return e.addVectors(this.start, this.end).multiplyScalar(.5);
	}
	delta(e) {
		return e.subVectors(this.end, this.start);
	}
	distanceSq() {
		return this.start.distanceToSquared(this.end);
	}
	distance() {
		return this.start.distanceTo(this.end);
	}
	at(e, t) {
		return this.delta(t).multiplyScalar(e).add(this.start);
	}
	closestPointToPointParameter(e, t) {
		fm.subVectors(e, this.start), pm.subVectors(this.end, this.start);
		let n = pm.dot(pm), r = pm.dot(fm) / n;
		return t && (r = Et(r, 0, 1)), r;
	}
	closestPointToPoint(e, t, n) {
		let r = this.closestPointToPointParameter(e, t);
		return this.delta(n).multiplyScalar(r).add(this.start);
	}
	applyMatrix4(e) {
		return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
	}
	equals(e) {
		return e.start.equals(this.start) && e.end.equals(this.end);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, hm = /*@__PURE__*/ new q(), gm = class extends Dr {
	constructor(e, t) {
		super(), this.light = e, this.matrixAutoUpdate = !1, this.color = t, this.type = "SpotLightHelper";
		let n = new Z(), r = [
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1,
			0,
			1,
			0,
			0,
			0,
			-1,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			1,
			0,
			0,
			0,
			0,
			-1,
			1
		];
		for (let e = 0, t = 1; e < 32; e++, t++) {
			let n = e / 32 * Math.PI * 2, i = t / 32 * Math.PI * 2;
			r.push(Math.cos(n), Math.sin(n), 1, Math.cos(i), Math.sin(i), 1);
		}
		n.setAttribute("position", new X(r, 3));
		let i = new Fl({
			fog: !1,
			toneMapped: !1
		});
		this.cone = new ql(n, i), this.add(this.cone), this.update();
	}
	dispose() {
		this.cone.geometry.dispose(), this.cone.material.dispose();
	}
	update() {
		this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), this.parent ? (this.parent.updateWorldMatrix(!0), this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)) : this.matrix.copy(this.light.matrixWorld), this.matrixWorld.copy(this.light.matrixWorld);
		let e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
		this.cone.scale.set(t, t, e), hm.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(hm), this.color === void 0 ? this.cone.material.color.copy(this.light.color) : this.cone.material.color.set(this.color);
	}
}, _m = /*@__PURE__*/ new q(), vm = /*@__PURE__*/ new J(), ym = /*@__PURE__*/ new J(), bm = class extends ql {
	constructor(e) {
		let t = xm(e), n = new Z(), r = [], i = [], a = new Y(0, 0, 1), o = new Y(0, 1, 0);
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			n.parent && n.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(o.r, o.g, o.b));
		}
		n.setAttribute("position", new X(r, 3)), n.setAttribute("color", new X(i, 3));
		let s = new Fl({
			vertexColors: !0,
			depthTest: !1,
			depthWrite: !1,
			toneMapped: !1,
			transparent: !0
		});
		super(n, s), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
	}
	updateMatrixWorld(e) {
		let t = this.bones, n = this.geometry, r = n.getAttribute("position");
		ym.copy(this.root.matrixWorld).invert();
		for (let e = 0, n = 0; e < t.length; e++) {
			let i = t[e];
			i.parent && i.parent.isBone && (vm.multiplyMatrices(ym, i.matrixWorld), _m.setFromMatrixPosition(vm), r.setXYZ(n, _m.x, _m.y, _m.z), vm.multiplyMatrices(ym, i.parent.matrixWorld), _m.setFromMatrixPosition(vm), r.setXYZ(n + 1, _m.x, _m.y, _m.z), n += 2);
		}
		n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
};
function xm(e) {
	let t = [];
	e.isBone === !0 && t.push(e);
	for (let n = 0; n < e.children.length; n++) t.push.apply(t, xm(e.children[n]));
	return t;
}
var Sm = class extends Ai {
	constructor(e, t, n) {
		let r = new zd(t, 4, 2), i = new Yr({
			wireframe: !0,
			fog: !1,
			toneMapped: !1
		});
		super(r, i), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
	update() {
		this.light.updateWorldMatrix(!0, !1), this.color === void 0 ? this.material.color.copy(this.light.color) : this.material.color.set(this.color);
	}
}, Cm = /*@__PURE__*/ new q(), wm = /*@__PURE__*/ new Y(), Tm = /*@__PURE__*/ new Y(), Em = class extends Dr {
	constructor(e, t, n) {
		super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
		let r = new Fd(t);
		r.rotateY(Math.PI * .5), this.material = new Yr({
			wireframe: !0,
			fog: !1,
			toneMapped: !1
		}), this.color === void 0 && (this.material.vertexColors = !0);
		let i = r.getAttribute("position"), a = new Float32Array(i.count * 3);
		r.setAttribute("color", new ri(a, 3)), this.add(new Ai(r, this.material)), this.update();
	}
	dispose() {
		this.children[0].geometry.dispose(), this.children[0].material.dispose();
	}
	update() {
		let e = this.children[0];
		if (this.color !== void 0) this.material.color.set(this.color);
		else {
			let t = e.geometry.getAttribute("color");
			wm.copy(this.light.color), Tm.copy(this.light.groundColor);
			for (let e = 0, n = t.count; e < n; e++) {
				let r = e < n / 2 ? wm : Tm;
				t.setXYZ(e, r.r, r.g, r.b);
			}
			t.needsUpdate = !0;
		}
		this.light.updateWorldMatrix(!0, !1), e.lookAt(Cm.setFromMatrixPosition(this.light.matrixWorld).negate());
	}
}, Dm = class extends ql {
	constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
		n = new Y(n), r = new Y(r);
		let i = t / 2, a = e / t, o = e / 2, s = [], c = [];
		for (let e = 0, l = 0, u = -o; e <= t; e++, u += a) {
			s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
			let t = e === i ? n : r;
			t.toArray(c, l), l += 3, t.toArray(c, l), l += 3, t.toArray(c, l), l += 3, t.toArray(c, l), l += 3;
		}
		let l = new Z();
		l.setAttribute("position", new X(s, 3)), l.setAttribute("color", new X(c, 3));
		let u = new Fl({
			vertexColors: !0,
			toneMapped: !1
		});
		super(l, u), this.type = "GridHelper";
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, Om = class extends ql {
	constructor(e = 10, t = 16, n = 8, r = 64, i = 4473924, a = 8947848) {
		i = new Y(i), a = new Y(a);
		let o = [], s = [];
		if (t > 1) for (let n = 0; n < t; n++) {
			let r = n / t * (Math.PI * 2), c = Math.sin(r) * e, l = Math.cos(r) * e;
			o.push(0, 0, 0), o.push(c, 0, l);
			let u = n & 1 ? i : a;
			s.push(u.r, u.g, u.b), s.push(u.r, u.g, u.b);
		}
		for (let t = 0; t < n; t++) {
			let c = t & 1 ? i : a, l = e - e / n * t;
			for (let e = 0; e < r; e++) {
				let t = e / r * (Math.PI * 2), n = Math.sin(t) * l, i = Math.cos(t) * l;
				o.push(n, 0, i), s.push(c.r, c.g, c.b), t = (e + 1) / r * (Math.PI * 2), n = Math.sin(t) * l, i = Math.cos(t) * l, o.push(n, 0, i), s.push(c.r, c.g, c.b);
			}
		}
		let c = new Z();
		c.setAttribute("position", new X(o, 3)), c.setAttribute("color", new X(s, 3));
		let l = new Fl({
			vertexColors: !0,
			toneMapped: !1
		});
		super(c, l), this.type = "PolarGridHelper";
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, km = /*@__PURE__*/ new q(), Am = /*@__PURE__*/ new q(), jm = /*@__PURE__*/ new q(), Mm = class extends Dr {
	constructor(e, t, n) {
		super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
		let r = new Z();
		r.setAttribute("position", new X([
			-t,
			t,
			0,
			t,
			t,
			0,
			t,
			-t,
			0,
			-t,
			-t,
			0,
			-t,
			t,
			0
		], 3));
		let i = new Fl({
			fog: !1,
			toneMapped: !1
		});
		this.lightPlane = new Ul(r, i), this.add(this.lightPlane), r = new Z(), r.setAttribute("position", new X([
			0,
			0,
			0,
			0,
			0,
			1
		], 3)), this.targetLine = new Ul(r, i), this.add(this.targetLine), this.update();
	}
	dispose() {
		this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
	}
	update() {
		this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), km.setFromMatrixPosition(this.light.matrixWorld), Am.setFromMatrixPosition(this.light.target.matrixWorld), jm.subVectors(Am, km), this.lightPlane.lookAt(Am), this.color === void 0 ? (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)) : (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)), this.targetLine.lookAt(Am), this.targetLine.scale.z = jm.length();
	}
}, Nm = /*@__PURE__*/ new q(), Pm = /*@__PURE__*/ new Hi(), Fm = class extends ql {
	constructor(e) {
		let t = new Z(), n = new Fl({
			color: 16777215,
			vertexColors: !0,
			toneMapped: !1
		}), r = [], i = [], a = {};
		o("n1", "n2"), o("n2", "n4"), o("n4", "n3"), o("n3", "n1"), o("f1", "f2"), o("f2", "f4"), o("f4", "f3"), o("f3", "f1"), o("n1", "f1"), o("n2", "f2"), o("n3", "f3"), o("n4", "f4"), o("p", "n1"), o("p", "n2"), o("p", "n3"), o("p", "n4"), o("u1", "u2"), o("u2", "u3"), o("u3", "u1"), o("c", "t"), o("p", "c"), o("cn1", "cn2"), o("cn3", "cn4"), o("cf1", "cf2"), o("cf3", "cf4");
		function o(e, t) {
			s(e), s(t);
		}
		function s(e) {
			r.push(0, 0, 0), i.push(0, 0, 0), a[e] === void 0 && (a[e] = []), a[e].push(r.length / 3 - 1);
		}
		t.setAttribute("position", new X(r, 3)), t.setAttribute("color", new X(i, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update();
		let c = new Y(16755200), l = new Y(16711680), u = new Y(43775), d = new Y(16777215), f = new Y(3355443);
		this.setColors(c, l, u, d, f);
	}
	setColors(e, t, n, r, i) {
		let a = this.geometry.getAttribute("color");
		a.setXYZ(0, e.r, e.g, e.b), a.setXYZ(1, e.r, e.g, e.b), a.setXYZ(2, e.r, e.g, e.b), a.setXYZ(3, e.r, e.g, e.b), a.setXYZ(4, e.r, e.g, e.b), a.setXYZ(5, e.r, e.g, e.b), a.setXYZ(6, e.r, e.g, e.b), a.setXYZ(7, e.r, e.g, e.b), a.setXYZ(8, e.r, e.g, e.b), a.setXYZ(9, e.r, e.g, e.b), a.setXYZ(10, e.r, e.g, e.b), a.setXYZ(11, e.r, e.g, e.b), a.setXYZ(12, e.r, e.g, e.b), a.setXYZ(13, e.r, e.g, e.b), a.setXYZ(14, e.r, e.g, e.b), a.setXYZ(15, e.r, e.g, e.b), a.setXYZ(16, e.r, e.g, e.b), a.setXYZ(17, e.r, e.g, e.b), a.setXYZ(18, e.r, e.g, e.b), a.setXYZ(19, e.r, e.g, e.b), a.setXYZ(20, e.r, e.g, e.b), a.setXYZ(21, e.r, e.g, e.b), a.setXYZ(22, e.r, e.g, e.b), a.setXYZ(23, e.r, e.g, e.b), a.setXYZ(24, t.r, t.g, t.b), a.setXYZ(25, t.r, t.g, t.b), a.setXYZ(26, t.r, t.g, t.b), a.setXYZ(27, t.r, t.g, t.b), a.setXYZ(28, t.r, t.g, t.b), a.setXYZ(29, t.r, t.g, t.b), a.setXYZ(30, t.r, t.g, t.b), a.setXYZ(31, t.r, t.g, t.b), a.setXYZ(32, n.r, n.g, n.b), a.setXYZ(33, n.r, n.g, n.b), a.setXYZ(34, n.r, n.g, n.b), a.setXYZ(35, n.r, n.g, n.b), a.setXYZ(36, n.r, n.g, n.b), a.setXYZ(37, n.r, n.g, n.b), a.setXYZ(38, r.r, r.g, r.b), a.setXYZ(39, r.r, r.g, r.b), a.setXYZ(40, i.r, i.g, i.b), a.setXYZ(41, i.r, i.g, i.b), a.setXYZ(42, i.r, i.g, i.b), a.setXYZ(43, i.r, i.g, i.b), a.setXYZ(44, i.r, i.g, i.b), a.setXYZ(45, i.r, i.g, i.b), a.setXYZ(46, i.r, i.g, i.b), a.setXYZ(47, i.r, i.g, i.b), a.setXYZ(48, i.r, i.g, i.b), a.setXYZ(49, i.r, i.g, i.b), a.needsUpdate = !0;
	}
	update() {
		let e = this.geometry, t = this.pointMap;
		Pm.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Im("c", t, e, Pm, 0, 0, -1), Im("t", t, e, Pm, 0, 0, 1), Im("n1", t, e, Pm, -1, -1, -1), Im("n2", t, e, Pm, 1, -1, -1), Im("n3", t, e, Pm, -1, 1, -1), Im("n4", t, e, Pm, 1, 1, -1), Im("f1", t, e, Pm, -1, -1, 1), Im("f2", t, e, Pm, 1, -1, 1), Im("f3", t, e, Pm, -1, 1, 1), Im("f4", t, e, Pm, 1, 1, 1), Im("u1", t, e, Pm, .7, 1.1, -1), Im("u2", t, e, Pm, -.7, 1.1, -1), Im("u3", t, e, Pm, 0, 2, -1), Im("cf1", t, e, Pm, -1, 0, 1), Im("cf2", t, e, Pm, 1, 0, 1), Im("cf3", t, e, Pm, 0, -1, 1), Im("cf4", t, e, Pm, 0, 1, 1), Im("cn1", t, e, Pm, -1, 0, -1), Im("cn2", t, e, Pm, 1, 0, -1), Im("cn3", t, e, Pm, 0, -1, -1), Im("cn4", t, e, Pm, 0, 1, -1), e.getAttribute("position").needsUpdate = !0;
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
};
function Im(e, t, n, r, i, a, o) {
	Nm.set(i, a, o).unproject(r);
	let s = t[e];
	if (s !== void 0) {
		let e = n.getAttribute("position");
		for (let t = 0, n = s.length; t < n; t++) e.setXYZ(s[t], Nm.x, Nm.y, Nm.z);
	}
}
var Lm = /*@__PURE__*/ new On(), Rm = class extends ql {
	constructor(e, t = 16776960) {
		let n = new Uint16Array([
			0,
			1,
			1,
			2,
			2,
			3,
			3,
			0,
			4,
			5,
			5,
			6,
			6,
			7,
			7,
			4,
			0,
			4,
			1,
			5,
			2,
			6,
			3,
			7
		]), r = /* @__PURE__ */ new Float32Array(24), i = new Z();
		i.setIndex(new ri(n, 1)), i.setAttribute("position", new ri(r, 3)), super(i, new Fl({
			color: t,
			toneMapped: !1
		})), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
	}
	update(e) {
		if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && Lm.setFromObject(this.object), Lm.isEmpty()) return;
		let t = Lm.min, n = Lm.max, r = this.geometry.attributes.position, i = r.array;
		i[0] = n.x, i[1] = n.y, i[2] = n.z, i[3] = t.x, i[4] = n.y, i[5] = n.z, i[6] = t.x, i[7] = t.y, i[8] = n.z, i[9] = n.x, i[10] = t.y, i[11] = n.z, i[12] = n.x, i[13] = n.y, i[14] = t.z, i[15] = t.x, i[16] = n.y, i[17] = t.z, i[18] = t.x, i[19] = t.y, i[20] = t.z, i[21] = n.x, i[22] = t.y, i[23] = t.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere();
	}
	setFromObject(e) {
		return this.object = e, this.update(), this;
	}
	copy(e, t) {
		return super.copy(e, t), this.object = e.object, this;
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, zm = class extends ql {
	constructor(e, t = 16776960) {
		let n = new Uint16Array([
			0,
			1,
			1,
			2,
			2,
			3,
			3,
			0,
			4,
			5,
			5,
			6,
			6,
			7,
			7,
			4,
			0,
			4,
			1,
			5,
			2,
			6,
			3,
			7
		]), r = [
			1,
			1,
			1,
			-1,
			1,
			1,
			-1,
			-1,
			1,
			1,
			-1,
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			-1,
			-1,
			-1,
			1,
			-1,
			-1
		], i = new Z();
		i.setIndex(new ri(n, 1)), i.setAttribute("position", new X(r, 3)), super(i, new Fl({
			color: t,
			toneMapped: !1
		})), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
	}
	updateMatrixWorld(e) {
		let t = this.box;
		t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(e));
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, Bm = class extends Ul {
	constructor(e, t = 1, n = 16776960) {
		let r = n, i = [
			1,
			-1,
			0,
			-1,
			1,
			0,
			-1,
			-1,
			0,
			1,
			1,
			0,
			-1,
			1,
			0,
			-1,
			-1,
			0,
			1,
			-1,
			0,
			1,
			1,
			0
		], a = new Z();
		a.setAttribute("position", new X(i, 3)), a.computeBoundingSphere(), super(a, new Fl({
			color: r,
			toneMapped: !1
		})), this.type = "PlaneHelper", this.plane = e, this.size = t;
		let o = [
			1,
			1,
			0,
			-1,
			1,
			0,
			-1,
			-1,
			0,
			1,
			1,
			0,
			-1,
			-1,
			0,
			1,
			-1,
			0
		], s = new Z();
		s.setAttribute("position", new X(o, 3)), s.computeBoundingSphere(), this.add(new Ai(s, new Yr({
			color: r,
			opacity: .2,
			transparent: !0,
			depthWrite: !1,
			toneMapped: !1
		})));
	}
	updateMatrixWorld(e) {
		this.position.set(0, 0, 0), this.scale.set(.5 * this.size, .5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(e);
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
	}
}, Vm = /*@__PURE__*/ new q(), Hm, Um, Wm = class extends Dr {
	constructor(e = new q(0, 0, 1), t = new q(0, 0, 0), n = 1, r = 16776960, i = n * .2, a = i * .2) {
		super(), this.type = "ArrowHelper", Hm === void 0 && (Hm = new Z(), Hm.setAttribute("position", new X([
			0,
			0,
			0,
			0,
			1,
			0
		], 3)), Um = new Bu(0, .5, 1, 5, 1), Um.translate(0, -.5, 0)), this.position.copy(t), this.line = new Ul(Hm, new Fl({
			color: r,
			toneMapped: !1
		})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ai(Um, new Yr({
			color: r,
			toneMapped: !1
		})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, i, a);
	}
	setDirection(e) {
		if (e.y > .99999) this.quaternion.set(0, 0, 0, 1);
		else if (e.y < -.99999) this.quaternion.set(1, 0, 0, 0);
		else {
			Vm.set(e.z, 0, -e.x).normalize();
			let t = Math.acos(e.y);
			this.quaternion.setFromAxisAngle(Vm, t);
		}
	}
	setLength(e, t = e * .2, n = t * .2) {
		this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
	}
	setColor(e) {
		this.line.material.color.set(e), this.cone.material.color.set(e);
	}
	copy(e) {
		return super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
	}
	dispose() {
		this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
	}
}, Gm = class extends ql {
	constructor(e = 1) {
		let t = [
			0,
			0,
			0,
			e,
			0,
			0,
			0,
			0,
			0,
			0,
			e,
			0,
			0,
			0,
			0,
			0,
			0,
			e
		], n = [
			1,
			0,
			0,
			1,
			.6,
			0,
			0,
			1,
			0,
			.6,
			1,
			0,
			0,
			0,
			1,
			0,
			.6,
			1
		], r = new Z();
		r.setAttribute("position", new X(t, 3)), r.setAttribute("color", new X(n, 3));
		let i = new Fl({
			vertexColors: !0,
			toneMapped: !1
		});
		super(r, i), this.type = "AxesHelper";
	}
	setColors(e, t, n) {
		let r = new Y(), i = this.geometry.attributes.color.array;
		return r.set(e), r.toArray(i, 0), r.toArray(i, 3), r.set(t), r.toArray(i, 6), r.toArray(i, 9), r.set(n), r.toArray(i, 12), r.toArray(i, 15), this.geometry.attributes.color.needsUpdate = !0, this;
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, Km = class {
	constructor() {
		this.type = "ShapePath", this.color = new Y(), this.subPaths = [], this.currentPath = null;
	}
	moveTo(e, t) {
		return this.currentPath = new Iu(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
	}
	lineTo(e, t) {
		return this.currentPath.lineTo(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		return this.currentPath.quadraticCurveTo(e, t, n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		return this.currentPath.bezierCurveTo(e, t, n, r, i, a), this;
	}
	splineThru(e) {
		return this.currentPath.splineThru(e), this;
	}
	toShapes(e) {
		function t(e) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n], i = new Yu();
				i.curves = r.curves, t.push(i);
			}
			return t;
		}
		function n(e, t) {
			let n = t.length, r = !1;
			for (let i = n - 1, a = 0; a < n; i = a++) {
				let n = t[i], o = t[a], s = o.x - n.x, c = o.y - n.y;
				if (Math.abs(c) > 2 ** -52) {
					if (c < 0 && (n = t[a], s = -s, o = t[i], c = -c), e.y < n.y || e.y > o.y) continue;
					if (e.y === n.y) {
						if (e.x === n.x) return !0;
					} else {
						let t = c * (e.x - n.x) - s * (e.y - n.y);
						if (t === 0) return !0;
						if (t < 0) continue;
						r = !r;
					}
				} else {
					if (e.y !== n.y) continue;
					if (o.x <= e.x && e.x <= n.x || n.x <= e.x && e.x <= o.x) return !0;
				}
			}
			return r;
		}
		let r = Od.isClockWise, i = this.subPaths;
		if (i.length === 0) return [];
		let a, o, s, c = [];
		if (i.length === 1) return o = i[0], s = new Yu(), s.curves = o.curves, c.push(s), c;
		let l = !r(i[0].getPoints());
		l = e ? !l : l;
		let u = [], d = [], f = [], p = 0, m;
		d[p] = void 0, f[p] = [];
		for (let t = 0, n = i.length; t < n; t++) o = i[t], m = o.getPoints(), a = r(m), a = e ? !a : a, a ? (!l && d[p] && p++, d[p] = {
			s: new Yu(),
			p: m
		}, d[p].s.curves = o.curves, l && p++, f[p] = []) : f[p].push({
			h: o,
			p: m[0]
		});
		if (!d[0]) return t(i);
		if (d.length > 1) {
			let e = !1, t = 0;
			for (let e = 0, t = d.length; e < t; e++) u[e] = [];
			for (let r = 0, i = d.length; r < i; r++) {
				let i = f[r];
				for (let a = 0; a < i.length; a++) {
					let o = i[a], s = !0;
					for (let i = 0; i < d.length; i++) n(o.p, d[i].p) && (r !== i && t++, s ? (s = !1, u[i].push(o)) : e = !0);
					s && u[r].push(o);
				}
			}
			t > 0 && e === !1 && (f = u);
		}
		let h;
		for (let e = 0, t = d.length; e < t; e++) {
			s = d[e].s, c.push(s), h = f[e];
			for (let e = 0, t = h.length; e < t; e++) s.holes.push(h[e].h);
		}
		return c;
	}
}, qm = class extends bt {
	constructor(e, t = null) {
		super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
			LEFT: null,
			MIDDLE: null,
			RIGHT: null
		}, this.touches = {
			ONE: null,
			TWO: null
		};
	}
	connect() {}
	disconnect() {}
	dispose() {}
	update() {}
}, Jm = class extends bn {
	constructor(e = 1, t = 1, n = 1, r = {}) {
		console.warn("THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the \"count\" parameter to enable MRT."), super(e, t, {
			...r,
			count: n
		}), this.isWebGLMultipleRenderTargets = !0;
	}
	get texture() {
		return this.textures;
	}
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "170" } })), typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "170");
// src/rack-layout.js
var Ym = {
	width: 2,
	depth: .8,
	height: 1.8
}, Xm = [
	.2,
	.63,
	1.06,
	1.49
], Zm = {
	id: "C",
	x: 4.51,
	z: -.44,
	width: 1.88,
	depth: .67,
	height: 1.8
}, Qm = {
	minX: -4.39,
	maxX: 6.09,
	minZ: -2.85,
	maxZ: 2.85,
	x: .85,
	z: 0,
	width: 10.48,
	depth: 5.7
}, $m = ["A", "B"].flatMap((e, t) => [
	-2.7,
	-.24,
	2.22
].map((n, r) => ({
	id: e + "-0" + (r + 1),
	x: n,
	z: t === 0 ? 1.22 : -1.22,
	...Ym
}))), eh = /* @__PURE__ */ new Set([
	3,
	6,
	35,
	65,
	70,
	98,
	130,
	163
]), th = /* @__PURE__ */ new Set([
	4,
	38,
	75,
	108,
	146,
	177
]);
function nh(e) {
	return (e.location === Zm.id ? "储藏柜" : e.location + " " + (e.hand === 1 ? "前侧" : "背侧")) + " · " + e.level + " 层 " + e.column + " 号";
}
function rh() {
	let e = new Map([...$m, Zm].map((e) => [e.id, e])), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = 0;
	for (let i of e.values()) {
		let e = i === Zm;
		for (let a of e ? [1] : [1, -1]) for (let o = Xm.length; o >= 1; --o) for (let s = 1; s <= 4; s += 1) {
			let c = a === 1 ? "front" : "back", l = [
				i.id,
				c,
				o,
				s
			].join("/"), u = e ? .445 : .47;
			if (t.set(l, {
				key: l,
				location: i.id,
				hand: a,
				level: o,
				column: s,
				spacing: u,
				x: i.x + a * (s - 2.5) * u,
				y: Xm[o - 1],
				z: i.z + (e ? .025 : a * .205),
				edge: i.z + a * i.depth / 2,
				depth: e ? .55 : .39
			}), !e) {
				r += 1;
				let e = (r + Math.floor(r / 8)) % 7 < 2 ? "desktop" : "laptop", t = (e === "desktop" ? "DT-" : "LT-") + String(r).padStart(3, "0"), i = eh.has(r) ? "testing" : th.has(r) ? "off" : "ready";
				n.set(l, {
					id: t,
					kind: e,
					state: i
				});
			}
		}
	}
	function i(e, r) {
		if (e === r || !t.has(r) || !n.has(e)) return null;
		let i = n.get(e), a = n.get(r);
		return a ? n.set(e, a) : n.delete(e), n.set(r, i), {
			device: i.id,
			from: e,
			to: r,
			swapped: a?.id ?? null
		};
	}
	return {
		locations: e,
		positions: t,
		assignments: n,
		move: i
	};
}
// src/rack-geometry.js
var ih = {
	slab: "#716960",
	floor: "#bbb0a0",
	floorRim: "#9d9286",
	tileJoint: "#b4ac9f",
	boundary: "#9a816a",
	cornerMark: "#a77e54",
	aisleStripe: "#837c6e",
	bayLine: "#a99985",
	upright: "#404649",
	rackFoot: "#252d2d",
	uprightCap: "#777877",
	mountingHole: "#343938",
	sideBrace: "#4f5858",
	shelf: "#777c7b",
	beam: "#4b5353",
	beamLip: "#717974",
	beamPlate: "#444a49",
	shelfDivider: "#686c65",
	cabinetSide: "#76736b",
	cabinetBack: "#66635b",
	cabinetTop: "#afaa9d",
	cabinetBase: "#635e55",
	cabinetShelf: "#a29a8b",
	cabinetShelfEdge: "#897459",
	cabinetDivider: "#8b8577",
	cabinetTrim: "#a88b62",
	screenBezel: "#233b41",
	laptopDisplay: "#363d3d",
	laptopDisplayPane: "#424a47",
	laptopDisplayTop: "#5f7775",
	laptopDisplayBars: "#778d87",
	desktopDisplay: "#494442",
	desktopDisplayTop: "#c6a875",
	desktopDisplayBars: "#aa876c"
};
function ah() {
	let { Vector3: e, Box3: t, Color: n, Euler: i } = r, a = new Ni(1, 1, 1), o = a.toNonIndexed();
	a.dispose();
	let s = o.getAttribute("position"), c = o.getAttribute("normal"), l = (e, t, n, r, i, a, o, s = 0) => ({
		x: e,
		y: t,
		z: n,
		w: r,
		h: i,
		d: a,
		color: o,
		tilt: s
	}), u = [], d = [], f = [], p = [];
	function m(t) {
		let r = new Float32Array(t.length * s.count * 3), a = new Float32Array(r.length), o = new Float32Array(r.length), l = new n(), u = new e(), d = new i(0, 0, 0), f = 0;
		for (let { x: e, y: n, z: i, w: p, h: m, d: h, color: g, tilt: _ } of t) {
			l.set(ih[g] ?? g), d.x = _;
			for (let t = 0; t < s.count; t += 1) u.fromBufferAttribute(s, t), u.set(u.x * p, u.y * m, u.z * h).applyEuler(d), r.set([
				u.x + e,
				u.y + n,
				u.z + i
			], f), u.fromBufferAttribute(c, t).applyEuler(d).toArray(a, f), l.toArray(o, f), f += 3;
		}
		let p = new Z();
		return p.setAttribute("position", new ri(r, 3)), p.setAttribute("normal", new ri(a, 3)), p.setAttribute("color", new ri(o, 3)), p;
	}
	function h(n, r, i, a, o, s, c, u, d) {
		n.push(l(i, a, o, s, c, u, d)), r.push(new t().setFromCenterAndSize(new e(i, a, o), new e(s, c, u)));
	}
	function g() {
		let { x: e, z: t, minX: n, maxX: r, minZ: i, maxZ: a, width: o, depth: s } = Qm, c = [
			l(e, -.15, t, o, .22, s, "slab"),
			l(e, -.025, t, o, .05, s, "floor"),
			l(e, -.044, a + .003, o, .018, .008, "floorRim"),
			l(r + .002, -.044, t, .008, .018, s, "floorRim")
		], u = .5 * Math.max(1, Math.ceil(Math.max(o, s) / 48));
		for (let e = n + .24; e < r - .14; e += u) c.push(l(e, .001, t, .006, .003, s - .18, "tileJoint"));
		for (let t = i + .1; t <= a - .099; t += u) c.push(l(e, .001, t, o - .24, .003, .006, "tileJoint"));
		for (let s of [i + .19, a - .19]) {
			c.push(l(e, .003, s, o - .36, .004, .017, "boundary"));
			for (let i of [n + .41, r - .41]) c.push(l(i, .005, s, .44, .005, .027, "cornerMark")), c.push(l(i + (i < e ? -.214 : .214), .005, s + (s < t ? .2 : -.2), .027, .005, .4, "cornerMark"));
		}
		let d = .43 * Math.max(1, Math.ceil(o / 48));
		for (let e = n + .84; e <= r - 2.54; e += d) c.push(l(e, .006, 0, .205, .005, .019, "aisleStripe"));
		for (let e of [
			-3.82,
			3.4,
			5.61
		]) c.push(l(e, .005, t, .012, .004, s - 1.22, "bayLine"));
		return m(c);
	}
	function _() {
		let { width: e, depth: t, height: n } = Ym;
		for (let r of [-e / 2 + .024, e / 2 - .024]) {
			for (let e of [-t / 2 + .024, t / 2 - .024]) {
				h(u, f, r, n / 2, e, .048, n, .048, "upright"), u.push(l(r, .022, e, .062, .044, .058, "rackFoot")), u.push(l(r, n - .014, e, .049, .027, .049, "uprightCap"));
				let t = Math.sign(e);
				for (let i = .09; i < n - .05; i += .071) u.push(l(r, i, e + t * .0245, .011, .018, .002, "mountingHole"));
			}
			for (let e of [.087, 1.746]) u.push(l(r, e, 0, .036, .032, .72, "sideBrace"));
		}
		for (let e of Xm) {
			h(u, f, 0, e - .021, 0, 1.955, .042, .758, "shelf");
			for (let t of [1, -1]) {
				u.push(l(0, e - .039, t * .383, 1.938, .063, .034, "beam")), u.push(l(0, e - .015, t * .4, 1.915, .011, .004, "beamLip"));
				for (let n = 1; n <= 4; n += 1) {
					let r = (n - 2.5) * .47;
					u.push(l(r, e - .043, t * .402, .134, .025, .005, "beamPlate"));
				}
			}
			u.push(l(0, e + .002, 0, 1.87, .004, .013, "shelfDivider"));
		}
	}
	function v() {
		let { x: e, z: t, width: n, depth: r, height: i } = Zm;
		for (let a of [1, -1]) h(d, p, e + a * (n / 2 - .028), i / 2, t, .056, i, r, "cabinetSide");
		h(d, p, e, i / 2, t - r / 2 + .022, n - .1, i, .044, "cabinetBack"), h(d, p, e, i - .029, t, n, .058, r, "cabinetTop"), h(d, p, e, .051, t, n, .102, r, "cabinetBase");
		for (let i of Xm) h(d, p, e, i - .025, t, n - .08, .05, r - .025, "cabinetShelf"), d.push(l(e, i - .025, t + r / 2, n - .08, .045, .012, "cabinetShelfEdge"));
		for (let n of [
			-1,
			0,
			1
		]) h(d, p, e + n * .445, .975, t, .027, 1.52, r - .067, "cabinetDivider");
		d.push(l(e, i - .062, t + r / 2, n - .03, .025, .012, "cabinetTrim"));
	}
	let y = {
		laptop: {
			x: 0,
			y: .028,
			z: -.11,
			width: .339,
			height: .221,
			angle: -.16
		},
		desktop: {
			x: -.065,
			y: .085,
			z: -.083,
			width: .244,
			height: .164,
			angle: -.07
		}
	};
	function b(e, t, n, r, i, a, o, s, c) {
		let { x: u, y: d, z: f, angle: p } = y[t], m = r * Math.cos(p) - i * Math.sin(p), h = r * Math.sin(p) + i * Math.cos(p);
		e.push(l(u + n, d + m, f + h, a, o, s, c, p));
	}
	function x(e, t) {
		let { width: n, height: r } = y[t], i = t === "desktop", a = (...n) => b(e, t, ...n);
		a(0, r / 2, 0, n, r, .015, "screenBezel"), a(0, r / 2, -.008, n * .95, r * .92, .004, i ? "#76867e" : "#647c80"), a(0, r * .53, .009, n * .92, r * .84, .003, i ? "desktopDisplay" : "laptopDisplay"), a(0, r * .89, .011, n * .92, r * .12, .002, i ? "desktopDisplayTop" : "laptopDisplayTop"), a(-n * .247, r * .49, .011, n * .38, r * .6, .002, i ? "#83795a" : "laptopDisplayPane"), a(n * .205, r * .72, .011, n * .42, r * .065, .002, i ? "#ddbb7c" : "#8ebbb1");
		for (let e = 0; e < 4; e += 1) {
			let t = [
				.14,
				.22,
				.18,
				.27
			][e];
			a(n * (.12 + e * .068), r * (.2 + t / 2), .012, n * .036, r * t, .003, i ? "desktopDisplayBars" : "laptopDisplayBars");
		}
		a(-n * .258, r * .66, .012, n * .22, r * .04, .003, "#b3ccc0"), a(-n * .285, r * .56, .012, n * .16, r * .03, .003, "#8eafa4"), a(-n * .254, r * .49, .012, n * .23, r * .03, .003, "#8eafa4");
	}
	function S() {
		let e = [
			l(0, .011, .009, .342, .02, .253, "#789091"),
			l(0, .009, .135, .308, .009, .004, "#b4bfb2"),
			l(0, .022, -.017, .303, .004, .13, "#3d5359"),
			l(0, .024, .091, .106, .004, .057, "#a0ada5"),
			l(-.12, .027, -.111, .055, .019, .022, "#455f63"),
			l(.12, .027, -.111, .055, .019, .022, "#455f63")
		];
		for (let t = 0; t < 4; t += 1) for (let n = 0; n < 10; n += 1) e.push(l((n - 4.5) * .028, .026, -.062 + t * .027, .023, .004, .018, "#6e8384"));
		return x(e, "laptop"), e;
	}
	function C() {
		let e = [
			l(-.063, .01, -.065, .137, .021, .1, "#5d7174"),
			l(-.063, .067, -.081, .031, .111, .025, "#6e8484"),
			l(-.047, .012, .094, .237, .023, .079, "#40575b"),
			l(-.047, .025, .091, .216, .006, .052, "#70877f"),
			l(.133, .013, .1, .031, .026, .049, "#647f83"),
			l(.153, .118, -.049, .094, .232, .145, "#586b67"),
			l(.153, .118, .025, .084, .217, .009, "#374b4b"),
			l(.153, .203, .031, .054, .03, .007, "#668481"),
			l(.153, .187, .034, .01, .008, .008, "#f0c478")
		];
		for (let t = 0; t < 4; t += 1) e.push(l(.153, .051 + t * .017, .031, .055, .005, .005, "#768d85"));
		return x(e, "desktop"), e;
	}
	function w(e, t) {
		let { width: n, height: r } = y[e], i = [], a = (...t) => b(i, e, ...t);
		if (t === "off") a(0, r * .53, .017, n * .93, r * .86, .003, "#242b2e");
		else {
			let e = t === "failed" ? {
				glass: "#ab353b",
				light: "#ffc1af",
				text: "#ffe9dc",
				edge: "#ff765e"
			} : {
				glass: "#087c63",
				light: "#70f1c4",
				text: "#b5f5da",
				edge: "#48e9ad"
			};
			a(0, r * .53, .017, n * .93, r * .86, .003, e.glass), a(0, r * .82, .02, n * .76, r * .075, .003, e.light), a(-n * .16, r * .5, .021, n * .35, r * .14, .003, e.text), a(-n * .22, r * .29, .021, n * .23, r * .047, .003, e.light), a(n * .25, r * .43, .021, n * .09, r * .31, .003, e.light), a(0, r + .005, 0, n * .73, .012, .026, e.edge);
		}
		return m(i);
	}
	_(), v();
	let T = [
		"testing",
		"off",
		"failed"
	], E = {
		floor: g(),
		cabinet: m(d),
		rack: m(u),
		rackBlockers: f,
		fixedBlockers: p,
		tray: m([l(0, -.016, 0, 1.96, .032, .353, "shelf")]),
		devices: {
			laptop: m(S()),
			desktop: m(C())
		},
		displays: Object.fromEntries(["laptop", "desktop"].map((e) => [e, Object.fromEntries(T.map((t) => [t, w(e, t)]))]))
	};
	return o.dispose(), E;
}
// src/rack-renderer.js
var { Vector3: oh, Box3: sh, MathUtils: ch } = r, lh = {
	x: .9,
	y: .4,
	z: 0,
	yaw: .51,
	pitch: .62,
	width: 12.94,
	height: 6.25,
	zoom: 1
}, uh = {
	selected: "#d35a31",
	placement: "#a34726",
	swap: "#a56b1c"
}, dh = {
	testing: "#0bb483",
	off: "#535f65",
	failed: "#dc4845"
};
function fh() {
	let e = document.createElement("canvas");
	e.width = e.height = 96;
	let t = e.getContext("2d"), n = t.createRadialGradient(48, 48, 13, 48, 48, 47);
	n.addColorStop(0, "rgba(8,17,20,.68)"), n.addColorStop(.55, "rgba(8,17,20,.48)"), n.addColorStop(1, "rgba(8,17,20,0)"), t.fillStyle = n, t.fillRect(0, 0, 96, 96);
	let r = new su(e);
	return r.colorSpace = Ze, r;
}
function ph(e, t) {
	let n = document.createElement("canvas");
	n.width = 256, n.height = 64;
	let r = n.getContext("2d");
	r.fillStyle = t ? "#fcebdd" : "#353029", r.strokeStyle = t ? "#fcebdd" : "#9a8a78", r.lineWidth = 3, r.beginPath(), r.roundRect(3, 3, 250, 58, 8), r.fill(), r.stroke(), r.font = "600 39px \"Cascadia Mono\", Consolas, monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = t ? "#7e301c" : "#fff8ec", r.fillText(e, 128, 34, 238);
	let i = new su(n);
	i.colorSpace = Ze;
	let a = new Hc(new Oc({
		map: i,
		alphaTest: .4,
		toneMapped: !1
	}));
	return a.scale.set(.307, .077, 1), a;
}
function mh(e) {
	e.removeFromParent(), e.material.map.dispose(), e.material.dispose();
}
function hh(e, t, { locations: n, positions: r, assignments: i }, a) {
	let o = new xc({
		canvas: e,
		antialias: !0
	});
	o.setPixelRatio(Math.min(devicePixelRatio, 1.8)), o.toneMapping = 4, o.toneMappingExposure = 1.06, o.shadowMap.enabled = !0, o.shadowMap.autoUpdate = !1;
	let s = new wc();
	s.background = new Y("#ede8df");
	let c = new va(-6, 6, 3, -3, .1, 50), l = new Ki(62, 1, .035, 50), u = new Vf("#fcf7ee", "#7d756a", 1.27), d = new ep("#fff2e2", 2.72);
	d.position.set(-4.7, 8.8, 5.6), d.castShadow = !0, d.shadow.mapSize.set(1536, 1536), d.shadow.radius = 3, d.shadow.normalBias = .024, d.shadow.bias = -13e-5, Object.assign(d.shadow.camera, {
		left: -7.5,
		right: 7.5,
		bottom: -6,
		top: 6,
		far: 28
	}), d.shadow.camera.updateProjectionMatrix();
	let f = new ep("#e9f0f5", .44);
	f.position.set(4, 3, -5), s.add(u, d, d.target, f);
	let p = ah(), m = new Yd({
		vertexColors: !0,
		roughness: .76,
		metalness: .12
	}), h = new Yr({
		vertexColors: !0,
		toneMapped: !1
	}), g = new Yr({
		map: fh(),
		transparent: !0,
		depthWrite: !1,
		toneMapped: !1
	}), _ = new Ai(p.floor, m);
	_.receiveShadow = !0, s.add(_);
	let v = new Map([...n.values()].map((e) => {
		let t = new Ai(e === Zm ? p.cabinet : p.rack, m);
		e !== Zm && t.position.set(e.x, 0, e.z), t.castShadow = t.receiveShadow = !0;
		let n = new Ai(new sa(e.width + .68, e.depth + .42), g);
		return n.rotation.x = -Math.PI / 2, n.position.set(e.x + .13, .008, e.z - .09), s.add(t, n), [e.id, {
			mesh: t,
			contact: n
		}];
	})), y = [1, -1].map((e) => {
		let t = new Ai(p.tray, m);
		return t.castShadow = t.receiveShadow = !0, t.visible = !1, s.add(t), {
			mesh: t,
			hand: e
		};
	}), b = new Ni(.419, .295, .369), x = new Ju(b);
	b.dispose();
	let S = new ql(x, new Fl({
		color: uh.selected,
		toneMapped: !1
	})), C = new ql(x, new Fl({
		color: uh.placement,
		toneMapped: !1
	}));
	S.visible = C.visible = !1, s.add(S, C);
	let w = [];
	function T(e, t, n = !1) {
		let r = new gl(e, t, i.size);
		return r.instanceMatrix.setUsage(lt), r.frustumCulled = !1, r.castShadow = r.receiveShadow = n, w.push(r), s.add(r), r;
	}
	let E = Object.fromEntries(Object.entries(p.devices).map(([e, t]) => [e, T(t, m, !0)])), D = Object.fromEntries(Object.entries(p.displays).map(([e, t]) => [e, Object.fromEntries(Object.entries(t).map(([e, t]) => [e, T(t, h)]))])), O = new Ni(1, 1, 1), k = Object.fromEntries(Object.entries(dh).map(([e, t]) => [e, T(O, new Yr({
		color: t,
		toneMapped: !1
	}))])), A = new Dr(), j = { ...lh }, M = { ...lh }, N = matchMedia("(prefers-reduced-motion: reduce)"), P = new im(), F = new U(), I = new oh(), ee = new sh(new oh(Qm.minX, -.05, Qm.minZ), new oh(Qm.maxX, 0, Qm.maxZ)), te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map();
	for (let e of n.values()) te.set(e.id, new sh().setFromCenterAndSize(new oh(e.x, e.height / 2, e.z), new oh(e.width, e.height, e.depth))), ne.set(e.id, e === Zm ? p.fixedBlockers : p.rackBlockers.map((t) => t.clone().translate(new oh(e.x, 0, e.z))));
	let re = new Map([...r.values()].map((e) => [e.key, new sh()])), ie = (e) => !L || e === L.location, ae = (e) => L?.location === e.location && L.level === e.level, L = null, oe = !1, se = 0, ce, le = null, ue = 0, de = 0, fe = null, pe = null, R = null, me = [], he = "", ge = 0, z = 0, _e = 0, B = 0, V = lh.height, ve = !1, ye = !0, be = !1;
	function xe(e, t) {
		let n = r.get(t);
		e.visible = !!(n && ie(n.location)), e.visible && e.position.set(n.x, n.y + .151, n.z + (ae(n) ? se * n.hand : 0));
	}
	function Se() {
		for (let e of w) e.count = 0;
		for (let [e, { mesh: t, contact: n }] of v) t.visible = n.visible = ie(e);
		let e = n.get(L?.location);
		for (let [e, t] of te) {
			let r = n.get(e), i = r.depth / 2 + (e === L?.location ? se : 0);
			t.min.z = r.z - i, t.max.z = r.z + i;
		}
		for (let { hand: t, mesh: n } of y) n.visible = !!(e && se > .01), n.visible && n.position.set(e.x, Xm[L.level - 1], e.z + t * (.205 + se));
		for (let [e, t] of r) {
			let n = ae(t) ? se * t.hand : 0;
			re.get(e).setFromCenterAndSize(new oh(t.x, t.y + .148, t.z + n), new oh(t.spacing - .018, .288, t.depth - .004));
			let r = i.get(e);
			if (!r || !ie(t.location)) continue;
			A.scale.set(1, 1, 1), A.rotation.y = t.hand === 1 ? 0 : Math.PI, A.position.set(t.x, t.y + .002, t.z + n), A.updateMatrix();
			let a = E[r.kind];
			a.setMatrixAt(a.count++, A.matrix);
			let o = D[r.kind][r.state];
			if (o) {
				o.setMatrixAt(o.count++, A.matrix);
				let e = k[r.state];
				A.position.set(t.x, t.y - .041, t.edge + n + t.hand * .015), A.scale.set(t.spacing - .13, r.state === "off" ? .025 : .043, .017), A.updateMatrix(), e.setMatrixAt(e.count++, A.matrix);
			}
		}
		for (let e of w) e.instanceMatrix.needsUpdate = !0;
		xe(S, pe), xe(C, R), o.shadowMap.needsUpdate = !0, Ee();
	}
	function Ce() {
		let e = n.get(fe), t = le && e ? Math.sign(le.z - e.z) || 1 : Math.cos(j.yaw) >= 0 ? 1 : -1, a = [...i.keys()].filter((n) => {
			let i = r.get(n);
			return ie(i.location) && (L ? ae(i) : n === pe || e && i.location === e.id && (e === Zm || i.hand === t));
		}), o = JSON.stringify([
			a.map((e) => [
				e,
				i.get(e).id,
				e === pe
			]),
			L?.location,
			L?.level
		]);
		if (o !== he) {
			he = o;
			for (let { sprite: e } of me) mh(e);
			me = a.map((e) => {
				let t = ph(i.get(e).id, e === pe);
				return s.add(t), {
					slot: r.get(e),
					sprite: t
				};
			});
		}
		for (let { slot: e, sprite: t } of me) ae(e) ? t.position.set(e.x, e.y + .346, e.z + e.hand * se) : t.position.set(e.x, e.y - .055, e.edge + e.hand * .037);
	}
	function we(e, t) {
		let r = .18;
		return e < Qm.minX + r || e > Qm.maxX - r || t < Qm.minZ + r || t > Qm.maxZ - r ? !1 : [...n.values()].every((n) => Math.hypot(Math.max(0, Math.abs(e - n.x) - n.width / 2), Math.max(0, Math.abs(t - n.z) - n.depth / 2)) >= r);
	}
	function Te(e) {
		if (ge = 0, !ye || be || !t.clientWidth || !t.clientHeight) {
			z = 0;
			return;
		}
		let r = z ? Math.min((e - z) / 1e3, .05) : 0;
		(_e !== t.clientWidth || B !== t.clientHeight) && (_e = t.clientWidth, B = t.clientHeight, o.setSize(_e, B, !1));
		let i = ve && !le && !L && !N.matches;
		i && (M.yaw += r * .22);
		for (let e of Object.keys(j)) {
			let t = M[e] - j[e];
			Math.abs(t) > .001 && !N.matches ? (j[e] += t * .25, i = !0) : j[e] = M[e];
		}
		let u = oe ? .52 : 0;
		se !== u && (se = N.matches || Math.abs(u - se) < .009 ? u : se + (u - se) * .25, !oe && se === 0 && (L = null), Se(), i ||= se !== u);
		let d = _e / B;
		if (V = Math.max(j.height, j.width / d) / j.zoom, c.left = -V * d / 2, c.right = V * d / 2, c.top = V / 2, c.bottom = -V / 2, c.position.set(j.x + Math.sin(j.yaw) * Math.cos(j.pitch) * 16, j.y + Math.sin(j.pitch) * 16, j.z + Math.cos(j.yaw) * Math.cos(j.pitch) * 16), c.lookAt(j.x, j.y, j.z), c.updateProjectionMatrix(), le) {
			if (ue || de) {
				let { yaw: e } = le, t = r * 1.55 / Math.hypot(ue, de), n = (Math.sin(e) * de - Math.cos(e) * ue) * t, a = (Math.cos(e) * de + Math.sin(e) * ue) * t;
				we(le.x + n, le.z) && (le.x += n), we(le.x, le.z + a) && (le.z += a), i = !0;
			}
			let { x: e, z: t, yaw: n, pitch: a } = le, o = Math.cos(a);
			l.position.set(e, 1.62, t), l.lookAt(e + Math.sin(n) * o, 1.62 + Math.sin(a), t + Math.cos(n) * o), l.aspect = d, l.updateProjectionMatrix();
		}
		let f = le ? l : c;
		Ce(), o.render(s, f);
		for (let [e, t] of a) {
			let r = n.get(e);
			I.set(r.x, r.height + .11, r.z).project(f), t.hidden = !!(le || !ie(e) || Math.abs(I.x) > .95 || Math.abs(I.y) > .91 || Math.abs(I.z) > 1), t.style.left = (I.x + 1) * 50 + "%", t.style.top = (1 - I.y) * 50 + "%";
		}
		z = i ? e : 0, i && Ee();
	}
	function Ee() {
		!ge && ye && !be && (ge = requestAnimationFrame(Te));
	}
	let De = new ResizeObserver(Ee);
	De.observe(t);
	function Oe(t, n) {
		let i = e.getBoundingClientRect();
		if (t < i.left || t > i.right || n < i.top || n > i.bottom || !i.width || !i.height) return {};
		F.set(2 * (t - i.left) / i.width - 1, 1 - 2 * (n - i.top) / i.height), P.setFromCamera(F, le ? l : c);
		let a = P.ray, o = (e) => a.intersectBox(e, I) ? a.origin.distanceToSquared(I) : Infinity, s = null, u = Infinity;
		for (let [e, t] of te) {
			if (!ie(e)) continue;
			let n = o(t);
			n < u && (u = n, s = e);
		}
		let d = o(ee);
		for (let [e, t] of ne) if (ie(e)) for (let e of t) d = Math.min(d, o(e));
		let f = null;
		for (let [e, t] of re) {
			if (r.get(e).location !== s) continue;
			let n = o(t);
			Number.isFinite(n) && n < d + .001 && (f = e, d = n);
		}
		return {
			location: s,
			slot: f
		};
	}
	function ke(e) {
		let t = e.yaw - j.yaw;
		Object.assign(M, e, { yaw: j.yaw + Math.atan2(Math.sin(t), Math.cos(t)) }), Ee();
	}
	function Ae(e) {
		if (e && e.location !== Zm.id) {
			ce = { ...M }, L = e, oe = !0;
			let t = n.get(e.location);
			ke({
				x: t.x,
				y: e.y + .03,
				z: t.z,
				yaw: e.hand === 1 ? .38 : Math.PI - .38,
				pitch: .79,
				width: 3.08,
				height: 2.46,
				zoom: 1
			});
		} else oe = !1, ce && ke(ce), ce = null, se === 0 && (L = null);
		Se();
	}
	return Se(), {
		pick: Oe,
		sync: Se,
		showLayer: Ae,
		select(e) {
			pe = e, xe(S, e), Ee();
		},
		target(e, t) {
			R = e, xe(C, e), C.material.color.set(t ? uh.swap : uh.placement), Ee();
		},
		focus(e) {
			fe = e;
			let t = n.get(e);
			if (!t) {
				ke(lh);
				return;
			}
			let r = t !== Zm && Math.cos(j.yaw) < 0;
			ke({
				x: t.x,
				y: .91,
				z: t.z,
				yaw: r ? Math.PI - .16 : .18,
				pitch: .18,
				width: 3.04,
				height: 2.54,
				zoom: 1
			});
		},
		orbit(e, t) {
			le ? (le.yaw -= e * .005, le.pitch = ch.clamp(le.pitch - t * .0045, -1.18, 1.18)) : (M.yaw -= e * .008, M.pitch = ch.clamp(M.pitch + t * .006, .11, 1.37)), Ee();
		},
		pan(e, t) {
			let n = V / Math.max(B, 1), { yaw: r } = M;
			M.x -= (Math.cos(r) * e + Math.sin(r) * t) * n, M.z += (Math.sin(r) * e - Math.cos(r) * t) * n, Ee();
		},
		zoom(e) {
			le || (M.zoom = ch.clamp(M.zoom * e, .55, 4)), Ee();
		},
		walk(e) {
			let t = fe === Zm.id ? 3.04 : n.get(fe)?.x ?? -2.7;
			le = e ? {
				x: t,
				z: 0,
				yaw: fe?.startsWith("B") ? Math.PI : 0,
				pitch: 0
			} : null, ue = de = 0, Ee();
		},
		move(e, t) {
			ue = e, de = t, Ee();
		},
		rotate(e) {
			ve = e, Ee();
		},
		visible(e) {
			ye = e, !e && ge && (cancelAnimationFrame(ge), ge = 0, z = 0), Ee();
		},
		dispose() {
			be = !0, ge && cancelAnimationFrame(ge), De.disconnect();
			for (let { sprite: e } of me) mh(e);
			let e = /* @__PURE__ */ new Set([g.map, d.shadow]);
			s.traverse((t) => {
				t.geometry && e.add(t.geometry), t.material && e.add(t.material), t.isInstancedMesh && t.dispose();
			});
			for (let t of e) t.dispose();
			o.dispose(), o.forceContextLoss();
		}
	};
}
// src/rack-scene.js
var gh = /* @__PURE__ */ new WeakMap(), _h = {
	w: "forward",
	arrowup: "forward",
	s: "back",
	arrowdown: "back",
	a: "left",
	arrowleft: "left",
	d: "right",
	arrowright: "right"
}, vh = "\n  <div class=\"stage\">\n    <canvas tabindex=\"0\" aria-label=\"交互式机柜三维模型\"></canvas>\n    <div class=\"markers\"></div>\n    <div class=\"view\" role=\"group\" aria-label=\"视角与动画\">\n      <button type=\"button\" data-action=\"reset\">全景</button>\n      <button type=\"button\" data-action=\"zoom-in\" aria-label=\"放大\">＋</button>\n      <button type=\"button\" data-action=\"zoom-out\" aria-label=\"缩小\">−</button>\n      <button type=\"button\" data-action=\"play\" aria-pressed=\"false\">巡视</button>\n      <button type=\"button\" data-action=\"layer\" aria-pressed=\"false\">展开层板</button>\n      <button type=\"button\" data-action=\"walk\" aria-pressed=\"false\">人物视角</button>\n    </div>\n    <div class=\"walk\" role=\"group\" aria-label=\"漫游方向\" hidden>\n      <button type=\"button\" data-step=\"forward\" aria-label=\"向前\">↑</button>\n      <button type=\"button\" data-step=\"left\" aria-label=\"向左\">←</button>\n      <button type=\"button\" data-step=\"back\" aria-label=\"向后\">↓</button>\n      <button type=\"button\" data-step=\"right\" aria-label=\"向右\">→</button>\n    </div>\n    <div class=\"status\" role=\"status\">拖动空地旋转，拖动设备换位</div>\n    <p class=\"fallback\" role=\"alert\" hidden>当前浏览器无法显示机柜 3D。请使用支持 WebGL 2 的浏览器。</p>\n  </div>";
function yh(e, { autoplay: t = !1 } = {}) {
	if (gh.has(e)) throw Error("A rack scene is already mounted on this element.");
	let r = e.shadowRoot ?? e.attachShadow({ mode: "open" }), i = document.createElement("style");
	i.textContent = n;
	let a = document.createElement("div");
	a.className = "rack", a.innerHTML = vh, r.append(i, a);
	let o = a.querySelector(".stage"), s = a.querySelector("canvas"), c = a.querySelector(".status"), l = a.querySelector(".walk"), u = new Map([...a.querySelectorAll("[data-action]")].map((e) => [e.dataset.action, e])), { locations: d, positions: f, assignments: p, move: m } = rh(), h = new Map([...d.keys()].map((e) => {
		let t = document.createElement("button");
		return t.type = "button", t.dataset.rack = e, t.textContent = e === Zm.id ? "储藏柜" : e, t.setAttribute("aria-label", "查看 " + t.textContent), a.querySelector(".markers").append(t), [e, t];
	})), g = new AbortController(), _ = (e, t, n, r) => e.addEventListener(t, n, {
		...r,
		signal: g.signal
	}), v = matchMedia("(prefers-reduced-motion: reduce)"), y, b, x = null, S = null, C = !1, w = !1, T = !1, E = !0, D = null, O = 0, k = !1, A = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
	function M(e) {
		e !== c.textContent && (c.textContent = e);
	}
	function N(e) {
		k || (T = !(!y || !e || C || w || v.matches), u.get("play").setAttribute("aria-pressed", String(T)), u.get("play").textContent = T ? "暂停巡视" : "巡视", y?.rotate(T));
	}
	function P() {
		let e = new Set(j.values());
		y.move(Number(e.has("right")) - Number(e.has("left")), Number(e.has("forward")) - Number(e.has("back")));
	}
	function F(e) {
		e && w && I(!1), N(!1), j.clear(), C = e, y.walk(e), l.hidden = !e, u.get("walk").setAttribute("aria-pressed", String(e)), u.get("walk").textContent = e ? "退出漫游" : "人物视角", u.get("layer").disabled = e, u.get("zoom-in").disabled = e, u.get("zoom-out").disabled = e, u.get("play").disabled = e || v.matches, s.dataset.mode = e ? "walk" : "overview", M(e ? "拖动画面转身，方向键或 WASD 调整位置" : "拖动空地旋转，拖动设备换位"), e && s.focus({ preventScroll: !0 });
	}
	function I(e) {
		N(!1), e && C && F(!1);
		let t = f.get(x), n = S && S !== Zm.id ? S : "A-01", r = t && t.location !== Zm.id ? t : f.get(n + "/front/4/1");
		w = e, y.showLayer(e ? r : null), u.get("layer").setAttribute("aria-pressed", String(e)), u.get("layer").textContent = e ? "收拢层板" : "展开层板", u.get("play").disabled = e || v.matches, M(e ? "已展开 " + r.location + " 第 " + r.level + " 层" : "拖动空地旋转，拖动设备换位");
	}
	function ee() {
		y && !k && (N(!1), C && F(!1), w && I(!1), x = null, S = null, y.select(null), y.focus(null), M("拖动空地旋转，拖动设备换位"));
	}
	function te(e) {
		x = e, y.select(e), M((p.get(e)?.id ?? "空工位") + " · " + nh(f.get(e)));
	}
	function ne(e) {
		w && I(!1), N(!1), f.get(x)?.location !== e && (x = null, y.select(null)), S = e, y.focus(e), M(e === Zm.id ? "储藏柜 · 可将设备拖入柜内" : "已对准 " + e + " 货架");
	}
	function re(e, t, n) {
		let r = y.pick(e, t);
		if (r.slot) return r.slot;
		if (r.location === Zm.id && f.get(n).location !== Zm.id) return [...f.values()].find((e) => e.location === Zm.id && !p.has(e.key))?.key;
	}
	function ie() {
		let [e, t] = A.values();
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	function ae(e) {
		if (e.button > 2 || A.size && e.pointerType !== "touch") return;
		if (e.preventDefault(), s.focus({ preventScroll: !0 }), N(!1), s.setPointerCapture(e.pointerId), A.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		}), A.size > 1) {
			D = null, y.target(null, !1), O = ie();
			return;
		}
		let t = !C && (e.shiftKey || e.button !== 0), n = y.pick(e.clientX, e.clientY);
		D = {
			id: e.pointerId,
			hit: n,
			pan: t,
			x: e.clientX,
			y: e.clientY,
			moved: !1,
			source: !C && !t && p.has(n.slot) ? n.slot : null
		};
	}
	function L(e) {
		let t = A.get(e.pointerId), n = e.clientX, r = e.clientY;
		if (!t) e.pointerType === "mouse" && (s.dataset.cursor = p.has(y.pick(n, r).slot) ? "device" : "");
		else if (A.set(e.pointerId, {
			x: n,
			y: r
		}), A.size > 1) {
			let e = ie();
			O > 0 && e > 0 && y.zoom(e / O), O = e;
		} else if (D && D.id === e.pointerId && !(!D.moved && Math.hypot(n - D.x, r - D.y) < 5)) {
			if (D.moved = !0, D.source) {
				let e = re(n, r, D.source), t = e && e !== D.source ? e : null, i = p.get(t);
				y.target(t, !!i), M(i ? "松手与 " + i.id + " 交换" : t ? "松手移至 " + nh(f.get(t)) : "拖向工位或储藏柜"), s.dataset.cursor = "dragging";
			} else D.pan ? y.pan(n - t.x, r - t.y) : y.orbit(n - t.x, r - t.y);
		}
	}
	function oe(t, n) {
		if (!A.delete(t.pointerId)) return;
		let r = D;
		if (A.size < 2 && (O = 0), r?.id === t.pointerId && (D = null), s.dataset.cursor = "", r && r.id === t.pointerId) {
			if (y.target(null, !1), !n) r.source && te(r.source);
			else if (r.source && r.moved) {
				let n = re(t.clientX, t.clientY, r.source), i = m(r.source, n);
				if (!i) {
					te(r.source);
					return;
				}
				y.sync(), te(n), e.dispatchEvent(new CustomEvent("rackmove", {
					detail: i,
					bubbles: !0,
					composed: !0
				}));
			} else r.moved || r.pan || C || (r.hit.slot ? te(r.hit.slot) : r.hit.location && ne(r.hit.location));
		}
	}
	try {
		y = hh(s, o, {
			locations: d,
			positions: f,
			assignments: p
		}, h), a.dataset.ready = "true";
	} catch (e) {
		for (let e of [...u.values(), ...h.values()]) e.disabled = !0;
		a.querySelector(".fallback").hidden = !1, c.hidden = !0, s.hidden = !0, console.warn("Rack 3D could not initialize WebGL.", e);
	}
	if (y) {
		let e = {
			reset: ee,
			"zoom-in": () => {
				N(!1), y.zoom(1.24);
			},
			"zoom-out": () => {
				N(!1), y.zoom(1 / 1.24);
			},
			play: () => N(!T),
			layer: () => I(!w),
			walk: () => F(!C)
		};
		for (let [t, n] of u) _(n, "click", e[t]);
		for (let [e, t] of h) _(t, "click", () => ne(e));
		_(s, "contextmenu", (e) => e.preventDefault()), _(s, "pointerdown", ae), _(s, "pointermove", L), _(s, "pointerup", (e) => oe(e, !0)), _(s, "pointercancel", (e) => oe(e, !1)), _(s, "lostpointercapture", (e) => oe(e, !1)), _(s, "wheel", (e) => {
			if (C || A.size || r.activeElement !== s) return;
			e.preventDefault(), N(!1);
			let t = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
			y.zoom(Math.exp(-t * .0015));
		}, { passive: !1 }), _(a, "keydown", (e) => {
			let t = e.key.toLowerCase();
			t === "escape" ? (e.preventDefault(), ee()) : _h[t] && (C ? (e.preventDefault(), j.set(t, _h[t]), P()) : e.target === s && t.startsWith("arrow") && (e.preventDefault(), N(!1), y.orbit(t === "arrowleft" ? -18 : t === "arrowright" ? 18 : 0, t === "arrowup" ? -12 : t === "arrowdown" ? 12 : 0)));
		}), _(window, "keyup", (e) => {
			j.delete(e.key.toLowerCase()) && P();
		}), _(window, "blur", () => {
			for (let e of A.keys()) oe({ pointerId: e }, !1);
			j.clear(), P();
		});
		for (let e of l.children) {
			_(e, "pointerdown", (t) => {
				t.preventDefault(), e.setPointerCapture(t.pointerId), j.set(t.pointerId, e.dataset.step), P();
			});
			for (let t of [
				"pointerup",
				"pointercancel",
				"lostpointercapture"
			]) _(e, t, (e) => {
				j.delete(e.pointerId) && P();
			});
		}
		let n = () => y.visible(E && !document.hidden);
		b = new IntersectionObserver(([e]) => {
			E = e.isIntersecting, n();
		}), b.observe(o), _(document, "visibilitychange", n);
		function i() {
			u.get("play").disabled = C || w || v.matches, v.matches && N(!1);
		}
		_(v, "change", i), i(), N(t);
	}
	let se = {
		resetView: ee,
		setAutoplay: N,
		destroy() {
			k || (k = !0, g.abort(), b?.disconnect(), y?.dispose(), a.remove(), i.remove(), gh.delete(e));
		}
	};
	return gh.set(e, se), se;
}
export { yh as mountRackScene };
