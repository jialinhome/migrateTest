/**
 * ��������Ф��
 * ʹ�÷�����ÿ��newһ��
 * ��ΪҪ������ûʱ��дϸ�µģ���������ϵ��476645818@qq.com;
 * Ȼ��ʹ�÷�����var cde = new TimeLine("����class��",������,����,�����ⷽ����
 *     var timetext1 = {
 *     year���������õ�
        'year': ["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
        ������д��˵��
        "explain": "2015��",
        �������õ��ٶ�
        "speed":"2000"
    }
 * */
    function TimeLine(e, dotMax, timetext) {
        var _this = this;
        _this.e = $("." + e);
        _this.timetext = timetext;
        _this.dotMax = dotMax - 1;
        _this.yearPrint = yearPrint;
        _this.init()
    }
    TimeLine.prototype = {
        init: function () {
            var _this = this;
            var str = "<div class='timeExplain'>" + _this.timetext['explain'] + "</div>"
            str += "<div class='timeplay normal'></div><ul>"
            for (var a = 0; a <= _this.dotMax; a++) {
                str += "<li style=" + _this.e.find('ul').width() / _this.dotMax + ">" + "<div class='timeline'></div><div class='timedot normal'></div><div class='timetext'>" + _this.timetext['year'][a] + "</div>" + "</li>"
            }
            str += "</ul>";
            _this.e.append(str);
            $(_this.e).find(".timedot").eq(0).removeClass("normal").addClass("hover");

            $(_this.e).find(".timeline").eq(_this.dotMax).css("visibility", "hidden");
            _this.e.find("ul").width(_this.e.width() - _this.e.find('.timeplay').width())
            _this.e.find("li").each(function () {
                $(this).width(Math.floor(_this.e.find('ul').width() / _this.e.find("li").length))
            });
            _this.event();
        },
        event: function () {
            var _this = this;
            //var _index= $(this).
            var index = 0;
            yearPrint(index);

            function automatic() {
                if (index >= _this.dotMax) {
                    index = 0;
                } else {
                    index = index + 1;
                }
                _this.e.find(".timedot").eq(index).removeClass("normal").addClass("hover").closest("li").siblings("li").children(".timedot").removeClass("hover").addClass("normal");
                yearPrint(index);

                var option = myChart.getOption();
                //option.series[0].markLine.data = null;
                switch (index){
                    case 0:
                        option.series[0].markLine.data = [
                            [{name:'上海'},{name:'包头',value:70}]
                        ];
                        option.series[0].markPoint.data = [
                            {name:'上海',value:95},
                            {name:'包头',value:30}
                        ];
                        break;
                    case 1:
                        option.series[0].markLine.data = [
                            [{name:'包头'},{name:'昆明',value:70}]
                        ];
                        option.series[0].markPoint.data = [
                            {name:'上海',value:95},
                            {name:'包头',value:30},
                            {name:'昆明',value:90}
                        ];
                        break;
                    case 2:
                        option.series[0].markLine.data = [
                            [{name:'昆明'},{name:'广州',value:70}]
                        ];
                        option.series[0].markPoint.data = [
                            {name:'上海',value:95},
                            {name:'包头',value:30},
                            {name:'昆明',value:90},
                            {name:'广州',value:80}
                        ];
                        break;
                    case 3:
                        option.series[0].markLine.data = [
                            [{name:'广州'},{name:'郑州',value:70}]
                        ];
                        option.series[0].markPoint.data = [
                            {name:'上海',value:95},
                            {name:'包头',value:30},
                            {name:'昆明',value:90},
                            {name:'广州',value:80},
                            {name:'郑州',value:70}
                        ];
                        break;
                    case 4:
                        option.series[0].markLine.data = [
                            [{name:'郑州'},{name:'大连',value:70}]
                        ];
                        option.series[0].markPoint.data = [
                            {name:'上海',value:95},
                            {name:'包头',value:30},
                            {name:'昆明',value:90},
                            {name:'广州',value:80},
                            {name:'郑州',value:70},
                            {name:'大连',value:10}
                        ];
                        break;
                    case 5:
                        option.series[0].markLine.data = [
                            [{name:'大连'},{name:'南宁',value:70}]
                        ];
                        option.series[0].markPoint.data = [
                            {name:'上海',value:95},
                            {name:'包头',value:30},
                            {name:'昆明',value:90},
                            {name:'广州',value:80},
                            {name:'郑州',value:70},
                            {name:'大连',value:10},
                            {name:'南宁',value:70}
                        ];
                        break;
                    case 6:
                        option.series[0].markLine.data = [
                            [{name:'南宁'},{name:'南昌',value:70}]
                        ];
                        break;
                    case 7:
                        option.series[0].markLine.data = [
                            [{name:'南昌'},{name:'拉萨',value:70}]
                        ];
                        break;
                    case 8:
                        option.series[0].markLine.data = [
                            [{name:'拉萨'},{name:'长春',value:70}]
                        ];
                        break;
                    case 9:
                        option.series[0].markLine.data = [
                            [{name:'长春'},{name:'包头',value:70}]
                        ];
                        break;
                    default:
                        option.series[0].markLine.data = [
                            [{name:'包头'},{name:'重庆',value:70}]
                        ];

                }

                BMapExt.setOption(option);
                //myChart.setOption(option);

                //BMapExt.refresh();

                //myChart.delMarkLine(1,"上海>长春");
            }

            //����¼�
            _this.e.find(".timedot").on({
                mousedown: function () {
                    index = $(_this.e).find(".timedot").index(this);
                    $(this).removeClass("normal").addClass("hover").closest("li").siblings("li").children(".timedot").removeClass("hover").addClass("normal").closest(_this.e).find(".timeplay").removeClass("normal").addClass("hover");
                    clearInterval(setAuto);
                    yearPrint(index);
                }
            })
            //������ͣ
            $(_this.e).find(".timeplay").on({
                mousedown: function () {
                    if ($(this).hasClass("normal")) {
                        $(this).removeClass("normal").addClass("hover");
                        clearInterval(setAuto);
                    } else {
                        setAuto = setInterval(automatic,_this.timetext['speed'])
                        $(this).removeClass("hover").addClass("normal");
                    }
                }
            })
            var setAuto = setInterval(automatic,_this.timetext['speed']);
        }
    }



