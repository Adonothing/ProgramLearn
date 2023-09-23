# word

## mathtype公式转换为word自带的

&emsp;&emsp;参考：http://t.csdn.cn/BBRGc，核心代码如下，其中Copy改为Cut，或者加入delete也可以。

```vb
Sub MathML2OMML(k As Integer)
'用k记录总的转换成功数。
On Error GoTo ErrorHandler   ' 启用错误处理
Application.ScreenUpdating = False '关闭屏幕刷新
Dim i, j, m As Integer
i = 0  '记录转换的公式总数，失败的也会记录在内
j = 0  '防止死循环用的，记录错误次数
m = 0  '记录转换失败次数
 
With Selection.Find   '设置查找表达式，查找转换后的MathML代码
    .ClearFormatting
    .Replacement.ClearFormatting
    .Text = "\<\!-- MathType*5\@ --\>^13" '通配符选择公式，注意mathtype转换时，最后两个复选框要选中
    .Replacement.Text = ""
    .Forward = True
    .Wrap = wdFindStop
    .Format = False
    .MatchWildcards = True
 
    Selection.SetRange 0, 0 '回到文首
 
    Do While .Execute
        With Selection
            .Cut '复制MathML代码
            .PasteAndFormat (WdRecoveryType.wdFormatPlainText) '无格式粘贴MathML代码
        End With
        i = i + 1 '转换公式数+1
    Loop
End With
 
Application.ScreenUpdating = True '开启屏幕刷新
'MsgBox "新转换成功" & i & "个公式，如数字偏大，建议重复运行"
 
k = k + i - m
 
If (m > 10 And i - m > 0) Then
       Call MathML2OMML(k)  '只要失败数超过10，且有新成功的，就重复运行，
 
Else
    a = MsgBox("最后一次运行转换失败" & m & "个公式，是否重复运行", vbYesNo)
   
    If a = vbYes Then
        Call MathML2OMML(k)  '选择是，则重复运行
    Else
        MsgBox ("共新转换成功" & k & "个公式")
        Exit Sub
    End If
 
End If
 
'Exit Sub
 
ErrorHandler:       ' 错误处理
  j = j + 1       '错误出现次数加一
   If j < 100 Then
    Resume       ' 100次以内直接忽略错误，继续执行
   Else
     j = 0    '防止死循环，跳过一行后，继续执行知道100次错误出现
     'MsgBox "运行出错"
     m = m + 1
     Resume Next
   End If
  
 
End Sub
 
Sub 公式转换()
Call MathML2OMML(0)
End Sub
```

参考文献中另外两个代码都会有报错，还挺有意思的，打断点跑没啥问题。其中核心代码分别为：

```vb
Sub MathML2OMML()
Dim i As Integer
i = 0
'设置查找表达式，查找转换后的MathML代码
With Selection.Find
    .ClearFormatting
    .Replacement.ClearFormatting
    .Text = "\<\!-- MathType*5\@ --\>^13"
    .Replacement.Text = ""
    .Forward = True
    .Wrap = wdFindStop
    .Format = False
    .MatchWildcards = True

    Selection.SetRange 0, 0 '回到文首
 
    Do While .Execute
        With Selection
            .Cut '剪切MathML代码
            .TypeParagraph '插入一个空段
            .OMaths.Add Range:=.Range '插入一个空OMML公式。创建时自动选中
            .PasteAndFormat (wdFormatPlainText) '无格式粘贴MathML代码
        End With
        i = i + 1
    Loop
End With

MsgBox "共转换" & 
```

第二个：

```vb
Sub a02_公式转换()
    'On Error Resume Next
    Selection.Find.ClearFormatting
    Selection.Find.Replacement.ClearFormatting
    
    With Selection.Find
        .Text = "</math>^p"
        .Replacement.Text = "</math>"
        .Forward = True
        .Wrap = wdFindContinue
        .Format = False
        .MatchCase = False
        .MatchWholeWord = False
        .MatchByte = False
        .MatchWildcards = False
        .MatchSoundsLike = False
        .MatchAllWordForms = False
    End With
    Selection.Find.Execute Replace:=wdReplaceAll
    
    
    Selection.Find.ClearFormatting
    
    With Selection.Find
        .Text = "\<math?*\</math\>"
        .Replacement.Text = ""
        .Forward = True
        .Wrap = wdFindContinue
        .Format = False
        .MatchCase = False
        .MatchWholeWord = False
        .MatchByte = False
        .MatchAllWordForms = False
        .MatchSoundsLike = False
        .MatchWildcards = True
    End With
    
    Selection.HomeKey wdStory
    While Selection.Find.Execute
        Selection.Copy
        
        Dim t, i As Single
        t = Timer
        Do
            i = i + 1
        Loop While Timer - t < 0.05
        ' MsgBox "Timer为：" & Timer & "，t为：" & t 
        Selection.PasteAndFormat (WdRecoveryType.wdFormatPlainText)
    Wend
End Sub

```

注意：第三个代码转化公式时，最后两个复选框不要选中。可以对比这三个代码的语法、第三个代码的时间延迟写法很有意思。



Dim t, n As Single
        t = Timer
        Do
            n = n + 1
        Loop While Timer - t < 0.15