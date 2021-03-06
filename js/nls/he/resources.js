﻿define(
     ({
        map: {
            error: "לא ניתן ליצור מפה"
        },
        onlineStatus: {
            offline: "אתה עובד כרגע במצב לא מקוון. הטופס ישמר באופן מקומי עד שחיבור לשרת יכול להתבצע.",
            reconnecting: "מתקשר מחש&hellip;",
            pending: "${total} עריכות ממתינות ישלחו כאשר חיבור לרשת ייווצר מחדש."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "הארגון שלי",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "התוכן שלי",
                    favoritesLabel: "המועדפים שלי"
                },
                title: "בחר Web Map",
                searchTitle: "חפש",
                ok: "אישור",
                cancel: "ביטול",
                placeholder: "הכנס מונח לחיפוש"
            },
            groupdlg: {
                items: {
                    organizationLabel: "הארגון שלי",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "התוכן שלי",
                    favoritesLabel: "המועדפים שלי"
                },
                title: "בחר קבוצה",
                searchTitle: "חפש",
                ok: "אישור",
                cancel: "ביטול",
                placeholder: "הכנס מונח לחיפוש"
            },
            sharedlg: {
                items: {
                },
                mailtoLinkDescription: "להלן קישור ל-GeoForm"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "כלפי צפון",
            utm_easting: "כלפי מזרח",
            utm_zone_number: "מספר אזור",
            geoFormGeneralTabText: "1. הכנס מידע",
            locationInformationText: "2. בחר מיקום",
            submitInformationText: "3. השלם טופס",
            submitInstructions: "הוסף מידע זה למפה.",
            myLocationText: "מיקום נוכחי",
            locationDescriptionForMoreThanOneOption: "ציין את המיקום עבור ערך זה על-ידי לחיצה/הקשה על המפה או באמצעות אחת האפשרויות הבאות.",
            locationDescriptionForOneOption: "ציין את המיקום עבור ערך זה על-ידי לחיצה/הקשה על המפה או באמצעות האפשרות הבאה.",
            locationDescriptionForNoOption: "ציין את המיקום עבור ערך זה על-ידי לחיצה/הקשה על המפה.",
            addressText: "חיפוש",
            geographic: "רוחב/אורך",
            locationTabText: "מיקום",
            locationPopupTitle: "מיקום",
            submitButtonText: "שלח ערך",
            submitButtonTextLoading: "מגיש",
            formValidationMessageAlertText: "השדות הבאים דרושים:",
            selectLocation: "בחר מיקום עבור ההגשה שלך.",
            emptylatitudeAlertMessage: "הזן קואורדינטת ${openLink}קו רוחב${closeLink}.",
            emptylongitudeAlertMessage: "הזן קואורדינטת ${openLink}קו אורך${closeLink}.",
            shareUserTitleMessage: "תודה רבה עבור התרומה שלך!",
            entrySubmitted: "הערך שלך נשלח למפה.",
            shareThisForm: "שתף טופס זה",
            shareUserTextMessage: "בקש מאחרים להשתתף באמצעות האפשרויות הבאות.",
            addAttachmentFailedMessage: "לא ניתן להוסיף קישור לשכבה",
            addFeatureFailedMessage: "לא ניתן להוסיף ישות לשכבה",
            noLayerConfiguredMessage: "אירעה שגיאה בטעינה או באיתור של שכבת ישויות ניתנת לעריכה. כדי להציג את הטופס ולהתחיל לאסוף נתונים, הוסף שכבת ישויות ניתנת לעריכה למפת האינטרנט.",
            placeholderLatitude: "קו רוחב (Y)",
            placeholderLongitude: "קו אורך (X)",
            latitude: "קו רוחב",
            longitude: "קו אורך",
            findMyLocation: "מצא את המיקום שלי",
            finding: "מאתר",
            backToTop: "חזור לראש הדף",
            addressSearchText: "המידע שלך יווצג פה. אתה יכול לגרור את סמן הסיכה כדי לתקן את המיקום.",
            shareModalFormText: "קישור טופס",
            close: "סגור",
            locationNotFound: "לא ניתן למצוא מיקום.",
            setLocation: "הגדר מיקום",
            find: "מצא כתובת או מקום",
            attachment: "קישור",
            toggleDropdown: "שנה מצב רשימה נפתחת",
            invalidString: "אנא הזן ערך חוקי.",
            invalidSmallNumber: "אנא הזן ${openStrong}מספר שלם${closeStrong} חוקי בין ‎-32768 ל-32767.",
            invalidNumber: "אנא הזן ערך ${openStrong}מספר שלם${closeStrong} חוקי בין ‎-2147483648 ל-2147483647.",
            invalidFloat: "אנא הזן ערך חוקי של ${openStrong}נקודה צפה${closeStrong}.",
            invalidDouble: "אנא הזן ערך חוקי של ${openStrong}double${closeStrong}.",
            invalidLatLong: "הזן קואורדינטות קו רוחב וקו אורך חוקיות.",
            invalidUTM: "הזן קואורדינטות UTM חוקיות.",
            invalidUSNG: "הזן קואורדינטות USNG חוקיות.",
            invalidMGRS: "הזן קואורדינטות MGRS חוקיות.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "בחר",
            applyEditsFailedMessage: "מצטערים, לא ניתן להגיש את הערך שלך. נסה שוב.",
            requiredFields: "קיימות שגיאות. תקן אותן להלן.",
            requiredField: "(חובה)",
            error: "שגיאה",
            textRangeHintMessage: "${openStrong}רמז:${closeStrong} ערך מינימום ${minValue} וערך מקסימום ${maxValue}",
            dateRangeHintMessage: "${openStrong}רמז:${closeStrong} תאריך מינימום ${minValue} ותאריך מקסימום ${maxValue}",
            remainingCharactersHintMessage: "נותרו ${value} תווים"
        },
        builder: {
            invalidUser: "מצטערים, אין לך הרשאה להצגת פריט זה",
            invalidWebmapSelectionAlert: "ה-webmap שנבחרה לא מכילה שכבה חוקית שניתן להשתמש בה. הוסף ל-webmap שכבת ישויות שניתן לערוך כדי שתוכל להמשיך.",
            invalidWebmapSelectionAlert2: "לקבלת מידע נוסף, ראה ${openLink}מהו שירות ישויות?${closeLink}",
            selectFieldsText: "בחר מהשדות",
            selectThemeText: "בחר ערכת נושא של טופס",
            webmapText: "Webmap",
            layerText: "שכבה",
            detailsText: "פרטים",
            fieldsText: "שדות",
            styleText: "סגנון",
            optionText: "אפשרויות",
            previewText: "תצוגה מקדימה",
            publishText: "פרסם",
            optionsApplicationText: "אפשרויות",
            titleText: "אשף בנייה",
            descriptionText: "GeoForm היא תבנית שניתן להגדיר לצורך עריכת נתונים מבוססי-טופס של ${link1}שירות ישויות${closeLink}. אפליקציה זו מאפשרת למשתמשים להזין נתונים דרך טופס במקום דרך חלון קופץ במפה, תוך ניצול העוצמה של ${link2}Web Map${closeLink} ושירות הישויות המאפשר עריכה. בצע את הפעולות הבאות כדי להגדיר את ה-GeoForm.",
            btnPreviousText: "הקודם",
            btnNextText: "הבא",
            webmapTabTitleText: "בחר Webmap",
            viewWebmap: "הצג webmap",
            webmapDetailsText: "ה- webmap שנבחר הוא ${webMapTitleLink}${webMapTitle}${closeLink}. כדי לבחור webmap אחר, לחץ על הלחצן \'בחר Webmap\'",
            btnSelectWebmapText: "בחר Webmap",
            btnSelectWebmapTextLoading: "טוען&hellip;",
            layerTabTitleText: "בחר שכבה לעריכה",
            selectLayerLabelText: "שכבה",
            selectLayerDefaultOptionText: "בחר שכבה",
            detailsTabTitleText: "פרטי הטופס",
            detailTitleLabelText: "כותרת",
            detailLogoLabelText: "תמונת לוגו",
            descriptionLabelText: "הנחיות לטופס ופרטים",
            fieldDescriptionLabelText: "טקסט עזרה (אופציונלי)",
            fieldTabFieldHeaderText: "שדה",
            fieldTabLabelHeaderText: "תווית",
            fieldTabDisplayTypeHeaderText: "הצג כ:",
            fieldTabOrderColumnText: "סדר",
            fieldTabVisibleColumnText: "מופעל",
            selectMenuOption: "בחר תפריט",
            selectRadioOption: "לחצן בחירה",
            selectTextOption: "טקסט",
            selectDateOption: "בורר תאריכים",
            selectRangeOption: "גלגלת מגע",
            selectCheckboxOption: "תיבת סימון",
            selectMailOption: "דואר אלקטרוני",
            selectUrlOption: "כתובת URL",
            selectTextAreaOption: "אזור טקסט",
            previewApplicationText: "תצוגה מקדימה של אפליקציה",
            saveApplicationText: "שמור אפליקציה",
            saveText: "שמור",
            toggleNavigationText: "החלף ניווט",
            formPlaceholderText: "הטופס שלי",
            shareBuilderInProgressTitleMessage: "פרסום GeoForm",
            shareBuilderProgressBarMessage: "המתן בבקשה&hellip;",
            shareBuilderTitleMessage: "הפריט נשמר בהצלחה",
            shareBuilderTextMessage: "אתה יכול להתחיל לאסוף מידע על-ידי שיתוף עם אחרים",
            shareModalFormText: "קישור לטופס",
            shareBuilderSuccess: "ה-GeoForm שלך עודכן ופורסם!",
            geoformTitleText: "Geo Form",
            layerTabText: "ה-GeoForm ייבנה מתוך שכבה זו. השכבה חייבת להיות שירות ישויות ניתן לעריכה עם הרשאות שיתוף המתאימות לקהל היעד.",
            detailsTabText: "השתמש בתיבות פרטי טופס למטה כדי להתאים את הכותרת, להוסיף לוגו מותאם ולספק תיאור קצר לקהל של ה-GeoForm שלך. בתיאור ניתן להוסיף קישורים למשאבים אחרים, פרטי קשר ואפילו להפנות את הקהל שלך אל אפליקציית web mapping הכוללת את כל הנתונים שנאספו עם ה-GeoForm.",
            fieldsTabText: "כאן אתה יכול לבחור אילו שדות יוצגו לקהל ה-GeoForm שלך, לערוך את התוויות שהם יראו ולהוסיף תיאור קצר שיעזור בהזנת נתונים.",
            styleTabText: "סגנן את ה-GeoForm שלך בעזרת ערכות הנושא למטה בהתאם להעדפות שלך.",
            publishTabText: "אם סיימת להתאים את ה-GeoForm, שמור את האפליקציה ושתף אותה עם הקהל שלך. תוכל תמיד לחזור לאשף בנייה זה ולהמשיך להתאים אותו לפי המשוב שתקבל.",
            headerSizeLabel:"גודל כותרת עליונה",
            smallHeader: "השתמש בכותרת עליונה קטנה",
            bigHeader: "השתמש בכותרת עליונה גדולה",
            pushpinText: "נעץ",
            doneButtonText: "שמור וצא",
            fieldTabPlaceHolderHeaderText: "רמז (אופציונלי)",
            enableAttachmentLabelText: "${openStrong}אפשר קבצים מצורפים${closeStrong}",
            enableAttachmentLabelHint: "תוכל לאפשר/לבטל את הקבצים המצורפים כאן",
            attachmentIsRequiredLabelText: "${openStrong}נדרש קובץ מצורף${closeStrong}",
            attachmentIsRequiredLabelHint: "במידת הצורך, ניתן לדרוש מהמשתמשים להכניס קובץ מצורף.",
            attachmentLabelText: "תווית לחצן קובץ מצורף",
            attachmentLabelHint: "זהו הטקסט שיופיע לצד לחצן הקובץ המצורף. תוכל להשתמש בשטח זה כדי לתאר את סוג הקבצים שברצונך שהקהל יצרף (תמונה, וידאו, מסמך וכן הלאה), את פורמט הקובץ שאתה מבקש (‎.jpeg,‏ ‎.png,‏ ‎.docx,‏ ‎.pdf וכן הלאה) והנחיות נוספות אחרות.",
            attachmentDescription: "תיאור קובץ מצורף",
            attachmentHint: "במקרה הצורך, תוכל לספק כאן הוראות נוספות לגבי קבצים מצורפים.",
            jumbotronDescription: "השתמש בכותרת עליונה קטנה או גדולה עבור הטופס. כותרת עליונה גדולה יכולה לעזור בהגדרת מטרת האפליקציה, אך היא תופסת יותר מקום במסך.",
            shareGeoformText: "שתף את Geoform",
            shareDescription: "לוח השיתוף מאפשר לקהל שלך לשתף בקלות את GeoForm עם משתפי פעולה אחרים לאחר שהם הגישו אותו - ניתן להשבית אפשרות זו בכל עת.",
            defaultMapExtent: "תיחום מפה המהווה ברירת מחדל",
            defaultMapExtentDescription: "המפה תתאפס לתיחום ברירת המחדל ב-web map שלך לאחר השליחה - ניתן לבטל אפשרות זו בכל עת.",
            pushpinOptionsDescription: "בחר לנעץ במפה צבע ממגוון צבעים, על הצבע להיות שונה מהסימבולוגיה של שכבות המפה כדי לסייע למשתמש ללהבחין במיקום החדש שהוסיף למפה",
            selectLocationText: "בחר מיקום לפי",
            myLocationText: "המיקום שלי",
            searchText: "חיפוש",
            coordinatesText: "קואורדינטות קו רוחב וקו אורך",
            usng: "קואורדינטות USNG",
            mgrs: "קואורדינטות MGRS",
            utm: "קואורדינטות UTM",
            selectLocationSDescription: "אפשר למשתמשים לבחור מיקום באמצעות שיטות אלה.",
            dragTooltipText:"גרור את השדה למקום שבו הוא יופיע",
            showHideLayerText:"הצג/הסתר שכבה",
            showHideLayerHelpText:"תוכל להגדיר את ה-GeoForm כך שיציג/יסתיר שכבה"
        }
    })
);