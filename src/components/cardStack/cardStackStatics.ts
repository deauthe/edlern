type Card = {
	id: number;
	name: string;
	designation: string;
	content: string;
};

export const cardStackCards: Card[] = Array.from({ length: 4 }, (_, index) => ({
	id: index + 1,
	name: "person:" + index,
	designation: "job:" + index,
	content:
		";akshd;iwhdaoshj;wj d;alsknd ;alwkdn;alskn c;lwndlaksndlk wndlajsd lkaj laosjd;awjd;asjd a;osd;a as;dka asd ;laskdkwdnmfnkjfbhabdha ahjsd",
}));
