// Textual reference research must never satisfy the photograph-review gate.
const textOnlyDisclaimer=/No (?:photo|photograph|image-pixel\/category) verification claimed/i;
export function sourceReviewScope(review){
 if(!review?.reviewedAt||!review?.evidence)return 'unreviewed';
 if(review.scope==='text'||textOnlyDisclaimer.test(review.evidence))return 'text';
 if(review.scope&&review.scope!=='photographs')return 'unreviewed';
 return 'photographs';
}
