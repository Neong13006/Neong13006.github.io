const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.Sin,
		C3.Plugins.Browser,
		C3.Plugins.NinePatch,
		C3.Plugins.filechooser,
		C3.Plugins.EMI_INDO_WaveSurfer,
		C3.Plugins.HTMLElement,
		C3.Plugins.GameRecorder,
		C3.Plugins.Button,
		C3.Plugins.TextBox,
		C3.Plugins.Arr,
		C3.Plugins.MIDI,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Audio.Acts.AddFilterEffect,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.NinePatch.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.NinePatch.Acts.SetPos,
		C3.Plugins.NinePatch.Exps.X,
		C3.Plugins.NinePatch.Exps.Width,
		C3.Plugins.NinePatch.Exps.Y,
		C3.Plugins.NinePatch.Exps.Height,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.filechooser.Cnds.OnChanged,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.TextBox.Cnds.CompareInstanceVar,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Audio.Acts.AddRemoteURL,
		C3.Plugins.filechooser.Exps.FileURLAt,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.left,
		C3.Plugins.filechooser.Exps.FileNameAt,
		C3.Plugins.System.Exps.len,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Exps.find,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.right,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Exps.int,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.NinePatch.Acts.SetWidth,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.NinePatch.Acts.SetHeight,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.NinePatch.Acts.SetAngle,
		C3.Plugins.NinePatch.Exps.Angle,
		C3.Plugins.Audio.Acts.SetEffectParameter,
		C3.Plugins.Audio.Acts.SetPlaybackRate,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Audio.Exps.PlaybackRate,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.ToggleBoolInstanceVar
	];
};
self.C3_JsPropNameTable = [
	{Souris: 0},
	{Toucher: 0},
	{Clavier: 0},
	{Audio: 0},
	{Tag: 0},
	{Musique: 0},
	{Ancre: 0},
	{Texte: 0},
	{Metre: 0},
	{Role: 0},
	{ID: 0},
	{"8Directions": 0},
	{Curseur1: 0},
	{Sprite: 0},
	{Sinus: 0},
	{Sinus2: 0},
	{BPM: 0},
	{Browser: 0},
	{Rec: 0},
	{"9patch": 0},
	{Texte2: 0},
	{FileChooser: 0},
	{WaveSurfer: 0},
	{ÉlémentHTML: 0},
	{SFX: 0},
	{PAD: 0},
	{VideoRecorder: 0},
	{RecordCanvas: 0},
	{SaisieDeTexte: 0},
	{Tableau: 0},
	{ON: 0},
	{Button: 0},
	{MIDI: 0},
	{Sprite2: 0},
	{RatioX: 0},
	{Musique1: 0},
	{Musique2: 0},
	{Valeur: 0},
	{Total: 0},
	{Ratio: 0},
	{AlignMusic: 0},
	{Pourcent: 0},
	{Xfinal: 0}
];

self.InstanceType = {
	Souris: class extends self.IInstance {},
	Toucher: class extends self.IInstance {},
	Clavier: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Texte: class extends self.ITextInstance {},
	Metre: class extends self.ISpriteInstance {},
	Curseur1: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	BPM: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Rec: class extends self.IWorldInstance {},
	_9patch: class extends self.IWorldInstance {},
	Texte2: class extends self.ITextInstance {},
	FileChooser: class extends self.IWorldInstance {},
	WaveSurfer: class extends self.C3.Plugins.EMI_INDO_WaveSurfer.Instance {},
	ÉlémentHTML: class extends self.IHTMLElementInstance {},
	PAD: class extends self.ISpriteInstance {},
	VideoRecorder: class extends self.IInstance {},
	RecordCanvas: class extends self.IButtonInstance {},
	SaisieDeTexte: class extends self.ITextInputInstance {},
	Tableau: class extends self.IArrayInstance {},
	Button: class extends self.ISpriteInstance {},
	MIDI: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}