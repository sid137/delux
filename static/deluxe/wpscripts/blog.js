var blog_cur_id = 0;
var blog_cur_body = '';

function blog_comment_edit(id,str) {
	blog_comment_edit_cancel();
	e = gE('blog_comment_'+id);
	blog_cur_id = id;
	blog_cur_body = e.innerHTML;
	e.innerHTML = str;
}
function blog_comment_edit_cancel() {
	if (blog_cur_id) {
		e = gE('blog_comment_'+blog_cur_id);
		e.innerHTML = blog_cur_body;
		blog_comment_reset();
	}
}
function blog_comment_reset() {
	blog_cur_id = 0;
	blog_cur_body = '';
}