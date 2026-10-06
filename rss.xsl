<?xml version="1.0" encoding="UTF-8"?>
<!-- Hiển thị RSS của blog Kingpes thành trang đọc được khi mở trên trình duyệt. Trình đọc RSS vẫn đọc XML gốc. -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:variable name="lang" select="substring(/rss/channel/language, 1, 2)"/>
  <xsl:template match="/">
    <html lang="{/rss/channel/language}">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title><xsl:value-of select="/rss/channel/title"/> · RSS</title>
        <style>
          body { margin: 0; background: #F3F5F4; color: #14211C; font: 16px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif; }
          main { max-width: 760px; margin: 0 auto; padding: 40px 20px 64px; }
          .note { background: #fff; border: 1px solid #DDE3E0; border-radius: 14px; padding: 16px 18px; font-size: 14px; color: #4A5752; }
          .note code { background: #EEF2F0; padding: 2px 6px; border-radius: 6px; word-break: break-all; }
          h1 { font-size: 34px; line-height: 1.15; margin: 28px 0 8px; }
          .desc { color: #4A5752; margin: 0 0 28px; }
          ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
          li { background: #fff; border: 1px solid #DDE3E0; border-radius: 14px; padding: 18px 20px; }
          li a { color: #14211C; font-weight: 700; font-size: 19px; text-decoration: none; }
          li a:hover { color: #2F55FF; text-decoration: underline; }
          li p { margin: 6px 0 0; color: #4A5752; }
          time { font-size: 13px; color: #6B7772; }
          .back { display: inline-block; margin-top: 28px; color: #2F55FF; }
        </style>
      </head>
      <body>
        <main>
          <p class="note">
            <xsl:choose>
              <xsl:when test="$lang = 'vi'">Đây là nguồn tin RSS. Dán địa chỉ trang này vào ứng dụng đọc tin (Feedly, Inoreader…) để nhận bài mới tự động: </xsl:when>
              <xsl:otherwise>This is an RSS feed. Paste this page’s address into a feed reader (Feedly, Inoreader…) to get new posts automatically: </xsl:otherwise>
            </xsl:choose>
            <code><xsl:value-of select="/rss/channel/link"/>rss.xml</code>
          </p>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
          <ul>
            <xsl:for-each select="/rss/channel/item">
              <li>
                <time><xsl:value-of select="substring(pubDate, 6, 11)"/></time><br/>
                <a href="{link}"><xsl:value-of select="title"/></a>
                <p><xsl:value-of select="description"/></p>
              </li>
            </xsl:for-each>
          </ul>
          <a class="back" href="{/rss/channel/link}">← Blog</a>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
