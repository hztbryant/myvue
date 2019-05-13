import $ from 'jquery'
import "./css/index.css"
$(function() {
    $("li:odd").css("backgroundColor", 'green')
    $("li:even").css("backgroundColor", 'red')
})